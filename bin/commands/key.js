import inquirer from "inquirer";
import chalk from "chalk";
import { log } from "../utils/logger.js";
import validation from "../utils/validation.js";
import KeyManager from "../lib/KeyManager.js";
const key = {
    async set() {
        const keyManager = new KeyManager();
        const input = await inquirer.prompt([
            {
                type: "input",
                name: "key",
                message: "Enter API Key https://nomics.com",
                validate: validation.isRequired,
            },
        ]);
        // tslint:disable-next-line: no-shadowed-variable
        const key = keyManager.setKey(input.key);
        if (key) {
            log(chalk.blue("API Key is set"));
        }
    },
    show() {
        try {
            const keyManager = new KeyManager();
            // tslint:disable-next-line: no-shadowed-variable
            const key = keyManager.getKey();
            log("Current API Key: ", chalk.green(key));
            return key;
        }
        catch (e) {
            log(chalk.red(e.message));
        }
    },
    remove() {
        try {
            const keyManager = new KeyManager();
            keyManager.deleteKey();
            log(chalk.blue("Key Removed"));
            return;
        }
        catch (e) {
            log(chalk.red(e.message));
        }
    },
};
export default key;
