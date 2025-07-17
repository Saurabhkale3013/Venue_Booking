import express from 'express';
import { getVenues, addVenue, blockDates, bookVenue } from '../controllers/venueController.js';

const router = express.Router();

router.get('/', getVenues);
router.post('/', addVenue);
router.put('/:id/block', blockDates);
router.post('/:id/book', bookVenue);

export default router;
