---
title: Key Audit Matters — HK Property
blurb: What auditors flag in HKEX-listed property companies, and the ratios behind it.
category: finance
order: 3
tags: [audit, python, excel, hkex]
wip: true
draft: false
---

A comparison of the Key Audit Matters (KAMs) reported by the auditors of
HKEX-listed property companies. The project links each recurring risk area to
the financial-statement ratios that explain it. The deliverables are a short
written memo and an Excel workbook.

## What it does

- **Extracts the KAM section** from each annual report PDF with a Python script
  (`pdfplumber`). The script finds the start of the auditor's report and slices
  out the text from "Key Audit Matters" to "Other Information".
- **Groups each KAM into a theme**: investment property valuation, net
  realisable value of properties, revenue recognition, going concern /
  financing, or other impairment.
- **Builds an Excel workbook** with a company × theme KAM matrix and a ratio
  sheet. Every ratio is a live Excel formula, so the working is visible.

The figures are entered by hand from the audited statements, with each one
traced back to its page. Parsing PDF tables automatically isn't reliable enough
for numbers that the analysis depends on.

## Ratios, and the KAM each one speaks to

| Ratio | KAM theme |
|---|---|
| Investment property / total assets | IP valuation |
| Fair-value change / profit before tax | IP valuation |
| Reported vs underlying profit gap | IP valuation |
| NRV write-down / properties for sale | NRV of properties |
| Net gearing, interest cover | Going concern / financing |
| Property sales / revenue | Revenue recognition |

## First company: Swire Properties (1972), FY2025

PwC gave an unmodified opinion with **one KAM: valuation of investment
properties**. The procedures included in-house valuation experts challenging
the valuer's market rents and capitalisation rates against an independent
range, cost-to-complete testing on IP under development, and agreeing a sample
of rental data to leases.

The numbers explain why that is the only KAM (HK$m):

| Metric | FY2025 |
|---|---|
| Investment properties / total assets | **75.9%** |
| Change in fair value of IP | **−6,095** |
| Underlying profit attributable to shareholders | **+8,620** |
| Reported loss attributable to shareholders | **−1,533** |
| Net gearing | 14.4% |
| Interest cover (before fair-value changes) | 6.6× |
| Property trading / revenue | 13.2% |
| NRV write-down | none |

A HK$6.1bn revaluation loss turned HK$8.6bn of underlying profit into a
reported loss. That is the judgement the KAM is about. With low gearing,
comfortable interest cover, a small trading business and no NRV write-down,
there was no financing, revenue or NRV KAM to report.

**What the first company taught about the method:** ratios that divide by
profit break when profit is near zero. Fair-value change / profit before tax
came out at 2,400% because profit before tax was −HK$254m. Measuring the
revaluation against underlying profit instead (−71%) gives a reading that can
be compared across companies.

Source: Swire Properties Annual Report 2025 (auditor's report, consolidated
statements, notes 4, 6, 19 and 23).
