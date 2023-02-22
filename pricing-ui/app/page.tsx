"use client"
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { ChakraProvider,Flex,Heading,Text } from '@chakra-ui/react'
import Header from './components/Header'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import Creator from './Creator'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
     <ChakraProvider>
   <Header/>
   <Pricing/>
   <Footer/>
  <Creator/>
     </ChakraProvider>
  )
}
