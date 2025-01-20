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

  // Update the cart size when a product is added
  const handleClick = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
         // Update the quantity of the existing product
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...existingProduct, quantity: existingProduct.quantity + 1 }
            : item
        )
      );
    } else {
       // Add a new product to the cart
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };


//Remove a product from cart
const handleRemove = (product) =>{
setCart(cart.filter((item)=> item.id !== product.id)
)}
 // Adjust the quantity of a product in the cart
 const handleQuantityChange = (product, action) => {
  setCart(
    cart.map((item) =>
      item.id === product.id
        ? {
            ...item,
            quantity:
              action === "increase"
                ? item.quantity + 1
                : item.quantity > 1
                ? item.quantity - 1
                : 1,
          }
        : item
    )
  );
};

  const cartSize = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div>
      <Navbar cartSize={cartSize} />
      <ProductsList products={products} handleClick={handleClick} />
      <Cart cart={cart} handleRemove={handleRemove} handleQuantityChange={handleQuantityChange}
/>
    </div>
  );
}

export default App;
