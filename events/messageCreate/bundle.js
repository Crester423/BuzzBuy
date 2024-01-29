const ownerId = require("../../utils/owner");

const bundle = [
  {
    desc: `**Glided Elites Pack**\n\n**499 INR / 5.99 USD**`,
    url: "https://store-images.s-microsoft.com/image/apps.6748.14159874376016898.fd74157c-3191-41b0-bc2f-ad8b034e8c3c.d5ac7dd7-f915-44ba-902c-e6bc236688b9?q=90&w=270&h=405&mode=scale&format=jpg&background=%23FFFFFF",
  },
  {
    desc: `**Rogue Scout Pack**\n\n**549 INR / 6.49 USD**`,
    url: "https://store-images.s-microsoft.com/image/apps.13096.13668492023113611.5c15cd45-7fda-47d7-84fc-8baa6a7d0a87.d90489b1-5aab-4ec9-8a05-120f79630a62?q=90&w=270&h=405&mode=scale&format=jpg&background=%23FFFFFF",
  },
  {
    desc: `**Chill Vibez Pack**\n\n**129 INR / 1.49 USD**`,
    url: "https://store-images.s-microsoft.com/image/apps.54655.14419449771560068.8537436a-984a-451f-a05a-e8b302a10e77.64020e69-4c76-4971-a016-9de1c739a27c?q=90&w=270&h=405&mode=scale&format=jpg&background=%23FFFFFF",
  },
  {
    desc: `**Voidlands Exile Pack**\n\n**199 INR / 2.49 USD**`,
    url: "https://store-images.s-microsoft.com/image/apps.29383.14478009286657340.5a2b6b9a-6b6d-4162-be6d-f3296ea9bd0e.ff4d8265-b19a-4b23-b304-a851fdd0f633?q=90&w=270&h=405&mode=scale&format=jpg&background=%23FFFFFF",
  },
];

module.exports = async (message, client) => {
  if (
    !message.content.startsWith("?bundle") ||
    message.author.bot ||
    !ownerId.includes(message.author.id)
  )
    return;

  message.delete();
  const embeds = [];

  bundle.forEach((bundle) => {
    const embed = {
      color: 0x0099ff,
      description: bundle.desc,
      thumbnail: {
        url: bundle.url,
      },
    };
    embeds.push(embed);
  });

  message.channel.send({
    embeds,
  });
};
