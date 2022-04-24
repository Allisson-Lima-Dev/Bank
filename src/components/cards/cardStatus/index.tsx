import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

interface ICard {
  type: string;
  value: string;
  linear: string;
  icon?: any;
}

export function Card({ linear, type, value, icon }: ICard) {
  return (
    <Box
      maxW={{ base: 'full', xl: '330px' }}
      w={{ base: '100%', md: '' }}
      pb="10px"
      borderRadius={'10px'}
      bgGradient={linear}
    >
      <Flex w="full" justifyContent={'space-between'}>
        <Box />
        <Box
          mx="10px"
          mt="10px"
          w="40px"
          h="40px"
          bg="#ffffff47"
          borderRadius={'5px'}
        ></Box>
      </Flex>
      <Box pl="8px">
        <Text fontSize={20}>{type}</Text>
        <Flex w="full" justifyContent={'space-between'}>
          <Text fontSize={20} mt="10px">
            R$ {value}
          </Text>
        </Flex>
        <Text fontSize={'11px'} mt="8px">
          atualizado com base nas receitas e despesas
        </Text>
      </Box>
    </Box>
  );
}
