const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong right back at ya');
  	}
    if (message.content === 'tomo is gay') {
    	message.reply('THIS IS VERY MUCH TRUE');
  	}
    if (message.content === 'wheres kyo') {
    	message.reply('im right fucking here');
  	}
    if (message.content === 'where is kyo') {
    	message.reply('probably busy or dead');
  	}
    if (message.content === 'I LOVE KYO') {
    	message.reply('I LOVE YOU TOO unless ur tomo');
  	}
    if (message.content === 'where is kyo') {
    	message.reply('probably busy or dead');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
