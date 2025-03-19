import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../Reduxwork/UserSlice'
logout
const Profile = () => {
    const {user} = useSelector((state)=>state.profile)
    let dispatcher = useDispatch()
  return (
    <>
    <Box sx={{display:"flex",gap:3}}>
    <Typography variant="h4">{user.userName}</Typography>
    <Typography variant="h4">{user.userEmail}</Typography>
    <Typography variant="h4">{user.userMobile}</Typography>
    <Typography variant="h4">{user.userPassword}</Typography>
    <Button onClick={()=>{
      dispatcher(logout())
    }} variant='contained' color='secondary'>Logout</Button>
    </Box>
    </>
  )
}

export default Profile