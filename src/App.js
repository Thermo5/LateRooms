import React, { Component } from 'react';
import Title from './Title';
import './App.css';
import data from './hotels.json';

class App extends Component {
  state = {
    loading: true,
    hotels: [],
    carpark: true,
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
    );
  }
}

export default App;
