import { Box, Button, Typography } from '@mui/material'
import React from 'react'
 import { useDispatch, useSelector } from 'react-redux'
 import { logout } from '../Reduxwork/UserSlice'

const Profile = () => {
     let dispatcher = useDispatch()
     let { userdata } = useSelector((state) => state.register)
    return (
        <Box>
            <Box sx={{ display: 'flex', gap: 3 }}>
                <Typography>Name:{userdata.userName}</Typography>
                <Typography>Password:{userdata.userPassword}</Typography>
                <Typography>Email:{userdata.userEmail}</Typography>
                <Typography>Email:{userdata.UserMob}</Typography>
                <Button
                    onClick={() => {
                         dispatcher(logout())
                    }}
                    variant='contained' color='secondary'>Logout</Button>
            </Box>

        </Box>

    )
}

export default Profile

// import React from 'react'

// const Profile = () => {
//   return (
//     <div>Profile</div>
//   )
// }

// export default Profile