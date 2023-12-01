import { Avatar, Box, Button,  Text, Flex, Spacer, ButtonGroup, Divider, Image } from '@chakra-ui/react'

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false)
    let details = JSON.parse(localStorage.getItem("details"));
    const handleDelete = ()=>{
        localStorage.clear();
        navigate("/login");
      }
      const handleClick = () => {
        setIsOpen(!isOpen)
      }
  return (
    <>
        <Box onClick={() => handleClick()} padding='10px 20px' color='white' bg='black' display={['none', 'none', 'none', 'block']} position='sticky' zIndex='10' top='0'>
        <Flex minWidth='max-content' alignItems='center' gap='2' >
          <Box p='2'>
          <Link to='/'>
            Movie App
          </Link>
           
          </Box>
          <Spacer />
          <ButtonGroup gap='10'>



            <Text mt='3' _hover={{ color: 'blue.500' }} onClick={() => navigate("/")}>Movies</Text>

            <Text mt='3' _hover={{ color: 'blue.500' }} onClick={() => navigate("/favourite")}>Favourites</Text>

            <Text mt='3' _hover={{ color: 'blue.500' }} onClick={() => navigate("/watchlist")}>Watchlist</Text>


            <Box gap='10' display={{ sm: "none", lg: "flex" }}>
              <Text color={"white"} mt='3'>{details}</Text>
			  <Avatar src='https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes-thumbnail.png' alt={details[1]} />
            </Box>
            <Button _hover={{ bg: 'blue.500' }} onClick={handleDelete}>Logout</Button>


          </ButtonGroup>


        </Flex>
      </Box>




      <Box padding='20px' color='white' display={['block', 'block', 'blog', 'none']} bg='#202A44' position='sticky' zIndex='10' top='0'>
        <Flex w='100%' m='auto' justifyContent='space-between' padding='0px 30px' alignItems='center'>
          <Box>

            <Link to='/'>
            Movie App
            </Link>
           
          </Box>
          <Box color='#f06' onClick={() => setIsOpen(!isOpen)}>
            {

              isOpen ? <Text fontWeight='600' fontSize='21px'>✖</Text> : <Text fontWeight='600' fontSize='25px'>☰</Text>
            }
          </Box>
        </Flex>

        <Flex bg='#202A44' h='100vh' w='100%' padding='20px 50px' flexDirection='column' position='absolute' left={isOpen ? '0px' : '-1000px'} top='60px' transition='.3s all ease'>



          <Text mt='3' _hover={{ color: 'blue.500' }} onClick={() => navigate("/")}>Movies</Text>

          <Text mt='3' _hover={{ color: 'blue.500' }} onClick={() => navigate("/favourite")}>Favourites</Text>

          <Text mt='3' _hover={{ color: 'blue.500' }} onClick={() => navigate("/watchlist")}>Watchlist</Text>


          <Box gap='10' display={{ sm: "none", lg: "flex" }}>
		  <Text color={"white"} mt='3'>{details}</Text>
			  {/* <Avatar src='https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes-thumbnail.png' alt={details[1]} /> */}
          </Box>
          <Button mt='100' marginLeft='-2' _hover={{ bg: 'blue.500' }} onClick={handleDelete}>Logout</Button>


        </Flex>

      </Box>

      <Divider />
    </>
  )
}

export default Navbar