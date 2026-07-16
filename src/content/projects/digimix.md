---
title: Digimix
blurb: Spotify metadata pipeline with Camelot/BPM harmonic-compatibility matching for DJs.
category: tech
order: 5
tags: [python, spotify, music]
draft: true
---
<!-- Starter stub — replace with your own write-up. -->

A CLI pipeline that extracts track metadata from Spotify (search, playlists,
library) and answers DJ questions like "which tracks mix harmonically with
this one?" using Camelot-wheel key compatibility and BPM ranges.

## Highlights

- SQLite storage with Parquet export
- Camelot-wheel compatibility queries
- Retry-hardened Spotify API client

## Issues:

- Finding a database housing music metadata and features, due to the recent spotify hack the api is currently unavailable.
