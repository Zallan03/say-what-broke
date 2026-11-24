# Say What Actually Broke

One single line of software error copy that tells the user the brutal truth about what went wrong — and makes them laugh on the way.

[![make.fun](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)
[![Rank](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/Zallan03/say-what-broke/rank.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)
[![Reward](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/Zallan03/say-what-broke/reward.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)

Entry for the [Say What Actually Broke](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5) bounty on [make.fun](https://make.fun/r/tmbrnhrj).

## The line

> Our security certificate expired yesterday. Your data is safe, our calendar isn't. Renewing now, try again in 10 minutes.

## How it works

`main.ts` writes the error line to `/output/entry.txt` (one line, 121 characters, no trailing newline). It fails loudly instead of writing an entry that would break the gate.

```sh
node main.ts
```
