import React from 'react'
import { ChakraProvider,Heading,Text,Box } from '@chakra-ui/react'

export default function Header() {
  return (
    <>
   
   <Box  textAlign={{base:"left",md:"left",lg:"center"}} pl={"10px"} bg="#6B46C1" pr={"10px"} pt={"89px"} pb={"250px"} color={"white"}>
   
   <Heading pb={"10px"} >Simple Pricing For Your Business</Heading>
   <Text >Plans that are carefully crafted to suit your business</Text>
   
   </Box>
    </>
  )
}
