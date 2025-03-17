import React, { useState }  from 'react'
import { Button, Typography } from '@mui/material'
const Home = () =>{
  let [counter,setCounter]=useState(0)
  let names = ["gayatri","chetan","sudhir","kartik"]
  return(
    <>
      <Typography variant='h4'>Use State Hook</Typography>
      <Button onClick={()=>{
        if(counter>0){
          setCounter(--counter)
        }
       
      }} variant='contained' color='success'>-</Button>
   <Typography variant='h4'>{counter}</Typography>
   <Typography variant='h4'>{names[counter]}</Typography>
   <Button onClick={()=>{
    setCounter(++counter)
   }} variant='contained' color='success'>+</Button>
    </>
  )
}

export default Home