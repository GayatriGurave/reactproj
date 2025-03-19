import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     user : {}
}

const userSlice = createSlice({
    name : "profile",
    initialState,
    reducers : {
        userProfile :(state,actions)=>{
            state.user ={...actions.payload} 
        },
        logout:(state)=>{
            state.user={}
        }

       
    }
})

export const {
    userProfile,logout
}=userSlice.actions

export default userSlice.reducer