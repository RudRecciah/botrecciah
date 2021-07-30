import readline from "readline";

export default class CliController {

  static cli() {

    //init cli
    const cli = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    const commands = {
      help: "Lists commands."
    };

    //commands
    cli.question("", command => {
      switch(command) {
        case "help":
          console.log("%cCommands:", "font-weight:bold");
          console.log(commands);
          break;
        default:
          console.log("Unknown command! Use \"help\" for help.");
          break;
      }
      cli.close();
      this.cli();
    });
  }

}
