import { Box, Flex, Heading, Image, Text, Button, } from '@chakra-ui/react'
import React from 'react'

const Content = () => {
  return (
    <>
    <Heading as='h1' size='2xl' textAlign='center' paddingLeft='10px'  paddingRight='10px'
    marginTop='25px'>
            In love with React & Chakra UI
    </Heading>
    <Flex w='100%' flexDirection='column-reverse' alignItems='center'>
        <Box    paddingLeft='10px'  paddingRight='10px'
                marginTop='25px'>
            <Text fontSize='xl'>
                Paystack helps businesses in Africa get paid by anyone, anywhere in the
                world
            </Text>
            <Flex justifyContent='space-between'>
                <Button size='md' colorScheme='green' mt='24px' width='25%'>
                    Hire me
                </Button>
                <Button size='md' colorScheme='green' mt='24px' width='70%'>
                    See my projects
                </Button>
            </Flex>
        </Box>
        <Box marginBlockStart='25px' paddingLeft='10px'  paddingRight='10px'>
            <Image
                    objectFit='cover' 
                    src='https://bit.ly/dan-abramov' 
                    alt='Dan Abramov'
            />
        </Box>
    </Flex>
    </>
  )
}

export default Content