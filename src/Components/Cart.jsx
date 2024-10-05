import React from 'react';


const Cart = ({ cartItems, incrementQuantity, decrementQuantity, removeItem }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart</h1>
      <div className="cart-item-list">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div className="cart-item-details">
                <h2 className="cart-item-title">{item.title}</h2>
                <p className="cart-item-price">Rs.{item.price}</p>
                <div className="quantity-controls">
                  <button className="quantity-button" onClick={() => decrementQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button className="quantity-button" onClick={() => incrementQuantity(item.id)}>+</button>
                </div>
                <button className="remove-button" onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            </div>
          ))
        )}
      </div>
      {cartItems.length > 0 && <p className="total-price">Total Price: Rs.{totalPrice}</p>}
      {cartItems.length > 0 && <button className="checkout-button">Checkout</button>}
    </div>
  );
};

export default Cart;
