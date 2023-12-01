import { Box, Heading,SimpleGrid } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import ItemsReused from '../components/ItemsReused'

const WatchList = () => {
  let details = JSON.parse(localStorage.getItem("details"));
  const [datas,setData] = useState([]);
  const getData = async()=>{
    let resp = await axios.get(`https://chi-network-assigments.onrender.com/watchlist?q=${details}`);
    setData(resp.data);
  }
  useEffect(()=>{
    getData();
  },[]);
 
  return (
    <>
      <Box>
        <Navbar/>
      </Box>
      <Box>
        <Heading pt="20px" pb='20px' textAlign={"center"}>Watch List</Heading>
      </Box>
      <SimpleGrid  gap='10px' columns={['1','1','2','4']}>
        {datas?.map((el)=>(
          <ItemsReused key={el.id} el={el.data}/>
        ))}
      </SimpleGrid>
    </>
  )
}

export default WatchList