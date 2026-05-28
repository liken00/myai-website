import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MYAI - AI 文生图 · 文生视频创作平台',
  description: '释放创意，一触即达。MYAI 提供 AI 文生图、文生视频功能，支持多种风格模板和模型选择。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}