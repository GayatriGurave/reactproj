import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { logout } from '../Reduxwork/UserSlice'
import { useDispatch, useSelector } from 'react-redux'

const Profile = () => {
  let dispatcher = useDispatch()
  let {userdata}=useSelector((state)=>state.Register)
  return (
    <>
    {/* <Typography variant='h4'>Profile</Typography> */}
    <Box>
      <Typography variant='h6'>Name:{userdata.userName}</Typography>
      <Typography variant='h6'>Password:{userdata.userPassword}</Typography>
      <Typography variant='h6'>Email:{userdata.userEmail}</Typography>
      <Typography variant='h6'>Mobile:{userdata.userMobNo}</Typography>
      <Typography variant='h6'>Gender:{userdata.gender}</Typography>
      <Button onClick={()=>{dispatcher(logout())}} variant='contained' color='error'>Logout</Button>
    </Box>
    </>
  )
}

export default Profile