import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

export function CircularProgress() {
  return (
    <Box
    borderRadius={'50%'}
      w="200px"
      h="200px"
      pos="relative"
      borderBottom={'5px solid #f51265'}
      bg="yellow"
    >
      <Box
        borderLen
        borderLeft={'5px solid #c74'}
        borderStartEndRadius={'500px'}

        pos={'absolute'}
        top={'0%'}
        bottom={'0'}
      ></Box>

      <Box
        borderLen
        borderRight={'5px solid #B5d564'}
        pos={'absolute'}
        top={'0%'}
        bottom={'0'}
        right={'0'}
      ></Box>
      <Box
        borderTop={'5px solid #cf5894'}
        pos={'absolute'}
        top={'0%'}
        bottom={'0%'}
        right={'50%'}
        left={'0'}
      ></Box>
    </Box>
  );
}
