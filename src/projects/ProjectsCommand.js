import Utils from "../Utils.js";
import * as Discord from "discord.js";


export default class ProjectsCommand {

  constructor(client) {
    this.client = client;
  }

  async init() {
    await Utils.makeCommand(this.client, {name: "projects", description: "View information about my projects!"}, interaction => {
      const projects = new Discord.MessageEmbed()
        .setColor("#5865F2")
        .setTitle("Projects")
        .setDescription("These are a list of all of my projects.")
        .addField("Admincore", "With Admincore, you can moderate and administer your Spigot server with ease and simplicity. Report, punish, spectate, appeal, and manage your playerbase in-game quickly and without hassle. [Learn more](https://www.rudrecciah.dev/admincore/)")
        .addField("EndCraft", "EndCraft is a now open-source archive of a Minecraft server I've owned with some friends since 2013. Find maps, custom plugins, valuable data, and more in EndCraft's archive. [Learn more](https://www.rudrecciah.dev/osea)")
        .addField("To The Moon Theory Wiki", "Being the main active theorizer of all Freebird games, I noticed theories were hard to keep track of and I would usually lose ones made by others. As a response, I decided to build a place for theories to exist and be easily accessable to anyone who might want to read some or use them to make their own. [Learn more](https://www.rudrecciah.dev/ttm)")
        .addField("Custom Query Stats", "Custom Query Stats is a plugin that stores player statistics in your server's MOTD. This way, a Spigot server can send player metadata to other services without the need for an HTTP server or similar solution. [Learn more](https://www.rudrecciah.dev/cqs)")
        .setFooter("BotRecciah", "https://raw.githubusercontent.com/RudRecciah/files/main/botrecciah.png")
        .toJSON();
      interaction.editReply({embeds: [projects]});
    });
  }

}
