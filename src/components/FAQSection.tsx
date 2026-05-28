'use client';

import { useState } from 'react';
import { FAQS } from '@/lib/constants';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      className="py-24"
      style={{ backgroundColor: 'var(--color-bg-base)' }}
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl font-semibold mb-4"
            style={{ color: 'var(--color-text-primary)' }}
          >
            常见问题
          </h2>
          <p
            className="text-base"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            有问题？我们来解答
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'var(--color-bg-card)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
              }}
            >
              {/* Question Button */}
              <button
                onClick={() => handleToggle(idx)}
                className="w-full flex items-center justify-between p-5 text-left transition-colors"
                style={{
                  backgroundColor: 'transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-bg-card-alt)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <span
                  className="font-medium"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {faq.q}
                </span>
                <svg
                  className="w-5 h-5 flex-shrink-0 transition-transform duration-200"
                  style={{
                    color: 'var(--color-text-tertiary)',
                    transform: openIndex === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Answer */}
              {openIndex === idx && (
                <div
                  className="px-5 pb-5 text-sm"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}