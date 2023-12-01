import { Avatar, Box, Button, Input,Select, Text, Flex, Spacer, ButtonGroup, Divider, Image, SimpleGrid } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Items from './Items';
import { useNavigate } from 'react-router-dom';
const Movie = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();


  const [isOpen, setIsOpen] = useState(false)

  let details = JSON.parse(localStorage.getItem("details"));



  const getData = async (page, search) => {
    if (search === "") {
      let res = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=2a4603c2f8e8f6c24e8db5289c101280&page=${page}&query=${search}`);
      setData(res.data);
    } else {
      let res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=2a4603c2f8e8f6c24e8db5289c101280&page=${page}&query=${search}`);
      setData(res.data);
    }

  }
 

  

  

  const handleDelete = () => {
    localStorage.clear();
    navigate("/register");
  }
  const handleClick = () => {


    setIsOpen(!isOpen)
  }
  useEffect(() => {
    getData(page, search)
  }, [page, search]);


  return (
    <>



      <Box onClick={() => handleClick()} padding='10px 20px' color='white' bg='black' display={['none', 'none', 'none', 'block']} position='sticky' zIndex='10' top='0'>
        <Flex minWidth='max-content' alignItems='center' gap='2' >
          <Box p='2'>
            <Link to='/' >
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
            {/* <Text color={"white"} mt='3'>{details[1]}</Text> */}

          </Box>
          <Button mt='100' marginLeft='-2' _hover={{ bg: 'blue.500' }} onClick={handleDelete}>Logout</Button>


        </Flex>

      </Box>

      <Divider />









      <Box w='100%' m='auto' mt='40px' mb='50px' display='flex' justifyContent='space-around' >
        <Input type="text" placeholder='Search movies'  htmlSize={"50"} width='auto' bg={"white"} onChange={(e) => setSearch(e.target.value)} display={{ sm: "none", lg: "block" }} />

        <Select maxW='sm' onChange={(e) => setSearch(e.target.value)} placeholder='Select option'>
          <option value='297'>old</option>
          <option value='391'>new</option>
          
        </Select>
        {/* <Input   onChange={Filter}/> */}

      </Box>
      <SimpleGrid gap='20px' maxW='90%' margin='auto' columns={['1', '1', '2', '4']}>
        {data.results?.map((el, i) => (
          <Items key={i} el={el} />
        ))}
      </SimpleGrid>
      <Box display={"flex"} justifyContent={"space-around"} alignItems={"center"} w="20%" margin="auto" mt="30px">
        <Button isDisabled={page === 1} onClick={() => setPage(page - 1)}>Prev</Button>
        <Button>{page}</Button>
        <Button isDisabled={data.total_results === page} onClick={() => setPage(page + 1)}>Next</Button>
      </Box>





    </>
  )
}

export default Movie