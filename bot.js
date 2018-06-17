const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
    client.user.setStatus("dnd");
});

client.on('message', message => {
    if (message.content.toLowerCase() === 'ping') {
        message.channel.sendMessage('Ring-a-ling!!');
        }
    if (message.content.toLowerCase() === 'tomo is gay') {
        message.channel.sendMessage('Can confirm tbh');
        }
    if (message.content.toLowerCase() === 'i love kyo') {
        message.channel.sendMessage("nice");
        }
    if (message.content === 'what is my avatar') {
        message.reply(message.author.avatarURL);
        }
    if (message.content.toLowerCase() === 'triggered') {
        message.channel.sendMessage("https://file.toyhou.se/images/7336489_5xvRwS5bylHdn0y.png");
        }
    if (message.content.toLowerCase() === 'bai i yai') {
        message.channel.sendMessage("Im going to fucking eat my left foot");
        }
    if (message.content.toLowerCase() === 'dancing in september') {
        message.channel.sendMessage("STOPSOTPSOTPSOPTOSPOTPSOPTOPSOTPED YAMETEAM EYAMET");
        }
    if (message.content.toLowerCase() === 'im gay') {
        message.channel.sendMessage("u dont need to say it we already knew");
        }
    if (message.content.toLowerCase() === '^ u ^') {
        message.channel.sendMessage("if tomo is saying that pls stop ur killing me");
        }
    if (message.content.toLowerCase() === 'im straight') {
        message.channel.sendMessage("this is a fucking big fat lie");
        }
    if (message.content.toLowerCase() === 'kyo') {
        message.channel.sendMessage("what do you need?");
        }
     if (message.content.toLowerCase() === 'kat') {
        message.channel.sendMessage("aight what up");
        }
     if (message.content.toLowerCase() === 'wheres kyo') {
        message.channel.sendMessage("either depressed, sleeping, or working there no in between tbh");
        }
     if (message.content.toLowerCase() === 'im tom') {
        message.channel.sendMessage("you really want to be stabbed today dont you huh");
        }
     if (message.content.toLowerCase() === 'nut') {
        message.channel.sendMessage("https://www.dailydot.com/wp-content/uploads/228/6f/ab64a69d4cd848bad23ed0f9190a91eb.jpg");
        }
     if (message.content.toLowerCase() === 'im a lesbian') {
        message.channel.sendMessage("leahbian");
        }
     if message.guild.channels.find("name", "channel_name").sendMessage("blabla");
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
