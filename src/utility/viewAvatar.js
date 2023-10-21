require("dotenv").config();
const { Client, IntentsBitField ,EmbedBuilder } = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

module.exports = viewAvatar(){
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
  
}

