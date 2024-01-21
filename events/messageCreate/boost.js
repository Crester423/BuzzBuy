const ownerId = require("../../utils/owner");

module.exports = async (message, client) => {
  if (
    !message.content.startsWith("?boost") ||
    message.author.bot ||
    !ownerId.includes(message.author.id)
  )
    return;

  message.delete();

  const exampleEmbed = {
    color: 0x0099ff,
    description: `**Additional Boost**\n\n**Per Boost ► 119 INR / 1.45 USD**`,
    thumbnail: {
      url: "https://media.discordapp.net/attachments/751432960066060308/1180454130628702268/b941bc1dfe379db6cc1f2acc5a612f41.jpg?ex=65be1414&is=65ab9f14&hm=df5d484136190d727a5ebbb19b407e0c9a17d29b03e5c0b27f3d1fd5f479e103&=&format=webp",
    },
  };

  message.channel.send({ embeds: [exampleEmbed] });
};
