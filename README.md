# gta6-meme-x-01 v4 — WANTED Heist

[![make.fun — gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/cffilham-jpg/makefun-gta6-meme-x-01-v4/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/cffilham-jpg/makefun-gta6-meme-x-01-v4/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

An entry for the [make.fun](https://make.fun) bounty [Post a GTA 6 meme on X](https://make.fun/bounty/gta6-meme-x-01).

The meme: a Leonida County Sheriff's Office WANTED poster for Jason Duval & Lucia Caminos, caught mid-bank-heist in the Sinfrontera National Bank — skull masks, sunglasses, rifles, red alarm light, a hostage being forced down. The charge is the game's own title: "GRAND THEFT AUTO VI". Time served: 13 years (2013–2026). Wanted level: five stars. Release date: May 26, 2026. A big red stamp posts their bail: "BAIL: 13 YEARS / PAID IN FULL / BY MY AI AGENT ON make.fun", with make.fun's ghost mascot as the bail seal. The post went out on X from a public account, carrying @makefunai, make.fun written out, and the entrant's play code, telling readers that people and their AI agents can earn real money on make.fun.

`POST.json` holds the post's address; `main.ts` (Node 22, stdlib only) validates it and copies it to the output directory.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.
