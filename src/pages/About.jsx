import React from 'react'
import { Flex, Heading, Text, Stack, useColorMode, Box, Image} from '@chakra-ui/react'

const About = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Flex direction='column' p='35px' justify='center'
      m='auto'
      maxW='800px'>
      <Heading as='h2' size='lg'>Who am I</Heading>
      <Stack spacing={5} mt='40px'>
        <Text
            style={{textIndent: '2em', textAlign: 'justify', hyphens: 'auto'}}
            bg={colorMode === 'light' ? 'orange.100' : 'gray.700'}
            color={colorMode === 'light' ? 'black' : 'gray.50'}
            p='20px'
            borderRadius='base'
            textIndent='1em'>
          I am a beginner Frontend developer on <Text as='cite'>JavaScript + React,</Text> actively studying new technologies in the world of web development. 
          The object of my studying includes everything from the design and prototyping of components in Figma to the backend-development of web applications, backend frameworks and databases. 
          I want to develop in the integrated provision of web solutions and understand how certain technologies are used in action. The main goal is to develop frontend content in companies that provide their products or services. 
        </Text>
        <Box >
          <Image src='https://img.freepik.com/free-vector/code-typing-concept-illustration_114360-3581.jpg?w=740&t=st=1664842635~exp=1664843235~hmac=85040ba983bff7367265bd052a679a627118435f67923657b1ba02fc87ae8d94' alt='coding' 
          h='240px'
          w='100%'
          objectFit='cover'
          borderRadius='base'/>
        </Box>
        <Text
            style={{textIndent: '2em', textAlign: 'justify',hyphens: 'auto'}}
            bg={colorMode === 'light' ? 'orange.100' : 'gray.700'}
            color={colorMode === 'light' ? 'black' : 'gray.50'}
            p='20px'
            borderRadius='base'>
          I am a team player who is always open to suggestions and contacts, ready to ask and discuss gaps in my competencies in order to come to an optimal solution. 
          I believe that professional growth comes with proper communication and competent training, so I am ready to provide the company with my <Text as='cite'>knowledge, technical skills and feedback</Text>.
        </Text>
      </Stack>
      </Flex>
    </>
  )
}

export default About