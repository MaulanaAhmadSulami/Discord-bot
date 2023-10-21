require("dotenv").config();
const { Client, IntentsBitField, EmbedBuilder } = require("discord.js");

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

  const content = message.content.toLowerCase();

  for (const keyword of keywords) {
    if (content.includes(keyword)) {
      message
        .reply(
          "Hello"
        )
        .then(() =>
          console.log(`Replied to user "${message.member.user.username}"`)
        )
        .catch(console.error);

      break;
    } else if (content.includes(aboutMe)) {
      message
        .reply(
          "Hi, i'm Kadera! I am a discord bot made by @kaedefff."
        )
        .then(() =>
          console.log(`Replied to user "${message.member.user.username}`)
        )
        .catch(console.error);

      break;
    }
  }

  if (content.includes("raka")) {
    message
      .reply("Orang Bogor")
      .then(() =>
        console.log(`Replied to user "${message.member.user.username}"`)
      )
      .catch(console.error);
  }
});

//event handlers for interactions slash commands (/)
client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "hey") {
    interaction.reply("hey!");
  } else if (interaction.commandName === "ping") {
    interaction.reply("pong!");
  }
  console.log(interaction.commandName);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName, options } = interaction;

  // Handle the 'avatar' command
  if (commandName === "avatar") {
    const userOptions = options.getUser("user");

    if (userOptions) {
      //retrive mentioned user avatar
      const userAvatar = userOptions.displayAvatarURL({
        format: "png",
        size: 4096,
      });

      const embed = new EmbedBuilder()
        .setColor(0x0099ff)
        .setTitle("Avatar URl")
        .setImage(userAvatar)
        .setURL(userAvatar);

      await interaction.reply({ embeds: [embed] });
    } else {
      //retrive mentioned user avatar
      const authorAvatar = interaction.user.displayAvatarURL({
        format: "png",
        size: 4096,
      });

      const embed = new EmbedBuilder()
        .setColor(0x0099ff)
        .setTitle("Avatar URl")
        .setImage(authorAvatar)
        .setURL(authorAvatar);

      await interaction.reply({ embeds: [embed] });
    }
  }
});

client.login(process.env.TOKEN);
