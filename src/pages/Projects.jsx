import React from 'react'
import Navbar from '../components/Navbar'
import projectData from './projectData'
import { Flex, Heading } from '@chakra-ui/react'
import Card from '../components/Card'


const Projects = () => {
  return (
    <>
      <Navbar />
      <Flex direction='column' p='35px' justify='center' maxW='800px' margin='auto'>
        <Heading as='h2' size='lg'>My Projects</Heading>
        <Flex p='35px' justify='center' flexWrap='wrap'>
          {projectData.map(item => {
            const {id, title, stack, position, link} = item
            return <Card
            key={id} 
            title={title}
            stack={stack}
            position={position}
            link={link}
            />
          })}
        </Flex>
      </Flex>
    </>
  )
}

export default Projects