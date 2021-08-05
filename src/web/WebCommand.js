import Utils from "../Utils.js";
import * as Discord from "discord.js";

export default class WebCommand {

  constructor(client) {
    this.client = client;
  }

  async init() {
    await Utils.makeGuildCommand(this.client, {name: "website", description: "Visit my website!"}, "822194899469860864", async interaction => {
      //make and send web embed
      const web = new Discord.MessageEmbed()
        .setColor("#5865F2")
        .setTitle("Website")
        .setDescription("You can visit my website at [www.rudrecciah.dev](https://rudrecciah.dev).")
        .setFooter("BotRecciah", "https://raw.githubusercontent.com/RudRecciah/files/main/botrecciah.png")
        .toJSON();
      await interaction.editReply({embeds: [web]});
    });
  }

}
