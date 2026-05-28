"use client";

import { Component, type ReactNode, type ErrorInfo } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;
      return (
        <div
          className="flex items-center justify-center min-h-[300px] p-8"
          style={{ backgroundColor: 'var(--color-bg-base)' }}
        >
          <div
            className="text-center max-w-md p-6"
            style={{
              backgroundColor: 'var(--color-bg-card)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
            }}
          >
            <div
              className="text-4xl mb-4"
              style={{ color: 'var(--color-warning)' }}
            >
              <svg
                className="w-12 h-12 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h2
              className="text-xl font-semibold mb-2"
              style={{ color: 'var(--color-text-primary)' }}
            >
              页面部分内容加载异常
            </h2>
            <p
              className="text-sm mb-4"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {this.state.error?.message || "发生了意外错误，请刷新页面重试"}
            </p>
            <button
              onClick={() => this.setState({ hasError: false, error: null })}
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
              重试
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}