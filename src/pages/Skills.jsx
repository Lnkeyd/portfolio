import React from 'react'
import Navbar from '../components/Navbar'
import { Flex, Heading, Text, Stack, Progress, Code, Box, UnorderedList} from '@chakra-ui/react'

const Skills = () => {
  return (
    <>
      <Navbar />
      <Flex direction='column' p='35px' justify='center'>
        <Heading as='h2' size='lg'>My skills</Heading>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, alias.</Text>
        <Code size='lg' colorScheme='orange'>console.log('Hello, World!')</Code>
        <Stack spacing={5} mt='40px'>
          <Box>
            <Heading as='h3' size='md'>HTML</Heading>
            <Progress colorScheme='orange' height='20px' value={90} />
            <UnorderedList>

            </UnorderedList>
          </Box>
          <Box>
            <Heading as='h3' size='md'>CSS</Heading>
            <Progress colorScheme='orange' height='20px' value={95} />
            <UnorderedList>

            </UnorderedList>
          </Box>
          <Box>
            <Heading as='h3' size='md'>JavaScript</Heading>
            <Progress colorScheme='orange' height='20px' value={80} />
            <UnorderedList>

            </UnorderedList>
          </Box>
          <Box>
            <Heading as='h3' size='md'>React</Heading>
            <Progress colorScheme='orange' height='20px' value={60} />
            <UnorderedList>

            </UnorderedList>
          </Box>
          <Box>
            <Heading as='h3' size='md'>Redux</Heading>
            <Progress colorScheme='orange' height='20px' value={20} />
            <UnorderedList>

            </UnorderedList>
          </Box>
          <Box>
            <Heading as='h3' size='md'>Next.js</Heading>
            <Progress colorScheme='orange' height='20px' value={8} />
            <UnorderedList>

            </UnorderedList>
          </Box>
          <Box>
            <Heading as='h3' size='md'>MongoDB</Heading>
            <Progress colorScheme='orange' height='20px' value={10} />
            <UnorderedList>

            </UnorderedList>
          </Box>
        </Stack>
      </Flex>
    </>
  )
}

export default Skills