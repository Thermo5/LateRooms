import React, { Component } from 'react';
import Title from './Title';
import './App.css';
import data from './hotels.json';

class App extends Component {
  state = {
    loading: true,
    hotels: [],
    parking: false,
    gym: false,
    pool: false,
    starsAcc: true
  }

  componentDidMount() {
    this.setState({ hotels: data, loading: false })
  };




  filterGym = () => {
    this.state.gym ? this.setState({ gym: false }) : this.setState({ gym: true })
  }
  filterPool = () => {
    this.state.pool ? this.setState({ pool: false }) : this.setState({ pool: true })
  }
  filterParking = () => {
    this.state.parking ? this.setState({ parking: false }) : this.setState({ parking: true })
  }
  hotelsAccending = () => {
    let sorted = this.state.hotels.sort((a, b) => b.StarRating - a.StarRating)
    this.setState({ hotels: sorted, starsAcc: true })
  }
  hotelsDecending = () => {
    let sorted = this.state.hotels.sort((a, b) => a.StarRating - b.StarRating)
    this.setState({ hotels: sorted, starsAcc: false })
  }



  render() {
    const { hotels, loading, gym, pool, parking, starsAcc } = this.state

    let filteredHotels = hotels.filter(hotel => {
      if (!gym && !pool && !parking) return hotel
      if (gym && pool && parking) return hotel

      if (gym && !pool && !parking) return hotel.Facilities.includes('gym')
      if (!gym && pool && !parking) return hotel.Facilities.includes('pool')
      if (!gym && !pool && parking) return hotel.Facilities.includes('car park')

      if ((!gym && pool && parking) && (hotel.Facilities.includes('pool') && hotel.Facilities.includes('car park'))) return hotel
      if ((gym && !pool && parking) && (hotel.Facilities.includes('gym') && hotel.Facilities.includes('car park'))) return hotel
    })

    return (
      <div className="App">

        <Title />

        <div className="section">
          <div className="tabs">
            <ul>
              Sort By:
                  <li className={starsAcc ? "is-active" : ""}><a onClick={this.hotelsAccending}>Stars Ascending</a></li>
              <li className={starsAcc ? "" : "is-active"}><a onClick={this.hotelsDecending}>Stars Descending</a></li>
            </ul>
          </div>

          <div className="columns">
            <div className="column is-10">
              {loading ? <p>Loading...</p> :
                filteredHotels.map((hotel, i) =>
                  <div key={i}>
                    <div className="box">
                      <article className="media">
                        <div className="media-content">
                          <div className="content">
                            <h2><strong>{hotel.Name}</strong></h2>
                            <p>Star Rating: {hotel.StarRating}</p>
                            <p>Facilities:</p>
                            {hotel.Facilities.length ?
                              hotel.Facilities.map((facility, i) =>
                                <ul className="facility-list" key={i}>
                                  <li>{facility}</li>
                                </ul>
                              ) : 'None Available'
                            }
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                )
              }
            </div>

            <div className="column">
              <div className="filters">
                <h1>Filters</h1>
                <ul>
                  <li><label className="checkbox"><input type="checkbox" name="parking" onClick={this.filterParking} />Parking</label></li>
                  <li><label className="checkbox"><input type="checkbox" name="gym" onClick={this.filterGym} />Gym</label></li>
                  <li><label className="checkbox"><input type="checkbox" name="pool" onClick={this.filterPool} />Pool</label></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
