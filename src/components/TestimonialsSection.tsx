'use client';

import { TESTIMONIALS } from '@/lib/constants';

export default function TestimonialsSection() {
  return (
    <section
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
            用户评价
          </h2>
          <p
            className="text-base"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            来自创作者社区的真实反馈
          </p>
          <span
            className="text-xs mt-2 block"
            style={{ color: 'var(--color-text-tertiary)' }}
          >
            以下均为示例评价
          </span>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="p-6"
              style={{
                backgroundColor: 'var(--color-bg-card)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
              }}
            >
              {/* Avatar */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{
                  backgroundColor: 'var(--color-bg-card-alt)',
                }}
              >
                <svg
                  className="w-6 h-6"
                  style={{ color: 'var(--color-text-tertiary)' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>

              {/* Quote */}
              <p
                className="mb-4"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author Info */}
              <div>
                <div
                  className="font-medium"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {testimonial.name}
                </div>
                <div
                  className="text-sm"
                  style={{ color: 'var(--color-text-tertiary)' }}
                >
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}