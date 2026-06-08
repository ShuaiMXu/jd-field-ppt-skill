# 作图路径选择器

当用户请求“画图 / 架构图 / 流程图 / 飞轮 / 鱼骨 / 路线图 / Dashboard / 插画 / 海报 / 可视化 / 节点图 / 精排 / 一页图 / SVG / Mermaid / whiteboard”等内容时，先选作图路径，再进入页面排版。

## 先看 Case Library

当用户要求“一页 PPT 大图 / 图型案例 / 流程图版本 / 结构化业务图”时，先打开 `examples/ppt-big-picture-case-library/index.html`，选择最接近的 case，再迁移到实际业务内容。不要从空白页临时拼占位节点。

| 图型 | 参考文件 | 用途 | 必须像什么 |
|---|---|---|---|
| 增长飞轮 | `cases-basic-diagrams.html` | 增长策略、经营闭环 | 环形闭环 + 推动箭头 + 外围阶段标签 |
| 鱼骨分析 | `cases-basic-diagrams.html` | 异常归因、问题复盘 | 主干指向问题头 + 上下分骨 + 原因标签 |
| 价值金字塔 | `cases-basic-diagrams.html` | 会员价值、能力层级 | 层级递进 + 顶层价值 + 外置说明 |
| 桑基归因 | `cases-basic-diagrams.html` | 流量归因、渠道贡献 | 来源-中间节点-结果，流条宽度编码 |
| 产品路线图 | `cases-business-boards.html` | 产品规划、资源节奏 | 横向时间轴 + 里程碑 + 依赖说明 |
| 经营驾驶舱 | `cases-business-boards.html` | 经营日报、周会看板 | KPI 条 + 趋势区 + 异常区 |
| 优先级矩阵 | `cases-business-boards.html` | 需求评审、方案决策 | 双轴象限 + 决策区 + 样本点 |
| 热力图 | `cases-business-boards.html` | 城市/渠道/时段监控 | 行列标签 + 强弱颜色 + 图例 |
| 用户旅程 | `cases-flow-systems.html` | 转化链路、服务体验 | 动作路径 + 触点节点 + 指标挂点 |
| 系统架构 | `cases-flow-systems.html` | 能力说明、技术对齐 | 分层模块 + 数据/调用流向 |
| 决策树 | `cases-flow-systems.html` | 风险分级、SOP | 判断节点 + 条件分支 + 结果动作 |
| 闭环流程 | `cases-flow-systems.html` | 规范发布、治理机制 | 环形路径 + 回流节点 + 责任闭环 |

判断标准：图例缩小后仍能看出它是哪一种图。如果只能看出“几个卡片和线”，说明还没画对。

## 6 种作图路径

### A. Mermaid / PlantUML 整图渲染

适合：

- 思维导图
- 时序图
- 类图
- 饼图
- 流程图
- 甘特图
- 简单架构关系

输出方式：

- 在 PPT HTML 中作为整图模块嵌入。
- 优先放入 `anatomy-system` / `journey-lane` / `roadmap` 页面。
- 若使用 Mermaid，需要保留原始 Mermaid 源码注释，方便后续重绘。

限制：

- 不适合高视觉表现。
- 不适合节点很多、中文很长、需要精排的图。
- 如果 Mermaid 渲染失败或布局挤压，切到路径 C 或 E。

### B. 本地 Mermaid / whiteboard 风格可编辑节点

适合：

- Mermaid 服务端渲染受限
- 节点需要后续单独编辑
- 流程图 / 节点图 / 简单架构图
- 想保留“每个节点可改”的结构

输出方式：

- 不把 Mermaid 当整图截图。
- 将节点、边、标签转成 HTML 原生节点或 SVG 分组。
- 每个节点有独立 class / data-id，方便 CSS 和后续修改。

限制：

- 视觉表现中等。
- 复杂图需要手动控制节点数量和层级。

### F. Markdown 图表代码块转可编辑画板

适合：

- 用户给 Markdown 文档，里面包含 Mermaid / PlantUML 代码块
- 希望像飞书 CLI 画板一样，把图表转换成可编辑矢量节点
- 不是截图，而是每个节点、连线、文本都可以单独移动和修改
- 适合流程图、架构图、时序图、简单泳道图、状态图

输入示例：

- Mermaid fenced block: `flowchart LR; A[需求输入] --> B[策略拆解]; B --> C[方案生成]; C --> D[审验收]`
- PlantUML fenced block: `@startuml ... 用户 -> 系统: 提交需求 ... @enduml`

输出方式：

- 先从 Markdown 中提取 `mermaid` 和 `plantuml` fenced code block。
- Mermaid:
  - `flowchart` / `graph`：解析节点、边、方向、子图，转为原生节点和 SVG 连线。
  - `sequenceDiagram`：转为参与方列、消息箭头、返回箭头和分组带。
  - `mindmap` / `timeline` / `gantt`：优先转为 HTML/SVG 结构化图；复杂时降级为路径 A。
- PlantUML:
  - `sequence`：解析参与方和消息，转为可编辑时序图。
  - `component` / `deployment` / `class`：转为节点分组、关系线和标签。
