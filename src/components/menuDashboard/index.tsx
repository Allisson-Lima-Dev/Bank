import React from 'react';
import { Flex, Box, Text, Link } from '@chakra-ui/react';
import { AiOutlineHome } from 'react-icons/ai';
import { RiDashboardFill } from 'react-icons/ri';
import { FaMoneyBillWave } from 'react-icons/fa';
import { BiFolderOpen } from 'react-icons/bi';
import { ItemMenu } from './itemMenu';

export function MenuDashboard() {
  const itensMenu = [
    {
      title: 'Home',
      path: '/Dashboard/Transition',
      icon: <AiOutlineHome size={20} />,
    },
    {
      title: 'Dashboard',
      path: '/Dashboard/home',
      icon: <RiDashboardFill size={20} />,
    },
    {
      title: 'Transação',
      path: '/Dashboard/Transition',
      icon: <FaMoneyBillWave size={20} />,
    },
    {
      title: 'Histórico',
      path: '/Dashboard/Transition',
      icon: <BiFolderOpen size={20} />,
    },
  ];
  return (
    <Box bg="#171923" px="20px" color="#fff" borderRight={`1px solid #1f9ce4`}>
      <Box mt="50px">
        {itensMenu.map((item, key) => {
          return (
            <Link key={key} href={item.path}>
              <ItemMenu
                icon={item.icon}
                title={item.title}
                w={'110px'}
                mt="10px"
              />
            </Link>
          );
        })}
      </Box>
    </Box>
  );
}
