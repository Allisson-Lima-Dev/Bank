import {
  createContext,
  ReactChild,
  ReactChildren,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Box, Flex, Spinner } from '@chakra-ui/react';
import Lottie from 'react-lottie';
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
  const [isLoading, setIsLoading] = useState(false);
  const isAuthenticated = !!user;

  const [animation, setAnimation] = useState({
    isStopped: false,
    isPaused: false,
  });
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: require('../lottie/splash.json.json'),
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const container = useRef(null);

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
    setTimeout(() => {
      window.location.reload();
    }, 3200);
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
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3300);

    Router.push('/home');
  }

  if (isLoading) {
    return (
      <Flex
        justify={'center'}
        align={'center'}
        p="0"
        bg={''}
        h="90vh"
        my="auto"
      >
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
          isStopped={animation.isStopped}
          isPaused={animation.isPaused}
        />
      </Flex>
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
