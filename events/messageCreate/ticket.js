const ownerId = require("../../utils/owner");

module.exports = async (message, client) => {
  if (message.author.bot) return;
  const channel = message.channel;
  if (!channel.name.startsWith("ticket")) return;
  const guild = message.guild;

  const memberStatus = [];

  const fetchPromises = ownerId.map(async (member) => {
    const curMember = await guild.members.fetch(member);
    return curMember.presence?.status;
  });

  memberStatus.push(...(await Promise.all(fetchPromises)));
  if (memberStatus.every((val) => val === undefined || val === "offline")) {
    channel.send(
      "No admins is currently online, please wait and we will get back to you as soon as possible"
    );
  } else return;
};
