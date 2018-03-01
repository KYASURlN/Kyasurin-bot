let Discord = require('discord.js');
let bot = new Discord.Client();

bot.on('ready', function() {
	console.log(Discord.version);
});

bot.on('message', function(message) {
	if (message.content == 'start')
		message.channel.startTyping();
	if (message.content == 'stop')
		message.channel.stopTyping();
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
