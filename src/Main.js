import "core-js/stable";
import "regenerator-runtime/runtime";
import fse from "fs-extra";
import Discord from "discord.js";
import Utils from "./Utils.js";
import InfoCommand from "./info/InfoCommand.js";

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
        Utils.sendEmbed(client, "822194899469860867", "This is a random message", "that I send when authenticated.");
      }
      const Info = new InfoCommand(client);
      await Info.init();
      //run cli
      Utils.cli(client);
    });
    //log in
    await client.login(this.config.token);
  }

};