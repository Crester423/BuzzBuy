const ownerId = require("../../utils/owner");

module.exports = async (message, client) => {
  if (
    !message.content.startsWith("?pricesSpotify") ||
    message.author.bot ||
    !ownerId.includes(message.author.id)
  )
    return;

  message.delete();

  const exampleEmbed = {
    color: 0x0099ff,
    description: `**Spotify Premium**\n\n**Individual Monthly ► 3.99 USD\nIndividual Yearly ► 39.9 USD**`,
    thumbnail: {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG1wdhQGIOrjluOiFZr0qOzMeaAzXZvCQvDA&usqp=CAU",
    },
  };

  const exampleEmbed2 = {
    color: 0x0099ff,
    description: `**Spotify Premium**\n\n**Family Monthly ► 6.99 USD\nFamily Yearly ► 69.9 USD**`,
    thumbnail: {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG1wdhQGIOrjluOiFZr0qOzMeaAzXZvCQvDA&usqp=CAU",
    },
  };

  message.channel.send({ embeds: [exampleEmbed, exampleEmbed2] });
};
