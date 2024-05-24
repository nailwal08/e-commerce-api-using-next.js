import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const productsRes = await axios.get('/api/products');
      const cartRes = await axios.get('/api/cart');
      setProducts(productsRes.data);
      setCart(cartRes.data.items);
    }
    fetchData();
  }, []);

  const addToCart = async (productId) => {
    await axios.post('/api/cart', { productId });
    const cartRes = await axios.get('/api/cart');
    setCart(cartRes.data.items);
  };

  const calculateAmount = () => {
    let amount = 0;
    cart.forEach((item) => {
      const product = products.find((product) => product._id === item.productId);
      if (product) {
        amount += product.price * item.quantity;
      }
    });
    setTotalAmount(amount);
  };

  return (
    <div>
      <h1>Products</h1>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Price</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td style={{ border: '1px solid black', padding: '8px' }}>{product.name}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{product.price}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <button onClick={() => addToCart(product._id)}>Add to Cart</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1>Cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.productId}>
            {products.find((product) => product._id === item.productId)?.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
      <button onClick={calculateAmount}>Calculate Amount</button>
      <h2>Total Amount: ₹ {totalAmount}</h2>
    </div>
  );
}
