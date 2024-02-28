const { SlashCommandBuilder } = require("discord.js");
const path = require("path");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("upi")
    .setDescription("send the upi id"),

  run: ({ interaction, client, handler }) => {
    try {
      interaction.channel.send({
        files: [path.join(__dirname, "..", "utils", "QR.png")],
      });
      interaction.reply({ content: "Message sent", ephemeral: true });
    } catch (error) {
      console.log(error);
      interaction.reply("There was some error running this command");
    }
  },
  options: {
    deleted: false,
    adminOnly: true,
  },
};
