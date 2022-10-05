import React, {useState} from 'react'
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    //BreadcrumbSeparator,
    useBoolean,
    useColorMode,
    useMediaQuery,
    Flex,
    Icon,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
  } from '@chakra-ui/react'
import {MoonIcon, HamburgerIcon} from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import {CgBrackets} from 'react-icons/cg'

const Navbar = () => {

    const { colorMode, toggleColorMode } = useColorMode();
    const [flag, setFlag] = useBoolean()
    const [rotate, setRotate] = useState(false)
    const [laptopView] = useMediaQuery(['(min-width: 768px)'])
    
    // wrapper + ifMobile ? hamburgerMenu : laptopMenu

  return (
    <Flex align='flex-start' justify='space-between' 
    pl={!laptopView ? '28px' : '8px'}
    pr={!laptopView ? '28px' : '8px'}
    margin='auto'
    maxW='768px'>
        <Flex alignItems='flex-end'>
            <Breadcrumb fontWeight='medium' fontSize='2xl'
                        separator='' mr='20px'>
                <BreadcrumbItem>
                    <BreadcrumbLink 
                        as={Link} 
                        to='/' 
                        onMouseEnter={() => setRotate(true)} 
                        onMouseLeave={() => setRotate(false)}>

                            <Icon as={CgBrackets} h={8} w={8} color={colorMode === 'light' ? 'gray.700' : 'orange.100'}
                        style={{
                            transform: `translateY(20%) ${rotate ? 'rotate(45deg)' : 'rotate(0deg)' }`}}
                            />
                        EvDev
                    </BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
                {laptopView && (
                    <Breadcrumb fontWeight='medium' fontSize='2xl'
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
                </Breadcrumb>)}
        </Flex>
        <Flex w={!laptopView && '90px'} justify='space-between'>
            <Box cursor='pointer' 
            borderRadius='md'
            mt={2} 
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
                    style={{transform: 'translateX(5%) translateY(5%)'}}
                />
            </Box>
            {!laptopView && (
                <Menu>
                <MenuButton
                    mt={2}
                    w={10}
                    h={10}
                    as={IconButton}
                    aria-label='Options'
                    icon={<HamburgerIcon />}
                    variant='outline'
                />
                <MenuList>
                    <MenuItem as={Link} to='/about'>
                    About Me
                    </MenuItem>
                    <MenuItem as={Link} to='/skills'>
                    Skills
                    </MenuItem>
                    <MenuItem as={Link} to='/projects'>
                    Projects
                    </MenuItem>
                    <MenuItem as={Link} to='/contact'>
                    Contact
                    </MenuItem>
                </MenuList>
            </Menu>
            )}
        </Flex>
    </Flex>
  )
}

export default Navbar