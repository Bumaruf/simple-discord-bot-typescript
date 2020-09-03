import { Client } from 'discord.js';
import { readdirSync } from 'fs';
import path from 'path';

import { ICollections } from '../index';

export const eventHandler = (client: Client, collection: ICollections) => {
  readdirSync(path.join(__dirname, '../events/')).forEach(file => {
    require(`../events/${file}`)(client, collection);
    console.log(file + ' loaded!');
  });
};
