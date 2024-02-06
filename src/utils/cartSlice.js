import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name : cart,
    initialState : {
        items : [],
    },
    reducers : {
        addItems : ((action, state) => {
            state.items.push(action.payload);
        }),
        removeItems : ((state) => {
            state.items.pop();
        }),
        clearCart : ((state) => {
            state.items.length === 0;
        })
    }
})


export default cartSlice.reducer;
export {addItems, removeItems, clearCart} = cartSlice.action;