import { configureStore, createSlice } from "@reduxjs/toolkit";
import cartSlice from "../reducer/cart"


const store = configureStore ({
    reducer:{
        cart: cartSlice
    }
})

export default store