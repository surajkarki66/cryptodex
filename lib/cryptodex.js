#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var clear_1 = __importDefault(require("clear"));
var commander_1 = require("commander");
var chalk_1 = __importDefault(require("chalk"));
var figlet_1 = __importDefault(require("figlet"));
(0, clear_1.default)();
// tslint:disable-next-line: no-console
console.log(chalk_1.default.red(figlet_1.default.textSync("cryptodex", { horizontalLayout: "full" })));
commander_1.program
    .version("1.0.0")
    .command("key", "Manage API Key -- https://nomics.com")
    .parse(process.argv);
