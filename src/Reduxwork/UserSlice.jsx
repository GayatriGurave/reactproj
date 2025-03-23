import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userdata :{},
    users:[]
}

let UserSlice = createSlice({
    name:"Register",
    initialState,
    reducers:{
        register:(state,actions)=>{
            state.users=[...state.users,actions.payload]
        },
        logout:(state)=>{
            state.userdata={}
        },
        login:(state,actions)=>{
            let {userEmail,userPassword}=actions.payload
            let User = state.users.find((usr)=>usr.userEmail==userEmail)
            if(!User){
                alert("not registered")
            }
            if(User.userPassword==userPassword){
                state.userdata=User
            }
        }
    }
})

export const {register,logout,login} = UserSlice.actions

export default UserSlice.reducer