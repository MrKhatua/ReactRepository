// Veg.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addcart } from './Store';

function Veg() {
    const vegProducts = useSelector((state) => state.products.veg);
    const dispatch = useDispatch();

    const handleAddToCart = (item) => {
        dispatch(addcart(item));
    };

    return (
        <div>
            <h2>Vegetables</h2>
            <ul>
                {vegProducts.map((item, index) => (
                    <li key={index}>
                        {item.name} - ${item.price.toFixed(2)}
                        <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Veg;
