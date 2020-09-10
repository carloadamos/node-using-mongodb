import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const ProductSchema = new Schema({
  name: {
    type: String,
    required: 'Enter a product name',
  },

  description: {
    type: String,
    required: 'Enter a description',
  },

  category: {
    type: String,
    required: 'Enter a category',
  },

  price: {
    type: Number,
    required: 'Enter a price',
  },

  created_date: {
    type: Date,
    default: Date.now,
  },
})
