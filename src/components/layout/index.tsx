import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface layoutProps {
  children: ReactNode;
}

export function Layout({ children }: layoutProps) {
  return (
    <Box w="100%" mx="auto">
      <Box maxW="container.hd" mx="auto" w="full" >
        {children}
      </Box>
    </Box>
  );
}
