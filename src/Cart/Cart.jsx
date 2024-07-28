import React, { useContext } from 'react';
import MyContext from '../MyContext';

function Cart() {
  const { state } = useContext(MyContext);

  const total = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ border: '1px solid black', padding: '10px', width: '40%' }}>
      <h2>Cart</h2>
      {state.cart.length === 0 ? (
        <p>No Product added to the cart</p>
      ) : (
        <>
          {state.cart.map(item => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span>{item.name} x {item.quantity}</span>
              <span>${item.price * item.quantity}</span>
            </div>
          ))}
          <hr />
          <h3>Total: ${total}</h3>
        </>
      )}
    </div>
  );
}

export default Cart;
