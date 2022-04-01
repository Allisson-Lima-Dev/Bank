import React from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
import { AiOutlineHome } from 'react-icons/ai';
import { RiDashboardFill } from 'react-icons/ri';
import { FaMoneyBillWave } from 'react-icons/fa';
import { BiFolderOpen } from 'react-icons/bi';
import { ItemMenu } from './itemMenu';

export function MenuDashboard() {
  const itensMenu = [
    { title: 'Home', icon: <AiOutlineHome size={20} /> },
    { title: 'Dashboard', icon: <RiDashboardFill size={20} /> },
    { title: 'Transação', icon: <FaMoneyBillWave size={20} /> },
    { title: 'Histórico', icon: <BiFolderOpen size={20} /> },
  ];
  return (
    <Box bg="#001933" px="20px">
      <Box mt="50px">
        {itensMenu.map((item, key) => {
          return (
            <ItemMenu
              icon={item.icon}
              title={item.title}
              key={key}
              w={'150px'}
              mt="10px"
            />
          );
        })}
      </Box>
    </Box>
  );
}
