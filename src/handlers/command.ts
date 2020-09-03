import { Client, Message } from 'discord.js';
import { readdirSync } from 'fs';
import path from 'path';

import { ICollections } from '../index';

export interface ICommandRun {
  run(client: Client, message: Message, args: string[]): void
}

export interface ICommand extends ICommandRun {
  name: string;
  description: string;
  usage: string;
  aliases?: [];
}

export const commandHandler = (collection: ICollections) => {
  readdirSync(path.join(__dirname, '../commands/')).forEach(dir => {
    const commands = readdirSync(path.join(__dirname, `../commands/${dir}/`));
    
    for (let file of commands) {
      let command: ICommand = require(`../commands/${dir}/${file}`);

      if (command.name) {
        collection.commands.set(command.name, command);
        console.log(file + ' loaded!');
      } else {
        console.error(file + ' error!');
      }

      if (command.aliases && Array.isArray(command.aliases)) {
        command.aliases.forEach(alias => collection.aliases.set(alias, command.name));
      };
    }
  });
}