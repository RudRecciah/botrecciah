import "core-js/stable";
import "regenerator-runtime/runtime";
import fse from "fs-extra";
import discord from "discord.js";
import readline from "readline";

module.exports = class Main {
  
  static async main() {

    //load config
    this.config = null;
    if(await fse.pathExists("../../data/config.json")) {
      this.config = require("../../data/config.json");
    }else{
      this.config = require("../resources/config.json");
    }

    //setup bot
    const client = new discord.Client();
    client.once("ready", () => {
      console.log("We have logged in.");
      console.log("Node.js Application Loaded");
      this.cli();
    });

    //log in
    await client.login(this.config.token);
  }

  static cli() {
    //init cli
    const cli = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    const commands = {
      help: "Lists commands."
    };
    cli.question("", command => {
      switch(command) {
        case "help":
          console.log("%cCommands:", "font-weight:bold");
          console.log(commands);
          break;
        default:
          console.log("Unknown command! Use \"help\" for help.");
      }
      cli.close();
      this.cli();
    });
  }

};