const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

const responseObject = {
  "ping": "Pong's definition means a strong an unpleasant smell.",
  "tomo is gay": "OH HELL YEAH THIS IS TRUE",
  "wheres kyo": "I'm right fucking here."
  "im gay for kyo": "woah there buckaroo."
};

client.on("message", (message) => {
  if(responseObject[message.content]) {
    message.channel.send(responseObject[message.content]);
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
