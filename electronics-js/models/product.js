const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true, unique: true },
    price: { type: Number, required: true, min: 0 },
    image: { type: String, default: 'default-product.jpg' },
    description: { type: String, trim: true },
    category: { type: String, required: true, enum: ['Electronics', 'Clothing', 'Home', 'Sports'] },
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);
