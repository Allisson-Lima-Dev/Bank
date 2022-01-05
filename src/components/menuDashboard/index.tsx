import React from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';

export function MenuDashboard() {
  return (
    <Box bg="#001933">
      <Flex>
        <Text>Home</Text>
      </Flex>
      <Flex>
        <Text>Dashboard</Text>
      </Flex>
      <Flex>
        <Text>Transação</Text>
      </Flex>
      <Flex>
        <Text>Histórico</Text>
      </Flex>
    </Box>
  );
}
