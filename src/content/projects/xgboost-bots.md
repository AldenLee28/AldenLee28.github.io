---
title: XGBoost Trading Bots
blurb: Cross-sectional equity bots — classification and regression variants with walk-forward validation and IBKR paper trading.
order: 2
tags: [python, xgboost, quant]
draft: false
---

<!-- Starter stub — replace with your own write-up. -->

Systematic equity bots predicting 21-day forward returns within sectors.
The classification variant targets top-quintile membership (evaluated on
AUC); the regression variant scores continuous z-scored returns (evaluated
on Rank IC), tuned with Optuna and validated walk-forward.

## Highlights

- Sector-neutral long/short positioning
- Weekly scoring → paper-trade execution on IBKR
- Anti-overfitting fork with tightened regularization
