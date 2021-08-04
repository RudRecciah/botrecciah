import readline from "readline";
import {getModulesPluginNames} from "@babel/preset-env";

export default class Utils {

  static sendMessage(client, channel, message) {
    return client.channels.cache.get(channel).send(message);
  }

  static sendEmbed(client, channel, title, message) {
    return client.channels.cache.get(channel).send({embeds: [{ "title": title, "description": message, "color": "#5865F2", "footer": { "icon_url": "https://raw.githubusercontent.com/RudRecciah/files/main/botrecciah.png", "text": "BotRecciah" }}]});
  }

  static async makeCommand(client, data, callback) {
    //make command
    await client.application?.commands.create(data);
    //wait for command to be created and respond if so after deferring
    client.on("interactionCreate", async interaction => {
      if(interaction.isCommand() && interaction.commandName === data.name){
        await interaction.defer();
        callback(interaction);
      }
    });
  }

  static async makeGuildCommand(client, data, guild, callback) {
    //make command
    await client.guilds.cache.get(guild)?.commands.create(data);
    //wait for command to be created and respond if so after deferring
    client.on("interactionCreate", async interaction => {
      if(interaction.isCommand() && interaction.commandName === data.name){
        await interaction.defer();
        callback(interaction);
      }
    });
  }

  static cli(client) {
    //init cli
    const cli = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    const commands = {
      help: {
        description: "Lists commands.",
        arguments: null
      },
      say: {
        description: "Says a message.",
        arguments: ["data:{}"]
      }
    };
    //commands
    cli.question("", command => {
      switch(command.split(" ")[0]) {
        case "help":
          console.log("%cCommands:", "font-weight:bold");
          console.log(commands);
          break;
        case "say":
          if(command.split(" ").length >= 4) {
            const args = command.replace("say ", "").split(" ");
            const channel = args[0];
            const embed = args[1] === "embed";
            let title;
            if(embed) {
              title = args[2];
              args.splice(0, 3);
            }else{
              args.splice(0, 2);
            }
            let message = "";
            for(const word of args) {
              message += `${word} `;
            }
            if(embed) {
              this.sendEmbed(client, channel, title, message);
            }else{
              this.sendMessage(client, channel, message);
            }
          }else{
            console.error("Invalid arguments!");
          }
          break;
        default:
          console.log("Unknown command! Use \"help\" for help.");
          break;
      }
      cli.close();
      this.cli(client);
    });
  }

}
