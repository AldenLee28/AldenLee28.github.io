---
title: DCF Valuation Engine
blurb: Multi-model discounted-cash-flow engine fed by Capital IQ reports and esitmates
category: finance
order: 1
tags: [python, valuation, fred]
wip: true
draft: false
---
<!-- Starter stub — replace with your own write-up. -->

A 7-phase equity valuation pipeline:

1. data ingestion
2. parsing
3. company classification
4. WACC computation
5. sensitivity grids
6. model blending
7. verdict (undervalued / fairly valued / overvalued).

## Highlights

- Multiple valuation models blended: fade, historical, industry, Monte Carlo
- Country- and rating-aware WACC
- Sensitivity grids across discount-rate assumptions
