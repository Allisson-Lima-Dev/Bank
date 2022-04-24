import React, { useState } from 'react';
import { Box, Grid, Text, SimpleGrid, Flex, GridItem } from '@chakra-ui/react';
import { Card, ColorModeSwitcher, Layout } from '~/components';
import LayoutDashboard from '~/components/layout/dashboard';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function index() {
  return (
    <Box h="100vh" overflowY={'hidden'}>
      <LayoutDashboard title="Dashboard">
        <Box>Registros</Box>
      </LayoutDashboard>
    </Box>
  );
}
