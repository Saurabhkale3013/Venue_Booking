import mongoose from 'mongoose';

const venueSchema = new mongoose.Schema({
  name: String,
  location: String,
  description: String,
  blockedDates: [String] // ISO strings
});

export default mongoose.model('Venue', venueSchema);
