const Discord = require('discord.js');
const client  = new Discord.Client();
const config = require("./config.json")

const token = 'NTkyNzc1MjE1MjY0ODI1MzY3.XREREQ.LTshbeNPOI94GlfxVLoWDQvq6Ao';

client.on('ready', () => {
    console.log(`yes`);
  });

client.login(config.token);

//ok ian
//test revision number 2
