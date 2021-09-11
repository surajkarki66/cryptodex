"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var key_1 = __importDefault(require("./commands/key"));
commander_1.program
    .command("set")
    .description("Set API Key -- Get at https://nomics.com")
    .action(key_1.default.set);
commander_1.program.command("show").description("Show API Key").action(key_1.default.show);
commander_1.program.command("remove").description("Remove API Key").action(key_1.default.remove);
commander_1.program.parse(process.argv);
