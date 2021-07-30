import "core-js/stable";
import "regenerator-runtime/runtime";
import fse from "fs-extra";
import Discord from "discord.js";
import readline from "readline";
import Utils from "./Utils.js";
import CommandController from "./commands/CommandController.js";
import CliController from "./cli/CliController.js";

module.exports = class Main {
  
  static async main() {

    //load config
    this.config = null;
    this.dev = false;
    if(await fse.pathExists("../../data/config.json")) {
      this.config = require("../../data/config.json");
    }else{
      this.config = require("../resources/config.json");
      this.dev = true;
    }

    //setup bot
    const client = new Discord.Client({intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_BANS", "GUILD_EMOJIS_AND_STICKERS", "GUILD_INTEGRATIONS", "GUILD_WEBHOOKS", "GUILD_INVITES", "GUILD_VOICE_STATES", "GUILD_PRESENCES", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "GUILD_MESSAGE_TYPING", "DIRECT_MESSAGES", "DIRECT_MESSAGE_REACTIONS", "DIRECT_MESSAGE_TYPING"]});
    client.once("ready", async () => {
      console.log("We have logged in.");
      console.log("Node.js Application Loaded");
      if(this.dev) {
        Utils.sendMessage(client, "822194899469860867", "transkezbian");
      }
      await CommandController.registerCommands(client, this.dev);
      await CommandController.prepareResponses(client);
      CliController.cli();
    });

    //log in
    await client.login(this.config.token);
  }

};