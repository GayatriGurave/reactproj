import { AppBar, Badge, Box, Button, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import ListIcon from '@mui/icons-material/List'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { useSelector } from 'react-redux';
const MyAppBar = () => {
    let navigate = useNavigate()
    const {cartItemCount} = useSelector((state)=>state.cart)
  
    const [isDrawOpen, setDrawOpen] = useState(false)
    let handeleDrawerOpen=()=>{
        setDrawOpen(true)
    }

    let handeleDrawerClose=()=>{
        setDrawOpen(false)
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                    onClick={()=>{handeleDrawerOpen()}}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%"
                    }}>
                        <List sx={{
                            display: "flex",
                            gap:'10px',
                            cursor: "pointer",
                            width:"100%"
                            
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
                            <ListItem onClick={()=>navigate("/cart")}>
                                <ListItemText>AddtoCart</ListItemText> 
                                <Badge badgeContent={cartItemCount} color='error'>
                                    <AddShoppingCartIcon/>
                                </Badge>
                            </ListItem>
                            <ListItem onClick={()=>navigate("/profile")}>
                                <ListItemText>Profile</ListItemText>
                            </ListItem>
                        </List>
                    </Box>
                    <Drawer open={isDrawOpen} onClose={handeleDrawerClose} anchor='left'>
                        <List>
                            <ListItem onClick={()=>{
                                navigate('/dash')
                                handeleDrawerClose()
                            }}>
                            <ListItemIcon>
                            <DashboardIcon/>
                            </ListItemIcon>
                            <ListItemText>
                                Dashboard
                            </ListItemText>
                            </ListItem>
                            
                            <ListItem onClick={()=>{
                                navigate('/addprod')
                                handeleDrawerClose()
                            }}>
                            <ListItemIcon>
                            <AddBoxIcon/>
                            </ListItemIcon>
                            <ListItemText>
                                Add Product
                            </ListItemText>
                            </ListItem>

                            <ListItem onClick={()=>{
                                navigate('/allprod')
                                handeleDrawerClose()
                            }}>
                            <ListItemIcon>
                            <FormatListBulletedIcon/>
                            </ListItemIcon>
                            <ListItemText>
                                All Product
                            </ListItemText>
                            </ListItem>
                        </List>
                    </Drawer>

                    {/* <Button color="inherit">Login</Button> */}
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default MyAppBar 