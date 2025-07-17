


// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import React from 'react';

// const UserPage = () => {
//   const [venues, setVenues] = useState([]);
//   const navigate = useNavigate();

//   const API_BASE_URL = import.meta.env.VITE_API_URL;

//   useEffect(() => {
//     axios.get(`${API_BASE_URL}/api/venues`)
//       .then(res => setVenues(res.data))
//       .catch(err => {
//         console.error('Error fetching venues:', err);
//         alert('Failed to load venues');
//       });
//   }, []);

//   const book = async (id) => {
//     const date = prompt('Enter date to book (YYYY-MM-DD)');
//     if (!date) return;

//     try {
//       await axios.post(`${API_BASE_URL}/api/venues/${id}/book`, { date });
//       alert('Booked!');
//     } catch (err) {
//       console.error('Booking error:', err);
//       alert('Unavailable');
//     }
//   };

//   const goToAdmin = () => {
//     navigate('/admin');
//   };

//   return (
//     <div className='user-container'>
//       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//         <h1>Available Venues</h1>
//         <button className='admin-button' onClick={goToAdmin}>Go to Admin Dashboard</button>
//       </div>

//       <ul className='venue-list'>
//         {venues.map(v => (
//           <li key={v._id} className='venue-item'>
//             {v.name} - {v.location}
//             <button className='book-button' onClick={() => book(v._id)}>Book</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UserPage;


import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import React from 'react';

const UserPage = () => {
  const [venues, setVenues] = useState([]);
  const navigate = useNavigate();

  const API_BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/venues`)
      .then(res => {
        console.log("Venue API Response:", res.data); // 🔍 Debug log
        // Check if response has 'venues' key
        if (Array.isArray(res.data.venues)) {
          setVenues(res.data.venues); // ✅ Adjust according to backend structure
        } else if (Array.isArray(res.data)) {
          setVenues(res.data); // fallback
        } else {
          console.error("Unexpected API response structure");
          alert("Failed to load venues");
        }
      })
      .catch(err => {
        console.error('Error fetching venues:', err);
        alert('Failed to load venues');
      });
  }, []);

  const book = async (id) => {
    const date = prompt('Enter date to book (YYYY-MM-DD)');
    if (!date) return;

    try {
      await axios.post(`${API_BASE_URL}/api/venues/${id}/book`, { date });
      alert('Booked!');
    } catch (err) {
      console.error('Booking error:', err);
      alert('Unavailable');
    }
  };

  const goToAdmin = () => {
    navigate('/admin'); // Make sure this route is correctly set up in React Router
  };

  return (
    <div className='user-container'>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Available Venues</h1>
        <button className='admin-button' onClick={goToAdmin}>Go to Admin Dashboard</button>
      </div>

      <ul className='venue-list'>
        {Array.isArray(venues) && venues.map(v => (
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
