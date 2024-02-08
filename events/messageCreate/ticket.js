const ownerId = require("../../utils/owner");

let blockChannel = [];

module.exports = async (message, client) => {
  const channel = message.channel;
  if (message.content === "?startPing" && ownerId.includes(message.author.id)) {
    message.reply("Ping resumed ✅");
    blockChannel = blockChannel.filter((el) => el !== channel.name);
  } else if (
    message.content === "?stopPing" &&
    ownerId.includes(message.author.id)
  ) {
    message.reply("Ping stopped ✅");
    blockChannel.push(channel.name);
  } else {
    if (message.author.bot) return;

    if (blockChannel.includes(channel.name)) return;

    if (!channel.name.startsWith("ticket")) return;
    const guild = message.guild;

    const memberStatus = [];

    const fetchPromises = ownerId.map(async (member) => {
      const curMember = await guild.members.fetch(member);
      return curMember.presence?.status;
    });

    memberStatus.push(...(await Promise.all(fetchPromises)));
    if (memberStatus.every((val) => val === undefined || val === "offline")) {
      message.reply(
        "No admin is currently online, please wait and we will get back to you as soon as possible!"
      );
    } else return;
  }
};
