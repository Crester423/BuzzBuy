const ownerId = require("../../utils/owner");

module.exports = async (message, client) => {
  if (
    !message.content.startsWith("?prices") ||
    message.author.bot ||
    !ownerId.includes(message.author.id)
  )
    return;

  message.delete();

  const exampleEmbed = {
    color: 0x0099ff,
    description: `**Discord Nitro Monthly**\n\n**Per Month ► 240 INR / 2.99 USD**`,
    thumbnail: {
      url: "https://media.discordapp.net/attachments/751432960066060308/1180454130628702268/b941bc1dfe379db6cc1f2acc5a612f41.jpg?ex=65be1414&is=65ab9f14&hm=df5d484136190d727a5ebbb19b407e0c9a17d29b03e5c0b27f3d1fd5f479e103&=&format=webp",
    },
  };
  const embedTwo = {
    color: 0x0099ff,
    description: `**Discord Nitro Yearly**\n\n**Per Year ► 2199 INR / 25.99 USD**`,
    thumbnail: {
      url: "https://media.discordapp.net/attachments/751432960066060308/1180454130628702268/b941bc1dfe379db6cc1f2acc5a612f41.jpg?ex=65be1414&is=65ab9f14&hm=df5d484136190d727a5ebbb19b407e0c9a17d29b03e5c0b27f3d1fd5f479e103&=&format=webp",
    },
  };

  message.channel.send({ embeds: [exampleEmbed, embedTwo] });
};
