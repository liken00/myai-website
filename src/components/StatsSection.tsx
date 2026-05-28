'use client';

import { STATS } from '@/lib/constants';

export default function StatsSection() {
  return (
    <section
      className="py-20"
      style={{ backgroundColor: 'var(--color-bg-card-alt)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Demo Data Label */}
        <div className="text-center mb-8">
          <span
            className="text-sm"
            style={{ color: 'var(--color-text-tertiary)' }}
          >
            演示数据
          </span>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <div key={index} className="text-center">
              <div
                className="text-4xl lg:text-5xl font-bold mb-2"
                style={{
                  color: 'var(--color-accent)',
                  letterSpacing: '-0.02em',
                }}
              >
                {stat.value}
              </div>
              <div
                className="text-sm"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}