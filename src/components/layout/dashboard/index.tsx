import { Box, Flex, Text } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { MenuDashboard } from '~/components/menuDashboard';
import { Select } from '~/components/select';
import Sidebar from '~/components/Sidebar';
import HeaderDashboard from './header';

interface LayoutProps {
  title: string;
  children: ReactNode;
}

export default function LayoutDashboard({ children, title }: LayoutProps) {
  return (
    <Box w="100%" color={'#fff'}>
      <HeaderDashboard />
      <Flex overflowY={'hidden'}>
        <Sidebar />
        <Box bg="#20253A" w="100%" overflowY={'hidden'}>
          <Box
            __css={{
              '&::-webkit-scrollbar': {
                width: '10px',
                borderRadius: '24px',
                background: '#2C3045',
              },
              '&::-webkit-scrollbar-track': {
                width: '6px',
              },
              '&::-webkit-scrollbar-thumb': {
                background: '#8E54E9',
                width: '5px',
                borderRadius: '24px',
              },
            }}
            pb="20px"
            h="calc(100vh - 60px)"
            overflowY={'scroll'}
          >
            <Flex
              alignItems={'center'}
              justify="space-between"
              maxW="1400px"
              w={{ base: '90%', md: '90%', lg: '98%', xl: 'full -20px' }}
              mx={{ base: 'auto', lg: 'auto' }}
            >
              <Text fontSize={'32px'} my="10px">
                {title}
              </Text>
              <Flex>
                <Select w="200px" name="Date" placeholder=" Semestre">
                  <option value="A">1° Semestre</option>
                  <option value="B">2° Semestre</option>
                </Select>
                <Select w="100px" name="Date" placeholder="Mês" mx="20px">
                  <option value=""> Fevereiro</option>
                </Select>
                <Select w="100px" name="Date" placeholder="Ano">
                  <option value=""> 2022</option>
                </Select>
              </Flex>
            </Flex>

            {children}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
