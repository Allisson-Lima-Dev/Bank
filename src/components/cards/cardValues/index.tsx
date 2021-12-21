import React, { useState } from 'react';
import { Box, Button, Center, Flex, Text } from '@chakra-ui/react';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
interface CardValue {
  title: string;
  value: number | string;
  buttonHide: boolean;
  iconLabel?: any;
  bgRevenue?: boolean;
  bgExpense?: boolean;
  bgInvestment?: boolean;
  borderRadiusBg?: boolean;
}
export function CardValues({
  buttonHide,
  title,
  value,
  iconLabel,
  bgRevenue,
  bgExpense,
  bgInvestment,
  borderRadiusBg,
}: CardValue) {
  const [showValue, setShowValue] = useState(false);
  const handleShowValue = () => {
    setShowValue(!showValue);
  };
  return (
    <Flex
      flexDir={'column'}
      justify={'center'}
      w="230px"
      h="90px"
      mr="10px"
      p="2px 15px"
      borderRadius="15px"
      boxShadow={'dark-lg'}
    >
      <Text textTransform="uppercase" fontSize={20} fontWeight="normal">
        {title}
      </Text>
      <Flex align="center" justify="space-between">
        <Box h="50px">
          <Text
            // display={showValue ? 'none' : 'flex'}
            mr="15px"
            mt="5px"
            fontSize={27}
            color={
              bgRevenue
                ? 'green'
                : bgExpense
                ? 'red'
                : bgInvestment
                ? '#1f9ce4'
                : showValue
                ? '#b7b7b7'
                : ''
            }
          >
            {showValue ? '*******' : `R$ ${value}`}
          </Text>
        </Box>
        <Button
          display={buttonHide ? 'none' : 'flex'}
          onClick={handleShowValue}
          p="0"
          bg="transparent"
          _hover={{ background: 'transparent', color: '#1f9ce4' }}
          _focus={{ background: 'transparent', color: '#1f9ce4' }}
          pos={'static'}
        >
          {showValue ? (
            <AiOutlineEye size={30} />
          ) : (
            <AiOutlineEyeInvisible size={30} />
          )}
        </Button>
        <Box
          display={borderRadiusBg ? 'flex' : 'none'}
          borderRadius="50%"
          bg={
            bgRevenue
              ? 'green'
              : bgExpense
              ? 'red'
              : bgInvestment
              ? '#1f9ce4'
              : ''
          }
          p="4px"
        >
          {iconLabel}
        </Box>
      </Flex>
    </Flex>
  );
}
