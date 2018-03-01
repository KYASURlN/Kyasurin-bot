const Discord = require('discord.js');
const bot = new Discord.Client ();

bot.on('guildMemberAdd', member => {
   member.send("Welcome to the server!");
});

client.login(process.env.BOT_TOKEN);
