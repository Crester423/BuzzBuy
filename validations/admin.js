module.exports = ({ interaction, commandObj, handler }) => {
  if (!interaction.inGuild()) return;

  if (commandObj.options.adminOnly) {
    const member = interaction.member;
    if (member.roles.cache.has("1196774353459740682")) return;
    else {
      interaction.reply({
        content: "You don't have permission to run this command",
        ephemeral: true,
      });
      return true;
    }
  }
};
