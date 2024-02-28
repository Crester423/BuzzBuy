const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("rules")
    .setDescription("rules for the server"),

  run: ({ interaction, client, handler }) => {
    try {
      const exampleEmbed = {
        color: 0x0099ff,
        description: `**RESPECT・**\nYou must respect all users, regardless of your liking towards them. Treat others the way you want to be treated.\n\n**NO INAPPROPRIATE LANGUAGE・**\nThe use of profanity should be kept to a minimum. However, any derogatory language towards any user is prohibited.\n\n**NO SPAMMING・**\nAvoid overwhelming the conversation with rapid, repeating messages.\n\n**NO PORNOGRAPHIC/ADULT/OTHER NSFW MATERIAL・**\nThis is a community server and not meant to share this kind of material.\n\n**NO ADVERTISING・**\nYou are not allowed to market or promote in any manner. This includes YouTube, Twitch, Twitter, PayPal, and Discord servers.`,
      };

      interaction.channel.send({ embeds: [exampleEmbed] });
      interaction.reply({ content: "Message sent", ephemeral: true });
    } catch (error) {
      interaction.reply("There was some error running this command");
    }
  },
  options: {
    deleted: false,
    adminOnly: true,
  },
};
