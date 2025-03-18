import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItems : [],
    cartTotalAmount : 0,
    cartItemCount : 0
}
let CartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addItem:(state,actions)=>{
            let newItem = {...actions.payload,qty:1}
            state.cartItems = [...state.cartItems,newItem]
            state.cartItemCount = state.cartItems.length
        },
        incrementQty : ()=>{ },
        decrementQty : ()=>{},
        removeItem : ()=>{ },
        calculateTotal : ()=>{ }

    }
})
export const {addItem,
    incrementQty,
    decrementQty,
    removeItem,
calculateTotal} = CartSlice.actions

export default CartSlice.reducer