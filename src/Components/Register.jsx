import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material'
import React from 'react'
 //import { useNavigate } from 'react-router-dom'
 import { register } from '../Reduxwork/UserSlice'
 import { useDispatch } from 'react-redux'



const Register = () => {
    //  let navigate = useNavigate()

     let dispatcher=useDispatch()
    let submitFormData = (event) => {
        event.preventDefault()
        let formEntries = new FormData(event.target)
        let formDataObject = Object.fromEntries(formEntries.entries())
        console.log("DATA", formDataObject);
         dispatcher(register(formDataObject))
     

        
    }
    
    return (
        <>
        
            <Box sx={{
                height: "100vh", width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "ButtonFace",
            }}>

                <Box component="form"
                    onSubmit={(e) => submitFormData(e) } 
                 
                         
                    sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                    <TextField type='text' label="Enter User Name" variant='outlined' name='userName'></TextField>
                    <TextField type='email' label="Enter User Email" variant='outlined' name='userEmail'></TextField>
                    <TextField type='tel' label="Enter the user number" variant='outlined' name='UserMob'></TextField>
                    <TextField type='password'  label="Enter the password" variant='outlined' name='userPassword'></TextField>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup
                            row
                            defaultValue="female"
                            name="gender"
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>
                    <Button 
              
                    type='submit' 
                    variant='contained' color='success' name='button' >Register</Button>
                </Box>

            </Box>
        </>
    )
}

export default Register