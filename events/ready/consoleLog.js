const { ActivityType } = require("discord.js");

module.exports = (client) => {
  console.log(client.user.tag, "is now online");
  client.user.setActivity({
    name: "over Buzz Buy",
    type: ActivityType.Watching,
  });
};
