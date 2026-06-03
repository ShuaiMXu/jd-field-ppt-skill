# HTML PPT Studio 可借鉴模式

参考 `lewislulu/html-ppt-skill` 的结构化方法：主题、整套 deck、单页 layout、动画、运行时、预览校验分层管理。这里不复制其模板代码，只借鉴组织方式和 authoring 规则。

## 可借鉴点

### 1. Layout Catalog，而不是单一模板

`html-ppt-skill` 的 README 标注了 31 种 single-page layouts；其 `layouts.md` 把 layout 分成：

- Openers & transitions
- Text-centric
- Numbers & data
- Code & terminal
- Diagrams & flows
- Plans & comparisons
- Visuals
- Closers

JD PPT skill 也应按“页面意图”组织 layout，而不是只按视觉样式组织。

## JD Layout Catalog 扩展建议

| 分类 | JD layout | 对应用途 |
|---|---|---|
| Openers | `cover-field` | 封面、主判断、目标 |
| Openers | `agenda-bands` | 目录、章节入口 |
| Text | `executive-summary` | 三点摘要、管理层结论 |
| Text | `two-column`（待补） | 概念 + 示例、问题 + 方案 |
| Text | `three-pillar`（待补） | 三支柱、三原则、三策略 |
| Numbers | `kpi-strip` | 3-5 个关键指标 |
| Numbers | `stat-highlight`（待补） | 单个大数字 + 解释 |
| Numbers | `evidence-table` | 证据、实验、归因 |
| Diagrams | `journey-lane` | 用户旅程 / 业务链路 |
| Diagrams | `anatomy-system` | 组件 / 系统结构拆解 |
| Diagrams | `flow-diagram`（待补） | 标准流程 |
| Diagrams | `arch-diagram`（待补） | 3 层系统架构 |
| Diagrams | `mindmap`（待补） | 中心主题 + 分支 |
| Plans | `roadmap` | 阶段计划 |
| Plans | `risk-control` | 风险、触发条件、兜底 |
| Compare | `compare-before-after` | 前后对比、方案对照 |
| Compare | `pros-cons`（待补） | 利弊分析 |
| Visual | `image-hero`（待补） | 视觉封面 / 场景页 |
| Visual | `dashboard`（待补） | 看板 / 指标页 |
| Closers | `closing-action` | 行动项、结尾 |

## 2. “先选 layout，再替换内容”

借鉴规则：

- 不从空白页手写。
- 先选最接近的 layout。
- 保持布局骨架，替换真实内容。
- 如果没有匹配 layout，再新增 layout。

JD 规则：

1. 先用 `deck-structure-presets.md` 选 deck 路径。
2. 再用 `drawing-paths.md` 判断图怎么画。
3. 最后从 `page-patterns.md` / 本文件的 layout catalog 中挑页面。
4. 连续两页不要使用完全相同 layout，避免节奏单调。

## 3. 动画要按页面意图选择

借鉴 `html-ppt-skill` 的原则：每页最多一个主动画，其他内容保持安静。

JD 规则：

- 封面：可以使用背景视频或轻微 glass 动效。
- 正文：默认静态。
- 图表 / 数字：可用轻量 counter / fade。
- 架构图：不做节点乱动，最多做路径描边或背景层动效。
- 会议汇报：优先安静、可读。

## 4. 运行时能力可逐步补

`html-ppt-skill` 有键盘 runtime、overview、presenter mode、preview 参数。JD skill 暂不需要全部实现，但可以按优先级补：

1. `←/→` 翻页（已具备）
2. `?preview=N` 单页预览（待补）
3. `O` 总览网格（待补）
4. `S` 演讲者模式 + speaker notes（可选）
5. PNG 截图校验脚本（待补）

## 5. 评审规则

从 `html-ppt-skill` 借鉴的评审方式：

- 浏览器里逐页走查。
- 检查是否裁切、溢出、遮挡。
- 单页结构图如果需要小于 12px 才能放下，拆页。
- 复杂图用 overview 或截图快速扫全局。

JD 额外规则：

- 色值必须来自 `jd-color-tokens.md`。
- 标题必须是业务判断。
- 正文页避免过度动画。
- 背景视频/装饰只在背景层，不进入内容层。

## 来源

- `lewislulu/html-ppt-skill` README：提到 36 themes、15 full-deck templates、31 single-page layouts、47 animations、presenter mode。
- `references/layouts.md`：layout catalog 分类和选择建议。
- `references/authoring-guide.md`：先理解 audience/length/tone，再选 theme/layout；不要从空白页开始；每页一个主动画。
