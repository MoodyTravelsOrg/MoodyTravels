
import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default: 'https://randomuser.me/api/portraits',
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
    required: true,
  },
});

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

export default Testimonial;
