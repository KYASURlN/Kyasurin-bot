const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
    console.log("I am ready!");
    client.user.setActivity('DONT TOUCH MY FUCKING RABBITS', { type: 'PLAYING' })
      .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'READY'}`))
      .catch(console.error);
    client.user.setStatus('idle')
      .then(console.log)
      .catch(console.error);
    console.log(`Ready to serve on ${client.guilds.size} servers, for ${client.users.size} users.`)
  ;
});

const responseObject = {
  "tomo is gay": "Fucking most true thing I've heard all year",
  "i love kyo": "ok so what about it",
  "i love kat": "can't say it to my face so you have to say it to bot me huh",
  "bai i yai": "someone please put me out of my misery",
  "dancing in september": "sometimes i dont put on my seatbelt while driving bc i hope to crash everytime i hear this",
  "im gay": "didn't need to say it out loud we all already knew",
  "im straight": "i smell a fucking lie",
  "kyo": "aight aight i'm here what up",
  "kat": "who r u talking to idk a kat",
  "wheres kyo": "either depressed, sleeping, or working there no in between tbh",
  "im tom": "r u sure u arent gay",
  "im tomo": "tried to avoid the consequences i see",
  "im a lesbian": "leahbian",
  "nut": "https://www.dailydot.com/wp-content/uploads/228/6f/ab64a69d4cd848bad23ed0f9190a91eb.jpg"
};

client.on("message", (message) => {
  if(responseObject[message.content.toLowerCase()]) {
    message.channel.send(responseObject[message.content.toLowerCase()]);
  }
  if(message.author.id !== config.ownerID) return;
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  if (message.content.startsWith(config.prefix + "ping")) {
    message.channel.send("Ring-a-ling!!");
  } 
  if (message.content.startsWith(config.prefix + "triggered")) {
    message.channel.send("https://file.toyhou.se/images/7336489_5xvRwS5bylHdn0y.png");
  } 
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
