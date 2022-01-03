import {

  Box,
  Button,

  useColorModeValue,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Input, Select } from '..';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface DataTransition {
  id: number;
  name: string;
  amount: number;
  type: number;
}

export function Form() {
  const TransitionInFormSchema = yup.object().shape({
    name: yup.string().required('Nome Obrigatório'),
    type: yup.string().required('Nome Obrigatório'),
    amount: yup.string().required('Valor obrigatorio'),
  });
  const [valuePerson, setValuePerson] = useState<any>('1');
  const generateId = () => Math.round(Math.random() * 1000);
  const [local, setLocal] = useState<any>();
  console.log(local);

  let [total, setTotal] = useState<any>([
    { id: 1, name: 'Carro', amount: -52, type: 2 },
    { id: 2, name: 'Moto', amount: 612, type: 1 },
    { id: 3, name: 'Viagem', amount: -252, type: 2 },
    { id: 4, name: 'aniversario', amount: 62, type: 3 },
    { id: 6, name: 'Show', amount: 92, type: 3 },
  ]);

  const handleTransition = (data: DataTransition) => {
    const transition = {
      id: generateId(),
      name: data.name,
      amount: Number(data.type == 2 ? `-${data.amount}` : data.amount),
      type: data.type,
    };

    console.log('Oi',transition);
    localStorage.setItem('Transations', JSON.stringify(total));

    // console.log(pegar);

    setTotal([transition, ...total]);
  };

  const transationsAmounts = total.map((transition: any) => transition.amount);
  const ValueTotal = transationsAmounts
    .reduce(
      (accumulator: any, transaction: any) => accumulator + transaction,
      0,
    )
    .toFixed(2);

  const income = transationsAmounts
    .filter((amount: any) => amount > 0)
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
  const goal = total.filter((goal: any) => goal.type == 3);
  const amountGoal = goal
    .map((goal: any) => goal.amount)
    .reduce(
      (accumulator: any, transaction: any) => accumulator + transaction,
      0,
    );

  const { register, handleSubmit, formState, setValue, getValues } = useForm({
    resolver: yupResolver(TransitionInFormSchema),
  });
  const shadow = useColorModeValue('lg', 'dark-lg');

  return (
    <>
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
    </>
  );
}
