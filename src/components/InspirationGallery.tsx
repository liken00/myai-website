'use client';

import { INSPIRATIONS } from '@/lib/constants';
import { useGeneration } from './GenerationContext';

// Map gradient classes to CSS gradient values for consistency
const GRADIENT_MAP: Record<string, string> = {
  'from-cyan-600 to-blue-600': 'linear-gradient(135deg, #0891b2 0%, #3b82f6 100%)',
  'from-amber-600 to-orange-600': 'linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)',
  'from-emerald-600 to-teal-600': 'linear-gradient(135deg, #059669 0%, #0d9488 100%)',
  'from-orange-600 to-red-600': 'linear-gradient(135deg, #ea580c 0%, #dc2626 100%)',
  'from-slate-600 to-gray-600': 'linear-gradient(135deg, #475569 0%, #6b7280 100%)',
  'from-yellow-600 to-amber-600': 'linear-gradient(135deg, #ca8a04 0%, #f59e0b 100%)',
  'from-blue-600 to-indigo-600': 'linear-gradient(135deg, #3b82f6 0%, #4f46e5 100%)',
  'from-teal-600 to-cyan-600': 'linear-gradient(135deg, #0d9488 0%, #0891b2 100%)',
  'from-red-600 to-orange-600': 'linear-gradient(135deg, #dc2626 0%, #ea580c 100%)',
};

export default function InspirationGallery() {
  const { setPrompt, scrollToGenerator } = useGeneration();

  const handleUseInspiration = (inspirationPrompt: string) => {
    setPrompt(inspirationPrompt);
    scrollToGenerator();
  };

  return (
    <section
      id="inspiration"
      className="py-24"
      style={{ backgroundColor: 'var(--color-bg-base)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl font-semibold mb-4"
            style={{ color: 'var(--color-text-primary)' }}
          >
            灵感图库
          </h2>
          <p
            className="text-base"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            探索创意，获取灵感，一键使用
          </p>
        </div>

        {/* Inspiration Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {INSPIRATIONS.map((item) => (
            <div
              key={item.title}
              className="group cursor-pointer"
              style={{
                backgroundColor: 'var(--color-bg-card)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                transition: 'border-color 150ms ease-out',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border-accent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border)';
              }}
            >
              {/* Gradient Preview Area */}
              <div
                className="h-40 flex items-center justify-center"
                style={{
                  background: GRADIENT_MAP[item.gradient] || 'var(--color-bg-elevated)',
                }}
              >
                {/* Decorative element */}
                <div
                  className="w-12 h-12 rounded-full"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.1)',
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3
                  className="text-base font-semibold mb-2"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm line-clamp-2 mb-4"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {item.prompt}
                </p>

                <button
                  onClick={() => handleUseInspiration(item.prompt)}
                  className="w-full py-2 text-sm font-medium rounded-md transition-all"
                  style={{
                    backgroundColor: 'var(--color-border-subtle)',
                    color: 'var(--color-text-primary)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-border)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-border-subtle)';
                  }}
                >
                  点击使用
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}