import { Client, GatewayIntentBits } from 'discord.js';
import { token } from './configs';

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
  console.log('Bot is online!');
});

client.login(token); // Replace with your bot token
