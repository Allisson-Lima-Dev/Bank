import React, { useEffect, useRef, useState } from 'react';
import {
  Box,
  Flex,
  Image,
  Text,
  Heading,
  useColorModeValue,
  useColorMode,
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Modal,
  useDisclosure,
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
  MenuDashboard,
} from '~/components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import style from '~/styles/Home.module.css';
import dynamic from 'next/dynamic';
import { parseCookies } from 'nookies';
import { GetServerSideProps } from 'next';
import LayoutDashboard from '~/components/layout/dashboard';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

declare global {
  interface Window {
    ApexCharts: typeof ApexCharts;
  }
}

interface DataTransition {
  id: number;
  name: string;
  amount: number;
  type: number;
}

export default function Control() {
  const TransitionInFormSchema = yup.object().shape({
    name: yup.string().required('Nome Obrigatório'),
    type: yup.string().required('Nome Obrigatório'),
    amount: yup.string().required('Valor obrigatorio'),
  });

  const shadow = useColorModeValue('lg', 'dark-lg');

  const [valuePerson, setValuePerson] = useState<any>('1');

  console.log(valuePerson);
  const { register, handleSubmit, formState, setValue, getValues, reset } =
    useForm({
      resolver: yupResolver(TransitionInFormSchema),
    });
  let [total, setTotal] = useState<any>([
    { id: 1, name: 'Carro', amount: -52, type: 2 },
    { id: 2, name: 'Moto', amount: 612, type: 1 },
    { id: 3, name: 'Viagem', amount: -252, type: 2 },
    { id: 4, name: 'aniversario', amount: 62, type: 3 },
    { id: 6, name: 'Versão 3', amount: 92, type: 3 },
  ]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const saved = localStorage.getItem('Transations');
    const storageV = saved !== null ? JSON.parse(saved) : '';
    setLocal(storageV);
  }, []);

  const generateId = () => Math.round(Math.random() * 1000);
  const [local, setLocal] = useState<any>();
  console.log(local);

  const handleTransition = (data: DataTransition) => {
    const transition = {
      id: generateId(),
      name: data.name,
      amount: Number(data.type == 2 ? `-${data.amount}` : data.amount),
      type: data.type,
    };

    console.log(transition);
    localStorage.setItem('Transations', JSON.stringify(total));

    // console.log(pegar);

    setTotal([transition, ...total]);

    seT((prev: any) => prev * transition.amount);

    alert(t);
    setSeries([
      {
        name: 'Receitas',
        data: [t, 10, 10, 10], //10, 10, 10, 10, 10, 10, 10, 10],
      },
      {
        name: 'Despesas',
        data: [expense, 10, 10, 10], //, 10, 10, 10, 10, 10, 10, 10, 10],
      },
      {
        name: 'Meta',
        data: [20, 10, 65, 750], // 249, 3, 70, 91, 15, 140, 63, 356],
      },
    ]);

    reset();
  };
  const transationsAmounts = total.map((transition: any) => transition.amount);
  const ValueTotal = transationsAmounts
    .reduce(
      (accumulator: any, transaction: any) => accumulator + transaction,
      0,
    )
    .toFixed(2);

  const expense = transationsAmounts
    .filter((amount: any) => amount < 0)
    .reduce(
      (accumulator: any, transaction: any) => accumulator + transaction,
      0,
    )
    .toFixed(2);
  const [t, seT] = useState(
    transationsAmounts
      .filter((amount: any) => amount > 0)
      .reduce(
        (accumulator: any, transaction: any) => accumulator + transaction,
        0,
      )
      .toFixed(2),
  );
  const goal = total.filter((goal: any) => goal.type == 3);
  const amountGoal = goal
    .map((goal: any) => goal.amount)
    .reduce(
      (accumulator: any, transaction: any) => accumulator + transaction,
      0,
    );

  const valorPor = (amountGoal * 100) / 4000;
  const DateForm = () => {
    const formt = (val: any) => (val < 10 ? `0${val}` : val);

    const date = new Date();
    const monthDay = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = formt(date.getSeconds());

    return `${formt(hours)}:${minutes}:${seconds}`;
  };

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
      data: [t, 10, 10, 10], //10, 10, 10, 10, 10, 10, 10, 10],
    },
    {
      name: 'Despesas',
      data: [expense, 10, 10, 10], //, 10, 10, 10, 10, 10, 10, 10, 10],
    },
    {
      name: 'Meta',
      data: [20, 10, 65, 750], // 249, 3, 70, 91, 15, 140, 63, 356],
    },
  ]);

  // useEffect(() => {
  //   seT(
  //     transationsAmounts
  //       .filter((amount: any) => amount > 0)
  //       .reduce(
  //         (accumulator: any, transaction: any) => accumulator + transaction,
  //         0,
  //       )
  //       .toFixed(2),
  //   );
  // }, [t]);

  useEffect(() => {
    setInterval(() => {
      // income;
    }, 2000);
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      {/* <Header financial={true} /> */}
      <Flex h="100vh">
        <LayoutDashboard title="Home">
          <Layout>
            <Box mx={'auto'} className={style.container}>
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
                      value={ValueTotal}
                      buttonHide={false}
                    />
                    <CardValues
                      widthCard="100%"
                      title="receita"
                      value={t}
                      buttonHide={true}
                      iconLabel={<AiOutlineRise size={30} />}
                      bgRevenue={true}
                      borderRadiusBg={true}
                      ml={{ base: '', lg: '5px' }}
                    />
                  </Flex>
                  <Flex
                    mt={{ base: '', lg: '20px' }}
                    w={{ base: '95%', lg: '100%' }}
                    mx={'auto'}
                    flexDir={{ base: 'column', lg: 'row' }}
                  >
                    <CardValues
                      title="despesas"
                      value={expense}
                      buttonHide={true}
                      iconLabel={<AiOutlineFall size={30} />}
                      bgExpense={true}
                      borderRadiusBg={true}
                      widthCard="100%"
                    />
                    <CardValues
                      title="Investimento"
                      ml={{ base: '', lg: '5px' }}
                      value={4000}
                      buttonHide={true}
                      iconLabel={<AiOutlineBarChart size={30} />}
                      bgInvestment={true}
                      borderRadiusBg={true}
                      widthCard="100%"
                    />
                  </Flex>
                  <Box
                    as="form"
                    onSubmit={handleSubmit(handleTransition)}
                    w={{ base: '95%', lg: '400px' }}
                    mx={'auto'}
                    borderRadius="20px"
                    boxShadow={shadow}
                    p={{ base: '15px', lg: '8px 15px' }}
                  >
                    <Select
                      label="Transação:"
                      defaultValue={1}
                      mb="3px"
                      {...register('type')}
                      onClick={() => setValuePerson(getValues('type'))}
                      // onChange={(e: any) => setValuePerson(e.target.value)}
                    >
                      <option value={1}>Receita</option>
                      <option value={2}>Despesas</option>
                      <option value={3}>Meta</option>
                    </Select>
                    <Input
                      placeholder={
                        valuePerson == '3'
                          ? 'Nome da Meta'
                          : valuePerson == '2'
                          ? 'Nome da Despesa'
                          : valuePerson == '1'
                          ? 'Nome da Receita'
                          : ''
                      }
                      label={
                        valuePerson == '3'
                          ? 'Meta'
                          : valuePerson == '2'
                          ? 'Despesa'
                          : valuePerson == '1'
                          ? 'Receita'
                          : ''
                      }
                      mb="3px"
                      {...register('name')}
                      error={formState.errors.name}
                    />
                    <Input
                      placeholder="Valor da Receita"
                      label="Valor:"
                      type={'number'}
                      step="any"
                      mb="3px"
                      {...register('amount')}
                      error={formState.errors.amount}
                    />
                    <Button
                      bg="#1f9ce4"
                      w={{ base: '100%', md: '100%' }}
                      h="50px"
                      color="#fff"
                      mt={{ base: '30px', md: '20px' }}
                      type="submit"
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
                        type="heatmap"
                        width={'100%'}
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
                        type="donut"
                        width={330}
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
                        mr={{ base: '', lg: '20px' }}
                        borderRadius="20px"
                        boxShadow={shadow}
                        p={{ base: '10px', lg: '20px 15px' }}
                        h="230px"
                        overflowY={'scroll'}
                        className={style.BoxScroll}
                      >
                        <Text>Histórico de Transações</Text>
                        <Flex></Flex>
                        {total &&
                          total.map((item: any, key: any) => {
                            return (
                              <Box key={key}>
                                <CardHistory
                                  key={item.id}
                                  expense={item.type == 2 ? true : false}
                                  revenue={item.type == 1 ? true : false}
                                  goal={item.type == 3 ? true : false}
                                  type={item.type}
                                  name={item.name}
                                  date={DateForm()}
                                  value={Math.abs(item.amount)}
                                />
                              </Box>
                            );
                          })}
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
          <Layout>
            <Box mx={'auto'} className={style.container}>
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
                      value={ValueTotal}
                      buttonHide={false}
                    />
                    <CardValues
                      widthCard="100%"
                      title="receita"
                      value={t}
                      buttonHide={true}
                      iconLabel={<AiOutlineRise size={30} />}
                      bgRevenue={true}
                      borderRadiusBg={true}
                      ml={{ base: '', lg: '5px' }}
                    />
                  </Flex>
                  <Flex
                    mt={{ base: '', lg: '20px' }}
                    w={{ base: '95%', lg: '100%' }}
                    mx={'auto'}
                    flexDir={{ base: 'column', lg: 'row' }}
                  >
                    <CardValues
                      title="despesas"
                      value={expense}
                      buttonHide={true}
                      iconLabel={<AiOutlineFall size={30} />}
                      bgExpense={true}
                      borderRadiusBg={true}
                      widthCard="100%"
                    />
                    <CardValues
                      title="Investimento"
                      ml={{ base: '', lg: '5px' }}
                      value={4000}
                      buttonHide={true}
                      iconLabel={<AiOutlineBarChart size={30} />}
                      bgInvestment={true}
                      borderRadiusBg={true}
                      widthCard="100%"
                    />
                  </Flex>
                  <Box
                    as="form"
                    onSubmit={handleSubmit(handleTransition)}
                    w={{ base: '95%', lg: '400px' }}
                    mx={'auto'}
                    borderRadius="20px"
                    boxShadow={shadow}
                    p={{ base: '15px', lg: '8px 15px' }}
                  >
                    <Select
                      label="Transação:"
                      defaultValue={1}
                      mb="3px"
                      {...register('type')}
                      onClick={() => setValuePerson(getValues('type'))}
                      // onChange={(e: any) => setValuePerson(e.target.value)}
                    >
                      <option value={1}>Receita</option>
                      <option value={2}>Despesas</option>
                      <option value={3}>Meta</option>
                    </Select>
                    <Input
                      placeholder={
                        valuePerson == '3'
                          ? 'Nome da Meta'
                          : valuePerson == '2'
                          ? 'Nome da Despesa'
                          : valuePerson == '1'
                          ? 'Nome da Receita'
                          : ''
                      }
                      label={
                        valuePerson == '3'
                          ? 'Meta'
                          : valuePerson == '2'
                          ? 'Despesa'
                          : valuePerson == '1'
                          ? 'Receita'
                          : ''
                      }
                      mb="3px"
                      {...register('name')}
                      error={formState.errors.name}
                    />
                    <Input
                      placeholder="Valor da Receita"
                      label="Valor:"
                      type={'number'}
                      step="any"
                      mb="3px"
                      {...register('amount')}
                      error={formState.errors.amount}
                    />
                    <Button
                      bg="#1f9ce4"
                      w={{ base: '100%', md: '100%' }}
                      h="50px"
                      color="#fff"
                      mt={{ base: '30px', md: '20px' }}
                      type="submit"
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
                        type="line"
                        width={'100%'}
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
                        type="donut"
                        width={330}
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
                        mr={{ base: '', lg: '20px' }}
                        borderRadius="20px"
                        boxShadow={shadow}
                        p={{ base: '10px', lg: '20px 15px' }}
                        h="230px"
                        overflowY={'scroll'}
                        className={style.BoxScroll}
                      >
                        <Text>Histórico de Transações</Text>
                        <Flex></Flex>
                        {total &&
                          total.map((item: any, key: any) => {
                            return (
                              <Box key={key}>
                                <CardHistory
                                  key={item.id}
                                  expense={item.type == 2 ? true : false}
                                  revenue={item.type == 1 ? true : false}
                                  goal={item.type == 3 ? true : false}
                                  type={item.type}
                                  name={item.name}
                                  date={DateForm()}
                                  value={Math.abs(item.amount)}
                                />
                              </Box>
                            );
                          })}
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
        </LayoutDashboard>
      </Flex>
    </Box>
  );
}
// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const { ['nextauth.token']: token } = parseCookies(ctx);

//   if (!token) {
//     return {
//       redirect: {
//         destination: '/login',
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {},
//   };
// };
