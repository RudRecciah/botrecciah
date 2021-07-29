import "core-js/stable";
import "regenerator-runtime/runtime";

module.exports = class Main {
  
  static async main() {
    this.Discord = require("discord.js");
    this.Config = require("../resources/config.json");
    //init bot
    const client = new this.Discord.Client();
    client.once("ready", () => {
      console.log("We have logged in.");
      console.log("Node.js Application Loaded");
    });
    await client.login(this.Config.token);
  }

};