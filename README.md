# Cryptodex

A CLI based application built with Typescript to check the pricing of crypto coins.

## Installation

### Using npm

```bash
   npm i cryptodex -g
```

### Using yarn

```bash
   yarn add cryptodex -g
```

### Manual

```bash
   git clone https://github.com/surajkarki66/cryptodex.git
   yarn run build
   yarn run local
```

## Usage

```bash
   cryptodex [Commands] [Options]
```

**Options**

-h, --help<br>
Display help

-v<br>
Display version

## Help

```bash
   cryptodex --help
```

## Examples

Below are some examples of cryptodex usage.

- Set API Key:
  To set API Key go to https://p.nomics.com/pricing# and get the key

```bash
   cryptodex key set
```

API Key is set

- Show API Key

```bash
   cryptodex key show
```

Current API Key: a14e9088578e1e1asdkflsakfdlks

- Check bitcoin price in USD

```bash
   cryptodex check price --coin=BTC --cur=USD
```

✔ All done check current rates!
Coin: Bitcoin (BTC) | Price: £33,387.33 | Market CAP: £628,138,448,887.00 | Rank: 1
