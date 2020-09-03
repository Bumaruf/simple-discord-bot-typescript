import { Message, Client } from 'discord.js';
import { ICommandRun } from '../handlers/command';
import { ICollections } from '../index';

import config from '../config.json';

module.exports = (client: Client, collection: ICollections) => {
  client.on('message', (message: Message) => {

    if (message.author.bot) return; // Caso a mensagem for do bot;
    if (message.channel.type == 'dm') return; // Caso a mensagem for no privado;

    let prefix = config.prefix;
    let args = message.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift()?.toLowerCase();
    let command: ICommandRun;

    if (!message.content.startsWith(prefix)) return;

    if (collection.commands.has(cmd)) {
      command = collection.commands.get(cmd);
    } else {
      command = collection.commands.get(collection.aliases.get(cmd));
    }

    if (command) {
      command.run(client, message, args);
    }
  });
}
