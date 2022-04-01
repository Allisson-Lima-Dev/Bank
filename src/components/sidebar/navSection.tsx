import { Box, Stack, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface NavSectionProps {
  title: string;
  children: ReactNode;
}

export function NavSection({ title, children }: NavSectionProps) {
  return (
    <Box w="full">
      <Text
        fontWeight="bold"
        color="gray.400"
        fontSize="small"
        mb="4"
        display={['none', 'none', 'flex']}
      >
        {title}
      </Text>
      <Stack
        spacing="4"
        mb="4"
        align="stretch"
        justifyContent="space-around"
        flexDir={['row', 'row', 'column']}
      >
        {children}
      </Stack>
    </Box>
  );
}
