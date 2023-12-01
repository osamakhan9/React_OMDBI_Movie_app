import React, { useState } from 'react'
import './style/Style.css'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { Box , useToast} from '@chakra-ui/react';
import axios from 'axios'

const Registration = () => {

  const Navigator = useNavigate()
  const toast = useToast();
  const [getData , setData] = useState()

  const [obj, setobj]= useState({
    name: '',
    email:'',
    password:'',
  })


  

  const handleSubmit = async(e)=>{

    e.preventDefault();

	let details = JSON.parse(localStorage.getItem("details"));
	
    try{
      let res = await axios.post('https://chi-network-assigments.onrender.com/user',obj)
	  
       let data = await res.data

	   let arr = []

	   arr.push(data.email)

	   localStorage.setItem("details", JSON.stringify(arr));

        toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 3000,
          isClosable: true,
          position:'top'
        })
        Navigator('/')

    }
    catch{
      toast({
        title: 'Error Occured',
        // description: error.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
        position:'top'
      })
    }

   
    

  }

  return (
    <Box marginTop="4%">
    <div>

      <form className='reg' onSubmit={handleSubmit}>

        <h3>Registration</h3>

        <label for="name">Name</label>
        <input type="text" 
        name='name' value={obj.name} 
        onChange={(e)=>setobj({...obj,[e.target.name]:e.target.value})} placeholder="Alan Walker" id="username" />

        <label for="email">Email</label>
        <input type="email" 
        name='email' value={obj.email} 
        onChange={(e)=>setobj({...obj,[e.target.name]:e.target.value})} 
         placeholder="alanwalker@gmail.com" id="email" />

        <label for="password">Password</label>
        <input type="password"
        name='password' value={obj.password} 
        onChange={(e)=>setobj({...obj,[e.target.name]:e.target.value})} 
        placeholder="Password" id="password" />

        <button id='btn'>Registration</button>
      </form>
    </div>
    </Box>
  )
}

export default Registration