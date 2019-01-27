const Discord = require('discord.js');

const client = new Discord.Client();

client.login(process.env.TOKEN);

client.on("ready", () => {
  console.log("PrincipaleBotGAME est allumé !");
  setTimeOut(une, 1000);
  
  function une()
{
 client.user.setActivity("{:robot:} Je suis GamerBot");
 setTimeOut(deux, 5000);
}
function deux()
{
    client.user.setActivity("{:arrow_forward:️}  3 serveurs");
    setTimeOut(trois, 5000);
}
function trois()
{
    client.user.setActivity("{:hammer:} BestPaladin#7883");
    setTimeOut(quatre, 5000);
}
function quatre()
{
    client.user.setActivity("{:crown:} Dovakid {Employé Xebot}#4404");
    setTimeOut(cinq, 5000);
}
function cinq()
{
    client.user.setActivity("{:signal_strength:} préfix: " + process.env.PREFIX);
    setTimeOut(six, 5000);
}
function six()
{
    client.user.setActivity("{:information_source:️} "+ process.env.PREFIX + "help");
    setTimeOut(sept, 5000);
}
function sept()
{
    client.user.setActivity("{:arrows_clockwise:} https://discord.gg/zMHhBmq");
    setTimeOut(une, 5000);
}
  
}); 
