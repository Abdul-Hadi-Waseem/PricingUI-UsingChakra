import React from 'react'
import {  Heading, Text, Box,Button,Flex,HStack } from "@chakra-ui/react";
import Footer1 from './icons/Footer1';
import Footer3 from './icons/Footer3';
import Footer2 from './icons/Footer2';

export default function Footer() {
  return (
  <Box maxW={"800px"} m={"auto"} pt={"50px"}>
    <Flex direction={{
        base:"column",
        md:"column",
        lg:"row"
    }}
    px={"50px"}
    
    >

    <HStack mb={"10px"}>
        <Footer1/>
        <Text>30 days money back Guarantee</Text>
    </HStack>
    <HStack mb={"10px"}>
        <Footer2/>
        <Text>No setup fees
100% hassle-free</Text>
    </HStack>
    <HStack mb={"10px"}>
        <Footer3/>
        <Text>No monthly subscription
Pay once and for all</Text>
    </HStack>
    </Flex>
  </Box>
  )
}
