import { NextRequest, NextResponse } from 'next/server';

const VIDEO_API_URL = process.env.MYAI_VIDEO_API_URL;
const AUTH_TOKEN = process.env.MYAI_UPSTREAM_AUTH_TOKEN;

export async function POST(request: NextRequest) {
  if (!VIDEO_API_URL) {
    return NextResponse.json(
      { success: false, error: '视频生成服务未配置', status: 500 },
      { status: 500 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: '无效的请求格式', status: 400 },
      { status: 400 }
    );
  }

  const { prompt } = body;

  if (!prompt || typeof prompt !== 'string' || prompt.trim() === '') {
    return NextResponse.json(
      { success: false, error: 'prompt 不能为空', status: 400 },
      { status: 400 }
    );
  }

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  if (AUTH_TOKEN) {
    headers['Authorization'] = `Bearer ${AUTH_TOKEN}`;
  }

  let upstreamResponse: Response;
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 60_000);
    upstreamResponse = await fetch(VIDEO_API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({ prompt }),
      signal: controller.signal,
    });
    clearTimeout(timeout);
  } catch (err) {
    const msg = err instanceof Error && err.name === 'AbortError'
      ? '生成超时，请稍后重试。'
      : '网络连接失败，请检查服务是否正常运行。';
    return NextResponse.json({ success: false, error: msg, status: 408 }, { status: 200 });
  }

  if (!upstreamResponse.ok) {
    let errorMsg = '视频生成失败，请稍后重试。';
    if (upstreamResponse.status === 401 || upstreamResponse.status === 403) {
      errorMsg = 'API 鉴权失败，请检查上游服务权限或环境变量。';
    } else if (upstreamResponse.status === 500 || upstreamResponse.status === 503) {
      errorMsg = '生成服务暂时不可用，请稍后再试。';
    }
    return NextResponse.json({ success: false, error: errorMsg, status: upstreamResponse.status }, { status: 200 });
  }

  let data: unknown;
  try {
    data = await upstreamResponse.json();
  } catch {
    return NextResponse.json(
      { success: false, error: '无法解析上游响应', status: 502 },
      { status: 200 }
    );
  }

  return NextResponse.json({ success: true, data });
}
