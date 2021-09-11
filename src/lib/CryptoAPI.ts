import axios from "axios";
import chalk from "chalk";

import { ICoin } from "../types/coin.js";

class CryptoAPI {
  private apiKey;
  private baseUrl;
  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.baseUrl = "https://api.nomics.com/v1/currencies/ticker";
  }
  async getPriceData(coinOption: string, curOption: string) {
    try {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: curOption,
      });

      const res = await axios.get(
        `${this.baseUrl}?key=${this.apiKey}&ids=${coinOption}&convert=${curOption}`
      );
      let output = "";
      res.data.forEach((coin: ICoin) => {
        output +=
          `Coin:` +
          chalk.blue(` ${coin.name}`) +
          ` (${coin.symbol})` +
          ` |` +
          ` Price:` +
          chalk.green(` ${formatter.format(coin.price)}`) +
          ` |` +
          ` Market CAP:` +
          chalk.green(` ${formatter.format(coin.market_cap)}`) +
          ` |` +
          ` Rank:` +
          chalk.yellow(` ${coin.rank}`) +
          `\n` +
          `\n`;
      });

      return output;
    } catch (err) {
      handleAPIError(err);
    }
  }
}
function handleAPIError(err: any) {
  if (err.response.status === 401) {
    throw new Error("Your API key is invalid - Go to https://nomics.com");
  } else if (err.response.status === 404) {
    throw new Error("Your API is not responding");
  } else {
    throw new Error("Something is not working");
  }
}

export default CryptoAPI;
