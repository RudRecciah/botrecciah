import * as Discord from "discord.js";

export default class OopTrigger {

  constructor(client) {
    this.client = client;
  }

  async init() {
    this.client.on("message", message => {
      //if someone says oop for whatever reason, send them a useless description of object oriented programming they either already understand or will never need to know
      if(message.content === "oop") {
        const oopEmbed = new Discord.MessageEmbed()
          .setColor("#5865F2")
          .setTitle("Object-oriented programming")
          .setDescription("Object-oriented programming is a programming paradigm based on the concept of \"objects\", which can contain data and code: data in the form of fields, and code, in the form of procedures. A feature of objects is that an object's own procedures can access and often modify the data fields of itself. [Wikipedia](https://en.wikipedia.org/wiki/Object-oriented_programming)")
          .setFooter("BotRecciah", "https://raw.githubusercontent.com/RudRecciah/files/main/botrecciah.png")
          .toJSON();
        message.reply({embeds: [oopEmbed]});
      }
    });
  }

}
