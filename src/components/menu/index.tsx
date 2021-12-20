import React, { useState, useEffect } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { AiOutlineHome } from 'react-icons/ai';
import { CgCalculator } from 'react-icons/cg';
import { IoMdChatboxes } from 'react-icons/io';
import { FiSettings } from 'react-icons/fi';
import Link from 'next/link';
import { UseHideMenu } from '~/services/hooks/useHideMenu';

interface Menu {
  home?: boolean;
  financial?: boolean;
  config?: boolean;
  doubt?: boolean;
}

export function Menu({ financial, home, config, doubt }: Menu) {
  const hide = UseHideMenu();
  return (
    <Flex
      w={['full', 'full', 'full', '70%']}
      mx="auto"
      h="50px"
      justify={[
        'space-around',
        'space-around',
        'space-around',
        'space-between',
      ]}
      
      position={['fixed', 'fixed', 'fixed', 'inherit']}
      zIndex="1000"
      bottom={['0', '', '', '700px']}
      left="0"
      right="0"
      top={{ base: '', lg: '2' }}
      pb="10px"
      display={{ base: hide == 'flex' ? 'flex' : 'none', lg: 'flex' }}
    >
      <Link href="/home">
        <Flex
          cursor="pointer"
          borderTop="4px solid"
          justify={{ base: 'center', md: '' }}
          w="15%"
          borderTopColor={home ? '#FCBB62' : 'transparent'}
        >
          <Flex align="center" pt="15px">
            <AiOutlineHome />
            <Text display={['none', 'none', 'none', 'flex']} ml="5px">
              Home
            </Text>
          </Flex>
        </Flex>
      </Link>

      <Link href="/control">
        <Flex
          cursor="pointer"
          borderTop="4px solid"
          w="15%"
          justify={{ base: 'center', md: '' }}
          borderTopColor={financial ? '#FCBB62' : 'transparent'}
        >
          <Flex align="center" pt="15px">
            <CgCalculator />
            <Text display={['none', 'none', 'none', 'flex']} ml="5px">
              Finaceiro
            </Text>
          </Flex>
        </Flex>
      </Link>

      <Link href="/dobout">
        <Flex
          cursor="pointer"
          borderTop="4px solid"
          w="15%"
          justify={{ base: 'center', md: '' }}
          borderTopColor={doubt ? '#FCBB62' : 'transparent'}
        >
          <Flex align="center" pt="15px">
            <IoMdChatboxes />
            <Text display={['none', 'none', 'none', 'flex']} ml="5px">
              Administração
            </Text>
          </Flex>
        </Flex>
      </Link>

      <Link href="/settings">
        <Flex
          cursor="pointer"
          borderTop="4px solid"
          w="15%"
          justify={{ base: 'center', md: '' }}
          borderTopColor={config ? '#FCBB62' : 'transparent'}
        >
          <Flex align="center" pt="15px">
            <FiSettings />
            <Text display={['none', 'none', 'none', 'flex']} ml="5px">
              Usuário
            </Text>
          </Flex>
        </Flex>
      </Link>
    </Flex>
  );
}
