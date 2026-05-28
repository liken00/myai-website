'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { EDITOR_URL, DOCS_URL } from '@/lib/constants';

interface NavItem {
  label: string;
  children?: { label: string; href: string }[];
}

const NAV_ITEMS: NavItem[] = [
  {
    label: 'AI 图片',
    children: [
      { label: '文生图', href: '#generator' },
      { label: '图生图', href: '#generator' },
      { label: '图片模板', href: '#templates' },
    ],
  },
  {
    label: 'AI 视频',
    children: [
      { label: 'AI 视频生成器', href: '#generator' },
      { label: '文生视频', href: '#generator' },
      { label: '图生视频', href: '#generator' },
      { label: 'Lip Sync', href: '#generator' },
    ],
  },
  {
    label: 'AI 图片编辑器',
    children: [
      { label: '图片编辑器', href: EDITOR_URL },
      { label: '扩展图像', href: EDITOR_URL },
      { label: '移除背景', href: EDITOR_URL },
    ],
  },
  {
    label: 'AI 模型',
    children: [
      { label: '图片模型', href: '#models' },
      { label: '视频模型', href: '#models' },
    ],
  },
  {
    label: 'AI 工具',
    children: [
      { label: '3D 模型生成', href: '#models' },
      { label: '声音克隆', href: '#models' },
      { label: '对口型视频', href: '#models' },
    ],
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const isInsideDropdown = Object.values(dropdownRefs.current).some(
        (ref) => ref && ref.contains(e.target as Node)
      );
      if (!isInsideDropdown) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: 'var(--color-bg-base)',
        borderBottom: '1px solid var(--color-border-subtle)',
        height: '64px',
      }}
    >
      <div
        className="max-w-7xl mx-auto px-6 lg:px-8"
        style={{ height: '100%' }}
      >
        <div
          className="flex items-center justify-between"
          style={{ height: '100%' }}
        >
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold"
            style={{ color: 'var(--color-accent)' }}
          >
            MYAI
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                ref={(el) => {
                  dropdownRefs.current[item.label] = el;
                }}
                className="relative"
              >
                {item.children ? (
                  <>
                    <button
                      onClick={() => handleDropdownToggle(item.label)}
                      className="flex items-center gap-1 px-3 py-2 text-sm rounded-md transition-colors"
                      style={{
                        color:
                          openDropdown === item.label
                            ? 'var(--color-text-primary)'
                            : 'var(--color-text-secondary)',
                      }}
                    >
                      {item.label}
                      <svg
                        className="w-4 h-4 transition-transform duration-200"
                        style={{
                          transform:
                            openDropdown === item.label
                              ? 'rotate(180deg)'
                              : 'rotate(0deg)',
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
                    {openDropdown === item.label && (
                      <div
                        className="absolute top-full left-0 mt-2 py-2 min-w-[160px]"
                        style={{
                          backgroundColor: 'var(--color-bg-elevated)',
                          border: '1px solid var(--color-border)',
                          borderRadius: 'var(--radius-lg)',
                          boxShadow: '0 8px 32px rgba(0,0,0,0.40)',
                        }}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setOpenDropdown(null)}
                            className="block px-4 py-2 text-sm transition-colors"
                            style={{
                              color: 'var(--color-text-secondary)',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor =
                                'var(--color-border-subtle)';
                              e.currentTarget.style.color =
                                'var(--color-text-primary)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor =
                                'transparent';
                              e.currentTarget.style.color =
                                'var(--color-text-secondary)';
                            }}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.children ? '#' : '#generator'}
                    className="px-3 py-2 text-sm rounded-md transition-colors"
                    style={{ color: 'var(--color-text-secondary)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--color-text-primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color =
                        'var(--color-text-secondary)';
                    }}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            <Link
              href="#pricing"
              className="px-3 py-2 text-sm rounded-md transition-colors"
              style={{ color: 'var(--color-text-secondary)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--color-text-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--color-text-secondary)';
              }}
            >
              定价
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href={EDITOR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-sm rounded-md transition-colors"
              style={{ color: 'var(--color-text-secondary)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--color-text-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--color-text-secondary)';
              }}
            >
              打开编辑器
            </a>
            <a
              href={DOCS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-sm rounded-md transition-colors"
              style={{ color: 'var(--color-text-secondary)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--color-text-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--color-text-secondary)';
              }}
            >
              API 文档
            </a>
            <Link
              href="#generator"
              className="px-4 py-2 text-sm font-medium rounded-md transition-all"
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
              开始创作
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-3 rounded-md transition-colors"
            style={{ color: 'var(--color-text-secondary)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-border-subtle)';
              e.currentTarget.style.color = 'var(--color-text-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--color-text-secondary)';
            }}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-16"
          style={{
            backgroundColor: 'rgba(7, 10, 18, 0.95)',
            zIndex: 40,
          }}
        >
          <div className="px-6 py-6 space-y-6 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 64px)' }}>
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                <div
                  className="text-xs font-medium uppercase tracking-wider mb-3"
                  style={{ color: 'var(--color-text-tertiary)' }}
                >
                  {item.label}
                </div>
                <div className="space-y-1">
                  {item.children?.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-sm rounded-md transition-colors"
                      style={{ color: 'var(--color-text-secondary)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--color-text-primary)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--color-text-secondary)';
                      }}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <Link
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm rounded-md transition-colors"
              style={{ color: 'var(--color-text-secondary)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--color-text-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--color-text-secondary)';
              }}
            >
              定价
            </Link>

            <div
              className="pt-4 border-t"
              style={{ borderColor: 'var(--color-border-subtle)' }}
            >
              <a
                href={EDITOR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 text-sm rounded-md transition-colors"
                style={{ color: 'var(--color-text-secondary)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-text-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--color-text-secondary)';
                }}
              >
                打开编辑器
              </a>
              <a
                href={DOCS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 text-sm rounded-md transition-colors"
                style={{ color: 'var(--color-text-secondary)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-text-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--color-text-secondary)';
                }}
              >
                API 文档
              </a>
              <Link
                href="#generator"
                onClick={() => setMobileMenuOpen(false)}
                className="block mt-3 px-4 py-3 text-sm font-medium text-center rounded-md"
                style={{
                  backgroundColor: 'var(--color-accent)',
                  color: 'var(--color-text-inverse)',
                }}
              >
                开始创作
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}