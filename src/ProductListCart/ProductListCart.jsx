
import React, { useContext } from 'react';
import MyContext from '../MyContext';

function ProductList({ products }) {
  const { state, dispatch } = useContext(MyContext);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', product });
  };

  const removeFromCart = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', product });
  };

  return (
    <div style={{ border: '1px solid black', padding: '10px', width: '40%' }}>
      <h2>Products</h2>
      {products.map(product => (
        <div key={product.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <span>{product.name} - ${product.price}</span>
          <div>
            <button onClick={() => removeFromCart(product)}>-</button>
            <span style={{ margin: '0 10px' }}>
              {state.cart.find(item => item.id === product.id)?.quantity || 0}
            </span>
            <button onClick={() => addToCart(product)}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
