#!/usr/bin/env node

import clear from "clear";
import { program } from "commander";
import chalk from "chalk";
import figlet from "figlet";

import pkg from "../package.json";

clear();
// tslint:disable-next-line: no-console
console.log(
  chalk.red(figlet.textSync("cryptodex", { horizontalLayout: "full" }))
);

program
  .version(pkg.version)
  .command("key", "Manage API Key -- https://nomics.com")
  .parse(process.argv);
