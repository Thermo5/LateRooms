import React, { Component } from 'react';
import Title from './Title';
import './App.css';
import data from './hotels.json';

class App extends Component {
  state = {
    loading: true,
    hotels: [],
    parking: true,
    gym: true,
    pool: true,
  }

  componentDidMount() {
    this.setState({ hotels: data, loading: false })
  };




  render() {
    const { hotels, loading } = this.state

    return (
      <div className="App">
        <Title />

        <div className="tile is-ancestor">
          <div className="tile is-vertical is-10">

            {loading ? <p>Loading...</p> :
              hotels.map((hotel, i) =>
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
                <li> <label class="radio"><input type="radio" name="parking" />Parking</label></li>
                <li><label class="radio"><input type="radio" name="gym" />Gym</label></li>
                <li><label class="radio"><input type="radio" name="pool" />Pool</label></li>
              </ul>
            </div>
          </div>
        </div>




      </div>
    );
  }
}

export default App;
