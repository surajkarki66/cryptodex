import { program } from "commander";

program
  .command("price")
  .description("Check price for crypto coins")
  .action(() => console.log("Hello from price"));

program.parse(process.argv);
