import { ReactNode } from 'react';

import { AuthProvider } from './auth';

interface ProviderProps {
  children: ReactNode;
}

export function Provider({ children }: ProviderProps) {
  return <AuthProvider>{children}</AuthProvider>;
}
