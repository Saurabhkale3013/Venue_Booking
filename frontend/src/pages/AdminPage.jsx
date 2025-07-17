import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';

const AdminPage = () => {
  const [venues, setVenues] = useState([]);
  const [form, setForm] = useState({ name: '', location: '', description: '' });

  useEffect(() => {
    axios.get('/api/venues').then(res => setVenues(res.data));
  }, []);

  const addVenue = async () => {
    await axios.post('/api/venues', form);
    const res = await axios.get('/api/venues');
    setVenues(res.data);
  };

  const blockDate = async (id) => {
    const date = prompt('Enter date to block (YYYY-MM-DD)');
    if (!date) return;
    await axios.put(`/api/venues/${id}/block`, { dates: [date] });
    const res = await axios.get('/api/venues');
    setVenues(res.data);
  };

  return (
    <div className="admin-container">

      <div className="admin-card">
        <h1 className="admin-title">Admin Dashboard</h1>

        <div className="admin-form">
          <input
            className="admin-input"
            placeholder="Venue Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            className="admin-input"
            placeholder="Location"
            onChange={(e) => setForm({ ...form, location: e.target.value })}
          />
          <input
            className="admin-input"
            placeholder="Description"
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
        </div>

        <button className="admin-button" onClick={addVenue}>
          Add Venue
        </button>

        <ul className="venue-list">
          {venues.map((v) => (
            <li key={v._id} className="venue-item">
              <div>
                <h3 className="venue-name">{v.name}</h3>
                <p className="venue-location">{v.location}</p>
              </div>
              <button
                className="block-button"
                onClick={() => blockDate(v._id)}
              >
                Block Date
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPage;
