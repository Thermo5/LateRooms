
import React from 'react';

const HotelList = (hotels) => (

  <div>
    {hotels.hotels.map((hotel, i) =>
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
    )}
  </div>
)

export default HotelList;


