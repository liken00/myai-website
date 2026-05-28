'use client';

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { GenerationResult } from '@/types/generation';

interface GenerationContextType {
  prompt: string;
  setPrompt: (prompt: string) => void;
  scrollToGenerator: () => void;
}

const GenerationContext = createContext<GenerationContextType | null>(null);

export function GenerationProvider({ children }: { children: ReactNode }) {
  const [prompt, setPrompt] = useState('');
  
  const scrollToGenerator = useCallback(() => {
    const el = document.getElementById('generator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  
  return (
    <GenerationContext.Provider value={{ prompt, setPrompt, scrollToGenerator }}>
      {children}
    </GenerationContext.Provider>
  );
}

export function useGeneration() {
  const context = useContext(GenerationContext);
  if (!context) {
    throw new Error('useGeneration must be used within GenerationProvider');
  }
  return context;
}