import React from 'react';
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
  CircularProgress,
} from '~/components';

export default function Control() {
  const { toggleColorMode } = useColorMode();
  const color = useColorModeValue('red', 'yellow.800');
  const shadow = useColorModeValue('lg', 'dark-lg');

  return (
    <Box>
      <Header financial={true} />
      <Layout>
        <Box
          mt="95px"
          w={{ base: '95%', lg: '93%' }}
          mx="auto"
          borderRadius="20px"
          boxShadow={shadow}
          p={{ base: '15px', lg: '25px 30px' }}
        >
          {/* <Flex
            justify="space-between"
            flexDir={{ base: 'column-reverse', lg: 'row' }}
          > */}
          <Box w={{ base: '100%', lg: '100%' }}>
            <Flex w="full">
              <Box>
                <CardValues
                  title="Saldo Atual"
                  value={4000}
                  buttonHide={false}
                />
                <CardValues
                  title="receita"
                  value={4000}
                  buttonHide={true}
                  iconLabel={<AiOutlineRise size={30} />}
                  bgRevenue={true}
                  borderRadiusBg={true}
                />
              </Box>
              <Box>
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
                  value={4000}
                  buttonHide={true}
                  iconLabel={<AiOutlineBarChart size={30} />}
                  bgInvestment={true}
                  borderRadiusBg={true}
                />
              </Box>
              <Box
                w={{ base: '95%', lg: '40%' }}
                borderRadius="20px"
                boxShadow={shadow}
                p={{ base: '15px', lg: '25px 30px' }}
              ></Box>
            </Flex>
            <Flex mt="20px" justifyContent="space-between" w="full">
              <Box
                w={{ base: '95%', lg: '45%' }}
                mr="20px"
                borderRadius="20px"
                boxShadow={shadow}
                p={{ base: '15px', lg: '20px 15px' }}
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
                w={{ base: '95%', lg: '60%' }}
                mr="20px"
                borderRadius="20px"
                boxShadow={shadow}
                p={{ base: '15px', lg: '20px 15px' }}
              >
                <Text>Histórico de Transações</Text>
              </Box>
              <Box
                w={{ base: '95%', lg: '40%' }}
                borderRadius="20px"
                boxShadow={shadow}
                p={{ base: '15px', lg: '25px 30px' }}
              >
                <CircularProgress />
              </Box>
            </Flex>
          </Box>
          {/* <Box maxW={{ base: '100%', lg: '35%' }}>
              <Image src="/assets/images/lofo.png" alt="ImageBox" />
            </Box> */}
          {/* </Flex> */}
        </Box>
      </Layout>
    </Box>
  );
}
