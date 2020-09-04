import config from '../config.json';
import * as dotenv from 'dotenv';

let path = `${__dirname}/../../.env.development`;
dotenv.config({ path });

describe('Check if token is valid', () => {
  it('Checks whether token has been set', () => {
    expect(process.env.TOKEN).toBeDefined();
  });
});

describe('Check if config.json is valid', () => {
  it('Checks whether prefix has been set', () => {
    expect(config.prefix).toBeDefined();
  });
});