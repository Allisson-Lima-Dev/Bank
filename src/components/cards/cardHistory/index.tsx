import React from 'react';
import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import {
  BsArrowUpCircleFill,
  BsArrowDownCircleFill,
  BsBank2,
} from 'react-icons/bs';

interface CardProps {
  revenue?: boolean;
  expense?: boolean;
  goal?: boolean;
  name: string;
  value: string | number;
  date?: any;
  type: string | number;
}

export function CardHistory({
  expense,
  goal,
  revenue,
  name,
  value,
  date,
  type,
}: CardProps) {
  const ColorValues =
    expense == true ? 'red' : revenue ? 'green' : goal ? '#1f9ce4' : '';
  const shadow = useColorModeValue('lg', 'dark-lg');
  return (
    <Box>
      <Flex
        align={'center'}
        justifyContent={'space-between'}
        boxShadow={shadow}
        pr="5px"
      >
        <Flex align={'center'} h="35px">
          <Box
            bg={ColorValues}
            w="4px"
            h="100%"
            mr="5px"
            borderTopLeftRadius={'50%'}
            borderBottomLeftRadius={'50%'}
          />
          <Text textTransform={'uppercase'}>{name}</Text>
        </Flex>
        <Flex
          align={'center'}
          w={{ base: '50%', md: '40%', lg: '35%' }}
          justifyContent={'space-between'}
        >
          <Text
            fontSize={{ base: '11px', lg: '13px' }}
            mr={{ base: '5px', lg: '' }}
          >
            {date}
          </Text>
          <Flex align={'center'}>
            <Text mr="5px" color={ColorValues}>{`${type} ${value}`}</Text>

            {revenue ? (
              <BsArrowUpCircleFill size={20} color="green" />
            ) : expense ? (
              <BsArrowDownCircleFill size={20} color="red" />
            ) : goal ? (
              <BsBank2 size={20} color="#1f9ce4" />
            ) : (
              ''
            )}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
