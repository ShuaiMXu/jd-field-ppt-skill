# 京东场域 PPT 系统

## 适用场景

| 场景 | 目标 | 推荐叙事 |
|---|---|---|
| 业务复盘 | 说明发生了什么、为什么、下一步做什么 | 结论 → 证据 → 归因 → 动作 |
| 产品方案 | 争取共识和资源 | 用户/商家问题 → 机会 → 方案 → 成本收益 |
| 设计规范发布 | 让团队按统一规则执行 | 定义 → 原则 → 结构 → 类型 → 正反例 |
| 增长实验 | 说明实验价值和决策 | 假设 → 实验 → 指标 → 复用/停止 |
| 生态治理 | 解释规则、链路和边界 | 问题规模 → 规则 → 链路 → 风险兜底 |

## 视觉基调

- 背景：默认 `color_background_overlay` 白色或 `color_background_component` `#f5f6fa`，页面外层用 `color_background` `#f2f3f7`。
- 主文字：`color_title` `#171a26`；正文：`color_text` `#3d414d`；辅助：`color_text_help` `#828794`。
- 品牌锚点：`color_primary` / `jdred` `#ff0f23`，每页只出现 1-3 个强强调点。
- 分割线：`color_border` `rgba(0,0,0,0.08)`，1px。
- 圆角：工具/容器用 6px 或 8px，反复项卡片不超过 8px。
- 字体：标题、关键数字、品牌强调使用 `JD ZhengHei`；普通正文使用 `PingFang SC`, `Hiragino Sans GB`, `Microsoft YaHei`, system-ui, sans-serif。

## 字体预设

模板内置 `assets/fonts/` 下的京东正黑 V2 字体：

| 用途 | font-family | weight | 文件 |
|---|---|---:|---|
| 大标题 / 封面标题 | `JD ZhengHei` | 800 | `JDZhengHeiV2-Heavy.otf` |
| 页标题 / 强强调 | `JD ZhengHei` | 700 | `JDZhengHeiV2-Bold.otf` |
| 品牌标识 / 标签 | `JD ZhengHei` | 400 | `JDZhengHeiV2-Regular.otf` |
| 轻量装饰文字 | `JD ZhengHei` | 300 | `JDZhengHeiV2-Light.otf` |
| 正文 / 表格 / 注释 | `PingFang SC` | 400-600 | 系统字体 |

使用规则：

- 不要把整页正文都切到京东正黑，长段中文阅读优先用苹方。
- 关键数字和一级标题用 `JD ZhengHei` Heavy，能形成京东场域识别。
- 若 deck 需要外发，保留 `@font-face` 和 `assets/fonts/` 相对路径，不引用桌面绝对路径。

## 色彩真相源

生成或修改 PPT 前，读取 `jd-color-tokens.md`。全局 CSS 变量必须来自 JD V16 基础色，不允许临时自定义主题色。

## 文字规则

- 标题写结论，例如“内容入口正在从流量分发转向心智经营”，不要写“背景分析”。
- 避免空话：生态、闭环、赋能、抓手等词必须落到对象、动作或指标。
- 数字必须带单位和口径：GMV、CTR、转化率、停留时长、曝光、渗透率、履约时效等。
- 每页正文不超过 90 个中文字；复杂内容拆成图、表、流程或两页。

## 页脚元信息

页脚建议包含：项目名 / 场域 / 日期 / 页码。不要放长版权声明。

## 禁用

- 禁止把整页做成品牌红底，除非是封面或章节页，并且正文可读。
- 禁止纯装饰渐变、漂浮光斑、抽象球体、无业务含义插画。
- 禁止在 SVG 里写大段文字，后续难改且难校验。
- 禁止三层以上视觉层级叠加：背景图 + 毛玻璃 + 卡片 + 卡片。
