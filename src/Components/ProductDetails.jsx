import { Box, Card, CardContent, Grid2, Typography } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom'


//Product Details using use Location
const ProductDetails = () => {
    let productData = useLocation().state

    return (
        <>
            <Typography variant='h4'>Details</Typography>
            <Typography variant='h6'>Id: {productData.id}</Typography>
            <Typography variant='h6'>Title: {productData.title}</Typography>
            <Typography variant='h6'>Description: {productData.description}</Typography>
            <Typography variant='h6'>Category: {productData.category}</Typography>
            <Typography variant='h6'>Price: {productData.price}</Typography>

            <Box>
                <Grid2 container spacing={3}>
                    {
                        productData.reviews.map((rev) => {
                            return (
                                <Grid2 size={{
                                    lg: 3
                                }}>
                                    <Card>
                                        <CardContent>
                                            <Typography variant='inherit'>Rating:{rev.rating}</Typography>
                                            <Typography variant='inherit'>From:{rev.reviewerName}</Typography>
                                            <Typography variant='inherit'>Comment:{rev.comment}</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid2>
                            )
                        })
                    }
                </Grid2>
            </Box>
        </>
    )
}

export default ProductDetails