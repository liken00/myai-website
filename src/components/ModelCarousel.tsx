'use client';

import { MODELS } from '@/lib/constants';

export default function ModelCarousel() {
  return (
    <section
      id="models"
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
            AI 模型中心
          </h2>
          <p
            className="text-base"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            选择最适合你的创作模型
          </p>
        </div>

        {/* Model Cards Carousel */}
        <div className="relative">
          <div
            className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {MODELS.map((model) => (
              <div
                key={model.id}
                className="flex-shrink-0 w-72 p-6 snap-start"
                style={{
                  backgroundColor: 'var(--color-bg-card)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-lg)',
                }}
              >
                {/* Type Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="px-3 py-1 text-xs font-medium rounded-full"
                    style={
                      model.type === '图片'
                        ? {
                            backgroundColor: 'rgba(56, 189, 248, 0.15)',
                            color: 'var(--color-accent)',
                          }
                        : {
                            backgroundColor: 'rgba(52, 211, 153, 0.15)',
                            color: 'var(--color-success)',
                          }
                    }
                  >
                    {model.type}
                  </span>
                </div>

                {/* Model Name */}
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {model.name}
                </h3>

                {/* Model Description */}
                <p
                  className="text-sm mb-4"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {model.feature}
                </p>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span
                    className="px-2 py-1 text-xs rounded"
                    style={{
                      backgroundColor: 'var(--color-bg-card-alt)',
                      color: 'var(--color-text-tertiary)',
                    }}
                  >
                    {model.feature}
                  </span>
                </div>

                {/* Use Model Button */}
                <a
                  href="#generator"
                  className="block w-full py-2.5 text-sm font-medium text-center rounded-md transition-all"
                  style={{
                    backgroundColor: 'transparent',
                    color: 'var(--color-text-primary)',
                    border: '1px solid var(--color-border)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-border-subtle)';
                    e.currentTarget.style.borderColor = 'var(--color-border-strong)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderColor = 'var(--color-border)';
                  }}
                >
                  使用此模型
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}