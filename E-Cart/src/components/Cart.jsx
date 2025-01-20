import React from 'react';

function Cart({ cart }) {
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className='Cart'>
      <h1 className='Carth1'>Cart</h1>
      {cart.length === 0
      ?(<p className='Empty'>Empty Cart.</p>):
      (<ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price} x {item.quantity}
              <button onClick={() => handleQuantityChange(item, "increase")}>+</button>
              <button onClick={() => handleQuantityChange(item, "decrease")}>-</button>
              <button onClick={() => handleRemove(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h2>Total Price:${totalPrice}</h2>
    </div>
  );
}

export default Cart;
