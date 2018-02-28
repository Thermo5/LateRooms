
import React from 'react';


const Filter = ({ filterParking, filterGym, filterPool }) => (
  <div className="filters">
    <h1>Filters</h1>
    <ul>
      <li><label className="checkbox"><input type="checkbox" name="parking" onClick={filterParking} />Parking</label></li>
      <li><label className="checkbox"><input type="checkbox" name="gym" onClick={filterGym} />Gym</label></li>
      <li><label className="checkbox"><input type="checkbox" name="pool" onClick={filterPool} />Pool</label></li>
    </ul>
  </div>
)


export default Filter;