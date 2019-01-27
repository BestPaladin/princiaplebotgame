const Discord = require('discord.js');

const client = new Discord.Client();

client.login(process.env.TOKEN);

client.on("ready", () => {
  console.log("PrincipaleBotGAME est allumé !");
  
}); 
