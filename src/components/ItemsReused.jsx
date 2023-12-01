import { Box, Card, CardBody, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const ItemsReused = ({ el }) => {
    const navigate = useNavigate();

    return (
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





            </Box>
        </Box>
    )
}

export default ItemsReused