export default class Utils {

  static sendMessage(client, channel, message) {
    return client.channels.cache.get(channel).send(message);
  }

  static async makeCommand(client, data, guild) {
    if(guild) {
      await client.guilds.cache.get(guild)?.commands.create(data);
    }
    await client.application?.commands.create(data);
  }

}
