import { createContext, ReactChild, ReactChildren, useState } from 'react';
import { signInRequest } from '~/services/auth';
import { setCookie } from 'nookies';
import Router from 'next/router';

type Component = {
  children: ReactChild | ReactChildren;
};

type SignInData = {
  email: string;
  password: string;
};

type User = {
  name: string;
  email: string;
  avatar_url: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  user: User | null;
  sigIn: (data: SignInData) => Promise<void>;
};

const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: Component) {
  const [user, setUser] = useState<User | null>(null);
  const isAuthenticated = false;

  async function signIn({ email, password }: SignInData) {

      const { token, user } = await signInRequest({
        email,
        password,
      });
      setCookie(undefined, 'nextauth.token', token, {
        maxAge: 60 * 60 * 1, // 1 hour
      });

      setUser(user);

      Router.push('/home');
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
