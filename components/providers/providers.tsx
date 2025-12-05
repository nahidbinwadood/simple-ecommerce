'use client';

import type React from 'react';

import { store } from '@/lib/store';
 

import { Provider as ReduxProvider } from 'react-redux';
 

interface ProvidersProps {
  children: React.ReactNode;
 
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ReduxProvider store={store}>
     {children}
    </ReduxProvider>
  );
}