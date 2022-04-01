import React from 'react';
import { Stack } from '@chakra-ui/react';
import {
  RiContactsLine,
  RiDashboardLine,
  RiGroupLine,
  RiHotelLine,
} from 'react-icons/ri';
import { NavLink } from './navLink';
import { NavSection } from './navSection';

type SideBarNavProps = {
  user_type: string
}

export function SidebarNav({user_type}: SideBarNavProps) {
  return (
    <Stack spacing="12" align="flex-start" w="full">
      <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine} href={"/"+user_type+"/home"}>
          Dasboard
        </NavLink>
        <NavLink icon={RiHotelLine} href={"/"+user_type+"/enterprises"}>
          Empreendimentos
        </NavLink>
        <NavLink icon={RiContactsLine} href={"/"+user_type+"/proposals"}>
          Propostas
        </NavLink>
        { user_type === "select" && (
          <>
            <NavLink icon={RiGroupLine} href={"/"+user_type+"/customers"}>
              Clientes
            </NavLink>
            <NavLink icon={RiContactsLine} href={"/"+user_type+"/brokers"}>
              Imobiliárias
            </NavLink>
            <NavLink icon={RiContactsLine} href={"/"+user_type+"/realEstates"}>
              Incorporadoras
            </NavLink>
          </>
        )}
      </NavSection>
    </Stack>
  );
}
