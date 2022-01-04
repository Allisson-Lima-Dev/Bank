import React, { useState, useEffect } from 'react';
import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { AiOutlineHome } from 'react-icons/ai';
import { CgCalculator } from 'react-icons/cg';
import { IoMdChatboxes } from 'react-icons/io';
import { FiSettings } from 'react-icons/fi';
import { MdLibraryBooks } from 'react-icons/md';
import Link from 'next/link';
import { UseHideMenu } from '~/services/hooks/useHideMenu';
import styles from '~/styles/Home.module.css';

interface Menu {
  home?: boolean;
  financial?: boolean;
  config?: boolean;
  doubt?: boolean;
}

export function MenuBottom({ financial, home, config, doubt }: Menu) {
  const hide = UseHideMenu();
  const bgMenu = useColorModeValue('#fff', '#1a202c');
  const color = useColorModeValue('#b1c4cf', '#315d76');
  const colorDefaultIcons = { base: '#1f9ce4', lg: '#fff' };
  // First, create an alias for breakpoints
  const breakpoints = ['30em', '48em', '62em', '80em'];
  // aliases
  const sm = breakpoints[0];
  const md = breakpoints[1];
  const lg = breakpoints[2];
  const xl = breakpoints[3];
  const t = { base: '0', lg: '700' };
  return (
    <div
      className={styles.app}
    >
      <Flex
        w={['full', 'full', 'full', '67%']}
        mx="auto"
        h={{ base: '40px', lg: '50px' }}
        bg={{ base: bgMenu, lg: 'transparent' }}
        justify={[
          'space-around',
          'space-around',
          'space-around',
          'space-between',
        ]}
        // position="fixed"
        // zIndex="1000"
        // bottom={['0', '', '', '700px']}
        // left="0"
        // right="0"
        // top={{ base: '', lg: '2' }}
        pb="10px"
        display={{ base: hide == 'flex' ? 'flex' : 'none', lg: 'flex' }}
      >
        <Link href="/home">
          <Flex
            cursor="pointer"
            borderTop="4px solid"
            justify={{ base: 'center', md: '' }}
            w="15%"
            borderTopColor={home ? colorDefaultIcons : 'transparent'}
          >
            <Flex align="center" pt={{ base: '8px', lg: '15px' }}>
              <Box
              color={home ? colorDefaultIcons : { base: color, lg: '#fff' }}
              >
                <AiOutlineHome size={25} />
              </Box>
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
            borderTopColor={financial ? colorDefaultIcons : 'transparent'}
          >
            <Flex align="center" pt={{ base: '8px', lg: '15px' }}>
              <Box
                color={
                  financial ? colorDefaultIcons : { base: color, lg: '#fff' }
                }
              >
                <CgCalculator size={25} />
              </Box>
              <Text display={['none', 'none', 'none', 'flex']} ml="5px">
                Financeiro
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
            <Flex align="center" pt={{ base: '8px', lg: '15px' }}>
              <Box
                color={doubt ? colorDefaultIcons : { base: color, lg: '#fff' }}
              >
                <IoMdChatboxes size={26} />
              </Box>
              <Text display={['none', 'none', 'none', 'flex']} ml="5px">
                Contatos
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
            <Flex align="center" pt={{ base: '8px', lg: '15px' }}>
              <Box color={{ base: color, lg: '#fff' }}>
                <MdLibraryBooks size={26} />
              </Box>
              <Text display={['none', 'none', 'none', 'flex']} ml="5px">
                Sobre
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
            <Flex align="center" pt={{ base: '8px', lg: '15px' }}>
              <Box
                color={config ? colorDefaultIcons : { base: color, lg: '#fff' }}
              >
                <FiSettings size={25} />
              </Box>
              <Text display={['none', 'none', 'none', 'flex']} ml="5px">
                Configuração
              </Text>
            </Flex>
          </Flex>
        </Link>
      </Flex>
    </div>
  );
}
