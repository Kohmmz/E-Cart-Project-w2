import React from 'react';
import img from '../img/Talon.jpeg';

function ProductsList({ products, handleClick }) {
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li className="productslist" key={product.id}>
            <img src={img} className="img" alt="Product" />
            Name: {product.name} Price: ${product.price}
            <button className="Checkout" onClick={() => handleClick(product)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsList;
