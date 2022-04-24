import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Input,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import Sidebar from '~/components/Sidebar';

export default function HeaderDashboard() {
  const { toggleColorMode } = useColorMode();
  const color = useColorModeValue('#1f9ce4', 'yellow.800');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);
  return (
    <Flex
      justify={'space-between'}
      bg="#171923"
      color={'#fff'}
      px="5"
      h="60px"
      alignItems={'center'}
      borderBottom={`1px solid #2C3045`}
    >
      <Box display={{ base: 'none', lg: 'flex' }} />
      <Box display={{ base: 'flex', lg: 'none' }}>
        <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
          Open
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent bg="#171923" style={{ width: '250px' }}>
            <DrawerCloseButton />
            <DrawerHeader></DrawerHeader>

            <DrawerBody>
              <Sidebar />
            </DrawerBody>

            <DrawerFooter></DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
      <Box>UserName</Box>
    </Flex>
  );
}
