import React from 'react';
import { Box, Flex, Image, Text, useColorModeValue } from '@chakra-ui/react';
import { Menu, ColorModeSwitcher } from '~/components';
import { UseHideMenu } from '~/services/hooks/useHideMenu';
import { Logo } from './logo';
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

  return (
    <Flex
      as="header"
      w="100%"
      h={{base: '60px', lg: 20 }}
      px={{ base: '3', lg: '7' }}
      align="center"
      // bg="#625ad8"
      bg={bg}
      color={colorHeader}
      mt="-4px"
      top={0}
      justifyContent={{ base: 'space-between', lg: '' }}
      pos="fixed"
      display={{ base: hide == 'flex' ? 'flex' : 'none', lg: 'flex' }}
    >
      <Logo />
      <Menu config={config} doubt={doubt} financial={financial} home={home} />
      <Flex
        align="center"
        justify={{ base: 'right', lg: 'center' }}
        w={{ base: '40%', lg: '10%' }}
      >
        <Image
          src="https://i.imgur.com/iEFLuhM.jpg"
          alt="Images-User"
          borderRadius="50%"
          w={{base: '35px', lg: '40px'}}
          mr={{ base: '3px', lg: '15px' }}
        />
        <Text mr="5px" display={{base: 'none', md: 'flex'}}>Allisson</Text>
        <ColorModeSwitcher />
      </Flex>
    </Flex>
  );
}
