const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong right back at ya');
        message.reply2('test');
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
    if (message.content === 'im straight') {
    	message.reply('well thats a lie');
  	}
    if (message.content === 'IM STRAIGHT') {
    	message.reply('sure jan');
  	}
    if (message.content === 'IM LOYAL') {
    	message.reply('sure jan,, sure');
  	}
    if (message.content === 'nana is gay') {
    	message.reply('gay for me ^ q ^');
  	}
    if (message.content === 'WO AI NI') {
    	message.reply('WO AI NI BACK AT YA');
    }
    if (message.content === 'IM NOT GAY') {
    	message.reply('But thats Tomos lie, isnt it?');
    }
    if (message.content === 'im not gay') {
    	message.reply('greatest joke of 2k17');
    }
    if (message.content === 'tomo is not gay') {
    	message.reply('SURE JAN HAHAHAHA');
    }
    if (message.content === 'daisuki kyo') {
    	message.reply('daikirai');
    }
    if (message.content === 'DAISUKI KYO') {
    	message.reply('daikirai');
    }
    if (message.content === 'aishiteru kyo') {
    	message.reply('daikirai');
    }
    if (message.content === 'AISHITERU KYO') {
    	message.reply('daikirai');
    }
});

[Command("8ball")]
[Summary("Gives a prediction")]
public async Task EightBall([Remainder] string input)
{
    int randomIndex = rand.Next(predictionsTexts.Length);
    string text = predictionsTexts[randomIndex];
    await ReplyAsync(Context.User.Mention + ", " + text);
}

Random rand = new Random();

string[] predictionsTexts = new string[]
            {
                "It is very unlikely.",
                "I don't think so...",
                "Yes !",
                "I don't know",
                "No.",
            };

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
