import { Client, Collection } from 'discord.js';
import * as dotenv from 'dotenv';

import { commandHandler } from './handlers/command';
import { eventHandler } from './handlers/event';

let path;
switch (process.env.NODE_ENV) {
  case 'production':
    console.log('Running in production mode 🔥');
    path = `${__dirname}/../.env.production`;
    break;
  default:
    console.log('Running in development mode 🛠️');
    path = `${__dirname}/../.env.development`;
}
dotenv.config({ path });

const client = new Client();

export interface ICollections {
  commands: Collection<any, any>,
  aliases: any
}

const collections: ICollections = {
  commands: new Collection,
  aliases: new Collection
};

commandHandler(collections);
eventHandler(client, collections);

client.login(process.env.TOKEN);