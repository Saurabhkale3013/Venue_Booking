import Venue from '../models/Venue.js';

export const getVenues = async (req, res) => {
  const venues = await Venue.find();
  res.json(venues);
};

export const addVenue = async (req, res) => {
  const { name, location, description } = req.body;
  const venue = new Venue({ name, location, description, blockedDates: [] });
  await venue.save();
  res.status(201).json(venue);
};

export const blockDates = async (req, res) => {
  const { id } = req.params;
  const { dates } = req.body;
  const venue = await Venue.findById(id);
  venue.blockedDates.push(...dates);
  await venue.save();
  res.json(venue);
};

export const bookVenue = async (req, res) => {
  const { id } = req.params;
  const { date } = req.body;
  const venue = await Venue.findById(id);
  if (venue.blockedDates.includes(date)) {
    return res.status(400).json({ message: 'Date unavailable' });
  }
  venue.blockedDates.push(date);
  await venue.save();
  res.json({ message: 'Booking successful' });
};
