import Testimonial from "../models/Testimonial.js";

export const getAllTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTestimonial = async (req, res) => {
  const { username, avatar, rating, comment } = req.body;


  try {
    const finalAvatar = avatar || "https://randomuser.me/api/portraits";

    const newTestimonial = new Testimonial({
      username: username,
      avatar: finalAvatar,
      rating: rating,
      comment: comment,
    });
    await newTestimonial.save();
    res.status(201).json(newTestimonial);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
