#!/usr/bin/env node

import chalk from "chalk";
import figlet from "figlet";

console.log(
  chalk.red(figlet.textSync("cryptodex", { horizontalLayout: "full" }))
);
