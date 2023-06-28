import { createSlice } from "@reduxjs/toolkit";


export const CartItemSlice = createSlice({
    name : "CartItem",
    initialState : {
            items : []
        },
    reducers : {
        add : (state, actions) => {
            // console.log(actions.payload) ;
            state.items.push(actions.payload) ;
        },
        remove : (state, actions) => {
            // console.log(actions.payload) ;
            state.items = state.items.filter((item) => (item.id !== actions.payload))
            // console.log(state.items) ;
        }
    }
})

export const { add, remove} = CartItemSlice.actions ;
export default CartItemSlice.reducer ;