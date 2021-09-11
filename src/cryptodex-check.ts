import { program } from "commander";
import check from "./commands/check";

program
  .command("price")
  .description("Check price for crypto coins")
  .option(
    "--coin <type>",
    "Add specific coin types in CSV format",
    "BTC,ETH,XRP"
  )
  .option("--cur <currency>", "Change the currency", "USD")
  .action((cmd) => check.price(cmd));

program.parse(process.argv);
