import React, { Component } from 'react';
import Title from './Title';
import Filter from './Filter';
import HotelList from './HotelList';
import './App.css';
import data from './hotels.json';

class App extends Component {
  state = {
    hotels: [],
    starsAcc: true,
    filter: { gym: true, pool: true, carpark: true }
  }

  componentDidMount() {
    this.setState({ hotels: data })
  };


  filterFacility = (event) => {
    this.state.filter[event] ? this.setState({
      filter: Object.assign({}, this.state.filter, { [event]: false, }),
    }) : this.setState({
      filter: Object.assign({}, this.state.filter, { [event]: true, }),
    });
  }

  hotelsAcending = () => {
    let sorted = this.state.hotels.sort((a, b) => b.StarRating - a.StarRating)
    this.setState({ hotels: sorted, starsAcc: true })
  }
  hotelsDecending = () => {
    let sorted = this.state.hotels.sort((a, b) => a.StarRating - b.StarRating)
    this.setState({ hotels: sorted, starsAcc: false })

  }




  render() {
    const { hotels, starsAcc, filter } = this.state
    let filtered = hotels.filter(function (hotel) {
      for (var key in filter) {
        if ((!filter[key]) && !hotel.Facilities.includes(key) )
          return false;
      }
      return true;
    });

    return (
      <div className="App">

        <Title />

        <div className="section">
          <div className="tabs">
            <ul>
              Sort By:
              <li className={starsAcc ? "is-active" : ""}><a onClick={this.hotelsAcending}>Stars Ascending</a></li>
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
