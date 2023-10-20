require('dotenv').config();
const { Client, IntentsBitField } = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", (c) => {
  console.log(`😄 ${c.user.username} is online!`);
});

client.on("messageCreate", (message) => {
  // console.log(message);

  //use this next time so it doesnt return infinitely
  if (message.author.bot) return;

  const keywords = ["hello", "hi", "hai"];

  const aboutMe = ["about"];
  const raka = ['Raka'];

  const content = message.content.toLowerCase();

  for (const keyword of keywords) {
    if (content.includes(keyword)) {
      message
        .reply(
          "Hello! Nice to meet you if you wish to know more about me kindly send 'about' to chat!"
        )
        .then(() =>
          console.log(`Replied to user "${message.member.user.username}"`)
        )
        .catch(console.error);

      break;
    } else if (content.includes(aboutMe)) {
      message
        .reply(
          "Hi, i'm Kadera! I am a discord bot made by @kaedefff, I am an underdevelop discord bot as of the moment and I wish to improve by time to comes."
        )
        .then(() =>
          console.log(`Replied to user "${message.member.user.username}`)
        )
        .catch(console.error);

      break;
    }
  }

  client.on('messageCreate', (raka) => {
    if(message.author.bot) {
        return;
    }

    if(message.content.includes(raka)){
        message.reply("Raka gay").then(() => console.log(`Replied to user "${message.member.user.username}`)).catch(console.error);
    }

    
  })
});

client.login(process.env.TOKEN);
