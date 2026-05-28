'use client';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ModelCarousel from '@/components/ModelCarousel';
import GeneratorStudio from '@/components/GeneratorStudio';
import InspirationGallery from '@/components/InspirationGallery';
import StyleTemplates from '@/components/StyleTemplates';
import FeatureSection from '@/components/FeatureSection';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import { GenerationProvider } from '@/components/GenerationContext';
import ErrorBoundary from '@/components/ErrorBoundary';

export default function Home() {
  return (
    <ErrorBoundary>
      <GenerationProvider>
        <main
          className="min-h-screen"
          style={{ backgroundColor: 'var(--color-bg-base)' }}
        >
          <Header />
          <HeroSection />
          <ModelCarousel />
          <GeneratorStudio />
          <InspirationGallery />
          <StyleTemplates />
          <FeatureSection />
          <StatsSection />
          <TestimonialsSection />
          <PricingSection />
          <FAQSection />
          <Footer />
        </main>
      </GenerationProvider>
    </ErrorBoundary>
  );
}