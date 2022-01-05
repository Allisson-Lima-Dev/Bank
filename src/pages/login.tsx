import React, { useContext, useState } from 'react';
import { GetServerSideProps } from 'next';
import Lottie from 'react-lottie';
import Image from 'next/image';
import {
  Flex,
  Checkbox,
  Button,
  Text,
  Container,
  useToast,
  Icon,
  InputGroup,
  InputRightElement,
  Box,
} from '@chakra-ui/react';
import { Input } from '~/components';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { BiShow, BiHide } from 'react-icons/bi';
import { AuthContext } from '~/context/AuthContext';
// import { AuthContext } from "~/contexts/AuthContext";
// import { ViewOffIcon, ViewIcon } from '@chakra-ui/icons';

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail Obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha Obrigatória'),
});

function Login() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickPassword = () => setShowPassword(!showPassword);
  const { signIn } = useContext(AuthContext);

  const [animation, setAnimation] = useState({
    isStopped: false,
    isPaused: false,
  });
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require('../lottie/login.json'),
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  async function handleSignIn(data: SignInFormData) {
    // setIsLoading(true);
    // await signIn(data).catch((err: { message: any; }) => {
    //   setIsLoading(false);
    //   toast({
    //     title: err.message,
    //     status: "error",
    //     variant: "solid",
    //     isClosable: true,
    //   });
    //});
    setIsLoading(true);

    await signIn(data).catch((err) => {
      toast({
        title: err.message,
        status: 'error',
        variant: 'solid',
        isClosable: true,
      });
    });
  }
  console.log(isLoading);

  return (
    <Container minW={'full'} h={{ base: '', xl: '100vh' }} p="0">
      <Flex h={'full'} flexDir={'row-reverse'}>
        <Flex flex={1} w="full" h="100%" display={['none', 'none', 'flex']}>
          <Flex justify={'center'} align={'center'}>
            <Lottie
              options={defaultOptions}
              height={'65%'}
              width={'100%'}
              isStopped={animation.isStopped}
              isPaused={animation.isPaused}
            />
          </Flex>
        </Flex>
        <Container
          flex={1}
          bg="primary"
          maxW={'container.lg'}
          d="flex"
          justifyContent="center"
          pos="relative"
        >
          <Flex
            as="form"
            onSubmit={handleSubmit(handleSignIn)}
            color="#fff"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            h="100vh"
            pt={{ base: 14, md: 0 }}
            w={{ base: 'auto', md: '350px' }}
            mb={{ base: '30%', md: 0 }}
          >
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Image
                alt="logo"
                src="/assets/images/Logo.png"
                width={'100%'}
                height={'100%'}
              />
              <Text mb={2} mt={2} textAlign="center">
                Bem-vindo ao
              </Text>
              <Text
                mb={2.5}
                fontSize={'xl'}
                fontWeight="700"
                textAlign="center"
              >
                Faça login na sua conta
              </Text>
            </Flex>
            <Input
              label="E-mail"
              size="lg"
              mb={4}
              variant="outline"
              placeholder="John.snow@gmail.com"
              {...register('email')}
              error={formState.errors.email}
            />
            <InputGroup size="lg">
              <Input
                label="Password"
                type={showPassword ? 'text' : 'password'}
                size="lg"
                mb="20px"
                variant="outline"
                placeholder="*********"
                {...register('password')}
                error={formState.errors.password}
              />
              <InputRightElement top="32px">
                {showPassword ? (
                  <BiHide onClick={handleClickPassword} />
                ) : (
                  <BiShow onClick={handleClickPassword} />
                )}
              </InputRightElement>
            </InputGroup>
            <Flex
              alignItems="center"
              justifyContent="space-between"
              mt={2.5}
              w="100%"
              direction={{ base: 'column', md: 'row' }}
            >
              <Checkbox>Lembre de mim</Checkbox>
              <Text fontSize="md">Esqueceu de mim?</Text>
            </Flex>
            <Button
              type="submit"
              w="100%"
              h="40px"
              mb="50px"
              mt={6}
              fontSize={'md'}
              variant="success"
            >
              Entrar
            </Button>
          </Flex>
          <Flex
            pos="absolute"
            bottom="8"
            mt="50px"
            alignItems="center"
            direction={{ base: 'column', md: 'row' }}
          >
            <Text color="white">Não tem uma conta? </Text>
            <Text ml={2} color="blue.400">
              Cadastre-se gratuitamente
            </Text>
          </Flex>
        </Container>
      </Flex>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const props = {};

  return {
    props,
  };
};

export default Login;
