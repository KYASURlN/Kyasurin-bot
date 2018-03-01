const Discord = require('discord.js');
const client = new Discord.Client();

const Array = [];

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content.toLowerCase() === 'ping') {
        message.channel.sendMessage('Is there something you require?');
        }
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  if (!Array[guild.id]) Array[guild.id] = new Discord.Collection();
  Array[guild.id].set(member.id, member.user);

  if (Array[guild.id].size > 1) {
    const userlist = Array[guild.id].map(u => u.toString()).join(" ");
    guild.channels.get(guild.id).send("Welcome our new users!\n" + userlist);
    Array[guild.id].clear();
  }
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  if (Array[guild.id].has(member.id)) Array.delete(member.id);
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
