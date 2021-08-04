import Utils from "../Utils.js";
import * as Discord from "discord.js";

export default class RulesCommand {

  constructor(client) {
    this.client = client;
  }

  async init() {
    await Utils.makeGuildCommand(this.client, {name: "rules", description: "View the rules of ServerRecciah."}, "822194899469860864", async interaction => {
      //make and send rules embed
      const rules = new Discord.MessageEmbed()
        .setColor("#5865F2")
        .setTitle("Rules")
        .setDescription("By participating in this server, you agree to these rules. Failure to follow them may result in your being banned from the server.")
        .addField("Rule 1:", "Be nice.")
        .setFooter("BotRecciah", "https://raw.githubusercontent.com/RudRecciah/files/main/botrecciah.png")
        .toJSON();
      await interaction.editReply({embeds: [rules]});
    });
  }

}
