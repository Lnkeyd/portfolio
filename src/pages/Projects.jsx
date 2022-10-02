import React from 'react'
import Navbar from '../components/Navbar'
import projectData from './projectData'
import { Flex } from '@chakra-ui/react'
import Card from '../components/Card'


const Projects = () => {
  return (
    <>
      <Navbar />
      <Flex p='35px' justify='center'>
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
    </>
  )
}

export default Projects