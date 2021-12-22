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
import {
  CardValues,
  Layout,
  Header,
  Input,
  Select,
  CardHistory,
} from '~/components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import style from '~/styles/Home.module.css';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function Control() {
  const TransitionInFormSchema = yup.object().shape({
    valuePerson: yup.string().default('1'),
    revenue: yup.string().when('valuePerson', {
      is: (val: string) => val === '1',
      then: yup
        .string()
        .min(14, 'Seu CPF deve conter 11 digitos')
        .max(14, 'Seu CPF deve conter 11 digitos')
        .required(),
      otherwise: yup.string(),
    }),
    expense: yup.string().when('valuePerson', {
      is: (val: string) => val === '2',
      then: yup
        .string()
        .min(14, 'Seu CPF deve conter 11 digitos')
        .max(14, 'Seu CPF deve conter 11 digitos')
        .required(),
      otherwise: yup.string(),
    }),
    goal: yup.string().when('valuePerson', {
      is: (val: string) => val === '3',
      then: yup
        .string()
        .min(14, 'Seu CPF deve conter 11 digitos')
        .max(14, 'Seu CPF deve conter 11 digitos')
        .required(),
      otherwise: yup.string(),
    }),
    name: yup.string().required('Nome Obrigatório'),
    value: yup.string().required('Valor obrigatorio'),
  });

  const shadow = useColorModeValue('lg', 'dark-lg');
  const colorChart = useColorModeValue('#000', '#f5f');
  const valorPor = (638 * 100) / 5000;
  const [valuePerson, setValuePerson] = useState<string>('1');

  function alterValuePerson(value: string) {
    setValue('valuePerson', value);
  }
  console.log(valuePerson);
  const { register, handleSubmit, formState, setValue } = useForm({
    resolver: yupResolver(TransitionInFormSchema),
  });

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
      data: [526, 40, 35, 50, 49, 60, 70, 91, 125, 500, 63, 956],
    },
    {
      name: 'Despesas',
      data: [20, 140, 35, 550, 49, 30, 670, 91, 125, 200, 63, 856],
    },
    {
      name: 'Meta',
      data: [20, 10, 65, 750, 249, 3, 70, 91, 15, 140, 63, 356],
    },
  ]);

  return (
    <Box>
      <Header financial={true} />
      <Layout>
        <Box mx={'auto'} mt="85px" className={style.container}>
          <Flex
            maxW={{ base: '100%', xl: 'container.xl' }}
            mx="auto"
            justifyContent={'space-between'}
            flexDir={{ base: 'column', lg: 'row' }}
          >
            <Box>
              <Flex
                justifyContent={'space-between'}
                flexDir={{ base: 'column', lg: 'row' }}
                w={{ base: '95%', lg: '100%' }}
                mx={'auto'}
              >
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
                  ml={{base: '', lg: '5px'}}
                />
              </Flex>
              <Flex
                mt={{base: '', lg: '20px'}}
                w={{ base: '95%', lg: '100%' }}
                mx={'auto'}
                flexDir={{ base: 'column', lg: 'row' }}
              >
                <CardValues
                  title="despesas"
                  value={4000}
                  buttonHide={true}
                  iconLabel={<AiOutlineFall size={30} />}
                  bgExpense={true}
                  borderRadiusBg={true}
                  widthCard="100%"
                />
                <CardValues
                  title="Investimento"
                  ml={{base: '', lg: '5px'}}
                  value={4000}
                  buttonHide={true}
                  iconLabel={<AiOutlineBarChart size={30} />}
                  bgInvestment={true}
                  borderRadiusBg={true}
                  widthCard="100%"
                />
              </Flex>
              <Box
                w={{ base: '95%', lg: '400px' }}
                mx={'auto'}
                borderRadius="20px"
                boxShadow={shadow}
                p={{ base: '15px', lg: '8px 15px' }}
              >
                <Select
                  name="type"
                  label="Transação:"
                  defaultValue={1}
                  mb="3px"
                  onChange={(e: any) => setValuePerson(e.target.value)}
                >
                  <option value={1}>Receita</option>
                  <option value={2}>Despesas</option>
                  <option value={3}>Meta</option>
                </Select>
                {valuePerson == '3' ? (
                  <Box>
                    <Input
                      name="value"
                      placeholder="Nome da Meta"
                      label="Meta:"
                      mb="3px"
                    />
                    <Input
                      name="meta"
                      placeholder="Valor da Meta"
                      label="Valor:"
                      mb="3px"
                    />
                  </Box>
                ) : valuePerson == '2' ? (
                  <Box>
                    <Input
                      name="value"
                      placeholder="Nome da Despesa"
                      label="Despesa:"
                      mb="3px"
                    />
                    <Input
                      name="meta"
                      placeholder="Valor da Despesa"
                      label="Valor:"
                      mb="3px"
                    />
                  </Box>
                ) : valuePerson == '1' ? (
                  <Box>
                    <Input
                      name="value"
                      placeholder="Nome da Receita"
                      label="Receita"
                      mb="3px"
                    />
                    <Input
                      name="meta"
                      placeholder="Valor da Receita"
                      label="Valor:"
                      mb="3px"
                    />
                  </Box>
                ) : (
                  ''
                )}

                <Button
                  bg="#1f9ce4"
                  w={{ base: '100%', md: '100%' }}
                  h="50px"
                  color="#fff"
                  mt={{ base: '30px', md: '20px' }}
                  pos={'static'}
                >
                  Adicionar
                </Button>
              </Box>
            </Box>
            <Box>
              <Flex
                justifyContent={'space-between'}
                flexDir={{ base: 'column-reverse', lg: 'row' }}
              >
                <Box
                  w={{ base: '95%', lg: '100%' }}
                  mx="auto"

                  borderRadius="20px"
                  boxShadow={shadow}
                  p={{ base: '15px', lg: '10px' }}
                  mr={{ base: '', lg: '20px' }}
                  h="240px"
                >
                  <Chart
                    options={options}
                    series={series}
                    type="area"
                    width={"100%"}
                    height={210}
                  />
                </Box>
                <Flex
                  w={{ base: '95%', lg: 'auto' }}
                  mx={'auto'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  h="240px"
                  borderRadius="20px"
                  boxShadow={shadow}
                  p={{ base: '15px', lg: '10px' }}
                >
                  <Chart
                    options={{
                      chart: {
                        id: 'apexchart-example',
                      },
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
                    width={300}
                    height={490}
                  />
                </Flex>
              </Flex>
              <Flex w="100%">
                <Flex
                  mt="15px"
                  justifyContent={'space-between'}
                  flexDir={{ base: 'column', lg: 'row' }}
                  w={{ base: 'full', lg: '' }}
                >
                  <Box
                    w={{ base: '95%', lg: '500px' }}
                    mx="auto"
                    mr={{base: '', lg: '20px'}}
                    borderRadius="20px"
                    boxShadow={shadow}
                    p={{ base: '10px', lg: '20px 15px' }}
                  >
                    <Text>Histórico de Transações</Text>
                    <Flex></Flex>
                    <CardHistory
                      expense={true}
                      name="Internet"
                      value={120.35}
                      date={'12/12/21'}
                    />
                    <CardHistory
                      revenue={true}
                      name="Salario"
                      value={222.32}
                      date={'12/12/21'}
                    />
                    <CardHistory
                      goal={true}
                      name="Viagem"
                      value={222.32}
                      date={'12/12/21'}
                    />
                  </Box>
                  <Box
                    w={{ base: '95%', lg: 'auto' }}
                    borderRadius="20px"
                    boxShadow={shadow}
                  >
                    <Chart
                      type="radialBar"
                      width={300}
                      series={[valorPor]}
                      options={{
                        chart: {
                          height: 280,
                          type: 'radialBar',
                          id: 'apexchart-example',
                        },

                        series: [67],
                        colors: ['#20E647'],
                        plotOptions: {
                          radialBar: {
                            hollow: {
                              margin: 0,
                              size: '70%',
                              background: '#293450',
                            },
                            track: {
                              dropShadow: {
                                enabled: true,
                                top: 2,
                                left: 0,
                                blur: 4,
                                opacity: 0.15,
                              },
                            },
                            dataLabels: {
                              name: {
                                offsetY: -10,
                                color: '#fff',
                                fontSize: '13px',
                              },
                              value: {
                                color: '#fff',
                                fontSize: '20px',
                                show: true,
                              },
                            },
                          },
                        },
                        fill: {
                          type: 'gradient',
                          gradient: {
                            shade: 'dark',
                            type: 'vertical',
                            gradientToColors: ['#87D4F9'],
                            stops: [0, 100],
                          },
                        },
                        stroke: {
                          lineCap: 'round',
                        },
                        labels: ['ANIVERSARIO'],
                      }}
                    ></Chart>
                  </Box>
                </Flex>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Layout>
    </Box>
  );
}
