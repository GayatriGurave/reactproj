import { Box, Button, Card, CardActions, CardContent, Grid2, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs';
import { Height } from '@mui/icons-material';
const orders = [
    { orderNo: "ORD2001", customerName: "Rajesh Kumar", date: "2025-06-05", amount: 799, status: "Delivered" },
    { orderNo: "ORD2002", customerName: "Priya Sharma", date: "2025-06-12", amount: 650, status: "Pending" },
    { orderNo: "ORD2003", customerName: "Amit Singh", date: "2025-06-20", amount: 899, status: "Cancelled" },
    { orderNo: "ORD2004", customerName: "Neha Verma", date: "2025-07-03", amount: 1299, status: "Delivered" },
    { orderNo: "ORD2005", customerName: "Vikram Patel", date: "2025-07-09", amount: 450, status: "Pending" },
    { orderNo: "ORD2006", customerName: "Suman Joshi", date: "2025-07-15", amount: 999, status: "Delivered" },
    { orderNo: "ORD2007", customerName: "Ankit Yadav", date: "2025-07-22", amount: 1199, status: "Cancelled" },
    { orderNo: "ORD2008", customerName: "Kiran Gupta", date: "2025-08-01", amount: 750, status: "Delivered" },
    { orderNo: "ORD2009", customerName: "Pooja Reddy", date: "2025-08-08", amount: 599, status: "Pending" },
    { orderNo: "ORD2010", customerName: "Rohit Mehta", date: "2025-08-14", amount: 1299, status: "Delivered" },
    { orderNo: "ORD2011", customerName: "Swati Tiwari", date: "2025-06-07", amount: 799, status: "Cancelled" },
    { orderNo: "ORD2012", customerName: "Tarun Kapoor", date: "2025-06-18", amount: 1150, status: "Delivered" },
    { orderNo: "ORD2013", customerName: "Deepika Malhotra", date: "2025-07-02", amount: 899, status: "Pending" },
    { orderNo: "ORD2014", customerName: "Kunal Bansal", date: "2025-07-16", amount: 650, status: "Delivered" },
    { orderNo: "ORD2015", customerName: "Meera Nair", date: "2025-07-29", amount: 1350, status: "Cancelled" },
    { orderNo: "ORD2016", customerName: "Aditya Ghosh", date: "2025-08-05", amount: 999, status: "Delivered" },
    { orderNo: "ORD2017", customerName: "Nidhi Saxena", date: "2025-08-13", amount: 899, status: "Pending" },
    { orderNo: "ORD2018", customerName: "Suresh Menon", date: "2025-08-20", amount: 550, status: "Delivered" },
    { orderNo: "ORD2019", customerName: "Rekha Iyer", date: "2025-06-25", amount: 1199, status: "Pending" },
    { orderNo: "ORD2020", customerName: "Harsh Vardhan", date: "2025-07-05", amount: 1350, status: "Delivered" }
];
console.log(orders);
const OrdersDate = () => {
    const [fromDate, setfromDate] = useState(null)
    const [toDate, settoDate] = useState(null)
    const [filterData, setfilterData] = useState([orders])
    // const [orderstatus, setorderstatus] = useState("")
    useEffect(()=>{
        let filterByDate = ()=>{
            let filtered = orders.filter((ord)=>(new Date(ord.date)>dayjs(fromDate).toDate() &&
             new Date(ord.date)<=dayjs(toDate).toDate()) )
            setfilterData(filtered)
            console.log("Orders",filtered);
        }
        filterByDate()
    },[fromDate,toDate])
    return (
        <>
            <Box>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Select From Date"
                        value={fromDate}
                        onChange={(newDate) => {
                            setfromDate(newDate)
                            console.log(newDate);
                        }}
                        format="YYYY-MM-DD"
                    // renderInput={(params) => <TextField {...params} />}
                    />

                    <DatePicker
                        label="Select To Date"
                        value={toDate}
                        onChange={(newDate) => {
                            settoDate(newDate)
                            console.log(newDate);
                        }}
                        format="YYYY-MM-DD"
                    // renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                {/* <Button variant='contained'color='success' >Find</Button> */}

            </Box>
             <Box>
            <Grid2 container spacing={3} padding={2}>
            {
                filterData.map((prod)=>{
                    return(
                        <Grid2 size={{sm:12,md:6,lg:3}} key={prod.customerName}>
                        <Card sx={{height:"100%",width:"100%",mb:2}}/>
                        <CardContent>
                            <Typography variant='h4'>{prod.orderNo}</Typography>
                            <Typography variant='h4'>{prod.customerName}</Typography>
                            <Typography variant='h4'>{prod.date}</Typography>
                            <Typography variant='h4'>{prod.amount}</Typography>
                            <Typography variant='h4'>{prod.status}</Typography>
                        </CardContent>
                        <CardActions>
                            
                        </CardActions>
                        </Grid2>
                    )
                })
            }
            </Grid2>
            </Box>
        
        </>
    )
}

export default OrdersDate