- 在 HTML PPT 中用 `.board-node` / `.board-edge` / `.board-label` 表达，模拟画板原生对象。
- 若接入飞书 CLI / board API，则输出节点 JSON：`shape/text/connector/position/size/style`，不要上传截图。

落画板原则：

- 每个 Mermaid / PlantUML 节点必须有稳定 `data-id`。
- 每条边必须有 `from` / `to` / `label`，连线引用节点 ID。
- 节点文字不超过 16 字；超过则拆成标题 + 注释。
- 超过 18 个节点时，先聚合分组，再生成画板。
- 如果用户明确要求“飞书画板”，优先生成 board-native JSON 或调用对应 CLI；没有 CLI 时先产 HTML whiteboard demo 和转换清单。

限制：

- 不适合复杂 PlantUML skinparam 视觉复刻。
- 不适合直接把大段 Markdown 全量塞进节点。
- Mermaid/PlantUML 语法解析失败时，保留原始源码，并切到路径 E 精排重画。

### C. SVG 自由作图

适合：

- 飞轮
- 鱼骨图
- Dashboard
- 海报式信息图
- 插画化架构图
- 非标准可视化
- 需要强设计感的一页图

输出方式：

- 在 HTML 中嵌入 `<svg>`，但正文文字优先放 HTML，避免大段 SVG text 难维护。
- SVG 用于图形、路径、装饰、图标、背景结构。
- 核心节点可以用 HTML 绝对定位覆盖在 SVG 上，以保持可编辑。

限制：

- 不要把整页所有内容都画进 SVG。
- 不要在 SVG 内写长段中文。
- 若用户需要“每个元素后续可编辑”，优先拆成 HTML 节点或切到 E。

### D. 简单 SVG 单节点装饰

适合：

- 图标
- 印章
- 小标识
- 状态符号
- 小型装饰元素
- 2KB 以内的轻量 SVG

输出方式：

- 作为局部视觉元素嵌入按钮、标签、标题旁或页脚。
- 不作为页面主图。
- 颜色必须使用 JD V16 token CSS variable。

限制：

- 只做装饰，不承载复杂信息。
- 不用作背景大面积铺陈。

### E. 精排架构图

适合：

- 高层系统架构
- 算法链路
- 数据流
- 业务流程
- 复杂节点关系
- 用户要求“结构化表达”“精排”“一页架构图”

输出方式：

- 手写结构数据：节点 ID、层级、坐标、尺寸、颜色、连接关系。
- 用 HTML/CSS 绝对定位或 CSS grid 精排。
- 连线使用 SVG overlay，引用节点 ID 计算或手写路径。
- 每个节点必须有明确层级名称，如 L1 输入层、L2 生成层、L3 排序层。

限制：

- 信息需要先归类，再画图。
- 如果节点超过 24 个，必须合并或拆页。
- 如果文字小于 12px 才能放下，必须拆页。

## 触发词

看到以下词时，必须先选作图路径：

- 画图、画板、whiteboard、画架构图、画流程图
- 画飞轮、画鱼骨、画路线图、画 Dashboard
- 画插画、画海报、AI 自由作图
- SVG、可视化、节点图、精排、结构化表达
- Mermaid、PlantUML、甘特图、时序图、类图

## 路径选择速查

| 用户请求 | 推荐路径 |
|---|---|
| “画一个流程图 / 时序图 / 甘特图” | A |
| “Mermaid 太复杂渲染不全，但节点还要能改” | B |
| “Markdown 里的 Mermaid / PlantUML 转飞书画板 / 可编辑矢量图” | F |
| “做一个飞轮 / 鱼骨 / 桑基 / Dashboard / 海报式信息图” | C |
| “加一个小图标 / 印章 / 装饰符号” | D |
| “做一页精排架构图 / 系统结构图 / 算法框架” | E |
| “结构化表达，不要堆卡片” | E |

## 排障提示

当用户反馈以下问题时，先检查图层和路径选择：

- “右下角半截”
- “z-index 错乱”
- “节点翻倍”
- “复杂图渲染不全”
- “Mermaid 服务端失败”
- “文字挤在一起”
- “不像结构化表达”

处理顺序：

1. 确认画图路径是否选错。
2. 对照 case library，确认图型骨架是否成立。
3. 检查内容是否超过一页承载上限。
4. 检查 SVG / HTML 层级是否混乱。
5. 检查是否把长文字写进 SVG。
6. 必要时切换到路径 E，用坐标和层级重排。

## 和 Deck 结构路径的关系

- `deck-structure-presets.md` 决定“这份材料怎么讲”。
- `drawing-paths.md` 决定“这一页图怎么画”。
- 先选 deck 路径，再选作图路径。

例：

- Hints 用户主线：Deck 路径 A 用户旅程型；触点图可用作图路径 E。
- 引流语生成与分发框架：Deck 路径 B 系统机制型；一页结构图用作图路径 E。
- Dashboard 汇报页：Deck 路径 C 经营复盘型；图表区用作图路径 C。
