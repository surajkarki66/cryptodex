"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
commander_1.program
    .command("set")
    .description("Set API Key -- Get at https://nomics.com")
    .action(function () { return console.log("Hello from set"); });
commander_1.program
    .command("show")
    .description("Show API Key")
    .action(function () { return console.log("Hello from show"); });
commander_1.program
    .command("remove")
    .description("Remove API Key")
    .action(function () { return console.log("Hello from remove"); });
commander_1.program.parse(process.argv);
