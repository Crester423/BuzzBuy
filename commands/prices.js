const { SlashCommandBuilder } = require("discord.js");
const moment = require("moment");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("prices")
    .setDescription("prices for product")
    .addSubcommand((subcommand) =>
      subcommand
        .setName("fortnite")
        .setDescription("prices for fortnite vbucks")
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("fortnitebundles")
        .setDescription("prices for fortnite bundles")
    )
    .addSubcommand((subcommand) =>
      subcommand.setName("nitro").setDescription("prices for discord nitro")
    )
    .addSubcommand((subcommand) =>
      subcommand.setName("spotify").setDescription("prices for spotify")
    )
    .addSubcommand((subcommand) =>
      subcommand.setName("youtube").setDescription("prices for youtube")
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("youtube-music")
        .setDescription("prices for youtube music")
    )
    .addSubcommand((subcommand) =>
      subcommand.setName("crunchyroll").setDescription("prices for crunchyroll")
    ),

  run: ({ interaction, client, handler }) => {
    try {
      const subcommand = interaction.options.getSubcommand();

      if (subcommand === "fortnite") {
        //? ----------------------------------------------------
        //? ----------------- FORTNITE -------------------------
        //? ----------------------------------------------------
        const exampleEmbed = {
          color: 0x0099ff,
          description: `**1,000 V-Bucks**\n\n**199 INR / 2.49 USD**`,
          thumbnail: {
            url: "https://cdn3.emoji.gg/emojis/1104-fortnite-logo.png",
          },
        };
        const embedTwo = {
          color: 0x0099ff,
          description: `**2,800 V-Bucks**\n\n**499 INR / 5.99 USD**`,
          thumbnail: {
            url: "https://cdn3.emoji.gg/emojis/1104-fortnite-logo.png",
          },
        };
        const embedThree = {
          color: 0x0099ff,
          description: `**5,000 V-Bucks**\n\n**749 INR / 8.99 USD**`,
          thumbnail: {
            url: "https://cdn3.emoji.gg/emojis/1104-fortnite-logo.png",
          },
        };
        const embedFour = {
          color: 0x0099ff,
          description: `**13,500 V-Bucks**\n\n**1499 INR / 17.99 USD**`,
          thumbnail: {
            url: "https://cdn3.emoji.gg/emojis/1104-fortnite-logo.png",
          },
        };
        const embedFive = {
          color: 0x0099ff,
          description: `**27,000 V-Bucks**\n\n**2999 INR / 34.99 USD**`,
          thumbnail: {
            url: "https://cdn3.emoji.gg/emojis/1104-fortnite-logo.png",
          },
        };

        interaction.channel.send({
          embeds: [exampleEmbed, embedTwo, embedThree, embedFour, embedFive],
        });

        interaction.reply({ content: "Message sent", ephemeral: true });
      }

      //? ----------------------------------------------------
      //? ----------------- FORTNITE BUNDLES -----------------
      //? ----------------------------------------------------
      else if (subcommand === "fortnitebundles") {
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

        interaction.channel.send({
          embeds,
        });
        interaction.reply({ content: "Message sent", ephemeral: true });
      }
      //? ----------------------------------------------------
      //? ----------------- DISCORD NITRO --------------------
      //? ----------------------------------------------------
      else if (subcommand === "nitro") {
        const exampleEmbed = {
          color: 0xc086f4,
          title: "Discord Nitro + Boosts",
          url: "https://discord.com/nitro",
          fields: [
            { name: "Monthly", value: "450 INR / 5.49 USD", inline: false },
            { name: "Yearly", value: "4500 INR / 54.99 USD", inline: false },
          ],
          image: {
            url: "https://beebom.com/wp-content/uploads/2022/01/discord-nitro-body.jpg?w=640",
          },
          footer: {
            text: `Buzz Buy • ${moment(new Date()).format(
              "YYYY/MM/DD h:mm A"
            )}`,
            icon_url: client.user.avatarURL(),
          },
        };

        interaction.channel
          .send({ embeds: [exampleEmbed] })
          .then(() =>
            interaction.reply({ content: "Message sent", ephemeral: true })
          );
      }
      //? ----------------------------------------------------
      //? ----------------- SPOTIFY --------------------------
      //? ----------------------------------------------------
      else if (subcommand === "spotify") {
        const exampleEmbed = {
          color: 0x1ed760,
          title: "Spotify Premium Individual",
          url: "https://www.spotify.com/premium/",
          fields: [
            { name: "Monthly", value: "3.99 USD", inline: false },
            { name: "Yearly", value: "39.99 USD", inline: false },
          ],
          image: {
            url: "https://www.scdn.co/i/_global/open-graph-default.png",
          },
          footer: {
            text: `Buzz Buy • ${moment(new Date()).format(
              "YYYY/MM/DD h:mm A"
            )}`,
            icon_url: client.user.avatarURL(),
          },
        };

        const exampleEmbed2 = {
          color: 0x1ed760,
          title: "Spotify Premium Family",
          url: "https://www.spotify.com/premium/",
          fields: [
            { name: "Monthly", value: "6.99 USD", inline: false },
            { name: "Yearly", value: "69.99 USD", inline: false },
          ],
          image: {
            url: "https://www.scdn.co/i/_global/open-graph-default.png",
          },
          footer: {
            text: `Buzz Buy • ${moment(new Date()).format(
              "YYYY/MM/DD h:mm A"
            )}`,
            icon_url: client.user.avatarURL(),
          },
        };

        interaction.channel
          .send({ embeds: [exampleEmbed] })
          .then(() => interaction.channel.send({ embeds: [exampleEmbed2] }))
          .then(() =>
            interaction.reply({ content: "Message sent", ephemeral: true })
          );
      }
      //? ----------------------------------------------------
      //? ----------------- YOUTUBE --------------------------
      //? ----------------------------------------------------
      else if (subcommand === "youtube") {
        const exampleEmbed = {
          color: 0xe62d28,
          title: "Youtube Premium",
          url: "https://www.youtube.com/premium",
          fields: [
            { name: "Monthly", value: "4.99 USD", inline: false },
            { name: "Yearly", value: "49.99 USD", inline: false },
          ],
          image: {
            url: "https://fdn.gsmarena.com/imgroot/news/23/02/youtube-testing-1080p-premium/-1200/gsmarena_000.jpg",
          },
          footer: {
            text: `Buzz Buy • ${moment(new Date()).format(
              "YYYY/MM/DD h:mm A"
            )}`,
            icon_url: client.user.avatarURL(),
          },
        };

        interaction.channel.send({ embeds: [exampleEmbed] });
        interaction.reply({ content: "Message sent", ephemeral: true });
      }
      //? ----------------------------------------------------
      //? ----------------- YOUTUBE --------------------------
      //? ----------------------------------------------------
      else if (subcommand === "youtube-music") {
        const exampleEmbed = {
          color: 0xe62d28,
          title: "Youtube Music",
          url: "https://music.youtube.com/music_premium/musicfeed",
          fields: [
            { name: "Monthly", value: "5.49 USD", inline: false },
            { name: "Yearly", value: "54.99 USD", inline: false },
          ],
          image: {
            url: "https://cdn.siasat.com/wp-content/uploads/2022/12/Youtube-Music.jpg",
          },
          footer: {
            text: `Buzz Buy • ${moment(new Date()).format(
              "YYYY/MM/DD h:mm A"
            )}`,
            icon_url: client.user.avatarURL(),
          },
        };

        interaction.channel.send({ embeds: [exampleEmbed] });
        interaction.reply({ content: "Message sent", ephemeral: true });
      }
      //? ----------------------------------------------------
      //? ----------------- CRUNCHYROLL --------------------------
      //? ----------------------------------------------------
      else if (subcommand === "crunchyroll") {
        const exampleEmbed = {
          color: 0x0099ff,
          title: "Crunchyroll Premium",
          url: "https://www.crunchyroll.com/",
          description: `**FAN Monthly ► 3.99 USD**`,
          fields: [{ name: "", value: "Stream on 1 device at a time" }],
          image: {
            url: "https://staticg.sportskeeda.com/editor/2022/09/7b2f6-16632302973114-1920.jpg?w=840",
          },
          footer: {
            text: `Buzz Buy • ${moment(new Date()).format(
              "YYYY/MM/DD h:mm A"
            )}`,
            icon_url: client.user.avatarURL(),
          },
        };

        const exampleEmbed2 = {
          color: 0x0099ff,
          title: "Crunchyroll Premium",
          url: "https://www.crunchyroll.com/",
          description: `**Mega Fan Monthly ► 4.99 USD**`,
          fields: [
            {
              name: "",
              value: "Stream on up to 4 devices at a time",
              inline: false,
            },
            {
              name: "",
              value: "Offline Viewing",
              inline: false,
            },
            {
              name: "",
              value: "Access Crunchyroll Game Vault, a catalog of free games",
              inline: false,
            },
          ],
          image: {
            url: "https://i.ytimg.com/vi/1U5zR5tm2iQ/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGCggHyh_MA8=&rs=AOn4CLBiB7yRhddCaTKBvyFFgpUQVRHTcA",
          },
          footer: {
            text: `Buzz Buy • ${moment(new Date()).format(
              "YYYY/MM/DD h:mm A"
            )}`,
            icon_url: client.user.avatarURL(),
          },
        };

        const exampleEmbed3 = {
          color: 0x0099ff,
          title: "Crunchyroll Premium",
          url: "https://www.crunchyroll.com/",
          description: `**Mega Fan Yearly ► 49.99 USD**`,
          fields: [
            {
              name: "",
              value: "Stream on up to 4 devices at a time",
              inline: false,
            },
            {
              name: "",
              value: "Offline Viewing",
              inline: false,
            },
            {
              name: "",
              value: "Access Crunchyroll Game Vault, a catalog of free games",
              inline: false,
            },
            {
              name: "",
              value: "2 months free",
              inline: false,
            },
          ],
          image: {
            url: "https://i.ytimg.com/vi/ysRb72ghl3A/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGBMgNCh_MA8=&rs=AOn4CLChhyb2NVa4PGYX41W3311C5tz6Og",
          },
          footer: {
            text: `Buzz Buy • ${moment(new Date()).format(
              "YYYY/MM/DD h:mm A"
            )}`,
            icon_url: client.user.avatarURL(),
          },
        };

        interaction.channel
          .send({ embeds: [exampleEmbed] })
          .then(() => interaction.channel.send({ embeds: [exampleEmbed2] }))
          .then(() => interaction.channel.send({ embeds: [exampleEmbed3] }))
          .then(() =>
            interaction.reply({ content: "Message sent", ephemeral: true })
          );
      }
    } catch (error) {
      console.log(error);
      interaction.reply({
        content: "There was some error running this command",
        ephemeral: true,
      });
    }
  },
  options: {
    deleted: false,
    adminOnly: true,
  },
};
