import React from 'react';
import {
  Box,
  Flex,
  Image,
  Text,
  Heading,
  useColorModeValue,
  useColorMode,
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
          onClick={toggleColorMode}
          mb="800px"
          mt="80px"
          w={{ base: '93%', md: '80%' }}
          mx="auto"
          borderRadius="20px"
          boxShadow={shadow}
          pl={{ base: '0', md: '50px' }}
          px={{ base: '5', md: '' }}
          py="40px"
        >
          <Flex>
            <Box>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates eveniet rem voluptate nesciunt quos iste consequatur in
              hic inventore et cumque recusandae a reprehenderit, commodi ipsam
              accusamus, fugit laudantium pariatur. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Fuga, officia voluptas sint eos nam
              cupiditate quas debitis quis beatae enim consectetur unde, modi
              ullam, quibusdam dolor consequatur veniam asperiores dolorem!
            </Box>
            <Box>
              <Image src="https://i.imgur.com/EMEPRFk.png" alt="ImageBox" />
            </Box>
          </Flex>
        </Box>
      </Layout>
    </Box>
  );
}
