import React from 'react'
import { SimpleGrid, Box } from '@chakra-ui/react'

const data =[
    {
        id:1
    },
    {
        id:2
    },
    {
        id:3
    },
    {
        id:4
    },
    {
        id:5
    },
    {
        id:6
    },
    {
        id:7
    },
    {
        id:8
    }
]

export const Chak = () => {
  return (
    <Box width="70%" margin="auto" border="1px solid red" >
<SimpleGrid columns={[ 2, 5]} width="30%" margin="auto" spacing={1}>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
</SimpleGrid>

<SimpleGrid columns={{
    base:1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 5,
    '2xl':6,
}}>
{data.map((e)=>(
    <Box border="1px solid green">
        {e.id}
        </Box>
))}
</SimpleGrid>
    </Box>
  )
}
