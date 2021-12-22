import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { theme } from '~/styles/theme';
import dynamic from 'next/dynamic';

const ChartApex = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

type PieChartProps = {
  title: string;
  labels: Array<string>;
  series: Array<number>;
};

export function PieChart({ title, series, labels }: PieChartProps) {
  const options = {
    labels,
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  return (
    <Box
      p={['6', '8']}
      border="1px solid"
      borderColor="gray.200"
      boxShadow={'lg'}
      borderRadius="xl"
      pb="4"
    >
      <Text fontSize="lg" mb="4">
        {title}
      </Text>
      <ChartApex options={options} series={series} type="pie" height={300}/>
    </Box>
  );
}
