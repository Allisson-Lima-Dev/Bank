import React from 'react';
import {
  Box,
  Flex,
  Image,
  Text,
  Heading,
  useColorModeValue,
  useColorMode,
  Button,
} from '@chakra-ui/react';
import { ColorModeSwitcher, Layout, Header } from '~/components';

export default function Home() {
  const { toggleColorMode } = useColorMode();
  const color = useColorModeValue('red', 'yellow.800');
  const shadow = useColorModeValue('lg', 'dark-lg');

  return (
    <Box>
      <Header home={true} />
      <Layout>
        <Box
          mt="120px"
          w={{ base: '95%', lg: '70%' }}
          mx="auto"
          borderRadius="20px"
          boxShadow={shadow}
          p={{ base: '15px', lg: '40px' }}
        >
          <Flex
            justify="space-between"
            flexDir={{ base: 'column-reverse', lg: 'row' }}
          >
            <Box w={{ base: '100%', lg: '70%' }} mt="50px">
              <Heading mb="20px">Seja bem-vindo</Heading>
              <Text w={{ base: '100%', lg: '90%' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates eveniet rem voluptate nesciunt quos iste consequatur
                in hic inventore et cumque recusandae a reprehenderit, commodi
                ipsam accusamus, fugit laudantium pariatur. Lorem ipsum dolor,
                sit amet consectetur adipisicing elit. Fuga, officia voluptas
                sint eos nam cupiditate quas debitis quis beatae enim
                consectetur unde, modi ullam, quibusdam dolor consequatur veniam
                asperiores dolorem!
              </Text>
              <Button
                bg="#1f9ce4"
                w={{ base: '100%', md: '240px' }}
                h="50px"
                color="#fff"
                mt={{ base: '30px', md: '80px' }}
              >
                Saber mais
              </Button>
            </Box>
            <Box maxW={{ base: '100%', lg: '35%' }}>
              <Image src="https://i.imgur.com/EMEPRFk.png" alt="ImageBox" />
            </Box>
          </Flex>
        </Box>
      </Layout>
    </Box>
  );
}
