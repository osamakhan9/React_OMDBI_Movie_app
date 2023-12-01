import { 
    Wrap,
    HStack,
    VStack,
    Text,
    Badge,
    ButtonGroup,
    IconButton,
    Button,
    Image,
    Stack,
    Divider,
    useToast,
    useDisclosure,
    Box

} from '@chakra-ui/react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AiOutlineRollback } from "react-icons/ai";
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


import Navbar from '../components/Navbar';

const SinglePage = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [data,setData] = useState({});
    const toast = useToast()
    const getData = async(id)=>{
        let response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=2a4603c2f8e8f6c24e8db5289c101280`);
        setData(response.data);
    }
    const handleAlert = ()=>{
        navigate('/')
        toast({
            title: "Back to Home page",
            status: 'success',
            isClosable: true,
          })
    }
    useEffect(()=>{
        getData(id);
    },[id]);
    console.log(data);
  return (
    <Box>
        <Box>
            <Navbar/>
        </Box>



<Wrap  spacing={30} justify="center" style={{ marginTop: "50px", marginBottom: "50px" }} >

<HStack spacing={5} >


  <Image borderRadius={15} src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} w="500px" minW="90px" />

</HStack>


<VStack width={550} textAlign='left' align="revert-layer" spacing={5} >

  <Text marginTop={30} fontWeight='bold' fontSize="3xl" color="gray.500" >{data.original_title}</Text>

  <Badge fontSize="18px" variant="outline" width="fit-content" colorScheme="teal">{`IMDB Rating: ${data.vote_average}⭐`}</Badge>

  <Stack>

      <Text  fontSize="2xl" color="teal">Release : {data.release_date}</Text>

      <Text  fontSize="2xl" color="teal">Colluction : ₹{data.revenue}</Text>

      <Text  fontSize="2xl" color="teal">Tagline : {data.tagline}</Text>

    <HStack alignContent="center">


      {/* <Text fontWeight="bold" fontSize="4xl" >₹{data.price}</Text> */}

      <Box display={"flex"} justifyContent={"space-between"}>
      <Text fontSize="2xl" color="teal" >Languages: </Text>
                    {data.spoken_languages?.map((el)=>(
                        <>
                        <Button key={el.id} fontSize={"20px"} bg="none" ml='5px' color='orange' border={"1px solid gray"}>{el.name}</Button>
                        </>
                    ))}
                </Box>

   


    </HStack>

    <HStack >
    <Box display={"flex"} justifyContent={"space-between"}>
    <Text fontSize="2xl" color="teal" >Action: </Text>
                    {data.genres?.map((el)=>(
                        <Button key={el.id} fontSize={"15px"} bg="none" ml='10px' color='orange' border={"1px solid gray"}>{el.name}</Button>
                    ))}
                </Box>
    </HStack>

  </Stack>



  <Divider />


   <Text>Overview: </Text>

  <Box>

  {data.overview}
  </Box>

  <HStack w="full" >

    <Button  fontSize="x-large" padding={8} w="full" onClick={handleAlert} colorScheme='teal'>

      <AiOutlineRollback fontSize="30px" />
    


    </Button>



  </HStack>



</VStack>


</Wrap>


</Box>
  )
}

export default SinglePage