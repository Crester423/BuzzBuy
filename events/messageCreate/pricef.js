const ownerId = require("../../utils/owner");

module.exports = async (message, client) => {
  if (
    !message.content.startsWith("?pricesf") ||
    message.author.bot ||
    !ownerId.includes(message.author.id)
  )
    return;

  message.delete();

  const exampleEmbed = {
    color: 0x0099ff,
    description: `**1,000 V-Bucks**\n\n**199 INR / 2.49 USD**`,
    thumbnail: {
      url: "https://cdn3.emoji.gg/emojis/1104-fortnite-logo.png",
    },
  };
  const embedTwo = {
    color: 0x0099ff,
    description: `**2,800 V-Bucks**\n\n**579 INR / 6.99 USD**`,
    thumbnail: {
      url: "https://cdn3.emoji.gg/emojis/1104-fortnite-logo.png",
    },
  };
  const embedThree = {
    color: 0x0099ff,
    description: `**5,000 V-Bucks**\n\n**799 INR / 9.99 USD**`,
    thumbnail: {
      url: "https://cdn3.emoji.gg/emojis/1104-fortnite-logo.png",
    },
  };
  const embedFour = {
    color: 0x0099ff,
    description: `**13,500 V-Bucks**\n\n**1699 INR / 19.99 USD**`,
    thumbnail: {
      url: "https://cdn3.emoji.gg/emojis/1104-fortnite-logo.png",
    },
  };
  const embedFive = {
    color: 0x0099ff,
    description: `**27,000 V-Bucks**\n\n**3199 INR / 37.99 USD**`,
    thumbnail: {
      url: "https://cdn3.emoji.gg/emojis/1104-fortnite-logo.png",
    },
  };

  message.channel.send({
    embeds: [exampleEmbed, embedTwo, embedThree, embedFour, embedFive],
  });
};
