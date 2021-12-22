import React, { useState } from 'react';
import { Box, Button, BoxProps, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
interface CardValue extends BoxProps{
  title: string;
  value: number | string;
  buttonHide: boolean;
  iconLabel?: any;
  bgRevenue?: boolean;
  bgExpense?: boolean;
  bgInvestment?: boolean;
  borderRadiusBg?: boolean;
  widthCard?: string;
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
  widthCard,
  ...rest
}: CardValue) {
  const [showValue, setShowValue] = useState(false);
  const handleShowValue = () => {
    setShowValue(!showValue);
  };
  const shadow = useColorModeValue('lg', 'dark-lg');
  return (
    <Flex
      flexDir={'column'}
      justify={'center'}
      w={ widthCard || "190px"}
      h="70px"
      {...rest}
      mt="5px"
      p="2px 15px"
      borderRadius="15px"
      boxShadow={shadow}
    >

      <Text textTransform="uppercase" fontSize="1em" fontWeight="normal">
        {title}
      </Text>
      <Flex align="center" justify="space-between">
        <Box h="50px">
          <Text
            // display={showValue ? 'none' : 'flex'}
            mr="15px"
            mt="5px"
            fontSize="1.2em"
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
          color='#fff'
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
