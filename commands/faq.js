const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("faq")
    .setDescription("faq of the server"),

  run: ({ interaction, client, handler }) => {
    try {
      const exampleEmbed = {
        color: 0x0099ff,
        description: `**FREQUENTLY ASKED QUESTIONS**`,
        fields: [
          {
            name: "**\n・PAYMENTS・**\n",
            value: `**\nQ. How to place an order?**\nA. Open a ticket at <#1197498154954805270>\n\n**Q. What payments method do you accept?**\nA. Currently we accept upi/paytm/gpay, paypal and crypto.\n\n`,
            inline: false,
          },
          {
            name: "**\n・SERVICES & PRICING・\n\n**",
            value: `**Q. What services do you offer?**\nA. We currently sell Discord Nitro and Fortnite V-Bucks.`,
            inline: false,
          },
        ],
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
