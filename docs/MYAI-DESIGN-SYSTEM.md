# MYAI Design System V1

> 建立日期：2026-05-28
> 版本：V1.0
> 状态：初稿

---

## 1. 品牌关键词

**Brand Keywords**

| # | 关键词 | 含义 |
|---|--------|------|
| 1 | 创作台 | 平台是专业创作工具，不是玩具 |
| 2 | 科技感 | 冷峻、前沿、可信赖的技术底色 |
| 3 | 高对比 | 内容层级分明，主次清晰 |
| 4 | 克制 | 装饰有度，宁少勿多 |
| 5 | 编辑器质感 | 精密、专业、如同专业软件的交互体验 |

---

## 2. 视觉方向

**Visual Direction**

### 整体风格

- **主基调**：深色创作台 — 沉浸式深色背景，让内容（图片/视频）成为视觉焦点
- **质感描述**：冷峻科技感，如同专业视频编辑软件（Premiere / DaVinci Resolve）的界面美学
- **情绪关键词**：专注、专业、精准、未来感

### 视觉原则

1. **内容优先**：背景和UI服务于内容展示，不抢夺注意力
2. **层级分明**：信息有清晰的视觉优先级，主次关系一眼可辨
3. **留白呼吸**：间距创造节奏感，不是把所有元素堆在一起
4. **克制的装饰**：少而精的发光/渐变/高光点缀，明确服务于功能
5. **统一的语法**：所有组件遵循同一套视觉规则，不出现例外

### 禁止的"AI模板味"元素

- ❌ 全站大面积紫粉渐变背景
- ❌ 每个卡片都是毛玻璃（glassmorphism）
- ❌ 所有按钮都是圆药丸形状
- ❌ Hero区写"释放你的创造力"等陈词滥调
- ❌ 满屏emoji装饰
- ❌ 过多的发光阴影（glow effects）
- ❌ 组件间距随意，无节奏感
- ❌ 字体大小层级混乱，不成系统
- ❌ 移动端只是桌面端的压缩版本
- ❌ 所有section都是"标题+描述+三张卡片"的同质化布局

---

## 3. 颜色系统

**Color System**

### 基础调色板

```
背景色（Background）
├── BG Base:        #070A12   ← 页面最底层背景，近黑蓝
├── BG Card:        #111827   ← 主卡片背景，深石墨
├── BG Card Alt:    #151C2E   ← 次级卡片背景，蓝灰
├── BG Elevated:   #1A2333   ← 悬浮/高层级元素背景
└── BG Input:      #0D1117   ← 输入框背景

边框色（Border）
├── Border Subtle:  rgba(148, 163, 184, 0.08)   ← 极淡冷灰，最弱分割线
├── Border Default: rgba(148, 163, 184, 0.16)   ← 默认边框
├── Border Strong:  rgba(148, 163, 184, 0.32)   ← 强调边框
└── Border Accent:  rgba(56, 189, 248, 0.50)    ← 强调色边框（有蓝/青参与）

文字色（Text）
├── Text Primary:   #F1F5F9   ← 标题/重要文字，白偏冷
├── Text Secondary: #94A3B8   ← 正文/次要文字，冷灰
├── Text Tertiary:  #64748B   ← 辅助/占位文字
├── Text Disabled:  #475569   ← 禁用状态
└── Text Inverse:   #070A12   ← 深色背景上的浅色文字（如按钮上的图标）

功能色（Functional）
├── Accent Primary: #38BDF8   ← 电光青，主强调色（用于CTA、链接、焦点）
├── Accent Glow:    rgba(56, 189, 248, 0.20)   ← 强调色发光（用于焦点状态）
├── Success:        #34D399   ← 成功/完成状态
├── Success BG:     rgba(52, 211, 153, 0.10)
├── Warning:        #FBBF24   ← 警告状态
├── Warning BG:     rgba(251, 191, 36, 0.10)
├── Error:          #F87171   ← 错误/失败状态
├── Error BG:       rgba(248, 113, 113, 0.10)
└── Info:           #38BDF8   ← 信息提示（同主强调色）
```

### 语义颜色映射

