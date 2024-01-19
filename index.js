require("dotenv/config");
const dotenv = require("dotenv");
dotenv.config();
const Discord = require("discord.js");
const { Client, IntentsBitField } = require("discord.js");
const { CommandKit } = require("commandkit");
const path = require("path");

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
  commandsPath: path.join(__dirname, "commands"),
  eventsPath: path.join(__dirname, "events"),
  validationsPath: path.join(__dirname, "validations"),
  bulkRegister: true,
});

client.login(process.env.TOKEN);
