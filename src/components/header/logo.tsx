import { Box, Image } from '@chakra-ui/react';

export function Logo() {
  return (
    <Box w={{base: '50px', lg: '70px'}}>
      <Image src="/assets/images/Logo.png" alt="Logo"/>
    </Box>
  );
}
