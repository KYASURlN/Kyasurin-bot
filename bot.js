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
    if (message.content.toLowerCase() === 'bai i yai') {
        message.channel.sendMessage("Im going to fucking eat my left foot");
        }
    if (message.content.toLowerCase() === 'dancing in september') {
        message.channel.sendMessage("STOPSOTPSOTPSOPTOSPOTPSOPTOPSOTPED YAMETEAM EYAMET");
        }
    if (message.content.toLowerCase() === 'im gay') {
        message.channel.sendMessage("we all know this");
        }
    if (message.content.toLowerCase() === '^ u ^') {
        message.channel.sendMessage("if tomo is saying that pls stop ur killing me");
        }
    if (message.content.toLowerCase() === 'im straight') {
        message.channel.sendMessage("SURE JAN");
        }
    if (message.content.toLowerCase() === 'kyo') {
        message.channel.sendMessage("yah thats me");
        }
     if (message.content.toLowerCase() === 'kat') {
        message.channel.sendMessage("who the fuck-");
        }
     if (message.content.toLowerCase() === 'wheres kyo') {
        message.channel.sendMessage("either depressed, sleeping, or working there no in between tbh");
        }
     if (message.content.toLowerCase() === 'im tom') {
        message.channel.sendMessage("one more time i dare you fucker");
        }
     if (message.content.toLowerCase() === 'nut') {
        message.channel.sendMessage("https://www.dailydot.com/wp-content/uploads/228/6f/ab64a69d4cd848bad23ed0f9190a91eb.jpg");
        }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
