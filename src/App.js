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
    pool: false
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
    this.setState({ hotels: sorted })
  }
  hotelsDecending = () => {
    let sorted = this.state.hotels.sort((a, b) => a.StarRating - b.StarRating)
    this.setState({hotels: sorted})
  }



  render() {
    const { hotels, loading, gym, pool, parking } = this.state

    let filteredHotels = hotels.filter(hotel => {
      if (!gym && !pool && !parking) return hotel
      if (gym && pool && parking) return hotel

      if (gym && !pool && !parking) return hotel.Facilities.includes('gym')
      if (!gym && pool && !parking) return hotel.Facilities.includes('pool')
      if (!gym && !pool && parking) return hotel.Facilities.includes('car park')

      if ((!gym && pool && parking) && (hotel.Facilities.includes('pool') && hotel.Facilities.includes('car park'))) return hotel
      if ((gym && !pool && parking) && (hotel.Facilities.includes('gym') && hotel.Facilities.includes('car park'))) return hotel
    })

console.log(filteredHotels)
    return (
      <div className="App">
        <Title />
        <div class="tabs">
          <ul>
          Sort By:
            <li><a onClick={this.hotelsAccending}>Stars Acc</a></li>
            <li><a onClick={this.hotelsDecending}>Stars Dec</a></li>
      
          </ul>
        </div>


        <div className="tile is-ancestor">
          <div className="tile is-vertical is-10">

            {loading ? <p>Loading...</p> :
              filteredHotels.map((hotel, i) =>
                <div className="section" key={i}>
                  <div className="box">
                    <article className="media">
                      <div className="media-content">
                        <div className="content">
                          <h2><strong>{hotel.Name}</strong></h2>
                          <h3>Star Rating: {hotel.StarRating}</h3>
                          <h4>Facilities:</h4>
                          {hotel.Facilities.map((facilite, i) =>
                            <ul key={i}>{facilite}</ul>
                          )}
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              )
            }

          </div>
          <div className="tile is-vertical">
            <div className="section">
              <h3>Filters</h3>
              <ul>
                <li> <label className="checkbox"><input type="checkbox" name="parking" onClick={this.filterParking} />Parking</label></li>
                <li><label className="checkbox"><input type="checkbox" name="gym" onClick={this.filterGym} />Gym</label></li>
                <li><label className="checkbox"><input type="checkbox" name="pool" onClick={this.filterPool} />Pool</label></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
