const Discord = require('discord.js');

const client = new Discord.Client();

client.login(process.env.TOKEN);

client.on("ready", () => {
  console.log("PrincipaleBotGAME est allumé !");
  client.user.setActivity("{:robot:} Je suis GamerBot");
  function1();
});

var nom = process.env.NOM;
var prefix = process.env.PREFIX;

function function1() {
  console.log("Jeu actualisé en '{🤖} Je suis "+nom+"'.");
  client.user.setActivity("{🤖} Je suis " + nom);
  setTimeout(function2, 5000);
}

function function2() {
  console.log("Jeu actualisé en '{⚖} 3 serveurs principaux'.");
  client.user.setActivity("{⚖} 3 serveurs principaux");
  setTimeout(function3, 5000);
}

function function3() {
  console.log("Jeu actualisé en '{🔨} BestPaladin#7883'.");
  client.user.setActivity("{🔨} BestPaladin#7883");
  setTimeout(function4, 5000);
}

function function4() {
  console.log("Jeu actualisé en '{👀} Dovakid {Employé Xebot}#4404'.");
  client.user.setActivity("{👀} Dovakid {Employé Xebot}#4404");
  setTimeout(function5, 5000);
}

function function5() {
  console.log("Jeu actualisé en '{🔑} préfix : "+ prefix +"'.");
  client.user.setActivity("{🔑} préfix : "+ prefix);
  setTimeout(function6, 5000);
}

function function6() {
  console.log("Jeu actualisé en '{ℹ} "+prefix+"help'.");
  client.user.setActivity("{ℹ} "+prefix+"help");
  setTimeout(function7, 5000);
}

function function7() {
  console.log("Jeu actualisé en 'Serveur de support : http://discord.gg/zMHhBmq'.");
  client.user.setActivity("Serveur de support : http://discord.gg/zMHhBmq");
  setTimeout(function1, 5000);
}
