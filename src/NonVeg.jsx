// NonVeg.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addcart } from './Store';

function NonVeg() {
    const nonVegProducts = useSelector((state) => state.products.nonVeg);
    const dispatch = useDispatch();

    const handleAddToCart = (item) => {
        dispatch(addcart(item));
    };

    return (
        <div>
            <h2>Non-Vegetables</h2>
            <ul>
                {nonVegProducts.map((item, index) => (
                    <li key={index}>
                        {item.name} - ${item.price.toFixed(2)}
                        <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NonVeg;
