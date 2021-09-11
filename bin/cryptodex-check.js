import { program } from "commander";
import check from "./commands/check.js";
program
    .command("price")
    .description("Check price for crypto coins")
    .option("--coin <type>", "Add specific coin types in CSV format", "BTC,ETH,HEX,ADA,BNB,DOGE")
    .option("--cur <currency>", "Change the currency", "USD")
    .action((cmd) => check.price(cmd));
program.parse(process.argv);
// If no args, output help
if (!process.argv[2]) {
    program.outputHelp();
}
