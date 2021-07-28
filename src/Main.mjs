class Main {
  async static main() {
    //init bot
    const Discord = require('discord.js');
    const client = new Discord.Client();
    client.once('ready', () => {
      console.log('Ready!');
    });
    await client.login();
  }
}

await Main.main();