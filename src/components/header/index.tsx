import React, { useContext } from 'react';
import { Box, Flex, Image, Text, useColorModeValue } from '@chakra-ui/react';
import { Menu, ColorModeSwitcher } from '~/components';
import { UseHideMenu } from '~/services/hooks/useHideMenu';
import { Logo } from './logo';
import { AuthContext } from '~/context/AuthContext';
interface Menu {
  home?: boolean;
  financial?: boolean;
  config?: boolean;
  doubt?: boolean;
}
export function Header({ financial, home, config, doubt }: Menu) {
  const hide = UseHideMenu();
  const colorHeader = useColorModeValue('#fff', '');
  const bg = useColorModeValue('#1f9ce4', '#1f9ce4');

  const { user } = useContext(AuthContext);

  return (
    <div
      style={{
        position: 'fixed',
        top: '0',
        right: '0',
        left: '0',
        background: '#1f9ce4',
        zIndex: '1000',
      }}
    >
      <Flex
        as="header"
        w="100%"
        h={{ base: '60px', lg: 20 }}
        px={{ base: '3', lg: '7' }}
        align="center"
        // bg={bg}
        color={colorHeader}
        mt="-4px"
        // top={0}
        justifyContent={{ base: 'space-between', lg: '' }}
        // pos="fixed"
        display={{ base: hide == 'flex' ? 'flex' : 'none', lg: 'flex' }}
      >
        <Logo />
        <Menu config={config} doubt={doubt} financial={financial} home={home} />
        <Flex
          align="center"
          justify={{ base: 'right', lg: 'center' }}
          w={{ base: '40%', lg: '12%' }}
        >
          <Image
            src={'https://i.imgur.com/iEFLuhM.jpg'}
            alt="Images-User"
            borderRadius="50%"
            w={{ base: '35px', lg: '40px' }}
            mr={{ base: '3px', lg: '15px' }}
          />
          <Text
            mr="2px"
            w="70px"
            display={{ base: 'none', md: 'flex' }}
            fontSize={'12px'}
          >
            {user?.name}
          </Text>
          <ColorModeSwitcher />
        </Flex>
      </Flex>
    </div>
  );
}
