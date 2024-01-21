const ownerId = require("../../utils/owner");

module.exports = async (message, client) => {
  if (
    !message.content.startsWith("?announce") ||
    message.author.bot ||
    !ownerId.includes(message.author.id)
  )
    return;

  const channel = message.guild.channels.cache.get("1196765323551059988");
  const msg = message.content.split("!")[1];

  channel.send(msg);
};
