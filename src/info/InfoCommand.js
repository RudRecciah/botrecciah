import Utils from "../Utils.js";
import * as Discord from "discord.js";

export default class InfoCommand {

  constructor(client) {
    this.client = client;
  }

  async init() {
    await Utils.makeGuildCommand(this.client, {name: "info", description: "Display bot and server information."}, "822194899469860864", async interaction => {
      //make and send info embed
      const info = new Discord.MessageEmbed()
        .setColor("#5865F2")
        .setTitle("ServerRecciah")
        .setDescription("This is my personal server! I do stuff here...")
        .addField("For support", "Get help in <#836599751197196298>, or use /support to create a ticket. You can also just ping <@!246080207704817664>.")
        .addField("To read the rules", "Visit <#835034744513232906> or use /rules.")
        .addField("Learn more", "Check out [my site](https://rudrecciah.dev/).")
        .setFooter("BotRecciah", "https://raw.githubusercontent.com/RudRecciah/files/main/botrecciah.png")
        .toJSON();
      await interaction.reply({embeds: [info]});
    });
  }

}
