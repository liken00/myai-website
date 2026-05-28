'use client';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
      style={{ backgroundColor: 'var(--color-bg-base)' }}
    >
      {/* Background decoration - subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(var(--color-border) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-border) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text Content */}
          <div className="text-center lg:text-left">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
              style={{
                color: 'var(--color-text-primary)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              <span style={{ color: 'var(--color-accent)' }}>MYAI</span>
            </h1>
            <p
              className="text-xl sm:text-2xl mb-8"
              style={{
                color: 'var(--color-text-secondary)',
                lineHeight: 1.6,
              }}
            >
              AI 文生图 · 文生视频创作平台
              <br />
              专业创作，一触即达
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="#generator"
                className="px-8 py-3 text-base font-medium rounded-md text-center transition-all"
                style={{
                  backgroundColor: 'var(--color-accent)',
                  color: 'var(--color-text-inverse)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = 'brightness(1.10)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = 'brightness(1)';
                }}
              >
                开始生成图片
              </a>
              <a
                href="#generator"
                className="px-8 py-3 text-base font-medium rounded-md text-center transition-all"
                style={{
                  backgroundColor: 'transparent',
                  color: 'var(--color-text-primary)',
                  border: '1px solid var(--color-border)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border-strong)';
                  e.currentTarget.style.backgroundColor = 'var(--color-border-subtle)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                生成视频
              </a>
              <a
                href="#inspiration"
                className="px-8 py-3 text-base font-medium rounded-md text-center transition-all"
                style={{
                  backgroundColor: 'transparent',
                  color: 'var(--color-text-secondary)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-text-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--color-text-secondary)';
                }}
              >
                查看灵感
              </a>
            </div>
          </div>

          {/* Right - Visual Demo */}
          <div className="relative hidden lg:block">
            <div
              className="relative p-6"
              style={{
                backgroundColor: 'var(--color-bg-card)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
              }}
            >
              {/* Window controls */}
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: 'var(--color-error)' }}
                />
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: 'var(--color-warning)' }}
                />
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: 'var(--color-success)' }}
                />
              </div>

              {/* Demo content */}
              <div className="space-y-4">
                {/* Image generation preview */}
                <div
                  className="p-4"
                  style={{
                    backgroundColor: 'var(--color-bg-card-alt)',
                    border: '1px solid var(--color-border-subtle)',
                    borderRadius: 'var(--radius-md)',
                  }}
                >
                  <div
                    className="text-xs font-medium mb-2"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    图片生成
                  </div>
                  <div
                    className="text-sm mb-3"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    未来城市夜景，霓虹灯光
                  </div>
                  <div
                    className="h-32 flex items-center justify-center"
                    style={{
                      backgroundColor: 'var(--color-bg-elevated)',
                      borderRadius: 'var(--radius-md)',
                    }}
                  >
                    <span
                      className="text-sm"
                      style={{ color: 'var(--color-text-tertiary)' }}
                    >
                      生成预览
                    </span>
                  </div>
                </div>

                {/* Video generation preview */}
                <div
                  className="p-4"
                  style={{
                    backgroundColor: 'var(--color-bg-card-alt)',
                    border: '1px solid var(--color-border-subtle)',
                    borderRadius: 'var(--radius-md)',
                  }}
                >
                  <div
                    className="text-xs font-medium mb-2"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    视频生成
                  </div>
                  <div
                    className="text-sm mb-3"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    海浪拍打礁石，日出时分
                  </div>
                  <div
                    className="h-20 flex items-center justify-center"
                    style={{
                      backgroundColor: 'var(--color-bg-elevated)',
                      borderRadius: 'var(--radius-md)',
                    }}
                  >
                    <span
                      className="text-sm"
                      style={{ color: 'var(--color-text-tertiary)' }}
                    >
                      生成预览
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
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
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}