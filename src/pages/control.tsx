import React, { useState } from 'react';
import {
  Box,
  Flex,
  Image,
  Text,
  Heading,
  useColorModeValue,
  useColorMode,
  Button,
} from '@chakra-ui/react';
import {
  AiOutlineFall,
  AiOutlineRise,
  AiOutlineBarChart,
} from 'react-icons/ai';
import { CardValues, Layout, Header, Input, Select } from '~/components';
import style from "~/styles/Home.module.css";
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function Control() {
  const shadow = useColorModeValue('lg', 'dark-lg');
  const [options, setOptions] = useState({
    chart: {
      id: 'apexchart-example',
    },
    annotations: { position: 'back' },
    colors: ['#0eaf10', '#f52727'],
    xaxis: {
      categories: [
        'jan',
        'fev',
        'mar',
        'abr',
        'mai',
        'jun',
        'jul',
        'ago',
        'set',
        'out',
        'nov',
        'dez',
      ],
    },
  });
  const [series, setSeries] = useState([
    {
      name: 'Receitas',
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 500, 63, 956],
    },
    {
      name: 'Despesas',
      data: [20, 140, 35, 550, 49, 30, 670, 91, 125, 200, 63, 856],
    },
  ]);

  return (
    <Box >
      <Header financial={true} />
      <Layout>
        {/* <Box
          mt="95px"
          w={{ base: '95%', lg: '98%' }}
          mx="auto"
          // borderRadius="20px"
          // boxShadow={shadow}
          // p={{ base: '15px', lg: '25px 30px' }}
        > */}
        {/* <Flex
            justify="space-between"
            flexDir={{ base: 'column-reverse', lg: 'row' }}
          > */}
        <Box  mx={'auto'} mt="85px" className={style.container}>
          <Flex
            maxW={'container.xl'}
            mx="auto"
            justifyContent={'space-between'}
          >
            <Box>
              <CardValues
                widthCard="100%"
                title="Saldo Atual"
                value={4000}
                buttonHide={false}
              />
              <CardValues
                widthCard="100%"
                title="receita"
                value={4000}
                buttonHide={true}
                iconLabel={<AiOutlineRise size={30} />}
                bgRevenue={true}
                borderRadiusBg={true}
              />

              <Flex mt="20px">
                <CardValues
                  title="despesas"
                  value={4000}
                  buttonHide={true}
                  iconLabel={<AiOutlineFall size={30} />}
                  bgExpense={true}
                  borderRadiusBg={true}
                />
                <CardValues
                  title="Investimento"
                  ml={'5px'}
                  value={4000}
                  buttonHide={true}
                  iconLabel={<AiOutlineBarChart size={30} />}
                  bgInvestment={true}
                  borderRadiusBg={true}
                />
              </Flex>
            </Box>
            <Box
              w={{ base: '90%', lg: 'auto' }}
              borderRadius="20px"
              boxShadow={shadow}
              p={{ base: '15px', lg: '10px' }}
              h="220px"
            >
              <Chart
                options={options}
                series={series}
                type="line"
                width={450}
                height={190}
              />
            </Box>
            <Box
              w={{ base: '90%', lg: 'auto' }}
              h="240px"
              borderRadius="20px"
              boxShadow={shadow}
              p={{ base: '15px', lg: '10px' }}
              pos={'static'}
            >
              <Chart
                options={{
                  labels: ['jan', 'feb', 'Mar', 'abril'],

                  tooltip: {
                    y: {
                      formatter: (val) => {
                        return `$${val}`;
                      },
                    },
                  },
                  title: { text: 'Investimento' },
                }}
                series={[305, 589, 862, 852]}
                type="pie"
                width={320}
                height={490}
              />
            </Box>
          </Flex>
          <Flex
            mt="20px"
            maxW={'container.xl'}
            mx="auto"
            justifyContent={'space-between'}
          >
            <Box
              w={{ base: '95%', lg: '380px' }}
              mr="20px"
              borderRadius="20px"
              boxShadow={shadow}
              p={{ base: '15px', lg: '8px 15px' }}
            >
              <Select
                name="type"
                placeholder="Tipo de Transação"
                label="Transação:"
              >
                <option value="1">Receita</option>
                <option value="2">Despesas</option>
                <option value="3">Investimento</option>
              </Select>
              <Input
                name="value"
                placeholder="Valor da Transação"
                label="Valor:"
              />
              <Button
                bg="#1f9ce4"
                w={{ base: '100%', md: '100%' }}
                h="50px"
                color="#fff"
                mt={{ base: '30px', md: '40px' }}
                pos={'static'}
              >
                Adicionar
              </Button>
            </Box>
            <Box
              w={{ base: '95%', lg: 'auto' }}
              mr="20px"
              borderRadius="20px"
              boxShadow={shadow}
              p={{ base: '15px', lg: '20px 15px' }}
            >
              <Text>Histórico de Transações</Text>
            </Box>
            <Box
              w={{ base: '95%', lg: 'auto' }}
              borderRadius="20px"
              boxShadow={shadow}
              p={{ base: '15px', lg: '25px 30px' }}
            ></Box>
          </Flex>
        </Box>
        {/* <Box maxW={{ base: '100%', lg: '35%' }}>
              <Image src="/assets/images/lofo.png" alt="ImageBox" />
            </Box> */}
        {/* </Flex> */}
        {/* </Box> */}
      </Layout>
    </Box>
  );
}
