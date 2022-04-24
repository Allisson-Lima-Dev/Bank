import { Box, Flex, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

export default function HeaderDashboard() {
  const { toggleColorMode } = useColorMode();
  const color = useColorModeValue('#1f9ce4', 'yellow.800');
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
      <Box />
      <Box>UserName</Box>
    </Flex>
  );
}
