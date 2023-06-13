'use client';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';
import { HTMLAttributes } from 'react';

interface AuthProviderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
