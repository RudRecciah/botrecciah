import "core-js/stable";
import "regenerator-runtime/runtime";
import fse from "fs-extra";
import Discord from "discord.js";
import Utils from "./Utils.js";
import InfoCommand from "./info/InfoCommand.js";
import RulesCommand from "./rules/RulesCommand.js";
import OopTrigger from "./oop/OopTrigger.js";
import WebCommand from "./web/WebCommand.js";
import ProjectsCommand from "./projects/ProjectsCommand.js";

module.exports = class Main {
  
  static async main() {
    console.log("Loading config...");
    this.config = await Utils.getConfig();
    console.log("Config loaded");
    //setup bot
    const client = new Discord.Client({intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_BANS", "GUILD_EMOJIS_AND_STICKERS", "GUILD_INTEGRATIONS", "GUILD_WEBHOOKS", "GUILD_INVITES", "GUILD_VOICE_STATES", "GUILD_PRESENCES", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "GUILD_MESSAGE_TYPING", "DIRECT_MESSAGES", "DIRECT_MESSAGE_REACTIONS", "DIRECT_MESSAGE_TYPING"]});
    client.once("ready", async () => {
      console.log("Bot authenticated");
      if(this.config.dev) {
        Utils.sendEmbed(client, "822194899469860867", "This is a random message", "that I send when authenticated.");
      }
      //set status
      await client.user.setActivity("over ServerRecciah", {type: "WATCHING"});
      //init commands
      await new InfoCommand(client).init();
      await new RulesCommand(client).init();
      await new OopTrigger(client).init();
      await new WebCommand(client).init();
      await new ProjectsCommand(client).init();
      //run cli
      Utils.cli(client);
      //log load message for pterodactyl
      console.log("Node.js Application Loaded");
    });
    //log in
    console.log("Authenticating bot");
    await client.login(this.config.token);
  }

};