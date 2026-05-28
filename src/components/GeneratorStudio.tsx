'use client';

import { useState, useEffect, useRef } from 'react';
import { generateImage, generateVideo } from '@/lib/api';
import { saveGeneration, getGenerations } from '@/lib/storage';
import { IMAGE_STYLES, ASPECT_RATIOS, VIDEO_DURATIONS, CAMERA_MOVEMENTS } from '@/lib/constants';
import type { GenerationResult, GenerationParams, VideoParams } from '@/types/generation';

type TabType = 'image' | 'video';

export default function GeneratorStudio() {
  const [activeTab, setActiveTab] = useState<TabType>('image');
  const [prompt, setPrompt] = useState('');
  const [negativePrompt, setNegativePrompt] = useState('');
  const [style, setStyle] = useState<string>(IMAGE_STYLES[0]);
  const [aspectRatio, setAspectRatio] = useState<string>('1:1');
  const [fastMode, setFastMode] = useState(false);
  const [duration, setDuration] = useState<string>(VIDEO_DURATIONS[0]);
  const [cameraMovement, setCameraMovement] = useState<string>(CAMERA_MOVEMENTS[0]);

  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentResult, setCurrentResult] = useState<GenerationResult | null>(null);
  const [history, setHistory] = useState<GenerationResult[]>([]);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const generatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHistory(getGenerations());
    }
  }, []);

  useEffect(() => {
    if (currentResult) {
      saveGeneration(currentResult);
      setHistory(getGenerations());
    }
  }, [currentResult]);

  const scrollToGenerator = () => {
    generatorRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError('请输入描述文字');
      return;
    }

    setIsGenerating(true);
    setError(null);
    setCurrentResult(null);
    setVideoUrl(null);

    try {
      if (activeTab === 'image') {
        const params: GenerationParams = {
          prompt: `${style}, ${prompt}`,
          negative_prompt: negativePrompt,
          width: ASPECT_RATIOS[aspectRatio as keyof typeof ASPECT_RATIOS]?.width,
          height: ASPECT_RATIOS[aspectRatio as keyof typeof ASPECT_RATIOS]?.height,
          fastMode,
        };
        const result = await generateImage(params);
        setCurrentResult(result);
      } else {
        const params: VideoParams = {
          prompt,
          duration,
          cameraMovement,
        };
        const result = await generateVideo(params);
        setCurrentResult(result);
        setVideoUrl(result.url);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : '生成失败，请稍后重试');
    } finally {
      setIsGenerating(false);
    }
  };

  const useInspiration = (inspirationPrompt: string) => {
    setPrompt(inspirationPrompt);
    scrollToGenerator();
  };

  const useStyleTemplate = (templatePrompt: string) => {
    setPrompt(templatePrompt);
    scrollToGenerator();
  };

  return (
    <section
      id="generator"
      ref={generatorRef}
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
            创作工作台
          </h2>
          <p
            className="text-base"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            输入你的创意，让 AI 为你实现
          </p>
        </div>

        {/* Main Studio Card */}
        <div
          className="p-6 lg:p-8"
          style={{
            backgroundColor: 'var(--color-bg-card)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
          }}
        >
          {/* Tab Buttons */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setActiveTab('image')}
              className="px-6 py-3 text-sm font-medium rounded-md transition-all"
              style={
                activeTab === 'image'
                  ? {
                      backgroundColor: 'var(--color-accent)',
                      color: 'var(--color-text-inverse)',
                    }
                  : {
                      backgroundColor: 'transparent',
                      color: 'var(--color-text-secondary)',
                      border: '1px solid var(--color-border)',
                    }
              }
            >
              图片生成
            </button>
            <button
              onClick={() => setActiveTab('video')}
              className="px-6 py-3 text-sm font-medium rounded-md transition-all"
              style={
                activeTab === 'video'
                  ? {
                      backgroundColor: 'var(--color-accent)',
                      color: 'var(--color-text-inverse)',
                    }
                  : {
                      backgroundColor: 'transparent',
                      color: 'var(--color-text-secondary)',
                      border: '1px solid var(--color-border)',
                    }
              }
            >
              视频生成
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left - Input Form */}
            <div className="space-y-4">
              {/* Prompt Textarea */}
              <div>
                <label
                  className="block text-sm mb-2"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  描述你的创意
                </label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder={
                    activeTab === 'image'
                      ? '例如：未来城市夜景，霓虹灯光，高楼林立，赛博朋克风格...'
                      : '例如：海浪拍打礁石，阳光透过云层...'
                  }
                  className="w-full h-32 px-4 py-3 resize-none text-base"
                  style={{
                    backgroundColor: 'var(--color-bg-input)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--color-text-primary)',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-accent)';
                    e.currentTarget.style.boxShadow = '0 0 0 3px var(--color-accent-glow)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* Negative Prompt (Image only) */}
              {activeTab === 'image' && (
                <div>
                  <label
                    className="block text-sm mb-2"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    反向提示词（可选）
                  </label>
                  <input
                    type="text"
                    value={negativePrompt}
                    onChange={(e) => setNegativePrompt(e.target.value)}
                    placeholder="不想出现的元素..."
                    className="w-full px-4 py-3 text-base"
                    style={{
                      backgroundColor: 'var(--color-bg-input)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--color-text-primary)',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-accent)';
                      e.currentTarget.style.boxShadow = '0 0 0 3px var(--color-accent-glow)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-border)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>
              )}

              {/* Image Options */}
              {activeTab === 'image' && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-sm mb-2"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      风格
                    </label>
                    <select
                      value={style}
                      onChange={(e) => setStyle(e.target.value)}
                      className="w-full px-4 py-3 text-base"
                      style={{
                        backgroundColor: 'var(--color-bg-input)',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-md)',
                        color: 'var(--color-text-primary)',
                      }}
                    >
                      {IMAGE_STYLES.map((s) => (
                        <option key={s} value={s} className="bg-gray-900">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      className="block text-sm mb-2"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      比例
                    </label>
                    <select
                      value={aspectRatio}
                      onChange={(e) => setAspectRatio(e.target.value)}
                      className="w-full px-4 py-3 text-base"
                      style={{
                        backgroundColor: 'var(--color-bg-input)',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-md)',
                        color: 'var(--color-text-primary)',
                      }}
                    >
                      {Object.keys(ASPECT_RATIOS).map((ratio) => (
                        <option key={ratio} value={ratio} className="bg-gray-900">
                          {ratio}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {/* Fast Mode Toggle (Image only) */}
              {activeTab === 'image' && (
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setFastMode(!fastMode)}
                    className="relative w-12 h-6 rounded-full transition-colors"
                    style={{
                      backgroundColor: fastMode
                        ? 'var(--color-accent)'
                        : 'var(--color-border)',
                    }}
                  >
                    <div
                      className="absolute top-1 w-4 h-4 rounded-full transition-transform"
                      style={{
                        backgroundColor: 'white',
                        transform: fastMode
                          ? 'translateX(7px)'
                          : 'translateX(1px)',
                      }}
                    />
                  </button>
                  <span
                    className="text-sm"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    快速模式
                  </span>
                </div>
              )}

              {/* Video Options */}
              {activeTab === 'video' && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-sm mb-2"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      时长
                    </label>
                    <select
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      className="w-full px-4 py-3 text-base"
                      style={{
                        backgroundColor: 'var(--color-bg-input)',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-md)',
                        color: 'var(--color-text-primary)',
                      }}
                    >
                      {VIDEO_DURATIONS.map((d) => (
                        <option key={d} value={d} className="bg-gray-900">
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      className="block text-sm mb-2"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      镜头运动
                    </label>
                    <select
                      value={cameraMovement}
                      onChange={(e) => setCameraMovement(e.target.value)}
                      className="w-full px-4 py-3 text-base"
                      style={{
                        backgroundColor: 'var(--color-bg-input)',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-md)',
                        color: 'var(--color-text-primary)',
                      }}
                    >
                      {CAMERA_MOVEMENTS.map((m) => (
                        <option key={m} value={m} className="bg-gray-900">
                          {m}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {/* Generate Button */}
              <button
                onClick={handleGenerate}
                disabled={isGenerating || !prompt.trim()}
                className="w-full py-4 text-base font-medium rounded-md transition-all flex items-center justify-center gap-2"
                style={
                  isGenerating || !prompt.trim()
                    ? {
                        backgroundColor: 'var(--color-border)',
                        color: 'var(--color-text-disabled)',
                        cursor: 'not-allowed',
                      }
                    : {
                        backgroundColor: 'var(--color-accent)',
                        color: 'var(--color-text-inverse)',
                      }
                }
              >
                {isGenerating ? (
                  <>
                    <svg
                      className="animate-spin w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    生成中...
                  </>
                ) : (
                  activeTab === 'image' ? '生成图片' : '生成视频'
                )}
              </button>

              {/* Error Message */}
              {error && (
                <div
                  className="p-4 text-sm"
                  style={{
                    backgroundColor: 'var(--color-error-bg)',
                    border: '1px solid var(--color-error)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--color-error)',
                  }}
                >
                  {error}
                </div>
              )}
            </div>

            {/* Right - Result Display */}
            <div className="space-y-4">
              {currentResult ? (
                <div
                  className="p-4"
                  style={{
                    backgroundColor: 'var(--color-bg-card-alt)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                  }}
                >
                  <div
                    className="flex items-center justify-between mb-3"
                  >
                    <span
                      className="px-3 py-1 text-xs rounded-full"
                      style={
                        currentResult.type === 'image'
                          ? {
                              backgroundColor: 'rgba(56, 189, 248, 0.15)',
                              color: 'var(--color-accent)',
                            }
                          : {
                              backgroundColor: 'rgba(52, 211, 153, 0.15)',
                              color: 'var(--color-success)',
                            }
                      }
                    >
                      {currentResult.type === 'image' ? '图片' : '视频'}
                    </span>
                    <span
                      className="text-xs"
                      style={{ color: 'var(--color-text-tertiary)' }}
                    >
                      {new Date(currentResult.createdAt).toLocaleString()}
                    </span>
                  </div>

                  {currentResult.type === 'image' ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={currentResult.url}
                      alt="生成结果"
                      className="w-full rounded-lg"
                    />
                  ) : (
                    <video
                      src={currentResult.url}
                      controls
                      className="w-full rounded-lg"
                    />
                  )}

                  <div
                    className="mt-3 text-sm truncate"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    {currentResult.prompt}
                  </div>

                  <a
                    href={currentResult.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 px-4 py-2 text-sm rounded-md transition-colors"
                    style={{
                      backgroundColor: 'var(--color-border-subtle)',
                      color: 'var(--color-text-primary)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--color-border)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--color-border-subtle)';
                    }}
                  >
                    打开{currentResult.type === 'image' ? '图片' : '视频'}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              ) : (
                <div
                  className="h-full flex items-center justify-center p-8"
                  style={{
                    backgroundColor: 'var(--color-bg-card-alt)',
                    border: '1px dashed var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                  }}
                >
                  <div className="text-center">
                    <svg
                      className="w-12 h-12 mx-auto mb-3"
                      style={{ color: 'var(--color-text-tertiary)' }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p
                      className="text-sm"
                      style={{ color: 'var(--color-text-tertiary)' }}
                    >
                      生成结果将在这里显示
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* History Section */}
        {history.length > 0 && (
          <div className="mt-12">
            <h3
              className="text-xl font-semibold mb-6"
              style={{ color: 'var(--color-text-primary)' }}
            >
              生成历史
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {history.slice(0, 8).map((item) => (
                <div
                  key={item.id}
                  className="p-3"
                  style={{
                    backgroundColor: 'var(--color-bg-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                  }}
                >
                  {item.type === 'image' ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={item.url}
                      alt="历史记录"
                      className="w-full h-32 object-cover rounded-lg mb-2"
                      style={{ borderRadius: 'var(--radius-md)' }}
                    />
                  ) : (
                    <video
                      src={item.url}
                      className="w-full h-32 object-cover rounded-lg mb-2"
                      style={{ borderRadius: 'var(--radius-md)' }}
                    />
                  )}
                  <div
                    className="text-xs truncate mb-1"
                    style={{ color: 'var(--color-text-tertiary)' }}
                  >
                    {item.prompt}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: 'var(--color-text-disabled)' }}
                  >
                    {new Date(item.createdAt).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}