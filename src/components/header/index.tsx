import React, { useContext } from 'react';
import {
  Box,
  Flex,
  Image,
  Text,
  useColorModeValue,
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  MenuDivider,
} from '@chakra-ui/react';
import { BiChevronDown } from 'react-icons/bi';
import { FiLogOut } from 'react-icons/fi';
import { MenuBottom, ColorModeSwitcher } from '~/components';
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

  const { user, Logout } = useContext(AuthContext);

  const delay = (amount = 750) =>
    new Promise((resolve) => setTimeout(resolve, amount));
  const handleLogout = async () => {

    Logout();

    delay(3000);
  };

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
        color={colorHeader}
        mt="-4px"
        justifyContent={{ base: 'space-between', lg: '' }}
        display={{ base: hide == 'flex' ? 'flex' : 'none', lg: 'flex' }}
      >
        <Logo />
        <MenuBottom
          config={config}
          doubt={doubt}
          financial={financial}
          home={home}
        />
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
          <Menu>
            <MenuButton
              transition="all 0.2s"
              borderRadius="md"
              _hover={{ bg: 'gray.400' }}
              _expanded={{ bg: 'blue.400' }}
              _focus={{ boxShadow: 'outline' }}
              w="70px"
              fontSize={'12px'}
            >
              <Flex justify={'center'} alignItems={'center'}>
                {user?.username}
                <BiChevronDown />
              </Flex>
            </MenuButton>
            <MenuList>
              <MenuItem>New File</MenuItem>
              <MenuItem>New Window</MenuItem>
              <MenuDivider />
              <MenuItem>
                <Box display={{ base: 'flex', md: 'none' }}>
                  <ColorModeSwitcher />
                </Box>
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <FiLogOut color="#fff" size={'20px'} />
                <Text ml="15px">Sair</Text>
              </MenuItem>
            </MenuList>
          </Menu>
          <Box display={{ base: 'none', md: 'flex' }}>
            <ColorModeSwitcher />
          </Box>
        </Flex>
      </Flex>
    </div>
  );
}
