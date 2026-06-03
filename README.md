# JD Field PPT Skill

京东场域专用 HTML PPT skill，用于生成业务汇报、方案演示、架构说明、设计系统发布和复杂结构化表达页面。

## What Is Inside

- `SKILL.md`: Codex skill entry and workflow.
- `assets/`: JD font presets, base HTML template, cover background media.
- `references/`: deck structure, page patterns, drawing paths, color tokens, quality checklist.
- `scripts/validate-jd-deck.mjs`: static validation script for generated decks.
- `examples/`: ready-to-open HTML demo cases.

## Preview Examples

Open these files directly in a browser:

- `examples/complex-case/index.html`
- `examples/traffic-framework/full-page.html`
- `examples/hints-journey/index.html`
- `examples/drawing-path-gallery/index.html`

## Validate

```bash
node scripts/validate-jd-deck.mjs examples/complex-case/index.html
```

## Notes

This repository contains JD-specific fonts, color tokens, and demo presentation assets. Keep access scope aligned with your team's asset policy.
