const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("announce")
    .setDescription("announces a message to the announcement channel")
    .addStringOption((option) =>
      option
        .setName("message")
        .setDescription("message you want to announce")
        .setRequired(true)
    ),

  run: ({ interaction, client, handler }) => {
    try {
      const message = interaction.options.getString("message");
      const channel = interaction.channel;
      channel.send(message);
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
