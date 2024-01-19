require("dotenv/config");
const dotenv = require("dotenv");
dotenv.config();
const Discord = require("discord.js");
const { Client, IntentsBitField } = require("discord.js");
const { CommandKit } = require("commandkit");
const path = require("path");
const keep_alive = require("./keep_alive.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.GuildPresences,
    IntentsBitField.Flags.MessageContent,
    IntentsBitField.Flags.GuildVoiceStates,
  ],
});

new CommandKit({
  client,
  eventsPath: path.join(__dirname, "events"),
  bulkRegister: true,
});

client.login(process.env.TOKEN);
