import React from 'react'
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    //BreadcrumbSeparator,
    useBoolean,
    useColorMode,
    Flex
  } from '@chakra-ui/react'
import {MoonIcon} from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const { colorMode, toggleColorMode } = useColorMode();
    const [flag, setFlag] = useBoolean()
    // wrapper + ifMobile ? hamburgerMenu : laptopMenu

  return (
    <Flex align='center' justify='space-evenly'>
        <Breadcrumb fontWeight='medium' fontSize='3xl'
                    separator=''>
            <BreadcrumbItem>
                <BreadcrumbLink as={Link} to='/about'>About Me</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink as={Link} to='/skills'>Skills</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink as={Link} to='/projects'>Projects</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink as={Link} to='/contact'>Contact</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
        <Box cursor='pointer' 
        borderRadius='md' 
        w={10} 
        h={10} 
        p='4px' 
        align='center' 
        justify='center'
        onMouseEnter={setFlag.on}
        onMouseLeave={setFlag.off}
        bg={flag ? 'orange.100' : 'orange.200'}
        onClick={toggleColorMode}>
            <MoonIcon
                w={5} h={5}
                color={colorMode === 'light' ? '' : 'gray.900'}
            />
        </Box>
    </Flex>
  )
}

export default Navbar