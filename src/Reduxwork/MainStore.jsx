import { configureStore } from "@reduxjs/toolkit";

import cartReducer from './CartSlice'
import registerReducer from './UserSlice'

let MainStore = configureStore({
    reducer: {
        cart: cartReducer,
        Register:registerReducer
        
    }
})



export default MainStore