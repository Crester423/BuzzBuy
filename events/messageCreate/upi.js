const ownerId = require("../../utils/owner");
const { MessageAttachment } = require("discord.js");
const path = require("path");

module.exports = async (message, client) => {
  if (
    !message.content.startsWith("?upi") ||
    message.author.bot ||
    !ownerId.includes(message.author.id)
  )
    return;

  message.delete();

  message.channel.send({
    files: [path.join(__dirname, "..", "..", "utils", "QR.png")],
  });
};
