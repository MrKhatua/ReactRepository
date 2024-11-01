import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, remove, applyDiscount } from './Store';

function Cart() {
    const cart = useSelector((state) => state.cart.items);
    const discount = useSelector((state) => state.cart.discount);
    const dispatch = useDispatch();

    // State for coupon input
    const [couponCode, setCouponCode] = useState("");

    // Calculate total price before discount
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    // Calculate discount amount and final price
    const discountAmount = totalPrice * (discount / 100);
    const finalPrice = totalPrice - discountAmount;

    // Handle coupon code application
    const handleApplyCoupon = () => {
        // Map coupon codes to discount values
        const couponDiscounts = {
            "Manoj10": 10,
            "Manoj20": 20,
            "Manoj30": 30
        };

        // Check if entered code is valid
        if (couponDiscounts[couponCode]) {
            dispatch(applyDiscount(couponDiscounts[couponCode]));
        } else {
            alert("Invalid coupon code. Try Manoj10, Manoj20, or Manoj30.");
        }
    };

    return (
        <div>
            <h1>Your Cart</h1>
            {cart.length > 0 ? (
                <div>
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index}>
                                {item.name} - ${item.price.toFixed(2)} - Quantity: {item.quantity}
                                <button onClick={() => dispatch(increment(item))}>+1</button>
                                <button onClick={() => dispatch(decrement(item))}>-1</button>
                                <button onClick={() => dispatch(remove(item))}>Remove</button>
                            </li>
                        ))}
                    </ul>

                    <h2>Cart Summary</h2>
                    <p>Total Amount Before Discount: ${totalPrice.toFixed(2)}</p>
                    <p>Discount: {discount}% (-${discountAmount.toFixed(2)})</p>
                    <p>Final Price: ${finalPrice.toFixed(2)}</p>

                    <div>
                        <h3>Apply Coupon Code:</h3>
                        <input 
                            type="text" 
                            value={couponCode} 
                            onChange={(e) => setCouponCode(e.target.value)} 
                            placeholder="Enter coupon code" 
                        />
                        <button onClick={handleApplyCoupon}>Apply Coupon</button>
                    </div>
                </div>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
}

export default Cart;
