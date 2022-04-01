import React from 'react';
import { Box, Flex, Text, BoxProps } from '@chakra-ui/react';

interface IDataMenu extends BoxProps {
  icon: any;
  title: string;
}
export function ItemMenu({ icon, title, ...rest }: IDataMenu) {
  return (
    <Box {...rest}>
      <Flex align={'center'}>
        {icon}
        <Text ml="10px">{title}</Text>
      </Flex>
    </Box>
  );
}
