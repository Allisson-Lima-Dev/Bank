import React from 'react';
import {
  Icon,
  Link as ChakraLink,
  Text,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';
import { ElementType } from 'react';
import { ActiveLink } from '../link/activeLink';

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
  href: string;
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink
        display="flex"
        align="center"
        alignItems="center"
        flexDir={['column', 'column', 'row']}
        {...rest}
      >
        <Icon as={icon} fontSize={[30, 30, 20]} />
        <Text ml={[0, 0, 4]} fontWeight="medium" fontSize={[10, 10, 16]}>
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
