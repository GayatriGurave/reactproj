import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import MyAppBar from './MyAppBar'
import Register from './Register'
import Login from './Login'
import Products from './products'
import ProductDetails from './ProductDetails'
import OrdersDate from './OrdersDate'
import Cart from './Cart'
import Profile from './Profile'
import Dashboard from './Dashboard'
import Addprod from './Addprod'
import Allprod from './Allprod'
const MyRoutes = () => {
    return (
        <>
        
            <MyAppBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/login' element={<Login/>}/> 
                <Route path='/product' element={<Products/>}/>
                <Route path='/proddetails' element={<ProductDetails/>}/>
                <Route path='/ordersdate' element={<OrdersDate/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/dash' element={<Dashboard/>}/>
                <Route path='/allprod' element={<Allprod/>}/>
                <Route path='/addprod' element={<Addprod/>}/>
            </Routes>
        </>
    )
}

export default MyRoutes