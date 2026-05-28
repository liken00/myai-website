// MYAI 常量配置
export const SITE_NAME = 'MYAI';
export const SITE_DESCRIPTION = 'AI 图片生成、AI 视频生成、AI 创意工具聚合平台';
export const SITE_URL = 'https://myai.com';
export const EDITOR_URL = 'https://raphael-clone-6i7pkaqbx-ken-li.vercel.app';
export const DOCS_URL = 'https://github.com/liken00/raphael-clone';

export const ASPECT_RATIOS = {
  '1:1': { width: 1024, height: 1024, label: '1:1' },
  '16:9': { width: 1344, height: 768, label: '16:9' },
  '9:16': { width: 768, height: 1344, label: '9:16' },
  '4:3': { width: 1152, height: 864, label: '4:3' },
  '3:4': { width: 864, height: 1152, label: '3:4' },
};

export const IMAGE_STYLES = [
  '写实摄影', '动漫插画', '电影感', '电商产品图', '游戏概念图', '室内设计',
] as const;

export const VIDEO_DURATIONS = ['5秒', '8秒', '10秒'] as const;
export const CAMERA_MOVEMENTS = ['推进', '拉远', '环绕', '固定', '手持'] as const;

export const MODELS = [
  { id: 'image-basic', name: 'MYAI Image Basic', type: '图片', feature: '快速生成，适合日常创作' },
  { id: 'image-pro', name: 'MYAI Image Pro', type: '图片', feature: '高质量，适合专业作品' },
  { id: 'realistic', name: 'MYAI Realistic', type: '图片', feature: '写实风格，人像摄影' },
  { id: 'anime', name: 'MYAI Anime', type: '图片', feature: '动漫插画，角色设计' },
  { id: 'product', name: 'MYAI Product', type: '图片', feature: '电商产品，展示图' },
  { id: 'video-basic', name: 'MYAI Video Basic', type: '视频', feature: '基础视频生成' },
  { id: 'video-pro', name: 'MYAI Video Pro', type: '视频', feature: '高质量视频，细节丰富' },
  { id: 'motion-director', name: 'MYAI Motion Director', type: '视频', feature: '镜头运动控制' },
] as const;

export const INSPIRATIONS = [
  { title: '赛博城市', prompt: 'A futuristic cyberpunk city at night, neon lights, rain-soaked streets, cinematic lighting, highly detailed', gradient: 'from-cyan-600 to-blue-600' },
  { title: '电影级人像', prompt: 'Cinematic portrait of a person, dramatic lighting, film grain, shallow depth of field, 35mm lens', gradient: 'from-amber-600 to-orange-600' },
  { title: '水下世界', prompt: 'Underwater scene with coral reef, colorful fish, sunlight rays穿透水面, clear blue water', gradient: 'from-cyan-600 to-blue-600' },
  { title: '奇幻森林', prompt: 'Fantasy enchanted forest, bioluminescent plants, magical creatures, misty atmosphere, digital art', gradient: 'from-emerald-600 to-teal-600' },
  { title: '复古未来', prompt: 'Retro-futuristic interior design, 1960s space age aesthetic, warm colors, clean lines', gradient: 'from-orange-600 to-red-600' },
  { title: '极简建筑', prompt: 'Minimalist modern architecture, white concrete, geometric forms, soft natural lighting', gradient: 'from-slate-600 to-gray-600' },
  { title: '美食摄影', prompt: 'Professional food photography, delicious burger with melted cheese, steam rising, dark background', gradient: 'from-yellow-600 to-amber-600' },
  { title: '星空篝火', prompt: 'Camping scene under the stars, campfire, tents, peaceful night sky with Milky Way', gradient: 'from-blue-600 to-indigo-600' },
  { title: '机械朋克', prompt: 'Steampunk mechanical device, brass gears, copper pipes, intricate details, warm lighting', gradient: 'from-amber-600 to-orange-600' },
  { title: '日式庭院', prompt: 'Traditional Japanese garden with koi pond, cherry blossoms, stone lanterns, zen atmosphere', gradient: 'from-orange-600 to-red-600' },
  { title: '外星地表', prompt: 'Alien landscape with two suns, strange rock formations, exotic vegetation, science fiction', gradient: 'from-red-600 to-orange-600' },
  { title: '艺术工作室', prompt: 'Artist studio interior, canvas with painting in progress, natural north light, art supplies everywhere', gradient: 'from-teal-600 to-cyan-600' },
] as const;

