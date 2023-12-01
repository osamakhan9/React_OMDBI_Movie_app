import { Box } from '@chakra-ui/react'
import { Navigate } from 'react-router-dom';
import Movie from './Movie';

const Home = () => {
    let details = JSON.parse(localStorage.getItem("details"));
    

    return (
        <Box>
            {!details ? <Navigate to="/register" /> : <Movie/>}
			
        </Box>
      )
  
}

export default Home