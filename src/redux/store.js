import { configureStore } from "@reduxjs/toolkit"
import CartItemSlice from "./slices/CartItemSlice"

export const store = configureStore({
    reducer : {
        CartItem : CartItemSlice
    },
})