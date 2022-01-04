import {
  createContext,
  ReactChild,
  ReactChildren,
  useEffect,
  useState,
} from 'react';
import { Box, Flex, Spinner } from '@chakra-ui/react';
import {
  recoverUserInformation,
  signInRequest,
} from '~/services/hooks/useAuth';
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import Router from 'next/router';
import { api } from '~/services/api';

type Component = {
  children: ReactChild | ReactChildren;
};

type SignInData = {
  email: string;
  password: string;
};

type User = {
  _id: string;
  name: string;
  username: string;
  email: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  user: User | null;
  signIn: (data: SignInData) => Promise<void>;
  Logout(): void;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: Component) {
  const [handleId, setHandleId] = useState();
  const [user, setUser] = useState<User | any>();
  const [isLoading, setIsLoading] = useState(true);
  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies();
    const storagedUser = localStorage.getItem('User');
    if (token && storagedUser) {
      setUser(JSON.parse(storagedUser));
    }
    setIsLoading(false);
  }, []);

  const Logout = async () => {
    setIsLoading(true);

    setUser(null);
    localStorage.removeItem('User');
    const storagedUser = localStorage.getItem('User');
    if (!storagedUser) {
      destroyCookie(undefined, 'nextauth.token');
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }
    setIsLoading(false);
  };

  async function signIn({ email, password }: SignInData) {
    const { token, id, user } = await signInRequest({
      email,
      password,
    });
    setCookie(undefined, 'nextauth.token', token, {
      maxAge: 60 * 60 * 1, // 1 hour
    });

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    setHandleId(id);

    localStorage.setItem('User', JSON.stringify(user));

    setUser(user);

    Router.push('/home');
  }

  if (isLoading) {
    return (
      <Box bg="red.700" h="100vh">
        <Flex justify={'center'} h="100%">
          <Spinner size={'xs'} w={'20%'} h="20%" color="red" />
        </Flex>
      </Box>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        signIn,
        Logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
