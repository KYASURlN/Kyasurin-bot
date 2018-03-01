const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content.toLowerCase() === 'ping') {
        message.author.sendMessage('AAAAAAAAAAAHHHHHHHH');
        }
});

client.on("serverNewMember", (server, user) => {
     client.sendMessage(user, "Welcome to: " + server.name);
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
