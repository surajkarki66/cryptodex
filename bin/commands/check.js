import chalk from "chalk";
import ora from "ora";
import KeyManager from "../lib/KeyManager.js";
import CryptoAPI from "../lib/CryptoAPI.js";
import { log } from "../utils/logger.js";
const check = {
    async price(cmd) {
        const throbber = ora("Fetching all the data").start();
        throbber.color = "blue";
        try {
            const keyManager = new KeyManager();
            const key = keyManager.getKey();
            const api = new CryptoAPI(key);
            const priceOutputData = await api.getPriceData(cmd.coin, cmd.cur);
            throbber.stopAndPersist({
                symbol: "✔",
                text: "All done check current rates!",
            });
            log(priceOutputData);
        }
        catch (err) {
            throbber.stopAndPersist({
                symbol: "✘",
                text: "Oops! Error occurred",
            });
            log(chalk.red(err.message));
        }
    },
};
export default check;