export const STYLE_TEMPLATES = [
  { name: '商业产品图', prompt: 'Professional product photography of [product], white background, studio lighting, commercial quality, ultra detailed', gradient: 'from-sky-600 to-blue-600' },
  { name: '电影级人像', prompt: 'Cinematic portrait photography, dramatic lighting, film grain, shallow DOF, 35mm prime lens, moody atmosphere', gradient: 'from-amber-600 to-orange-600' },
  { name: '国潮插画', prompt: 'Chinese traditional style illustration, 国潮 design, vibrant colors, intricate patterns, digital art', gradient: 'from-red-600 to-orange-600' },
  { name: '赛博城市', prompt: 'Cyberpunk cityscape, neon signs, rain-slicked streets, flying vehicles, holographic advertisements, Blade Runner atmosphere', gradient: 'from-cyan-600 to-blue-600' },
  { name: '室内改造', prompt: 'Modern interior design rendering, minimalist living room, natural materials, warm neutral tones, architectural visualization', gradient: 'from-emerald-600 to-teal-600' },
  { name: '电商海报', prompt: 'E-commerce product banner design, [product] on display, promotional text space, vibrant colors, professional layout', gradient: 'from-yellow-600 to-orange-600' },
  { name: '游戏概念图', prompt: 'Video game concept art, [scene description], detailed environment design, digital painting, epic scale', gradient: 'from-blue-600 to-indigo-600' },
  { name: '科幻场景', prompt: 'Science fiction scene, [description], advanced technology, alien planet or space station, cinematic composition', gradient: 'from-cyan-600 to-indigo-600' },
  { name: '动漫头像', prompt: 'Anime style portrait, [character description], expressive eyes, clean linework, vibrant colors, illustration', gradient: 'from-teal-600 to-cyan-600' },
  { name: 'Logo 概念', prompt: 'Minimalist logo design concept, [brand name], clean vector style, modern aesthetic, black and white option', gradient: 'from-slate-600 to-gray-600' },
  { name: '美食摄影', prompt: 'Professional food photography, [dish description], appetizing presentation, editorial quality, natural lighting', gradient: 'from-orange-600 to-amber-600' },
  { name: '视频分镜', prompt: 'Film storyboard panel, [scene description], cinematic composition, camera angle指示, visual storytelling', gradient: 'from-red-600 to-orange-600' },
] as const;

export const FEATURES = [
  { title: '文生图', desc: '输入文字描述，AI 自动生成对应图片，支持多种风格和比例' },
  { title: '文生视频', desc: '输入文字描述，AI 生成对应视频片段，支持镜头运动控制' },
  { title: '在线预览', desc: '生成结果即时展示，支持在线播放视频和查看原图' },
  { title: '灵感模板', desc: '12+ 创作模板，一键填入 prompt，快速开始创作' },
  { title: '本地历史记录', desc: '生成记录保存在浏览器本地，刷新不丢失，随时查看' },
  { title: '多端适配', desc: '响应式设计，手机/平板/电脑都能流畅使用' },
] as const;

export const STATS = [
  { value: '20+', label: '创作模板' },
  { value: '8+', label: '模型入口' },
  { value: '100%', label: '响应式' },
  { value: '0配置', label: '开始创作' },
] as const;

export const TESTIMONIALS = [
  { name: '创意设计师 A', text: '以下均为示例评价：界面简洁高级，生成速度快，效果超出预期。', role: '示例用户' },
  { name: '独立创作者 B', text: '以下均为示例评价：模板很实用，小白也能快速上手生成专业级图片。', role: '示例用户' },
  { name: '内容创作者 C', text: '以下均为示例评价：视频生成效果稳定，是创作灵感的好帮手。', role: '示例用户' },
  { name: '营销从业者 D', text: '以下均为示例评价：电商海报模板节省了大量拍摄成本，很实用。', role: '示例用户' },
  { name: '游戏开发者 E', text: '以下均为示例评价：概念图生成速度快，风格多样，适合前期快速迭代。', role: '示例用户' },
  { name: '个人博主 F', text: '以下均为示例评价：移动端体验流畅，手机/平板/电脑都能流畅使用。', role: '示例用户' },
] as const;

export const PRICING_PLANS = [
  { name: 'Free', price: '¥0', features: ['每日 10 次生成', '基础模型', '标准画质', '社区支持'], cta: '免费开始' },
  { name: 'Pro', price: '联系我们', features: ['无限次生成', '全部模型', '高清画质', '优先队列', '邮件支持'], cta: '升级 Pro' },
  { name: 'Studio', price: '自定义', features: ['私有化部署', '专属模型', 'API 接口', '专属客服', 'SLA 保障'], cta: '联系我们' },
] as const;

export const FAQS = [
  { q: '是否真实生成？', a: '是的，MYAI 通过 AI 模型真实生成图片和视频，每次生成都会调用上游 API 接口。' },
  { q: '如何接入模型？', a: 'MYAI 已预置多模型入口，您可以直接使用。更多模型接入方式请查阅 API 文档。' },
  { q: '视频能否在线播放？', a: '可以。生成成功后，视频会在页面内通过原生播放器在线预览，无需下载。' },
  { q: '生成失败怎么办？', a: '生成失败时会显示具体错误原因（如网络超时、服务不可用等）。您可以稍后重试，或检查网络连接。' },
  { q: '是否保存历史记录？', a: '是的，历史记录保存在浏览器本地存储（localStorage）中，刷新或关闭页面后仍可查看。' },
  { q: '是否支持商业使用？', a: 'AI 生成内容的商业使用权取决于上游模型的使用条款。建议您在使用前了解相关许可要求，并遵守当地法律法规。' },
] as const;

export const FOOTER_LINKS = {
  产品: [
    { name: 'AI 图片生成', href: '/#generator' },
    { name: 'AI 视频生成', href: '/#generator' },
    { name: '风格模板', href: '/#templates' },
    { name: '灵感图库', href: '/#inspiration' },
  ],
  模型: [
    { name: '图片模型', href: '/#models' },
    { name: '视频模型', href: '/#models' },
    { name: '模型文档', href: 'https://github.com/liken00/raphael-clone' },
  ],
  资源: [
    { name: 'API 文档', href: 'https://github.com/liken00/raphael-clone' },
    { name: '使用指南', href: 'https://github.com/liken00/raphael-clone#readme' },
    { name: '更新日志', href: 'https://github.com/liken00/raphael-clone/releases' },
  ],
  法律: [
    { name: '用户协议', href: '/terms' },
    { name: '隐私政策', href: '/privacy' },
    { name: '免责声明', href: '/disclaimer' },
  ],
} as const;
