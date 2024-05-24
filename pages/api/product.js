import dbConnect from '../../middleware/mongodb';
import Product from '../../models/Product';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    const products = await Product.find({});
    res.status(200).json(products);
  } else {
    res.status(400).json("bad request");
  }
}
