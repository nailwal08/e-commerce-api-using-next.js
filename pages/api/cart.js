import dbConnect from '../../middleware/mongodb';
import Cart from '../../models/Cart';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    const cart = await Cart.findOne({}) || { items: [] };
    res.status(200).json(cart);
  } else if (req.method === 'POST') {
    const { productId } = req.body;
    let cart = await Cart.findOne({});

    if (!cart) {
      cart = new Cart({ items: [] });
    }

    const itemIndex = cart.items.findIndex((item) => item.productId.equals(productId));
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += 1;
    } else {
      cart.items.push({ productId, quantity: 1 });
    }

    await cart.save();
    res.status(201).json(cart);
  }
}
