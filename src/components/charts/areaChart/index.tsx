import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import theme  from '~/styles/theme';
import dynamic from 'next/dynamic';

const ChartApex = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

type Serie = {
  name: string;
  data: Array<number>;
};

type AreaChartProps = {
  title: string;
  series: Array<Serie>;
  categories: any[];
};

export function AreaChart({ series, categories, title }: AreaChartProps) {
  const options = {
    colors: [theme.colors.button],
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      foreColor: 'gray.500',
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: false,
    },
    xaxis: {
      axisBorder: {
        color: 'gray.400',
      },
      axisTicks: {
        color: 'gray.600',
      },
      categories,
    },
    fill: {
      opacity: 0.3,
      type: 'gradient',
      gradient: {
        shade: 'dark',
        opacityFrom: 0.7,
        opacityTo: 0.3,
      },
    },
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
      <ChartApex options={options} series={series} type="area" height={160} />
    </Box>
  );
}
