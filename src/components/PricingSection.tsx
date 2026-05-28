'use client';

import { PRICING_PLANS } from '@/lib/constants';

export default function PricingSection() {
  return (
    <section
      id="pricing"
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
            定价方案
          </h2>
          <p
            className="text-base"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            选择适合你的创作方案
          </p>
          <span
            className="text-xs mt-2 block"
            style={{ color: 'var(--color-text-tertiary)' }}
          >
            仅为前端展示，无需支付功能
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.name}
              className="relative p-8"
              style={{
                backgroundColor: 'var(--color-bg-card)',
                border:
                  plan.name === 'Pro'
                    ? '1px solid var(--color-border-accent)'
                    : '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
              }}
            >
              {/* Recommended Badge */}
              {plan.name === 'Pro' && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-sm font-medium rounded-full"
                  style={{
                    backgroundColor: 'var(--color-accent)',
                    color: 'var(--color-text-inverse)',
                  }}
                >
                  推荐
                </div>
              )}

              {/* Plan Name */}
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: 'var(--color-text-primary)' }}
              >
                {plan.name}
              </h3>

              {/* Price */}
              <div
                className="text-3xl font-bold mb-6"
                style={{ color: 'var(--color-text-primary)' }}
              >
                {plan.price}
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-sm"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    <svg
                      className="w-5 h-5 flex-shrink-0"
                      style={{ color: 'var(--color-success)' }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className="w-full py-3 text-sm font-medium rounded-md transition-all"
                style={
                  plan.name === 'Pro'
                    ? {
                        backgroundColor: 'var(--color-accent)',
                        color: 'var(--color-text-inverse)',
                      }
                    : {
                        backgroundColor: 'transparent',
                        color: 'var(--color-text-primary)',
                        border: '1px solid var(--color-border)',
                      }
                }
                onMouseEnter={(e) => {
                  if (plan.name === 'Pro') {
                    e.currentTarget.style.filter = 'brightness(1.10)';
                  } else {
                    e.currentTarget.style.backgroundColor = 'var(--color-border-subtle)';
                    e.currentTarget.style.borderColor = 'var(--color-border-strong)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (plan.name === 'Pro') {
                    e.currentTarget.style.filter = 'brightness(1)';
                  } else {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderColor = 'var(--color-border)';
                  }
                }}
              >
                {plan.name === 'Free'
                  ? '免费开始'
                  : plan.name === 'Pro'
                  ? '联系我们'
                  : '获取方案'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}