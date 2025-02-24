import React from 'react'
import {Box, Container, Text, Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box borderTop='2px solid rgb(34, 34, 34)' py='6'>
      <Container maxW='xl' margin='auto'>
      <Text textAlign='center' fontSize='20px' >
        Made with  by {" "}
      <Link
        variant="underline"
        href="https://github.com/mirodil-dev-06"
        color="#ba4949"
        target='_blank'
      >
        Mirodil Mavlonov
      </Link>{" "}
    </Text>
    <Text textAlign='center' mt='3'>&copy; Pomofocus 2024. All Rights Reserved.</Text>
        </Container>
    </Box>
  )
}

export default Footer