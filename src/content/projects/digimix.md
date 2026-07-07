---
title: Digimix
blurb: Spotify metadata pipeline with Camelot/BPM harmonic-compatibility matching for DJs.
order: 3
tags: [python, spotify, music]
draft: false
---

<!-- Starter stub — replace with your own write-up. -->

A CLI pipeline that extracts track metadata from Spotify (search, playlists,
library) and answers DJ questions like "which tracks mix harmonically with
this one?" using Camelot-wheel key compatibility and BPM ranges.

## Highlights

- SQLite storage with Parquet export
- Camelot-wheel compatibility queries
- Retry-hardened Spotify API client
