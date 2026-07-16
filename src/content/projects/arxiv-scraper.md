---
title: arXiv Scraper
blurb: Local queryable index of academic papers, with citation enrichment and ranking.
category: tech
order: 6
tags: [python, sqlite, research]
wip: true
draft: false
---
<!-- Work in progress — write-up coming. -->

Builds a local SQLite index of q-fin papers from the arXiv metadata snapshot,
enriches them with OpenAlex citation data, and ranks a shortlist by interest
keywords and trusted authors.

## Current Issues:

- Issues with chinese name assignment due to arXiv format
