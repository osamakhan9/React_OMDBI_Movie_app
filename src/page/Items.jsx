import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text, useToast, Flex, } from '@chakra-ui/react'
import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Items = ({ el }) => {
    let details = JSON.parse(localStorage.getItem("details"));
    const navigate = useNavigate();
    const toast = useToast()
    const handlefav = async () => {
        let value = {
            data: el,
            access: details
        }
        let res = await axios.post("https://chi-network-assigments.onrender.com/favourite", value);
        console.log(res.data);
        
        toast({
            title: "Added to your favourite",
            status: 'success',
            isClosable: true,
        });
    }
    const handlewatch = async () => {
        let value = {
            data: el,
            access: details
        }
        let res = await axios.post("https://chi-network-assigments.onrender.com/watchlist", value);
        console.log(res.data);
        toast({
            title: "Added to your watchlist",
            status: 'success',
            isClosable: true,
        });
    }
    return (
        <>
            

            <Box
				m='auto'
                width='80%'
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="md"
                bg="white"
				
				
            >

                <Box h='350' w='100%' m='auto'>
                    <Image h='100%' w='100%' src={`https://image.tmdb.org/t/p/w500${el.poster_path}`} alt='Image' onClick={() => navigate(`/singlepage/${el.id}`)} />
                </Box>
                <Box p="6">
                    <Box alignItems="baseline">
                        <Box gap='10px'>
                            <Box gap='7px' alignItems='center'>
                                <Heading size='md'>{el.original_title}</Heading>
                                <Text fontSize="sm" fontWeight="semibold" color="gray.600" mr="2">
                                    Release Date: {el.release_date}
                                </Text>

                            </Box>
                        </Box>


                    </Box>


                    <Box display='flex' gap='10' justifyContent='center' mt='10'>
                        <Button _hover={{ bg: 'blue' }} color='white' bg='black' onClick={handlefav}>
                            Favourite
                        </Button>

                        <Button _hover={{ bg: 'blue' }} color='white' bg='black' onClick={handlewatch}>
                            WatchList
                        </Button>
                    </Box>


                 
                </Box>
            </Box>
        </>
    )
}

export default Items