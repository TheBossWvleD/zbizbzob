const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("593876597078228995")
setInterval(function() {
channel.send(`Hacked by plode`);
}, 30)
})

client.login(process.env.BOT_TOKEN);