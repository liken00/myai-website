export interface GenerationParams {
  prompt: string;
  negative_prompt?: string;
  width?: number;
  height?: number;
  fastMode?: boolean;
}

export interface VideoParams {
  prompt: string;
  duration?: string;
  cameraMovement?: string;
}

export interface GenerationResult {
  id: string;
  type: 'image' | 'video';
  prompt: string;
  url: string;
  thumbnail?: string;
  createdAt: string;
  params?: GenerationParams | VideoParams;
}

export interface ModelCard {
  id: string;
  name: string;
  type: 'image' | 'video';
  description: string;
  features: string[];
}

export interface InspirationCard {
  id: string;
  title: string;
  prompt: string;
  gradient: string;
}

export interface StyleTemplate {
  id: string;
  name: string;
  prompt: string;
  gradient: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  gradient: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  features: string[];
  highlight?: boolean;
}