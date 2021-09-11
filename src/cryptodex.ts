#!/usr/bin/env node

import { program } from "commander";

program
  .version("1.0.0")
  .command("key", "Manage API Key -- https://nomics.com")
  .parse(process.argv);
