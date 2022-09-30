import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    //BreadcrumbSeparator,
  } from '@chakra-ui/react'


const Navbar = () => {

    // wrapper + ifMobile ? hamburgerMenu : laptopMenu

  return (
    <div>
        <Breadcrumb fontWeight='medium' fontSize='3xl'
                    separator=''>
            <BreadcrumbItem>
                <BreadcrumbLink href='#'>About Me</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href='#'>Skills</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href='#'>Projects</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    </div>
  )
}

export default Navbar