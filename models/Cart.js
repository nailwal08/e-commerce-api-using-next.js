import mongoose from 'mongoose';

const CartSchema = new mongoose.Schema({
  items: [{ productId: mongoose.Schema.Types.ObjectId, quantity: Number }],
});

export default mongoose.models.Cart || mongoose.model('Cart', CartSchema);
