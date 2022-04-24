import { Stack } from '@chakra-ui/react';
import React from 'react';
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from 'react-icons/ri';
import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start" w="full" textDecor={'none'}>
      <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine} href="/Dashboard">
          Dasboard
        </NavLink>
        <NavLink icon={RiContactsLine} href="/Register">
          Usuários
        </NavLink>
      </NavSection>
      <NavSection title="AUTOMAÇÃO">
        <NavLink icon={RiInputMethodLine} href="/Dashboard/Transition">
          Formulários
        </NavLink>
        <NavLink icon={RiGitMergeLine} href="/automation">
          Automação
        </NavLink>
      </NavSection>
    </Stack>
  );
}
