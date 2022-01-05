import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface layoutProps {
  children: ReactNode;
}

export function Layout({ children }: layoutProps) {
  return (
    <Box w="100%" mx="auto" h="100%">
      <Box maxW="container.hd" mx="auto" w="full" h="100%" >
        {children}
      </Box>
    </Box>
  );
}
