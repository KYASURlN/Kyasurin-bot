const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content.toLowerCase() === 'ping') {
        message.channel.sendMessage('Ring-a-ling!!');
        }
    if (message.content.toLowerCase() === 'tomo is gay') {
        message.channel.sendMessage('Oh yeah, absolutely.');
        }
    if (message.content.toLowerCase() === 'i love kyo') {
        message.channel.sendMessage("That's so sweet!");
        }
    if (message.content === 'what is my avatar') {
    message.reply(message.author.avatarURL);
        }
    if (message.content.toLowerCase() === 'triggered') {
        message.channel.sendMessage("https://orig00.deviantart.net/3839/f/2018/060/a/0/untitled_1__3__by_kyasurln-dc4o53d.png");
        }
});   

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'member-log');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
