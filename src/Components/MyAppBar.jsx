import { AppBar, Box, Button, IconButton, List, ListItem, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'


const MyAppBar = () => {
    let navigate = useNavigate()

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        {/* <MenuIcon /> */}
                    </IconButton>
                    {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography> */}
                    <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%"
                    }}>
                        <List sx={{
                            display: "flex",
                            cursor: "pointer"
                        }}>
                            <ListItem onClick={() => navigate("/")}>
                                <ListItemText>Home</ListItemText>
                            </ListItem>
                            <ListItem onClick={() => navigate("/about")}>
                                <ListItemText>About</ListItemText>
                            </ListItem>
                            <ListItem onClick={() => navigate("/contact")}>
                                <ListItemText>Contact</ListItemText>
                            </ListItem>
                            <ListItem onClick={() => navigate("/register")}>
                                <ListItemText>Register</ListItemText>
                            </ListItem>
                            <ListItem onClick={() => navigate("/login")}>
                                <ListItemText>Login</ListItemText>
                            </ListItem>
                            <ListItem onClick={() => navigate("/product")}>
                                <ListItemText>Products</ListItemText>
                            </ListItem>
                            <ListItem onClick={() => navigate("/ordersdate")}>
                                <ListItemText>Orders</ListItemText>
                            </ListItem>
                        </List>
                    </Box>

                    {/* <Button color="inherit">Login</Button> */}
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default MyAppBar 