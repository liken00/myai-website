import type { GenerationResult } from '@/types/generation';

const STORAGE_KEY = 'myai_generations';

export function getGenerations(): GenerationResult[] {
  if (typeof window === 'undefined') return [];
  
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return [];
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveGeneration(result: GenerationResult): void {
  if (typeof window === 'undefined') return;
  
  try {
    const existing = getGenerations();
    const updated = [result, ...existing].slice(0, 100);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch {
    console.error('保存生成记录失败');
  }
}

export function clearGenerations(): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    console.error('清除生成记录失败');
  }
}