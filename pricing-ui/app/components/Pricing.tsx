import React from "react";
import {  Heading, Text, Box,Button,Flex,HStack } from "@chakra-ui/react";
import IconComp from "./icons/IconComp";
export default function Pricing() {
  return (
    <Box  maxW={"900px"} mx={{base:"10px",md:"10px",lg:"auto"}} mt={"-150px"} bg={"white"} boxShadow={" 10px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"} borderRadius={"10px"} overflow={"hidden"} >
        <Flex direction={{base:"column" ,md:"column",lg:"row"}}>
      <Box bg={"#eee5ff"} p={"60px"} textAlign={"center"}>
        <Text fontWeight={"bold"} fontSize={"20px"}>Premium PRO</Text>
        <Heading fontSize={"50px"} >$329</Heading>
        <Text mb={"30px"}>Billed just once</Text>
        <Button m={"auto"} bg={"#805AD5"} color={"white"} w={{lg:"282px",base:"auto",md:"auto"}} >Get Started</Button>
      </Box>
      <Box p={"50px"} >
        <Text mb={"15px"}>Access these features when you get this pricing package for your business.</Text>
        <HStack mb={"15px"}>
          <IconComp/>
          <Text>International calling and messaging API</Text>
        </HStack>
        <HStack  mb={"15px"}>
          <IconComp/>
          <Text>Additional phone numbers</Text>
        </HStack>
        <HStack  mb={"15px"}>
          <IconComp/>
          <Text>Automated messages via Zapier</Text>
        </HStack>
        <HStack  mb={"15px"}>
          <IconComp/>
          <Text>24/7 support and consulting</Text>
        </HStack>
      </Box>
        </Flex>

    </Box>
  );
}
