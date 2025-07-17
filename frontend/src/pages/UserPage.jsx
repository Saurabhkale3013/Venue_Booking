import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
const UserPage = () => {
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    axios.get('/api/venues').then(res => setVenues(res.data));
  }, []);

  const book = async (id) => {
    const date = prompt('Enter date to book (YYYY-MM-DD)');
    try {
      await axios.post(`/api/venues/${id}/book`, { date });
      alert('Booked!');
    } catch {
      alert('Unavailable');
    }
  };

  return (
    <div className='user-container'>
      <h1>Available Venues</h1>
      <ul className='venue-list'>
        {venues.map(v => (
          <li key={v._id} className='venue-item'>
            {v.name} - {v.location}
            <button className='book-button' onClick={() => book(v._id)}>Book</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPage;
