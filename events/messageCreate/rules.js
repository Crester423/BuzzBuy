const ownerId = require("../../utils/owner");

module.exports = async (message, client) => {
  if (
    !message.content.startsWith("?rules") ||
    message.author.bot ||
    !ownerId.includes(message.author.id)
  )
    return;

  message.delete();

  const exampleEmbed = {
    color: 0x0099ff,
    description: `**RESPECT・**\nYou must respect all users, regardless of your liking towards them. Treat others the way you want to be treated.\n\n**NO INAPPROPRIATE LANGUAGE・**\nThe use of profanity should be kept to a minimum. However, any derogatory language towards any user is prohibited.\n\n**NO SPAMMING・**\nAvoid overwhelming the conversation with rapid, repeating messages.\n\n**NO PORNOGRAPHIC/ADULT/OTHER NSFW MATERIAL・**\nThis is a community server and not meant to share this kind of material.\n\n**NO ADVERTISING・**\nYou are not allowed to market or promote in any manner. This includes YouTube, Twitch, Twitter, PayPal, and Discord servers.`,
  };

  message.channel.send({ embeds: [exampleEmbed] });
};
