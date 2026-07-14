---
title: DCF Valuation Engine
blurb: Multi-model discounted-cash-flow engine fed by Capital IQ exports and FRED macro data.
category: finance
order: 1
tags: [python, valuation, fred]
wip: true
draft: false
---
<!-- Starter stub — replace with your own write-up. -->

A 7-phase equity valuation pipeline: data ingestion → parsing → company
classification → WACC computation → sensitivity grids → model blending →
verdict (undervalued / fairly valued / overvalued).

## Highlights

- Multiple valuation models blended: fade, historical, industry, Monte Carlo
- Country- and rating-aware WACC
- Sensitivity grids across discount-rate assumptions