| 语义角色 | 背景色 | 文字色 | 边框色 |
|----------|--------|--------|--------|
| 默认正文 | — | Text Secondary | — |
| 卡片背景 | BG Card | — | Border Default |
| 输入框 | BG Input | Text Primary | Border Default |
| 输入框聚焦 | BG Input | Text Primary | Accent Primary + glow |
| 主按钮 | Accent Primary | Text Inverse | — |
| 次要按钮 | Transparent | Text Primary | Border Default |
| 危险按钮 | Error BG | Error | — |
| 禁用 | — | Text Disabled | Border Subtle |
| 成功提示 | Success BG | Success | Success |
| 错误提示 | Error BG | Error | Error |

---

## 4. 字体系统

**Typography System**

### 字体家族

```
标题（Display/Heading）：Inter（Google Fonts）
正文（Body）：Inter
代码（Code/Mono）：JetBrains Mono
```

> Inter 是 UI 设计首选字体，x-height 优秀，在深色背景下清晰可辨。
> JetBrains Mono 用于代码展示和技术术语。

### 字体量表

| 用途 | 字号 | 字重 | 行高 | 字间距 | 最大宽度 |
|------|------|------|------|--------|----------|
| Display XL（大Hero） | 48px | 700 | 1.1 | -0.02em | 20ch |
| Display L | 36px | 700 | 1.15 | -0.02em | 25ch |
| Heading 1 | 30px | 600 | 1.2 | -0.01em | 30ch |
| Heading 2 | 24px | 600 | 1.25 | -0.01em | 35ch |
| Heading 3 | 20px | 600 | 1.3 | 0 | — |
| Heading 4 | 16px | 600 | 1.4 | 0 | — |
| Body L（大正文） | 18px | 400 | 1.6 | 0 | 70ch |
| Body（默认正文） | 16px | 400 | 1.6 | 0 | 70ch |
| Body S | 14px | 400 | 1.5 | 0 | — |
| Caption | 12px | 400 | 1.4 | 0 | — |
| Overline | 12px | 500 | 1.3 | 0.08em | — |
| Code | 14px | 400 | 1.5 | 0 | — |

### 层级使用规则

- **Display**：仅用于 Hero 区域的主标题，每页限用 1 次
- **Heading 1-2**：页面章节标题
- **Heading 3-4**：卡片标题、模态框标题
- **Body L**：长篇说明文字、落地页正文
- **Body**：UI 中的标准正文
- **Caption/Overline**：标签、小标题、分类标记
- **Code**：代码块、技术参数

---

## 5. 间距系统

**Spacing System**

### 基础间距单位

所有间距基于 4px 网格系统：`4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128`

### 页面级间距

| 用途 | 桌面端 | 移动端 |
|------|--------|--------|
| Section 垂直间距 | 96px | 64px |
| Section 内上/下半部间距比 | 1 : 1（等分） | 1 : 1 |
| 最大内容宽度 | 1280px | 100% |
| 内容区水平 Padding | 64px | 24px |

### 卡片间距

| 用途 | 桌面端 | 移动端 |
|------|--------|--------|
| 瀑布流/网格卡片间距 | 16px | 12px |
| 卡片列表（单列）间距 | 24px | 16px |
| 模态框内 Padding | 32px | 24px |

### 元素级间距

| 用途 | 尺寸 |
|------|------|
| 元素之间水平间距（同排） | 8px / 12px |
| 表单 Label 与输入框间距 | 8px |
| 按钮与相邻元素最小间距 | 8px |
| 图标与文字间距 | 8px |
| 段落内行间距 | 16px |

### Touch Target 规范

| 平台 | 最小点击区域 |
|------|-------------|
| 桌面端 | 高度 ≥ 32px |
| 移动端 | 高度 ≥ 44px，宽度 ≥ 44px |
| 图标按钮（移动端） | 最小 48×48px |

---

## 6. 卡片系统

**Card System**

### 卡片分类

卡片分为 3 种视觉强度，不可混用：

