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
    loading ? console.log(hotels) : console.log(hotels)
    return (
      <div className="App">
        <Title />
        {loading ? <p>Loading...</p> : 
          hotels.map((hotel, i) =>
          <div key={i}>
          <h1>{hotel.Name}</h1>
              <h2>Star Rating: {hotel.StarRating}</h2>
              <h2>Facilities:</h2>
              {hotel.Facilities.map((facilite, i) => 
              <ul key={i}>{facilite}</ul>
              )}
          </div>
           )
          }
       


      </div>
    );
  }
}

export default App;
