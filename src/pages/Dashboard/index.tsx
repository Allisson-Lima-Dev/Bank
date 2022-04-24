import React, { useState } from 'react';
import { Box, Grid, Text, SimpleGrid, Flex, GridItem } from '@chakra-ui/react';
import { Card, ColorModeSwitcher, Layout } from '~/components';
import LayoutDashboard from '~/components/layout/dashboard';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function index() {
  const [options, setOptions] = useState({
    chart: {
      id: 'apexchart-example',
    },

    tooltip: {
      theme: 'dark',
    },
    style: {
      colors: ['#00BAEC'],
    },
    markers: {
      size: 5,
      colors: ['#000524'],
      strokeColor: '#00BAEC',
      strokeWidth: 3,
    },
    colors: ['#0eaf10', '#f52727', '#00BAEC'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: '100%',
          },
          legend: {
            show: false,
          },
        },
      },
    ],
    xaxis: {
      categories: [
        'jan',
        'fev',
        'mar',
        'abr',
        // 'mai',
        // 'jun',
        // 'jul',
        // 'ago',
        // 'set',
        // 'out',
        // 'nov',
        // 'dez',
      ],
    },
  });

  const [series, setSeries] = useState([
    {
      name: 'Receitas',
      data: [2, 10, 10, 10], //10, 10, 10, 10, 10, 10, 10, 10],
    },
    {
      name: 'Despesas',
      data: [100, 10, 10, 10], //, 10, 10, 10, 10, 10, 10, 10, 10],
    },
    {
      name: 'Meta',
      data: [20, 10, 65, 750], // 249, 3, 70, 91, 15, 140, 63, 356],
    },
  ]);
  const bg = [
    {
      linear: 'linear(to-l, #8E54E9 , #4776E6)',
      icon: '',
      value: '1.000.000,00',
      type: 'Saldo',
    },
    {
      linear: 'linear(to-l, #96C93D , #96C93D)',
      icon: '',
      value: '2.000.000,00',
      type: 'Receita',
    },
    {
      linear: 'linear(to-l, #EEA849, #F46B45)',
      icon: '',
      value: '100.000,00',
      type: 'Despesa',
    },
    {
      linear: 'linear(to-l, #5B86E5, #36D1DC)',
      icon: '',
      value: '5.000.000,00',
      type: 'Meta',
    },
  ];
  return (
    <Box h="100vh" overflowY={'hidden'}>
      <LayoutDashboard title="Dashboard">
        <Box
          maxW="1400px"
          h="100%"
          w={{ base: '90%', md: '90%', lg: '98%', xl: 'full -20px' }}
          mx={{ base: 'auto', lg: 'auto' }}
        >
          <SimpleGrid columns={{ base: 2, md: 2, lg: 4 }} spacing={5}>
            {bg.map((item) => (
              <Card
                key={item.type}
                linear={item.linear}
                type={item.type}
                value={item.value}
              />
            ))}
          </SimpleGrid>
          <Grid
            // templateRows="repeat(2, 1fr)"
            templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }}
            gap={5}
            w="100%"
            h={{ base: '600px', lg: '300px' }}
            mt="20px"
          >
            <GridItem colSpan={{ base: 1, lg: 2 }} maxH={'400px'}>
              <Box
                w="full"
                maxH={'400px'}
                h="100%"
                // maxW={'1200px'}
                // px={{ base: '0', xl: '100px' }}
                bg="#2C3045"
                p="20px"
                // px="180px"
                borderRadius={'10px'}
              >
                <Chart
                  type="bar"
                  width={'100%'}
                  height={'100%'}
                  series={[
                    {
                      name: 'Receita',
                      data: [
                        {
                          x: 'Jan',
                          y: 7292,
                          goals: [
                            {
                              name: 'Expectativa',
                              value: 400,
                              strokeHeight: 5,
                              strokeColor: '#36D1DC',
                            },
                          ],
                        },
                        {
                          x: 'Fev',
                          y: 10432,
                          goals: [
                            {
                              name: 'Expectativa',
                              value: 5000,
                              strokeHeight: 5,
                              strokeColor: '#36D1DC',
                            },
                          ],
                        },
                        {
                          x: 'Mar',
                          y: 3423,
                          goals: [
                            {
                              name: 'Expectativa',
                              value: 8200,
                              strokeHeight: 5,
                              strokeColor: '#36D1DC',
                            },
                          ],
                        },
                        {
                          x: 'Abr',
                          y: 4653,
                          goals: [
                            {
                              name: 'Expectativa',
                              value: 3500,
                              strokeHeight: 5,
                              strokeColor: '#36D1DC',
                            },
                          ],
                        },

                        {
                          x: 'Mai',
                          y: 7032,
                          goals: [
                            {
                              name: 'Expectativa',
                              value: 10500,
                              strokeHeight: 5,
                              strokeColor: '#36D1DC',
                            },
                          ],
                        },
                        {
                          x: 'Jun',
                          y: 7332,
                          goals: [
                            {
                              name: 'Expectativa',
                              value: 8700,
                              strokeHeight: 5,
                              strokeColor: '#36D1DC',
                            },
                          ],
                        },
                        {
                          x: 'Jul',
                          y: 6553,
                          goals: [
                            {
                              name: 'Expectativa',
                              value: 7300,
                              strokeHeight: 2,
                              strokeDashArray: 2,
                              strokeColor: '#36D1DC',
                            },
                          ],
                        },
                      ],
                    },
                    {
                      name: 'Despesa',
                      data: [
                        {
                          x: '2011',
                          y: 1292,
                          goals: [
                            {
                              name: 'Expectativa',
                              value: 1400,
                              strokeHeight: 5,
                              strokeColor: '#36D1DC',
                            },
                          ],
                        },
                        {
                          x: '2012',
                          y: 4432,
                          goals: [
                            {
                              name: 'Expectativa',
                              value: 5400,
                              strokeHeight: 5,
                              strokeColor: '#36D1DC',
                            },
                          ],
                        },
                        {
                          x: '2013',
                          y: 5423,
                          goals: [
                            {
                              name: 'Expectativa',
                              value: 5200,
                              strokeHeight: 5,
                              strokeColor: '#36D1DC',
                            },
                          ],
                        },
                        {
                          x: '2014',
                          y: 6653,
                          goals: [
                            {
                              name: 'Expectativa',
                              value: 6500,
                              strokeHeight: 5,
                              strokeColor: '#36D1DC',
                            },
                          ],
                        },

                        {
                          x: '2016',
                          y: 7132,
                          goals: [
                            {
                              name: 'Expectativa',
                              value: 7500,
                              strokeHeight: 5,
                              strokeColor: '#36D1DC',
                            },
                          ],
                        },
                        {
                          x: '2017',
                          y: 7332,
                          goals: [
                            {
                              name: 'Expectativa',
                              value: 8700,
                              strokeHeight: 5,
                              strokeColor: '#36D1DC',
                            },
                          ],
                        },
                        {
                          x: '2018',
                          y: 10553,
                          goals: [
                            {
                              name: 'Expectativa',
                              value: 9300,
                              strokeHeight: 2,
                              strokeDashArray: 2,
                              strokeColor: '#36D1DC',
                            },
                          ],
                        },
                      ],
                    },
                  ]}
                  options={{
                    chart: {
                      background: 'rgba(0, 0, 0, 0)',
                      height: 350,
                      type: 'bar',
                    },
                    plotOptions: {
                      bar: {
                        columnWidth: '60%',
                      },
                    },
                    colors: ['#96C93D', '#F46B45'],
                    // dataLabels: {
                    //   enabled: true,
                    // },
                    legend: {
                      show: true,
                      showForSingleSeries: true,
                      customLegendItems: ['Receita', 'Despesa', 'Expectativa'],
                      markers: {
                        fillColors: ['#96C93D', '#F46B45', '#36D1DC'],
                      },
                    },
                    title: { text: 'Semestre' },
                    theme: {
                      mode: 'dark',
                    },
                    fill: {
                      type: 'gradient',
                    },
                    tooltip: {
                      y: {
                        formatter: (val: any) => {
                          return `${val}`;
                        },
                      },
                    },
                  }}
                />
                <Box />
              </Box>
            </GridItem>
            <GridItem colSpan={1} maxH={'400px'}>
              <Box
                bg="#2C3045"
                p="20px"
                w="full"
                maxH={'300px'}
                h="100%"
                px={{ base: '0', xl: '10px' }}
                borderRadius={'10px'}
              >
                <Chart
                  type="pie"
                  width={'100%'}
                  height={'100%'}
                  series={[350, 2421, 3500, 1021]}
                  options={{
                    labels: ['Receita', 'Despesa', 'Saldo', 'Meta'],
                    chart: {
                      background: 'rgba(0, 0, 0, 0)',
                    },
                    colors: ['#96C93D', '#F46B45', '#8E54E9', '#36D1DC'],
                    title: { text: 'Relação Geral' },
                    theme: {
                      mode: 'dark',
                    },
                    fill: {
                      type: 'gradient',
                    },
                    tooltip: {
                      y: {
                        formatter: (val: any) => {
                          return `${val}`;
                        },
                      },
                    },
                  }}
                />
              </Box>
            </GridItem>
          </Grid>
          <Box
            bg="#2C3045"
            p="20px"
            w="full"
            borderRadius={'10px'}
            mt="20px"
            h="400px"
          >
            <Chart
              type="area"
              width={'100%'}
              height={'100%'}
              series={[
                {
                  name: 'Despesas',
                  data: [31, 40, 28, 51, 42, 109, 52],
                },
                {
                  name: 'Receita',
                  data: [11, 32, 45, 32, 34, 52, 41],
                },
              ]}
              options={{
                chart: {
                  // height: 550,
                  type: 'area',
                  background: 'rgba(0, 0, 0, 0)',
                  zoom: {
                    enabled: false,
                  },
                },
                // dataLabels: {
                //   enabled: false,
                // },
                labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
                stroke: {
                  curve: 'smooth',
                },
                colors: ['#96C93D', '#F46B45'],

                title: { text: 'Relação Diária' },
                theme: {
                  mode: 'dark',
                },
                fill: {
                  type: 'gradient',
                },
                tooltip: {
                  y: {
                    formatter: (val: any) => {
                      return `${val}`;
                    },
                  },
                },
              }}
            />
          </Box>
          <Text>Parabens vc conseguiu</Text>
        </Box>
      </LayoutDashboard>
    </Box>
  );
}
