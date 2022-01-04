import { HeadersDefaults } from 'axios';
import { parseCookies } from 'nookies';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { api } from '../api';
import { parseJwt } from './useDecoToken';

interface CommonHeaderProperties extends HeadersDefaults {
  Authorization: string;
}

type SignInRequestData = {
  email: string;
  password: string;
};

// const delay = (amount = 750) =>
//   new Promise((resolve) => setTimeout(resolve, amount));

let getId: any;

export async function signInRequest(signin: SignInRequestData) {


  const { data } = await api.post('login', signin);

  const { id } = parseJwt(data.token);
  getId = id;
  console.log(id);

  return {
    token: data.token,
    result: data.result,
    user: data.userV,
    id: id,
  };
}

export async function recoverUserInformation() {

  try {
    const { data } = await api.get(`/user/61d04546ebf004c3f7439a5f`);

    return {
      user: {
        _id: data._id,
        name: data.name,
        username: data.username,
        email: data.email,
      },
    };
  } catch (error: any) {
    console.log(error);
  }
}
