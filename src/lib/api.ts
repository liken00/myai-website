import type { GenerationResult, GenerationParams, VideoParams } from '@/types/generation';

interface ApiResponse {
  success: boolean;
  data?: unknown;
  error?: string;
  status?: number;
}

interface ProxyApiResponse {
  output?: string[];
  image?: string;
  url?: string;
  video?: string;
  data?: { url?: string };
}

function parseImageResponse(data: unknown): string | null {
  if (!data || typeof data !== 'object') return null;
  const d = data as Record<string, unknown>;
  if (Array.isArray(d.output) && d.output.length > 0) {
    return typeof d.output[0] === 'string' ? d.output[0] : null;
  }
  if (typeof d.image === 'string') return d.image;
  if (typeof d.url === 'string') return d.url;
  if (d.data && typeof d.data === 'object') {
    const nested = d.data as Record<string, unknown>;
    if (typeof nested.url === 'string') return nested.url;
  }
  return null;
}

function parseVideoResponse(data: unknown): string | null {
  if (!data || typeof data !== 'object') return null;
  const d = data as Record<string, unknown>;
  // Handle nested proxy response: { success: true, url: "..." }
  // The proxy wraps upstream response inside proxyData.data
  if (d.success === true && typeof d.url === 'string') {
    return d.url;
  }
  if (typeof d.url === 'string') return d.url;
  if (typeof d.video === 'string') return d.video;
  if (Array.isArray(d.output) && d.output.length > 0) {
    return typeof d.output[0] === 'string' ? d.output[0] : null;
  }
  if (d.data && typeof d.data === 'object') {
    const nested = d.data as Record<string, unknown>;
    if (typeof nested.url === 'string') return nested.url;
  }
  return null;
}

function mapProxyError(status: number | undefined, error: string | undefined): string {
  if (status === 401 || status === 403) {
    return 'API 鉴权失败，请检查上游服务权限或环境变量。';
  }
  if (status === 408) {
    return '生成超时，请稍后重试。';
  }
  if (status === 500 || status === 503) {
    return '生成服务暂时不可用，请稍后再试。';
  }
  if (status === 503 || error?.includes('网络连接失败')) {
    return '网络连接失败，请检查服务是否正常运行。';
  }
  return error || '生成失败，请稍后重试。';
}

export async function generateImage(params: GenerationParams): Promise<GenerationResult> {
  const body = {
    prompt: params.prompt,
    negative_prompt: params.negative_prompt || '',
    width: params.width ?? 1024,
    height: params.height ?? 1024,
    fastMode: params.fastMode || false,
  };

  let response: Response;
  try {
    response = await fetch('/api/myai/image', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
  } catch (err) {
    throw new Error('网络连接失败，请检查服务是否正常运行。');
  }

  let proxyData: ApiResponse;
  try {
    proxyData = await response.json();
  } catch {
    throw new Error('无法解析服务响应，请稍后重试。');
  }

  if (!proxyData.success) {
    throw new Error(mapProxyError(proxyData.status, proxyData.error));
  }

  const imageUrl = parseImageResponse(proxyData.data as ProxyApiResponse);
  if (!imageUrl) {
    throw new Error('图片生成成功但无法解析返回数据');
  }

  return {
    id: `img-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    type: 'image',
    prompt: params.prompt,
    url: imageUrl,
    createdAt: new Date().toISOString(),
    params,
  };
}

export async function generateVideo(params: VideoParams): Promise<GenerationResult> {
  const body = {
    prompt: params.prompt,
  };

  let response: Response;
  try {
    response = await fetch('/api/myai/video', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
  } catch (err) {
    throw new Error('网络连接失败，请检查服务是否正常运行。');
  }

  let proxyData: ApiResponse;
  try {
    proxyData = await response.json();
  } catch {
    throw new Error('无法解析服务响应，请稍后重试。');
  }

  if (!proxyData.success) {
    throw new Error(mapProxyError(proxyData.status, proxyData.error));
  }

  const videoUrl = parseVideoResponse(proxyData.data as ProxyApiResponse);
  if (!videoUrl) {
    throw new Error('视频生成成功但无法解析返回数据');
  }

  return {
    id: `vid-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    type: 'video',
    prompt: params.prompt,
    url: videoUrl,
    createdAt: new Date().toISOString(),
    params,
  };
}
