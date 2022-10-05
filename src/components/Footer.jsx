import React from 'react'
import { Flex, Text, Box, Icon, Link } from '@chakra-ui/react'
import {AiFillGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <Box height='70px'>
        <Flex direction='column' position='absolute' left='0' right='0' bottom='12px' align='center' justify='flex-end' mb='0px'>
            <Box textAlign='center'>
                <Link href='https://github.com/Lnkeyd' target="_blank">
                    <Icon as={AiFillGithub} w={8} h={8} opacity='0.5'/>
                </Link>
            </Box>
            <Text opacity='0.6' fontSize='sm'>© 2022 Evgeniy Kozlov. All Rights Reserved.</Text>
        </Flex>
    </Box>
  )
}

export default Footer