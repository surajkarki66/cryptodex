#!/usr/bin/env node

import clear from "clear";
import { program } from "commander";
import chalk from "chalk";
import figlet from "figlet";

clear();
// tslint:disable-next-line: no-console
console.log(
  chalk.red(figlet.textSync("cryptodex", { horizontalLayout: "full" }))
);

program
  .version("1.0.0")
  .command("key", "Manage API Key -- https://nomics.com")
  .parse(process.argv);
