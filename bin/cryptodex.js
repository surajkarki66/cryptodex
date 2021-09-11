#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
commander_1.program
    .version("1.0.0")
    .command("key", "Manage API Key -- https://nomics.com")
    .parse(process.argv);
