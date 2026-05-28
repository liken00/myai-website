'use client';

import { STYLE_TEMPLATES } from '@/lib/constants';
import { useGeneration } from './GenerationContext';

// Map gradient classes to CSS gradient values for consistency
const GRADIENT_MAP: Record<string, string> = {
  'from-sky-600 to-blue-600': 'linear-gradient(135deg, #0284c7 0%, #3b82f6 100%)',
  'from-amber-600 to-orange-600': 'linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)',
  'from-red-600 to-orange-600': 'linear-gradient(135deg, #dc2626 0%, #ea580c 100%)',
  'from-cyan-600 to-blue-600': 'linear-gradient(135deg, #0891b2 0%, #3b82f6 100%)',
  'from-emerald-600 to-teal-600': 'linear-gradient(135deg, #059669 0%, #0d9488 100%)',
  'from-yellow-600 to-orange-600': 'linear-gradient(135deg, #ca8a04 0%, #ea580c 100%)',
  'from-blue-600 to-indigo-600': 'linear-gradient(135deg, #3b82f6 0%, #4f46e5 100%)',
  'from-cyan-600 to-indigo-600': 'linear-gradient(135deg, #0891b2 0%, #4f46e5 100%)',
  'from-teal-600 to-cyan-600': 'linear-gradient(135deg, #0d9488 0%, #0891b2 100%)',
  'from-slate-600 to-gray-600': 'linear-gradient(135deg, #475569 0%, #6b7280 100%)',
  'from-orange-600 to-amber-600': 'linear-gradient(135deg, #ea580c 0%, #f59e0b 100%)',
};

export default function StyleTemplates() {
  const { setPrompt, scrollToGenerator } = useGeneration();

  const handleUseTemplate = (templatePrompt: string) => {
    setPrompt(templatePrompt);
    scrollToGenerator();
  };

  return (
    <section
      id="templates"
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
            风格模板
          </h2>
          <p
            className="text-base"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            选择风格模板，快速生成心仪作品
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STYLE_TEMPLATES.map((template) => (
            <div
              key={template.name}
              onClick={() => handleUseTemplate(template.prompt)}
              className="group cursor-pointer"
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
              }}
            >
              {/* Gradient Preview */}
              <div
                className="h-48 flex items-center justify-center mb-3 transition-transform duration-200 group-hover:scale-105"
                style={{
                  background: GRADIENT_MAP[template.gradient] || 'var(--color-bg-elevated)',
                  borderRadius: 'var(--radius-lg)',
                }}
              >
                {/* Decorative icon - geometric shape */}
                <div
                  className="w-10 h-10 flex items-center justify-center"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    borderRadius: 'var(--radius-md)',
                  }}
                >
                  <svg className="w-5 h-5" style={{ color: 'rgba(255,255,255,0.6)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              {/* Template Info */}
              <h3
                className="text-base font-semibold mb-1 text-center"
                style={{ color: 'var(--color-text-primary)' }}
              >
                {template.name}
              </h3>
              <p
                className="text-sm text-center truncate"
                style={{ color: 'var(--color-text-tertiary)' }}
              >
                {template.prompt.slice(0, 30)}...
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}