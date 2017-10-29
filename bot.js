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
    if (message.content === 'i am gay for kyo') {
    	message.reply('woah there buckaroo');
  	}
    if (message.content === 'i love kyo') {
    	message.reply('i love you too?? i guess??');
  	}
    if (message.content === 'kyo i love you') {
    	message.reply('//SCREAMS IN VIETNAMESE');
  	}
    if (message.content === 'tai sao toi lam may') {
    	message.reply('tai vi may ngu ^ q ^');
  	}
    if (message.content === 'TOI YEU KYO') {
    	message.reply('KYO YEU EM LUON!!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
