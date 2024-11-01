// Store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Product slice with initial veg and non-veg items
const productSlice = createSlice({
    name: 'products',
    initialState: {
        veg: [
            { name: 'Tomato', price: 200.5 },
            { name: 'Potato', price: 100.8 },
            { name: 'Carrot', price: 300.6 }
        ],
        nonVeg: [
            { name: 'Chicken', price: 800.0 },
            { name: 'Fish', price: 1000.0 },
            { name: 'Mutton', price: 2000.5 }
        ]
    },
    reducers: {}
});

// Cart slice with actions for adding, incrementing, decrementing, and removing items
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        discount: 0  // Added discount state to handle coupon
    },
    reducers: {
        addcart: (state, action) => {
            const existingItem = state.items.find(item => item.name === action.payload.name);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        increment: (state, action) => {
            const item = state.items.find(item => item.name === action.payload.name);
            if (item) {
                item.quantity += 1;
            }
        },
        decrement: (state, action) => {
            const item = state.items.find(item => item.name === action.payload.name);
            if (item) {
                item.quantity -= 1;
                if (item.quantity === 0) {
                    state.items = state.items.filter(i => i.name !== item.name);
                }
            }
        },
        remove: (state, action) => {
            state.items = state.items.filter(item => item.name !== action.payload.name);
        },
        applyDiscount: (state, action) => {
            state.discount = action.payload;
        }
    }
});

// Configure store
const store = configureStore({
    reducer: {
        products: productSlice.reducer,
        cart: cartSlice.reducer
    }
});

// Export cart actions and the store
export const { addcart, increment, decrement, remove, applyDiscount } = cartSlice.actions;
export default store;
