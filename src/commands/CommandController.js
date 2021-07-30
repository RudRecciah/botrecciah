import Utils from "../Utils.js";
import * as Discord from "discord.js";

export default class CommandController {

  static async registerCommands(client, dev) {
    if(dev) {
      await Utils.makeCommand(client, {name: "info", description: "Display bot and server information."}, "822194899469860864");
    }else{
      await Utils.makeCommand(client, {name: "info", description: "Display bot and server information."});
    }
  }
  
  static async prepareResponses(client) {
    client.on("interactionCreate", async interaction => {
      if(interaction.isCommand() && interaction.commandName === "info"){
        // await interaction.defer();
        const exampleEmbed = new Discord.MessageEmbed()
          .setColor("#7489D8")
          .setTitle("ServerRecciah")
          .setDescription("This is my personal server! I do stuff here...")
          .setThumbnail("https://cdn.discordapp.com/icons/728466894675378217/ec189b7fba0d504b1ebfb4b3ca321906.webp")
          .addField("Hey", "I'm the metal guardian of ServerRecciah.")
          .addField("For support", "Get help in #836599626702127134, #836599721870622720, #836599736806670407, or #836599751197196298.")
          .addField("To read the rules", "Visit #835034744513232906.")
          .addField("Learn more", "Check out https://rudrecciah.dev/.")
          .setFooter("BotRecciah", "https://cdn.discordapp.com/avatars/869798683586224149/6e7df84338f3023a1b7f55ea4d710132.webp")
          .toJSON();
        await interaction.reply({embeds: [exampleEmbed]});
      }
    });
  }
  
}
