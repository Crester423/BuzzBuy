const { SlashCommandBuilder } = require("discord.js");

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
      subcommand
        .setName("nitro-boost")
        .setDescription("prices for discord nitro")
    )
    .addSubcommand((subcommand) =>
      subcommand.setName("spotify").setDescription("prices for spotify")
    )
    .addSubcommand((subcommand) =>
      subcommand.setName("youtube").setDescription("prices for youtube")
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

        interaction.channel.send({ embeds: [exampleEmbed, embedTwo] });
        interaction.reply({ content: "Message sent", ephemeral: true });
      }
      //? ----------------------------------------------------
      //? ----------------- NITRO BOOST ----------------------
      //? ----------------------------------------------------
      else if (subcommand === "nitro-boost") {
        const exampleEmbed = {
          color: 0x0099ff,
          description: `**Additional Boost**\n\n**Per Boost ► 119 INR / 1.45 USD**`,
          thumbnail: {
            url: "https://media.discordapp.net/attachments/751432960066060308/1180454130628702268/b941bc1dfe379db6cc1f2acc5a612f41.jpg?ex=65be1414&is=65ab9f14&hm=df5d484136190d727a5ebbb19b407e0c9a17d29b03e5c0b27f3d1fd5f479e103&=&format=webp",
          },
        };

        interaction.channel.send({ embeds: [exampleEmbed] });
        interaction.reply({ content: "Message sent", ephemeral: true });
      }
      //? ----------------------------------------------------
      //? ----------------- SPOTIFY --------------------------
      //? ----------------------------------------------------
      else if (subcommand === "spotify") {
        const exampleEmbed = {
          color: 0x0099ff,
          description: `**Spotify Premium**\n\n**Individual Monthly ► 3.99 USD\nIndividual Yearly ► 39.9 USD**`,
          thumbnail: {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG1wdhQGIOrjluOiFZr0qOzMeaAzXZvCQvDA&usqp=CAU",
          },
        };

        const exampleEmbed2 = {
          color: 0x0099ff,
          description: `**Spotify Premium**\n\n**Family Monthly ► 6.99 USD\nFamily Yearly ► 69.9 USD**`,
          thumbnail: {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG1wdhQGIOrjluOiFZr0qOzMeaAzXZvCQvDA&usqp=CAU",
          },
        };

        interaction.channel.send({ embeds: [exampleEmbed, exampleEmbed2] });
        interaction.reply({ content: "Message sent", ephemeral: true });
      }
      //? ----------------------------------------------------
      //? ----------------- YOUTUBE --------------------------
      //? ----------------------------------------------------
      else if (subcommand === "youtube") {
        const exampleEmbed = {
          color: 0x0099ff,
          description: `**Youtube Premium**\n\n**Monthly ► 4.99 USD\nYearly ► 49.9 USD**`,
          thumbnail: {
            url: "https://c4.wallpaperflare.com/wallpaper/377/439/784/red-white-logo-youtube-wallpaper-preview.jpg",
          },
        };

        interaction.channel.send({ embeds: [exampleEmbed] });
        interaction.reply({ content: "Message sent", ephemeral: true });
      }
    } catch (error) {
      interaction.reply("There was some error running this command");
    }
  },
  options: {
    deleted: false,
    adminOnly: true,
  },
};
