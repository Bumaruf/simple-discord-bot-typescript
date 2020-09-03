import { ICommand } from '../../handlers/command';
import { Client, Message } from 'discord.js';

const command: ICommand = {
  name: 'ping',
  description: 'Returns latency',
  usage: 'ping',
  aliases: [],
  async run(client: Client, message: Message, args: string[]) {
    const msg = await message.channel.send(`🏓 Pinging...`);
    msg.edit(`🏓 Pong! Latency is ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms`);
  }
}

module.exports = command;