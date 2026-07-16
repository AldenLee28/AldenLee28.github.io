---
title: XGBoost Classifier Bot V1
blurb: Cross-sectional equity classifier — top-quintile 21-day forward return, evaluated on AUC.
category: tech
group: ML growth diary
order: 2
tags: [python, xgboost, quant]
draft: false
---
<!-- Starter stub — replace with your own write-up. -->

A systematic equity bot predicting whether a stock lands in the
top-quintile of 21-day forward returns within its sector. Binary
`XGBClassifier`, tuned with Optuna and early-stopped on validation AUC.

## Highlights

- Sector-neutral long/short positioning
- Weekly scoring → paper-trade execution on IBKR
- SHAP-based feature attribution
