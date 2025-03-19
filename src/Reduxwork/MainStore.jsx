import { configureStore } from "@reduxjs/toolkit";

import cartReducer from './CartSlice'
import profileReducer from './UserSlice'

let MainStore = configureStore({
    reducer:{
        cart:cartReducer,
        profile : profileReducer
    }
})



export default MainStore