import React from 'react';
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useSidebarDrawer } from '~/contexts/SidebarDrawerContext';

import { SidebarNav } from './sidebarNav';

type SideBarProps = {
  user_type: string
}

export function Sidebar({user_type}: SideBarProps) {
  const { isOpen, onClose } = useSidebarDrawer();

  const isDrawerSidebar = useBreakpointValue({
    base: false,
    lg: false,
  });

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p="4">
            <DrawerCloseButton mt="6" />
            <DrawerHeader>Navegação</DrawerHeader>
            <DrawerBody>
              <SidebarNav user_type={user_type} />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }

  return (
    <Box
      as="aside"
      w={['full', 'full', '64']}
      pos={['fixed', 'fixed', 'relative']}
      zIndex="1"
      bottom={[0, 0]}
      left={[0, 0]}
      bg={['primary', 'primary', 'transparent']}
    >
      <SidebarNav user_type={user_type} />
    </Box>
  );
}