| 类型 | 使用场景 | 背景色 | 边框 | 阴影 | 圆角 |
|------|----------|--------|------|------|------|
| **Card Default** | 内容展示卡（如作品卡） | BG Card (#111827) | Border Default | 无 | 12px |
| **Card Alt** | 次级容器（如筛选栏、侧栏） | BG Card Alt (#151C2E) | Border Subtle | 无 | 8px |
| **Card Elevated** | 悬浮菜单、下拉面板、模态框背景 | BG Elevated (#1A2333) | Border Default | `0 8px 32px rgba(0,0,0,0.4)` | 12px |

### 卡片结构规范

```
┌─────────────────────────────────┐
│  Card Container                 │
│  ├── Media Area（图片/视频封面） │  ← 16:9 或 4:3 或 1:1，溢出圆角裁切
│  │   └── Overlay（可选悬浮层）  │
│  ├── Content Area（内容区）     │  ← padding: 16px
│  │   ├── Title                 │  ← Heading 4
│  │   ├── Meta / Tags           │  ← Caption/Overline，冷色
│  │   └── Actions（可选）       │  ← icon buttons 或 text links
│  └── Footer（可选）            │  ← 分割线 + padding: 12px 16px
└─────────────────────────────────┘
```

### 圆角规则

| 元素 | 圆角尺寸 |
|------|----------|
| 页面最外层容器 | 0px |
| 主卡片 | 12px |
| 次级卡片/面板 | 8px |
| 输入框 | 8px |
| 按钮（主操作） | 8px |
| 按钮（次要/图标） | 8px |
| 药丸形标签/徽章 | 9999px（全圆） |
| 头像 | 50%（圆形） |

### 阴影规则

| 状态 | 阴影样式 |
|------|----------|
| 无阴影（默认） | — |
| Card Elevated | `0 8px 32px rgba(0,0,0,0.40)` |
| 悬浮卡片（Hover） | `0 12px 40px rgba(0,0,0,0.50)` |
| 模态框 | `0 24px 64px rgba(0,0,0,0.60)` |
| 按钮聚焦（Focus） | `0 0 0 2px Accent Primary + glow` |

### 禁止事项

- ❌ 卡片不要统一使用毛玻璃背景
- ❌ 卡片不要统一添加发光边框
- ❌ 卡片不要全部使用相同内边距
- ❌ 不要用阴影代替层级区分

---

## 7. 按钮系统

**Button System**

### 按钮类型

| 类型 | 背景色 | 文字色 | 边框 | 使用场景 |
|------|--------|--------|------|----------|
| **Primary** | Accent Primary (#38BDF8) | Text Inverse (#070A12) | — | 主要操作：生成、创建、提交 |
| **Secondary** | Transparent | Text Primary (#F1F5F9) | Border Default | 次要操作：取消、返回 |
| **Ghost** | Transparent | Text Secondary (#94A3B8) | — | 低强调操作：重试、查看更多 |
| **Danger** | Error BG (#F87171 @ 10%) | Error (#F87171) | — | 危险操作：删除、移除 |
| **Icon** | Transparent | Text Secondary | — | 工具栏、迷你操作 |

### 按钮尺寸

| 尺寸 | 高度 | 内边距 | 字重 | 圆角 |
|------|------|--------|------|------|
| **Large** | 48px | 0 24px | 500 | 8px |
| **Default** | 40px | 0 16px | 500 | 8px |
| **Small** | 32px | 0 12px | 500 | 6px |
| **Icon** | 32px | 0（中心图标 20×20） | — | 8px |
| **Icon Large** | 40px | 0（中心图标 24×24） | — | 8px |

### 按钮状态

| 状态 | Primary | Secondary | Ghost | Danger |
|------|---------|-----------|-------|--------|
| Default | 背景 Accent Primary | 透明+边框 | 透明 | 背景 Error BG |
| Hover | `brightness(1.10)` + 轻微提亮 | `brightness(1.10)` + 边框变强 | 背景 Border Subtle | `brightness(1.10)` |
| Active | `brightness(0.95)` | `brightness(0.95)` | 背景 Border Default | `brightness(0.95)` |
| Disabled | opacity 40% | opacity 40% | opacity 40% | opacity 40% |
| Focus | glow ring `0 0 0 2px` | 同左 | 同左 | 同左 |

### 图标按钮

- 图标按钮统一使用 32×32px（Default）或 40×40px（Large）
- 图标尺寸：20px / 24px，Stroke Width 1.5px
- Hover 时背景变为 Border Subtle
- Focus 时显示 Accent Primary glow ring

### 禁止事项

- ❌ 不要让 Primary 和 Secondary 按钮视觉权重相同
- ❌ 不要在同一个操作区域放置超过 3 个主要按钮
- ❌ 不要在按钮上使用 emoji

---

## 8. 表单系统

**Form System**

### 输入框（Input）

| 状态 | 背景色 | 边框 | 文字色 | 光标 |
|------|--------|------|--------|------|
| Default | BG Input (#0D1117) | Border Default | Text Primary | Accent Primary |
| Hover | BG Input | Border Strong | Text Primary | Accent Primary |
| Focus | BG Input | Accent Primary (+glow) | Text Primary | Accent Primary |
| Error | BG Input | Error | Error | Error |
| Disabled | BG Input | Border Subtle | Text Disabled | — |

- 高度：40px（Default）/ 48px（Large）
- 圆角：8px
- 内边距：0 12px
- Placeholder：Text Tertiary

### 下拉菜单（Select）

- 基础样式与输入框相同
- 右侧箭头图标：ChevronDown，16px
- 展开菜单：Card Elevated 样式，带 `0 8px 32px` 阴影
- 选项 Hover：背景 Border Subtle
- 选中项：文字变为 Accent Primary

### 复选框（Checkbox）

| 状态 | 样式 |
|------|------|
| 未选中 | 16×16px 方框，Border Default，圆角 4px |
| 未选中 Hover | 边框变强 |
| 选中 | 背景 Accent Primary，✓ 图标（白色），圆角 4px |
| 选中 Hover | `brightness(1.10)` |
| 焦点 | glow ring |
| 禁用 | opacity 40% |

### 开关（Toggle）

| 状态 | 样式 |
|------|------|
| 关闭 | Track: Border Default，宽 40px，高 22px，圆 11px |
| 开启 | Track: Accent Primary |
| Thumb | 白色 18×18px 圆形，向右偏移表示开启 |
| 焦点 | glow ring |
| 禁用 | opacity 40% |

### 表单结构规范

```
Label（8px 下方间距）
├── Input/Select
Helper Text / Error Text（6px 上方间距）
```

---

## 9. 导航系统

**Navigation System**

### Header（顶部导航栏）

| 属性 | 值 |
|------|---|
| 背景色 | BG Base (#070A12)，可加底部 Border Subtle |
| 高度 | 64px（桌面端）/ 56px（移动端） |
| 水平内边距 | 64px（桌面端）/ 24px（移动端） |
| Logo 位置 | 左侧 |
| 主要导航 | 居中或右侧 |
| 用户操作 | 右侧（头像/登录/注册） |
| 粘性 | Sticky，top 0，z-index 50 |

### 导航项状态

| 状态 | 样式 |
|------|------|
| Default | Text Secondary |
| Hover | Text Primary |
| Active | Text Primary + 下划线（2px Accent Primary）或其他明确指示器 |
| Focus | Focus ring |

### 下拉菜单（Dropdown）

- 触发器（Trigger）：文字或图标按钮
- 面板样式：Card Elevated，阴影 `0 8px 32px rgba(0,0,0,0.40)`
- 菜单项高度：36px
- 菜单项 Hover：背景 Border Subtle
- 分割线：Border Subtle

### 移动端菜单（Mobile Menu）

- 触发器：Hamburger 图标按钮（右侧）
- 展开方式：从右侧滑入（全屏或半屏）
- 背景遮罩：BG Base @ 80% opacity
- 关闭方式：点击遮罩 / 点击关闭按钮 / 点击导航项
- 菜单内容：垂直排列，导航项间距 8px

---

## 10. 图片网格系统

**Image Grid System**

### 布局类型

#### 瀑布流（Masonry Grid）

```
适用场景：作品展示页，图片尺寸不一时
列数：桌面端 4 列，移动端 2 列
间距：16px（桌面端）/ 12px（移动端）
```

#### 固定网格（Fixed Grid）

```
适用场景：模板选择、风格预览等尺寸一致的封面
列数：桌面端 3-4 列，移动端 2 列
间距：16px
```

#### 列表视图（List View）

```
适用场景：历史记录、下载列表
行高：作品缩略图 80px 宽度（16:9 裁切）
行间距：1px（分割线）
```

### 图片预览（Lightbox）

| 属性 | 规范 |
|------|------|
| 触发 | 点击图片/视频封面 |
| 背景遮罩 | BG Base @ 95% opacity |
| 关闭按钮 | 右上角，Icon Large 样式 |
| 缩放 | 可双击放大 |
| 导航 | 键盘左右箭头 / 屏幕边缘点击 |
| 退出方式 | Esc 键 / 点击遮罩 / 点击关闭按钮 |

### 缩略图比例

| 用途 | 比例 |
|------|------|
| 作品封面（瀑布流） | 自适应（原图比例） |
| 作品封面（固定网格） | 1:1 或 16:9 |
| 用户头像 | 1:1（圆形） |
| 推荐模块封面 | 16:9 |
| 视频封面 | 16:9 |

---

## 11. 视频播放器系统

**Video Player System**

### 封面（Poster）

| 属性 | 规范 |
|------|------|
| 比例 | 16:9 |
| 封面图填充 | Object-fit: cover |
| 播放图标 | 居中，圆形半透明遮罩（直径 64px，BG Base @ 60%），内部播放图标 Accent Primary |
| 视频时长 | 右下角 Caption，白色文字 + 黑色半透明背景（Border Subtle） |

### 播放控制栏

| 组件 | 样式 |
|------|------|
| 控制栏背景 | 底部渐变遮罩 BG Base @ 80% → transparent |
| 进度条轨道 | Border Subtle，高度 4px |
| 进度条填充 | Accent Primary |
| 播放/暂停按钮 | Icon Large，白色 |
| 时间显示 | Caption，白色 |
| 音量控制 | Icon + Slider |
| 全屏按钮 | Icon，白色 |
| 画质/倍速选择 | Ghost 按钮样式 |

### 进度条交互

| 状态 | 样式 |
|------|------|
| 未播放 | 轨道 Border Subtle |
| 已播放 | 填充 Accent Primary |
| 缓冲中 | 次级进度 Border Default |
| Hover | 轨道变高至 6px |
| 拖动 Thumb | Accent Primary 圆形 14px |

---

## 12. 移动端规则

**Mobile Rules**

### 断点（Breakpoints）

| 名称 | 宽度范围 | 布局调整 |
|------|---------|----------|
| Mobile | < 640px | 单列，底部固定操作区 |
| Tablet | 640px – 1024px | 双列，混排布局 |
| Desktop | > 1024px | 多列，完整导航 |

### 布局规范

| 页面区域 | 移动端处理 |
|----------|-----------|
| Header | 高度 56px，Logo 缩小，导航折叠为 Hamburger |
| Hero Section | 标题字号缩小至 30px，间距压缩至 64px |
| 内容区 Padding | 水平 24px（非 64px） |
| 卡片网格 | 双列，间距 12px |
| 瀑布流 | 双列 |
| 表单 | 全宽输入框 |
| 底部操作区 | 固定底部，高度 64px，Safe Area 适配 |

### 间距调整

| 元素 | 桌面端 | 移动端 |
|------|--------|--------|
| Section 间距 | 96px | 64px |
| 卡片间距 | 16px | 12px |
| 元素间间距 | 8-12px | 8px |
| 页面水平 Padding | 64px | 24px |

### 触摸规范

| 规范 | 值 |
|------|---|
| 最小点击区域 | 44×44px |
| 图标按钮最小 | 48×48px |
| 按钮高度最小 | 44px |
| 链接点击区域 | 高度 ≥ 44px |
| 滑动阈值 | 50px（触发侧滑返回等） |

### 移动端特有注意事项

- 不允许桌面端布局原样压缩为移动端 — 必须根据移动端场景重新设计信息优先级
- 图片加载使用 `<img loading="lazy">`
- 不使用 hover 状态作为唯一的信息传达方式
- 操作按钮不要超出安全区域（Safe Area）

---

## 13. 暗色模式规则

**Dark Mode Rules**

> MYAI 默认即为暗色模式，此章节定义暗色模式下的全部规则。

### 整体明暗

- **整体基调**：深色背景为主，让内容（图片/视频）成为视觉焦点
- **背景层级**：通过明度差异（而非色相）区分层级
  - Layer 0（最底层）：#070A12
  - Layer 1（卡片）：#111827
  - Layer 2（ Elevated）：#1A2333
  - Layer 3（最高）：#232F45
- **避免过亮背景**：文字区域背景严禁使用纯白或过亮的灰色

### 对比度规范

| 内容组合 | 最低对比度 |
|----------|-----------|
| 正文文字与背景 | 4.5:1（WCAG AA） |
| 大字（≥18px）与背景 | 3:1（WCAG AA） |
| 文字与彩色背景 | 4.5:1 |
| 图标与背景 | 3:1 |

### 焦点状态（Focus）

Focus 状态在暗色模式下尤为重要，因为没有 Hover 的视觉暗示：

| 元素 | Focus 样式 |
|------|------------|
| 所有可交互元素 | `outline: 2px solid Accent Primary; outline-offset: 2px;` |
| 输入框 | Border → Accent Primary + `box-shadow: 0 0 0 3px Accent Glow` |
| 按钮 | glow ring `0 0 0 2px Accent Primary` |
| 卡片（可点击） | 边框变为 Accent Primary |

---

## 14. 动效原则

**Motion Principles**

### 过渡时长

| 交互类型 | 时长 | 示例 |
|----------|------|------|
| 微交互（Hover/Active） | 150ms | 按钮颜色变化、边框变强 |
| 展开/收起（Expand/Collapse） | 250ms | 下拉菜单展开 |
| 页面元素进入（Entrance） | 300ms | 卡片列表加载 |
| 模态框/面板出现 | 250ms | 弹窗出现 |
| 页面切换（Page Transition） | 300ms | 路由切换 |
| 进度条/加载动画 | 持续 | Loading Spinner |

### 缓动函数

| 用途 | 缓动函数 | CSS |
|------|----------|------|
| 大多数 UI 交互 | ease-out | `cubic-bezier(0, 0, 0.2, 1)` |
| 进入动画（Entrance） | ease-out | `cubic-bezier(0, 0, 0.2, 1)` |
| 退出动画（Exit） | ease-in | `cubic-bezier(0.4, 0, 1, 1)` |
| 弹性交互 | ease-in-out | `cubic-bezier(0.4, 0, 0.2, 1)` |
| 强调动效（弹性回弹） | spring-like | `cubic-bezier(0.34, 1.56, 0.64, 1)` |
| 静止状态 | linear | — |

### 动画性能规范

- 所有动画使用 `transform` 和 `opacity` 实现（GPU 加速）
- 禁止动画使用 `width`、`height`、`top`、`left`（触发重排）
- `will-change: transform` 仅在必要时使用，且动画完成后清除
- 滚动相关的动画使用 `scroll-behavior: smooth` 或 CSS Scroll Snap

### 禁止的动画

- ❌ 自动播放的闪烁/脉冲动画（除 Loading）
- ❌ 随机无规律的位移动画
- ❌ 超过 500ms 的单次 UI 过渡（用户体验负担）
- ❌ 渐入渐出的呼吸动画（分散注意力）
- ❌ 随机的角度旋转动画
- ❌ 使用 JavaScript `setInterval` 实现的不平滑动画

### 加载状态（Loading）

| 类型 | 适用场景 | 样式 |
|------|----------|------|
| Spinner | 按钮内加载、卡片占位 | 3 圈旋转环，Accent Primary |
| Skeleton | 图片/文字占位 | 背景 Border Subtle，微脉冲动画 |
| Progress Bar | 上传、进度展示 | 轨道 Border Subtle + 填充 Accent Primary |

---

## 附录：设计令牌速查表

### 颜色速查

```
--color-bg-base:       #070A12
--color-bg-card:       #111827
--color-bg-card-alt:   #151C2E
--color-bg-elevated:   #1A2333
--color-bg-input:      #0D1117
--color-border-subtle: rgba(148, 163, 184, 0.08)
--color-border:        rgba(148, 163, 184, 0.16)
--color-border-strong: rgba(148, 163, 184, 0.32)
--color-text-primary:  #F1F5F9
--color-text-secondary:#94A3B8
--color-text-tertiary: #64748B
--color-accent:        #38BDF8
--color-success:       #34D399
--color-warning:       #FBBF24
--color-error:         #F87171
```

### 间距速查

```
--space-1:   4px
--space-2:   8px
--space-3:   12px
--space-4:   16px
--space-6:   24px
--space-8:   32px
--space-12:  48px
--space-16:  64px
--space-24:  96px
```

### 圆角速查

```
--radius-sm:   4px
--radius-md:   8px
--radius-lg:   12px
--radius-pill:  9999px
--radius-full: 50%
```

### 字体速查

```
--font-sans:  'Inter', -apple-system, BlinkMacSystemFont, sans-serif
--font-mono:  'JetBrains Mono', 'Fira Code', monospace
--font-size-display-xl: 48px / line-height 1.1
--font-size-display-l:  36px / line-height 1.15
--font-size-h1:         30px / line-height 1.2
--font-size-h2:         24px / line-height 1.25
--font-size-h3:         20px / line-height 1.3
--font-size-h4:         16px / line-height 1.4
--font-size-body-l:     18px / line-height 1.6
--font-size-body:       16px / line-height 1.6
--font-size-body-s:     14px / line-height 1.5
--font-size-caption:    12px / line-height 1.4
```

---

*本文档为 MYAI Design System V1，将随产品迭代持续更新。*