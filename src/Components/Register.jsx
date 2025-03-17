import {
    Box, Button, FormControl,
    FormControlLabel, Radio,
    FormLabel, TextField,
    RadioGroup,
    Typography
} from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'

const Register = () => {

    let submitFormData = (event) => {
        event.preventDefault()
        let formEntries = new FormData(event.target)
        let formDataObject = Object.fromEntries(formEntries.entries())
        console.log("DATA", formDataObject);
    }

    return (
        <>
            <Typography variant='h4'>Register User</Typography>

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
                    <TextField type='email' label="Enter User Email" variant='outlined' name='userEmail'></TextField>
                    <TextField type='tel' label="Enter User Mobile" variant='outlined' name='userMobile'></TextField>
                    <TextField type='password' label="Enter User Password" variant='outlined' name='userPassword'></TextField>

                    <FormControl>
                        <FormLabel id="gender">Gender</FormLabel>
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

                    <Button type='submit' variant='contained' color='success'>
                        Reginster
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default Register