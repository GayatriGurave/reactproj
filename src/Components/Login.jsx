import React from 'react'
import {
    Box, Button, TextField,
    Typography
} from '@mui/material'
import {useNavigate} from 'react-router-dom'
 import { useDispatch } from 'react-redux'
 import {login} from '../Reduxwork/UserSlice'


const Login = () => {
    
    let navigate = useNavigate()
     let dispatcher = useDispatch()
    let submitFormData = (event) => {
        event.preventDefault()
        let formEntries = new FormData(event.target)
        let formDataObject = Object.fromEntries(formEntries.entries())
        console.log("DATA", formDataObject);
        dispatcher(login(formDataObject))
        navigate('/product')
        // if(formDataObject.userName=="gayu123" && formDataObject.userPassword=="gayu@2003"){
        //     navigate('/')
        // }
        
    //     else{
    //         alert("error incorrect Password")
    //     }
    // 
    }
    return (
        <>
            <Typography variant='h4'>Login User</Typography>
            <Box sx={{
                display: 'flex',
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                width: "100%"
            }}>
                <Box component="form"
                    onSubmit={(e) => submitFormData(e)}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px"
                    }}>
                    <TextField type='text' label="Enter User Name" variant='outlined' name='userName'></TextField>
                                      
                    <TextField type='password' label="Enter User Password" variant='outlined' name='userPassword'></TextField>

                    

                    <Button type='submit' variant='contained' color='success' >
                        Login
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default Login