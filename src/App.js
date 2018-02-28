import React, { Component } from 'react';
import Title from './Title';
import Filter from './Filter';
import HotelList from './HotelList';
import './App.css';
import data from './hotels.json';

class App extends Component {
  state = {
    hotels: [],
    parking: false,
    gym: false,
    pool: false,
    starsAcc: true
  }

  componentDidMount() {
    this.setState({ hotels: data })
  };


  filterFacility = (event) => {
    this.state[event] ? this.setState({ [event]: false }) : this.setState({ [event]: true })
  }


  // filterGym = () => {
  //   console.log('filtergym')
  //   this.state.gym ? this.setState({ gym: false }) : this.setState({ gym: true })
  // }
  // filterPool = () => {
  //   this.state.pool ? this.setState({ pool: false }) : this.setState({ pool: true })
  // }
  // filterParking = () => {
  //   this.state.parking ? this.setState({ parking: false }) : this.setState({ parking: true })
  // }
  hotelsAccending = () => {
    let sorted = this.state.hotels.sort((a, b) => b.StarRating - a.StarRating)
    this.setState({ hotels: sorted, starsAcc: true })
  }
  hotelsDecending = () => {
    let sorted = this.state.hotels.sort((a, b) => a.StarRating - b.StarRating)
    this.setState({ hotels: sorted, starsAcc: false })

  }




  render() {
    const { hotels, gym, pool, parking, starsAcc } = this.state
    let filtered = hotels.filter(hotel => {
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
              {hotels.length === 0 ? (
                <p>Loading...</p>
              ) : (
                  <HotelList hotels={filtered} />
                )}
            </div>
            <div className="column">
              <Filter
                filterGym={(this.filterFacility)}
                filterPool={(this.filterFacility)}
                filterParking={(this.filterFacility)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
