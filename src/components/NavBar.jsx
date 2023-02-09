import React from 'react'
import CartWidget from './CartWidget'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'
  import { Flex, Spacer, Box, Button, } from '@chakra-ui/react'
  import { Container } from '@chakra-ui/react'
  import { ChevronDownIcon } from "@chakra-ui/icons";
  import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <>
        <Container maxW="150rem" bg="blue.100" color="#262626">
            <Flex>
            <Box p='4' bg='blue.200'>
                <h1>Unique Futbol Ecommerce</h1>
            </Box>
            <Spacer />
            <Box   p='5' bg='blue.200' >
                            <Menu>
                <MenuButton as={Button} colorScheme='white'>
                Categorias
                </MenuButton>
                <MenuList>
                    <MenuGroup title='Categorias'>
                    <MenuItem>Camisetas</MenuItem>
                    <MenuItem>Pantalones </MenuItem>
                    </MenuGroup>
                </MenuList>
                </Menu>
            </Box>
            <Spacer />
            <Box p='4' bg='white.400'>
                <CartWidget/>
            </Box>
            </Flex>
        </Container>
    </>
  );
}

export default NavBar