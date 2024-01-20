module.exports = async (member, client) => {
  const channel = client.channels.cache.get("1196771577535156306");
  const user = member.user;

  const exampleEmbed = {
    color: 0x0099ff,
    title: "Welcome to Buzz Buy",
    author: {
      name: user.username,
      icon_url: user.displayAvatarURL({ size: 128 }),
    },
    description:
      "Make sure to checkout <#1196765338910589039>\nAlso checkout <#1196769229475692574>",
    thumbnail: {
      url: member.displayAvatarURL({ format: "png", dynamic: true }),
    },
  };
  channel.send({ embeds: [exampleEmbed] });

  return;
};
