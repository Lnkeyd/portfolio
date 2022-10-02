import React from 'react'
import { Box, Spacer, Flex, Heading, Button, ListItem, UnorderedList,} from '@chakra-ui/react'

const Card = ({title, stack, position, link}) => {
  return (
    <Flex w='300px' direction='column' p={5} shadow='md' borderWidth='1px'>
        <Heading as='h3' size='lg'>{title}</Heading>
        <UnorderedList mt='10px'>
            {stack.map((item, index)=> {
                return <ListItem key={index}>{item}</ListItem>
            })}
        </UnorderedList>
        <Spacer />
        <Heading mt='10px' as='h3' size='md'>Position: {position}</Heading>
        <Box w='fit-content' mt='15px' as='a' href={link} target="_blank">
            <Button>Try it out</Button>
        </Box>
    </Flex>
  )
}

export default Card