# JD V16 基础配色

来源：`jd-design-system-md-v16/foundations/tokens/color.md` 与 `tokens.json`。PPT 只使用这些基础色及其语义变量；新增业务色必须先说明用途，并优先落在信息图局部，而不是改全局主题。

## PPT 全局变量

| CSS 变量 | V16 token / atom | Light 值 | 用途 |
|---|---|---|---|
| `--c-title` | `color_title` / `gray_1` | `#171a26` | 一级标题、重要文本 |
| `--c-text` | `color_text` / `gray_2` | `#3d414d` | 正文、二级文本 |
| `--c-help` | `color_text_help` / `gray_3` | `#828794` | 注释、页脚、弱提示 |
| `--c-disabled` | `color_text_disabled` / `gray_4` | `#c2c4cc` | 禁用、弱化元素 |
| `--c-bg-page` | `color_background` / `gray_5` | `#f2f3f7` | 浏览器外层、页面背景 |
| `--c-bg` | `color_background_overlay` / `white` | `#ffffff` | slide 内容底 |
| `--c-sunken` | `color_background_component` / `gray_6` | `#f5f6fa` | 容器、浅底区 |
| `--c-line` | `color_border` / `gray_9` | `rgba(0,0,0,0.08)` | 分割线、描边 |
| `--c-brand` | `color_primary` / `jdred_6` | `#ff0f23` | 京东红主强调 |
| `--c-brand-pressed` | `color_primary_pressed` / `red_7` | `#e53029` | 强调点击态 |
| `--c-brand-light` | `color_primary_light` / `red_1` | `#fff0f4` | 品牌浅底 |
| `--c-brand-light-pressed` | `color_primary_light_pressed` / `red_2` | `#ffd6e1` | 品牌浅底点击态 |
| `--c-on-brand` | `color_primary_text` / `white` | `#ffffff` | 红底文字 |
| `--c-service` | `color_service_text` / `servicegold_4` | `#b5691a` | 服务场景文字 |
| `--c-service-bg` | `color_service_bground` / `servicegold_1` | `#fff4e8` | 服务浅底 |
| `--c-service-line` | `color_service_border` / `servicegold_3` | `rgba(181,105,26,0.20)` | 服务描边 |
| `--c-success` | `color_success` / `successgreen_2` | `#00d900` | 成功图形 |
| `--c-success-bg` | `color_success_light` / `successgreen_1` | `#ebfbeb` | 成功浅底 |
| `--c-success-text` | `color_success_pressed` / `successgreen_3` | `#2aa32a` | 成功文字 |
| `--c-error` | `color_error` / `errorred_2` | `#ff0f23` | 错误图形；语义独立但当前 light hex 与京东红相同 |
| `--c-error-bg` | `color_error_light` / `errorred_1` | `#fff0f4` | 错误浅底 |
| `--c-warning` | `color_warning` / `warningyellow_2` | `#ffbf00` | 警示图形 |
| `--c-warning-bg` | `color_warning_light` / `warningyellow_1` | `#fff9e0` | 警示浅底 |
| `--c-warning-text` | `color_warning_pressed` / `warningyellow_3` | `#b26b00` | 警示文字 |
| `--c-info` | `color_Info` / `infoblue_2` | `#0073ff` | 信息图形 |
| `--c-info-bg` | `color_Info_light` / `infoblue_1` | `#e5f5ff` | 信息浅底 |

## PPT 使用约束

- 全局主题只能由白、灰、京东红组成；服务金、成功绿、警示黄、信息蓝只用于状态或图表局部。
- 京东红 `#ff0f23` 只用于关键动作、关键数字、页码、强调线、选中态，不做大面积背景。
- 错误语义必须写 `--c-error`，不要因为 hex 相同就混用 `--c-brand`。
- 服务场景用服务金四件套，不能用橙色替代服务金。
- 图表可以使用 `--c-info / --c-success / --c-warning / --c-service` 做分类，但单页彩色族不超过 4 个。
- 禁止引入外部主题色：紫蓝渐变、米色杂志风、暗蓝科技风、咖啡色、霓虹色。
