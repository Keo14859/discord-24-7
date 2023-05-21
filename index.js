const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  syncStatus: false,
});

const keepAlive = require("./server.js");
keepAlive();

client.login(process.env.token)
