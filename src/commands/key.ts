import inquirer from "inquirer";
import colors from "colors";

import validation from "../utils/validation";
import KeyManager from "../lib/KeyManager";

const key = {
  async set() {
    const keyManager = new KeyManager();
    const input = await inquirer.prompt([
      {
        type: "input",
        name: "key",
        message: "Enter API Key".green + "https://nomics.com",
        validate: validation.isRequired,
      },
    ]);
    const key = keyManager.setKey(input.key);
    if (key) {
      console.log("API Key set".blue);
    }
  },
  show() {
    console.log("hello from show");
  },
  remove() {
    console.log("hello from remove");
  },
};

export default key;
