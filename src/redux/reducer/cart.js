import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",

    initialState :{
        items: [],
        totalPrice : 0
    },

    reducers:{
        AddItemCart:(state, action) =>{
           state.items.push(action.payload)
        },
        CalculateTotalPrice: (state) =>{
           let total =0
           state.items.forEach((item) =>{
            total += item.price
           })
           state.totalPrice = total
        },
        removeItemFromCart:(state, action) =>{
            state.items = state.items.filter ((item) => item.id != action.payload.id)
        }
    }
})

export const{AddItemCart, CalculateTotalPrice , removeItemFromCart} = cartSlice.actions

export default cartSlice.reducer