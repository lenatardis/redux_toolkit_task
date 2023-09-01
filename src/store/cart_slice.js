import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    'items': [],
    'totalQuantity': 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            let {id, title, price} = action.payload;
            let match = state.items.find((item) => {
                if (item.id === id) {
                    item.quantity ++;
                    item.totalPrice = item.price * item.quantity;
                    return true;
                }
            })
            if (!match) state.items.push({id, title, price, quantity: 1, totalPrice:price});
            state.totalQuantity ++;
        },
        removeItemFromCart: (state, action) => {
            let id = action.payload;
            let match = state.items.find((item, index) => {
                if (item.id === id) {
                    if (item.quantity > 1 ) {
                        item.quantity --;
                        item.totalPrice = item.price * item.quantity;
                    } else {
                        state.items.splice(index,1);
                    }
                    state.totalQuantity --;
                }
            })
        }
    }
});

// these exports should stay the way they are
export const cartActions = cartSlice.actions;
export const items = (state) => state.cart.items;
export const totalQuantity = (state) => state.cart.totalQuantity;

export default cartSlice;
