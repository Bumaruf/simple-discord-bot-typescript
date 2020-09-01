import { Client } from 'discord.js';
import * as dotenv from 'dotenv';

let path;
switch (process.env.NODE_ENV) {
  case 'production':
    console.log('Running in production mode 🔥');
    path = `${__dirname}/../.env.production`;
    break;
  default:
    console.log('Running in development mode 🛠️');
    path = `${__dirname}/.env.development`;
}
dotenv.config({ path });

const client = new Client();

client.login(process.env.TOKEN);