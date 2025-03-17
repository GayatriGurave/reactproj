import { Box, Button, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid2, Stack, Typography } from '@mui/material'
import axios, { all } from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MyCard from './MyCard'




const Products = () => {
    const [isOpen, setisOpen] = useState(false)
    const [selectedProduct, setselectedProduct] = useState(null)
    const [allProducts, setallProducts] = useState([])
    let navigate = useNavigate()

    const [selectedCategory, setselectedCategory] = useState("All")
    const [filterData, setfilterData] = useState([])
    useEffect(()=> {
        //define function
        let fetchProducts = async () => {
            let result = await axios.get("https://dummyjson.com/products")
            console.log("DATA", result.data.products);
            setallProducts(result.data.products)
        }

        //call functions
        fetchProducts()
    }, [])

    //use effect for filtered products
    useEffect(() => {
      let filterProd = allProducts.filter((prod)=>prod.category == selectedCategory)
      setfilterData(filterProd)
      console.log("Filter",filterProd);
      if(selectedCategory=="All"){
        setfilterData(allProducts)
      }
    }, [selectedCategory,allProducts])
    

    let handleOpenDialog = () => {
        setisOpen(true)
    }
    let handleCloseDialog = () => {
        setisOpen(false)
    }

    return (
        <>
        <Stack direction={'row'} spacing={1} margin={1}>
        <Chip label="All" onClick={()=>{setselectedCategory("All")}} variant='filled' color='primary'/>
        <Chip label="Beauty" onClick={()=>{setselectedCategory("beauty")}} variant='filled' color='primary'/>
        <Chip label="Fragrances" onClick={()=>{setselectedCategory("fragrances")}} variant='filled' color='primary'/>
        <Chip label="Furniture" onClick={()=>{setselectedCategory("furniture")}} variant='filled' color='primary'/>
        <Chip label="Groceries" onClick={()=>{setselectedCategory("groceries")}} variant='filled' color='primary'/>
        </Stack>
            <Box>
                <Grid2 container spacing={3} padding={2}>
                    {
                    filterData.map((prod) => {
                            return (
                                <MyCard data={prod} />
                            )
                        }

                        )
                    }
                </Grid2>
            </Box>
            <Dialog open={isOpen}
                onClose={handleCloseDialog}>
                <DialogTitle>Product Details</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Typography variant='h6'>{selectedProduct?.title}</Typography>
                        {selectedProduct?.price}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleCloseDialog()} variant='text' color='error'>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default Products