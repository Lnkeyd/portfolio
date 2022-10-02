import { Box, Flex, Heading, Image, Text, Button, } from '@chakra-ui/react'
import React from 'react'

const Content = () => {
  return (
    <Box>
        <Heading as='h1' size='2xl' textAlign='center' pl='10px'  pr='10px'
        marginTop='25px'>
                In love with React & Chakra UI
        </Heading>
        <Flex w='100%' direction='column-reverse' align='center'>
            <Box    pl='10px'  pr='10px'
                    mt='25px'>
                <Text fontSize='xl'>
                    Paystack helps businesses in Africa get paid by anyone, anywhere in the
                    world
                </Text>
                <Flex justifyContent='space-between'>
                    <Button size='md' colorScheme='orange' mt='24px' w='25%' borderRadius='md'>
                        Hire me
                    </Button>
                    <Button size='md' colorScheme='orange' mt='24px' w='70%' borderRadius='md'>
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
    </Box>
  )
}

export default Content