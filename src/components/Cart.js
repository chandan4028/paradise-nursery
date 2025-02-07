import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../slices/cartSlice";
import "./Cart.css";

const Cart = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalPrice = useSelector(state => state.cart.totalPrice);
    const dispatch = useDispatch();

    return (
        <div className="cart-container">
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? <p>Your cart is empty</p> : (
                <div>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                <img src={item.img} alt={item.name} />
                                <div>
                                    <h3>{item.name}</h3>
                                    <p>${item.price}</p>
                                    <div>
                                        <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                                    </div>
                                    <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <h3>Total: ${totalPrice}</h3>
                    <button>Checkout</button>
                </div>
            )}
        </div>
    );
};

export default Cart;