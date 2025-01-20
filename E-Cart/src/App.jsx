import React, { useState } from 'react';
import Cart from './components/Cart';
import ProductsList from './components/ProductList';
import Navbar from './components/Navbar';

const products = [
  { id: 1, name: "T-Shirt", price: 20 },
  { id: 2, name: "Jeans", price: 40 },
  { id: 3, name: "Sneakers", price: 60 },
  { id: 4, name: "Hat", price: 15 },
  { id: 5, name: "Socks", price: 5 },
];

function App() {
  const [cart, setCart] = useState([]);

  // Update the cart size and manage items
  const handleClick = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      // Update quantity if product already exists in cart
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...existingProduct, quantity: existingProduct.quantity + 1 }
            : item
        )
      );
    } else {
      // Add new product to cart
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Calculate the total cart size
  const cartSize = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div>
      <Navbar cartSize={cartSize} /> {/* Pass the correct cart size */}
      <ProductsList products={products} handleClick={handleClick} />
      <Cart cart={cart} /> {/* Pass the cart state to the Cart component */}
    </div>
  );
}

export default App;
