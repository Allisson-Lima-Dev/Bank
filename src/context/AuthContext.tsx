import {
  createContext,
  ReactChild,
  ReactChildren,
  useEffect,
  useState,
} from 'react';
import {
  recoverUserInformation,
  signInRequest,
} from '~/services/hooks/useAuth';
import { setCookie, parseCookies } from 'nookies';
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
  isLoading: boolean;
  setIsLoading: any;
  user: User | null;
  handleId: any;
  signIn: (data: SignInData) => Promise<void>;
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

  async function signIn({ email, password }: SignInData) {
    const { token, id, user } = await signInRequest({
      email,
      password,
    });
    setCookie(undefined, 'nextauth.token', token, {
      maxAge: 60 * 60 * 1, // 1 hour
    });

    api.defaults.headers['Authorization'] = `Bearer ${token}`;
    setHandleId(id);

    localStorage.setItem('User', JSON.stringify(user));

    setUser(user);

    Router.push('/home');
  }

  if (isLoading) {
    return <h1>carregando....</h1>;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        signIn,
        handleId,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
