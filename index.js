const Discord = require('discord.js')
const SIVA = new Discord.Client();
const prefix = "~~"

SIVA.login(process.env.TOKEN)

//code designed to keep bot online, pings roughly every five minutes
const http = require('http');
const express = require('express');
const app = express();
//Date.now returns a time in Unix Seconds, find a way to get a timestamp that isn't Unix.
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping received!");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000)

SIVA.on('ready', () => {
    console.log("Oh, God... It's the hivemind.")
    SIVA.user.setActivity(`w̵͓̅͘iṭ̶̭̚h̶̩̊͒ ${SIVA.guilds.size} s̴̥̈́ͅer̵̥͠v̷̼̍͝ë̶̹͔́ȑ̶̖̈́s̵̩͙͛`, { type: 'PLAYING' })
    .then(console.log("Activity set."))
})

SIVA.on('message', message => {

    let cmdUser = message.guild.member(message.author)
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    
    if (message.author.bot)
      return;
  
    if(cmd === `${prefix}ping`)
    {
        let pingTime = new Date().getTime() - message.createdTimestamp
        message.channel.send("~̵͒̚͜r̷̤̳̎e̸͖̅̚p̸̝̎͂ĺ̸̰̩ĭ̴̱̘ç̵͍̐a̶͉̮͒t̵̺̏͋e̷̘̅~̶̢͍͠ `" + pingTime + "`")
    }
    else if(cmd === `${prefix}replicate`)
    {
      function randSIVA() {
  var rand = ['~̷̧̰̘̯̦̀̊̊̈́(̵̼̽)̵̛̹̺͕͚̖̣̐͗̇̆̌́͆̂͗̿̉l̶̲̳͕̜̤̱͖͉̱̘̝̂̎͜õ̶̡̨̨̪̞̺̣̜̞̺͔͐͛͘͜͠o̷̢͈͕̟̜̼̪̯̱̲͑ͅḱ̵̘̥͚̼̱́͛̾ͅ ̷̤͙͐̅͌̐͊̐̃͋̋̽͘̕w̵̺̦̙͍̼̩̣̥̣͙̹̭̾ẖ̷̞̰͉̹̥̰̩̩̟͗̉͛͗̏͊̋̔̊͘̚͝ͅã̸̜̫͝t̴̫̪̂̿̅̿̎͌̑̎͠ ̴̧̛̱͇͗͛̏̀̈̀̍̎͠y̴̛̤͍̞̰͗̿̿̒͒́͗́͠͝o̴̘̜̭̣̮͌̍͋̿̕̕ų̵̭̞̱̜̺̤͔͍̥̈ ̴͕̟͚̼̞͇̱̿̽͌̒̀̀͊ͅd̴̛̞̣̳͓̑͛̒̐́̊̄͛į̸̗͉̞̫̙͔̞͐͋́̈́̀͛̀d̸̡̝̱͍̠̗̩̮̭͎͇̾̌̈̐̋͌͐͝.̸̧͚̹̃̉͌́̄͂͑́̚ͅ ̶̨̠͈͔͍̂͑͌̾͛̇͗a̸̢̩̩̱̩̻͎͍̹̘̕͜r̶̡̛̠̟̗͓̮̩̠̘̓̄́̇͊̈̑͒̀̚ͅë̵̗̖̥̳̗͉́̏ͅ ̸̧̧̧̩̮̻͕̳̰̞̺͉͗͐̃͆̉͐y̴̭̲̗̠̪̹͎͎͑͝ͅỏ̵̡͙̝͔̻̮̽͒͝͝ü̸̳̘͍͍̪̝̲͇̗̦̻̋͠ͅ~̵̛̝̙̜̃ͅ~̴̛͔̥̇̈́̍͊͛͛̚͜͠ḫ̸̨̛̠̠̫̝̹͕̠̬̓͗̓̂́̊ă̴͈͉̰̟p̵͙͍̘̭̞͖̳̲̈́͊̈́̍̀̏̈́̿͘͜͜͜ͅp̴͙̥͈͈̓̒̊̒̅̍͠y̵̨̗͓͓͝~̸̢̰̜̝̈́̈́̇̍̈̈~̴͈͍̬̻͚͍̦̮͇͙̿͒́̃͌̈́͋͐̕̕?̸͍̄̑͌̐̐̏̚',
              '~̴̟̥͋~̴̫̞̿̏r̷̬͒͘è̴̱̌ṕ̴͉̄ͅḻ̷̂ị̵̛̋c̷̥̊̌ȧ̸̬͌t̷̻̃͝e̶̯̞͂ ̵͖̠͐ć̸̥̀a̴̡̜͝u̷̡͆t̵̻͙̎͒i̶̜̿o̴͈̅n̸̺̤̊ ̴͍̖̃͗r̸͉͕̃̌ė̷̮p̷͕͉̒̄l̴͕͝i̴͗͜c̴̤̟̊a̸̪̕t̵͎́̇e̶̻̥̓ ̵̩̠̐d̴̨̎͊ḙ̵͕̐s̶̱͑̓t̴͖̔͠a̶̼̚b̴̨̫̅̌ḯ̸̪̥l̶̪͋̋i̴̝̍s̷̩͕̽́ã̵̝̝̉t̶̻̑͜î̵̭̏o̵̰̐ͅṋ̵̖̋ ̶̼̇r̷̭̜̊e̸̟̿̚p̸͎͛l̷̼̍͗i̸̹̗͂c̴̛͉͊a̷̩̺̋t̴̛̯̮e̷͇͋ ̴̖̄ī̴̡̨m̷̰̫̈͝m̵͕̣̆î̴͇̃n̸̖̝̐̇ȩ̵͠n̵̳̦̐t̵̀͐͜[̸̩̊{̵̅ͅ(̵̞̅)̴̛͖̈}̵̯̀]̷͙̙̽',
              'w̷̢̙͉̦͓̘̳̓̿̈́̏͛͒̊̔̂̕͘h̵̛̯͈͖̬͉͙̮̦͍́͌̏̅̊͛͌̾͒̂̈́á̵̢̬̹̦͓̝͉̜͙̝̫̂̋͂͐̅̐ẗ̸̲͔͚̿̆́̐̈́̌̉͝ ̷̛͙͇̥̘̺̣̮͍̺̝̾͂̀̄͘͜h̶͕̙̭͊̆̐̒̃͐̚a̵͓͇͖̦͍͗̏͑͒̏̿͋͐̏͘͝v̶̡̧̗̻̰̀̂e̶̢̡͍̙̙͓̻̟̗̼͙͛́̓̍͠͝ ̸̢̫̱̞̗̣͚̣͔͙̹̄̈́̌͆͊͘ÿ̵̡́̃̊̎ó̸͉ư̷̺̭͔̔͒̆̓̈̀̃̕̚͝͝ ̶̨͕̠͎̔̉̎̌̍ͅd̶̫̃̊͛o̸̧̼̦͇̥̖̔̔̍̉̕n̷̨̠̥̘͓͙̩̝͖̓̓̈́̏͛̋̔̏̚͠ę̷̳͔͙̗̠̖̏́̈͛͐̓?̷̨͖̮͚̱̭̠̖̄́̕ͅ ̸̡̙̣̙̹̲̘̩̄̍̎̓̚̚~̶̬̐̋̑̈́͆~̶̜́̇̐̚͘̚͝A̶̰̩̩̤̘͍͎̬̯͚͈͐͊̈͊̈́͊̓͜͝͠D̸͔̙͈̤̟́̏̽V̵̞̳̪̹͓͕̣͒́̈́I̸̠̪̥̮̘̋̚S̷̻̺̙͎̣̟̳̦̞̠̑̐̅́́͌̇̀̑̈͠E̶̼̗̫͕̰͋͗ ̵̢̨̩̙͍̮̳̰̯͉͗̓̇̂̓̄͜͠Ç̵̣̭̰͍̖̈́̉́̂̈̑͐̕͜A̸̩͒̏̓̏͠U̸̞̬͎͚̤͂̎͐̆͊T̷̨͖̜̖̫͔̻͓̞͙͈̔ͅĪ̸̢̢̥̳̱̬̼̫̳́̈̄̑̈́̇͆̒̕͘͘O̵̞̐̌́̎̄̈́̐Ņ̵̟̖̳̀̔̉́͠ͅ ̴̪͇̳͇̣̻̱͇͍̹̐̓͂͑̈́̎ẅ̶̨̪͔̜̰̠͓́́ͅh̴̭̣̫͕̗̜͙̒́̎͗̂̀̇̂͊̓a̴̛͓̟̦̲̳͇̠͖̓͑͐̽̂ț̶̢̘̙̟͚͖͖́͑͗̇̊̚̕ ̸̛̞̙̈́̆̊͊̿̽̓̐̽͝h̸͍̯͍̟̝͔̔͆̏͆̎̎̈́̈̄̏a̶̝͕̜̺̲͆͂͑v̷̨̻̗͓̩̀̄̀͌͝e̸͓̟̩͔͈̍̏̅͑ ̵̨̱͉̭͕̱̹͚̰̓́͜ͅẏ̷͍͎͔̝̭̱͉̇̂̿o̵̧͖͔̞̟̺̖͉̜̤͈̽́͆̎̎̚u̸̼͕̦̯͇̦͖̫̞̘͆̒͐̈́͋̑͑̀̃͜ ̴̦̘̝͔͙͓͍̠̎͋̔̐͂̀͒́̊̉͜͝j̶̡̨̤͈̮̙̘̝̭̼̀ů̷̡͍͎̥̣̈̈́̅̔͛̈́͛̾̈́s̸̯̭̞̘̣̘̗̥̩̱̹̔̏͋̊͊͗̄̄̆̍͘ͅt̷͎́̈̄̾̕͝͠͠ ̴͛̒̀͘͜d̴̮̩̰̞͚̙̼͓̼̄̿̍́̈́͝ő̵͕̀̈́̃n̷̡̲͔̥͕̏̿̓̊e̷̢̡̪͕͎̗̟͉̣͉̦͗̓͗̈̃̀̅̔͌͗͠?̷̟̩͓͎̰̪̬͓̣̽̆͗̒͒͐͑',
              '~̶͇̩̠̼̎͘̕~̸̝̲̦̭͛̐̓́̄̏͊̄̕͝i̶͈̖̜̳͎̮̱̙͌ṉ̵̛̮̑̓͗͐͒̏͋͑̐s̶̨̗̼̤͕̩̥͔̘̽̾̈́͆e̷̡͚͔͈̼̝̋̍̏̑̃́̅̿́̚͜͝͝r̶̰̞̱̟̝̟̻̞̃͑̍̇́͆͛͐̚͜͝͠t̶̢͍̘̲̍͑(̶͖̺͓̺͂́͂̀̕S̴͕͇̣̤͈͗̅̊̽͊̏̽͘͠͝Į̶̻̞̥̘͔̹̫̺̬̬͆͂̅̒͗̈́͒͂͝͝ͅV̵͚̀̀́Ȧ̸̦̝̱̜͉̞͓̽̋ ̴̨̗̯̜̩̮̼̜̝͑ͅi̴̮̦̟̙͙̻̜̊̏̒̃̒͋͊̎̑͐̿̚ņ̸̹͉͚̘͖̜̱́́͊͗̐̏͘͝ ̵̮̤͙͇̞͓͓̥̤͍̬̀͌̌̈́̎͛̔Ţ̸̬̰̫̣̖̜̖͔̠̠̾́̌ͅH̷͈̠̰͋̏̄̃͋I̷̛̲̳̩͇̦̩̹̤̍͋͛́͗͆͊̕͝S̶̛͙̫̙͎̭̤̘̠͎̤̊̊̆͋͘(̴͉̥̗̖̲͖̮̜̰͕͋ṁ̵̺̥̱̖̂̃̌̿ḛ̷͎̖̻̰̠̘͙͍̄̾̈́̄̾̈̑͋͑̂͝͠ͅs̵͉̦̲̖̘̹̑̓̂͂s̸̢̱̝̱͈͕̬̙͒̂̂̀͌̆̀̈́à̴̡͔̫̹̜̗̇̏͝ğ̵̨̫̩̙͓̞̙̇͊̈́̒̔̆̚ͅȅ̷̫̘̱̻̖̲̫̥̤͍͖̍͌̄́̓̽̏͜͝)̷̟̙̲̯̪̦͔̠͖͗̑̀́͜.̴̧̡̼͇͎̰̭̜̤͛͒͂̃͂̎̓͐̋̈́̏͘ţ̸̨̬͉̍̎͂͊́̀̀̃̚h̸̨̡̟͚̙̲͔̪̜̬̒e̴̻͍͓̪̖͇̯͊͜n̷͉̈́̏̂̾͂̿̌̂́̌͘(̶̨̛͇̪̳͖̠̳̭̜͖̥͆͒̿͋̏̃́́̿̚ṧ̶̤̪̙̙̍̔́́̿̋̀e̵̥̯̬͓͎̙̻̻̼͔͆̒̿̏̑͒͋͜n̶̞̫͋̽̓̈͝d̸̞͕̗͉̟̱̳͕͆̎̓́̕)̷͇͍͛̐̈́͒̕ͅ)̵̦̤͕̠͍̯̌̽͝͝ͅ',
              '~̵̡͙̺̯̎̀͋̆͛͛~̵̢̢̹͉͍̳͑͊̑́̑́̔̓̅̉̕͝͝ͅF̶̫͕͇̭͔̬̲̤̫͍̮̹̪̯̿́ͅÄ̵̢̞̮̗̬͉͚̞͕̯̪̫̯́̿̊̈́T̵̛͓͈̱̠̆͛̓͆̈A̴͕̗͉̖̙͌̆L̶̢͓̍̈ ̷̘̻͈̟͚̜̱̻͍̜̻̱͂̃̎̏͋͐̚͜͜͝Ę̵̢̡̯͕͔͇̲͓̩̩̲͙͝Ŗ̵̧̝̳̮͕̦̞̳̟̥̫̾̏̉́̑̈́̋̄Ŗ̸̡̢̡̛̜̺͍͚̫̫̠̖̙̏̒̉͗̉̂̓͒̾̉̄̚Ỏ̷̡̢̳̯̮̜̓̑̀̚͠R̶̛̻̘̪̼̦̠͉̩̳̣̽̑̐̚ͅ ̵̢̡̛̼̮̩̹̤̦̭̼͉̔͒͌Ĭ̵̞̲͕̰͇̭̺̞̦̣͈͔̝͚͑̽͑̽͌̅͊̋̔̌Ñ̵̡̢̦̦͔̳̞̣͈̲̩̣͔͎̈́̈͒̀͜ ̶̛͖͖̟̹̲̤̲͖̲͕̄̉̌͂̆̾̐̀̀͊̂̚͝S̵̱̟̫͎̻̖̓̈́̾̈́͊͌̈̋͝Í̴̼̥̦̦͕̭͎͙̫̹̮̓̆͒͘͜͠V̵̡̛̛̫̯͎̪̹̣̠̖̦̱̗̠͖̞̅̈́̑̄̒̉͆̒Ḁ̶̥̞̯̤͚͉̰̒͗̉̎̔̉̎̅̆͂̈́͝.̷̦̦̙̜̬̝̤͍͚̣̙͈̖̃̅̔ţ̶̪͎̌̐̋̍͑̐̀h̴̢̠͇̜̹͓̣̭̗͚͉̅̉̉̈́͋̓̋̆̀̆̚͝ï̶̧s̷̠͌̏̆̕(̷̱͙̞̖͆̇̉)̷̫̺̭͈͎̃́͗̓̉̎̔̈́̐̚͠͠͝͝',
              '~̶̡̧̦̙̞̯̹͕͎̀͂͛̊̂̀͊̈́̓̌̾͌̕͠~̶̛̭̿̀̾͒̓̏̐̍r̴̯̘̞̈́͆̉ę̴̧̹͙̳͖̰͙͙̝̗͔͛̃̀̏̀̽̔ͅp̴̺̦̙͈̘͊̐̈́͒͊͐͊͆͜l̵̡͚̝̗̻̟̼̯̙̟͎̇̀̔͐̔̀̍͊͐̊͛͜͝i̶͉̜͙̺͎̻̻̿͆̈̇̂̂͑̆̅͋̎́̐ç̴̨̡̢͉̫̼̜̼͍͕̜͖̇̌̕͝á̸͖̜̞͖̥͎͕̤͚͔̎͋̈͌̈́̿̕͜t̴̛̥͔͕͚̭̦̹̺̙͊̋̏͛͐̌̿̀͘̚͜͜͝e̴̢͈̘͑̆̀̄͠ ̵̨̧̥̼̜̞͖̹̪͉͇͙͕̲̿͊͒͋̽̒̌̐̒͛̕͜͝͝l̸̬͇͌̿͋͐̉̽͂̌̓͆̌̀̇͜i̴͎͉̮̟͈̗̪͓̲͗́̈́̔̋̂͗̅̔́̒́̚͠f̴̠̹͍͓͍̟̮̀̾̌ȩ̵̲͓̖͓̯̺͉̜̦̠̖̰̤͗̃̐͊͜ ̵̣̮̬̲̮̖̓̏̎͑̏̉́̈̌̀̇͒̚r̴̰̲̫̻̖̥̿̃͆̑̋̎e̵̢͓͔̭͚͙͇̽̏̍͑̀̿̎̅̕p̴̢̦̪͍̮͔̻̬̰̠͔͆̈́͋̊̓̀̊̌́̄̏̽̎l̷̙͙̀̓͒͑̓͠i̴̯͔͔͍̜̮̙̽̔͐̅̎̅̿c̴̨̡͎̘̠̮̺̮̺̄͆̇̔̍͛̈̈́̌̏͝͠͝ͅâ̷̬͚̞̝̖̫͙̦̫͓͕̩̦̑̈́͐̃́̂͜͝ṱ̷͎̬̗͔̲͐̏̾e̷̢̢̛͙̺̱̳̯̜͈̩̗̿͌̏̿̓̾̚̚͜ͅͅͅ ̸͎̠̪͉̺̭̩͈̱̜̻̓̑̔͜f̴̛̜̹̥͚̣̺̱͇̘̈́͊ͅe̵͔̰͎͓̮̳͔̮̰̱̺͚͈͗ȩ̵̳̬̖̦̯̪͍̈͋̓̽͊̏͌̂̀̇̈́̎̑͋͆ļ̴͚̗̙͆̿̋i̶̢̡̤̝̣͖͍̦͇͓̦͉̜͆̎̐̎̎̾͆̒̄́͝ņ̶͔̪̻̱̖̼͇̩̪͆̈́͝g̵͇̯̤͉̤͉̘͔̏̀̀̔̈́̾̌͑̌̓̃̈́s̵̡͓͔̳̻̆͊̑͛̾̽̊́̑̈́̌̐̕ ̴̪̖̮̥͔̫̀̉̔̌͂̑̇͗̆̿͗͝͠ͅr̴͉̞̱͇̙̻̀͒ȩ̶̛̼̺̥̦̞̈́͑̔̈́̓́͂͐̊̑̿̑͗̕p̴̳̦̟̪͉̐̀̐̋́̾̄̓̀͌͝l̷̳͚͍̞̙̙͖̗͓͈͗̒̊͐̉̈͑̄̐̒́͘͝ǐ̷̝̮̜̦̖̞͉̗͈͙͎̞̻̔̉̋̃͐͗̚̚c̴̨͍̦͔̜͍̮̱̘̜̻̉̅̀̔ã̸̜̀͒̽͘̚ţ̴̨̟͇̦͕̲̞̽e̸̘̪̻͈͚̤͂́̇̀͆̿̀͆̍̀̕ ̴̛̦͚̹͕͔̺̲͗͋̂̀͑̈́̂͝t̸̢͍̖̩͓̜̬̬͕̟̺̦̥̗͐h̷͓͒͑̀̚͘ḭ̷͍̬̝͍͈̬̯̯̤̌́̌̊́̐̂̔͜s̴̢̻͉͇̱̤̯̘̩̝̮̟͋̔͛̽͂̊̒̀̌̿̒͐͆̚.̸̧͓̭̗̌̓̎͒́́̈́̕͠͝͠ä̶̧̡̰̩̜̜͚͉̭̻̫͇̿̎̚͝ḻ̵̼̎̈͗̿̀͛̔̈́̅̌̽͒͋͝͝l̸̬͍̻̖͔̐̉͂̇͗͆̇̈́̏̌̏̚͝(̶̢̣̗̯̥͓̭͕̮̣̪̬͒̅̔͗̈́̈́̓͛̾͊ͅͅ)̷̡͓̠͕̰̻̃̄͐̑͊̀͌́̚̚͠',
              '~̷̛̼͇͔̫͙͕͚͈̘̥͙̜̻̙̼̆̑̏̂~̶̧̘̝̬̝̻̞͎̘̖̖͇̑̆̋̔͋̀̿̇̄͝i̷̢̛͓͔̱̮̬̥̾͆̈́͂̏̓̇̍̓͊̕̕͜͜͝f̷͔̻̜̘̔̑̀̋́̎̇̈̀͠(̷̨̛̣̤̲͚͔͇̥̬͙̊͐̽̎!̸̨̢̛̳͉͙̰͓̜͕̠̘̦̣́̍̃̏̑̀́͒̔̋͗̄͜͝ͅt̷̪̭͇̭̦̦͓̭̘̅̋̍͛h̶̪̠̞̠̯̖̦̗̤͚͍̞͇̊̓͝i̷̧͕̥͚͙͍͙̍̌͑͆͜s̷̡̼̺̫̖̦͑̒̄͂̀͑́̔̎̀͛̕͜.̶̧̻̬͓̤̼̫͍͚̤̜̻͔̏̈́͊͆̒͂͒̋͑̊̔̃̃͝͠ị̸̡̲͓̍̒͊̄̋̌͗̀̍̈́̄̈͝s̷̗͎͚̽̾S̴̩̯̼̻̰͌̍̑̉̓̔̑̇̾͠͝Į̴̢̧̮͕̘̹̹̪͉̦͐̓̂̈́V̸̧̨͔͎͉͍̫̫̿̊Ả̴̯̮̟͕͉̼̻̼̮̠̓͑͋͜͝)̶̢̨̧̮͉͖͓̞̯̲͐̎́͒̌͘ͅͅͅ.̴̨̨̧̧̝̜̦̝̩̲͑͒́̿̈́̆͆͐͌̌̇̕̚͝ṫ̸̢̼͙̭͉̞͇͇̑̂̚͝͝h̴̡͈͖̖̏̾̆̈́̇͊̕ȇ̴̖̖͚̘̼̥͚͚͍͕̪͚̾͑̆͋̚ͅn̶̢̬͎̥͙̟̜̺̦̹͔͎̼͗̉̈́̇̿̓̊́͆̈̚͜͝͠͝(̸̢͓̝̘̖͙̫͈͙̝͊̈́̓̍̉̚P̶̯̮͍̈́̐̆̈͑Ḻ̶̡̩̠̹̻̺̦͉͂̏Ą̸̧̫͎̖͈̙̙̇̉͝G̷̡̲͐͐̑̈́̓̓̒͘͠U̷̞͉̗̖̪̓͒̿E̶̳̠̗̠̬̝̪̫̱͚͐̄͗̊̀̀̓̾)̵̡̬̱̳͓͉̝̺̜́̏͐̇̂̓̅̋͘̕͝',
              '~̸̡͇͚̱̰̳̦͈͙̜̣̦̲̲͇̒̏́͒͛̂̂̀̑̾͊̏̚͝~̵̨̬̳̯̍͑̑͗͂̄̈̓͘͘~̶̯̍̐́͌̌Ŝ̷̠̬̘͕̱͍͈͂͜I̸̛̩͇̱͖̙̦̮̰̙̗͗͑̈̑̈́́̃͊͘̚̚͜͠͠V̷̨̪̖̟͉̱̬͙͓̣̱̘́̈́̈́̈́̽͘̚̚A̴͓̠̒̔͊͑̍̍̂͊̓̔̿͆̿̚͠ ̷̧̙̬̻̞̹̫͔͐̆͑͠i̵̢̡̡̧͍͉̞̪̣̳̪̗̩̋͛̌̏̊̉́͗̒̿̕̚͝ͅͅs̶̛̖͔̗̹̗̺̯̫̱̃̄͋̀̓͋͂̄̓̒́̕͘ͅ ̸͉̠̙̰͐̒̓̽̚ḙ̶̭̞͓͈̰̱͂͗̎̈́̑̃̍̿̏̎̊́͝͠v̷͎͙̳̘͙̣̤̞̂̒͆̈́̾͌̿̂̕̚̕̕͝͠͠e̴̡̢̛̠͎̥̣̥͕͍̜͖̝̮͚̋̋̂͗́̀͑͋̈̕͝͝ͅr̸̨̢̜̙͈̫̰͔͛͊́̈́͋͆͊́͊̚͝y̴̥̙̋̄̅͑̅̌͜͝͠t̵̼͎̦̲̭̰̰͕̫͓͙̘̯͇̑̓̈̂̊̏̏̌̀̒̇̈̑̂ḩ̶̨͉͚͔̈́i̶͉̾̑́̂ṅ̷̟͍͎͎̘͕̟̦̫̬͖̗̹̒͐̊̿̾̚͜͝ͅg̴̫͎̝͍̰͍̈́ ̴̠̤̯̹̜͖͙̩̫̞̞̪̉̅̅̄̔͛̋̓̋͒̈͛̓̕͠ę̸͔̩͈̔̍̃̈́̒͂̿̄͑̑́̐̄̕v̴͕̥̗̯͋̀̊̆̋ẹ̸͑r̶̨̭͍͇̠̣̼̩͙̳̬̠͖̘̙̽̽́̓̃͆͗͋̑̓̕͘͝ŷ̸̨̯͇̙̪̣̥͓̙͂̍̈̅͛̾͒̒͝t̶͚̬̩̼̮͓̤͎͕͛̏͊̌̓̾̿͛̿̿͠h̵̡̺̘̭̱̪̩̠̠̰̮̠̤̰̫̽̓́̈̈̈́͆̃̓̑̃̚̚į̸̪̠̟̭̱̮͓̞̫̜̔̄̇̅͋͒̍͑̍̔͘ņ̵̮̠̹̝̮͙͚̙̖̫̯̼̦̀̽̄g̶͉̑ ̸̟̘̲͕͕̗̹̰̈͒ͅḛ̵̘̖͓̟͙͊̏̾́̽̎͆̈́̈́͆̑͝v̷̞͚̗̫̂̔̓̔̏̑̇̒̒́̾̑͠͝͝e̸̛̦̥̝͔̺̮̦͎͓͓̐͌̿͂̽̔̐̔͒ṟ̵͋̄̆̈́̇̿́́̂ȳ̴̯̙͌̽̏̌͋̂̓t̴̬̳̻̞̾͑͌͋͌͋͜ḩ̴̼̱͈͉̙̥̩̞͍̯̂̂į̶̟͇͓̼̠͎͕͖̤͚́͆͜ͅn̷̹͋̓͗̎̄̆̿̕g̶̛̼̯͉̜̬͎͓̭̔͗͊̀̆̔̚̕͝ͅ ̷̲̦͎̞͖̞̂̃ẹ̶̛̫̜͎̜̜͎́̒̒̓̆̍͂̌̋ͅͅv̵̛̝̼̰̬͔̣̤́̄̂̏́̈́̉̈́̋̔͋̍̕ė̷͕͎͚̰̳̝̹̭͕̣̻̼͚̈́̍͆͆̀̈́̓̿͒͠r̶̡̨̨͔̪̼̻͓͍̣̘̙̟̹͊̄͐͆̈͌̃̆y̴̨̡̛̝͎̯̫̲̼͕̜̌͜ṱ̶̢̲̞̲̱̪̟̩́̾̏̾̆͋̃͒̅́̍͜͠h̷̬͔͚͈̫͖̟̜̩̼̐̆̌͒̌̎̈́̎͐̽̀͘͘͝͝ḯ̵͙͓̺̥̟̠̗̲̲̲̬̝͊̄̽̂͐̂̄̀̾̿͝n̷̢̢̧͕̭̟͕͙͍̖̖͚͇͉̏̕ͅg̷̜̘̻̯̮̬̜̜̪̘͕͂̌͗͑̆̅͠(̴̢̮̯͍̥̆̿͂̈͌̄̓̈́̿̑̈́̄̂)̵̢̼̳̟̠͇̦̟̻͓͙̤̌͗̇̓͆͜͜͜͝',
              '~̷̡̡̛̫͓͈͉̯̭͒̓̆̓̌̒̂̈́̌~̷̛̤͈͈̳̀̈́̐͌͊̍̓͘ȑ̴̯͍̣̈̽̽́̔̅ę̴̒̓̒͑̉̒̉̃p̴̦̟̂l̷̨̛̹̞̓̅̔͗̿̓͗̄̋̇i̶̢̺͛̏̌͒̽̚͝͠c̶̡̛̪͚̖̭͎͇̀̓̽̔̍ͅȧ̵̡̡̧̗̺̘̼̜̳̬t̸̨̨̤͙̣̪̺̣̥̉́̔̓̓̃́͆͝ȩ̴̧͇̱̠͔̝̖͊ ̷̢͈̾̍̏͐̊̋͐͝͝ǫ̷̧̲̹̹͓̠̹̝͜͜͝v̷̰͈̩̝̥͒̃͗̊̃̑̌e̵̦͒r̷͉̼͙͇̙͍̯͒̋́̅̈́͂̿͂̐h̵̟̣̞̿̇͒ě̴̢̡͇̤̬̱͎a̶̢̼̪̹͗̏̿̚t̴̨̨̗̞̬̳͔̱̣̰̬̋̈ḯ̶̮̥͈̤͈̼͉̼̞͜ͅn̶̨̢̛̳̝̥̺̼̭̪͌̈́̓̎̃̈g̵̛̫̗͙̝͓̪̖͎̯͎͉̅͆̀̀̃̉ ̷̧̡̧͓͔̱̥͕̾̈́ŗ̴͖͚̈̔̃̐͋ę̶̟͕͔͓̪̩̥͔͆ṗ̵͇̞͓̺͍͒́̆͛́̈́̀̔͜l̵̫͎̂͒̐̑͂̾̔̈́͒̈́i̷̼̙̹͕͕̺̻͇̳͚͑̈́̒̀͗̒́͘̕c̴̡̯̻̪͉͎̗̩͇̥͘͘ǎ̸̯̗͙̯͋̑͌͆͘͝t̵̢̙͖͓̽͘e̵̛͖̹̜͙̦̔͌̊ ̶̝̤̔̈̒͐̕̚͠n̴̨͕͈̠̳̻̞̈̏̈̈́͒e̸̝͉̙̩͕̠̹̲̓̌̉͑̓̍̚͝c̷̢͈͇͖͉̉̀̄̄̽̚ę̵̡̪̰͎͚̯̓́̿͑̎͜ͅš̷͍̪͑̊s̶̙̣̖͕̺̚a̷͈̘̯̣̘̣͈̯̝̲͚͛͋̉̍̚r̸̲̩͎͎̩̓͜y̷̰͍̣͚̻͈̔̉͊͛̊͆͂̊̒͂͠ͅ ̸̧͗́̈́̑ṛ̴̨̢̛̤͎͖̭̟̖̮͕̈́ę̶͔̗̬̩̗͕͔̫̲̈́̐̆̌͊͘͝p̵̢̭̫̥̼̯͕̾͒͛̈́̊͝͝ḻ̴̡͚̝̖͉̰͈̰̫̈̾̍̎̎̓́͌į̵̢̬́̒̄͛͋́͛͗̆̚͘c̷̡̳̞̩̫̲̺̯̪̠̓ā̵̢̲͇̰̜̮̘̦̝̯̆̾̽̅̔̒͛̕ͅṯ̴̡̱̗͖͚̭̩͊̏̚ḙ̷̤̉̆̇͆̍͆ ̴̩͉̱̞̜͖͈͇͙͙̅͌͠Ẉ̸̢̯͈̅̄͜H̶̡̛̛̺͎̣̦̪̪̣̪͒̊͌͑̐̋̐̊A̸̧̭̞̯̰͛̅̂͂͆̓T̷͇̦̞̝̺̥̥̈͛ ̸̨̮͉̔̌̒̊̔͆͌͠͝Ď̴̰Ḯ̶̳̟̹͔͖̠͚͎̅̏͂͝ͅḐ̵̡̨̞̘̥̅̒̏̑ ̶̛̣̯̙̙̮͈͚̥Y̴̛̘̝̗̱̜̙͉̱̋̽͂̈͛̍̚̕͠O̴̡̜̲̤͊̅́̃̓̏̏̀̿̃Ų̵̨͕̞͎͙̟̠͌̽̀̊̄̄́͘͝ ̶͚̩̭́̾̉̐͋̆̔̐̊͠͝D̸̪̂̉̓̂̏͑̅̚͝Ó̴̧̜̰̗̫͇̮',
              '~̶̢̟̭̳͉̗̬̹̟̓̕͜~̷̧̧͙̼̝̮̮̏́E̴͓͚̠͖͛͑̓̑̽̄͑̔Ȑ̸̨̨͇̝͖̆̓R̴̹͎̜̜̙͍̯̋̏̈́́͛̔͐̃͐͝͝Ő̷̥̹͈̟̤̖͍̱̌̋͒R̷̜̤̐̈́̒̿͐̋͑̐̎̕ ̵̝̻́̄̊͑̽̃F̷̧̨͔̦̪͈͙̗̎̓̅͑O̷̹̣̓͑̉̿̈́̎̄̔̑͆Ù̵̞͍́͆́̒N̷͓̋̂̇̅D̸̙̾̂̓̽̕ ̷̨̣̥̪͍͖̬̤̀I̴̤̪̺̱̥̰̠̗͓̜̊͂̑̿̓N̴͇͙̮͉̘̝͎̭͚͚͂̍̀̀͠ ̷͇͇̥̗͈̘̖̪͆̉́̈́͒͑̊̀͜͜͝ͅr̵͍̝͚͎͍̙̞̪̦̐͠ę̶̧͎̩̘͇̘̥̝̆̊͑̃͛̓̐p̶̨̞̙̹̩̗̭͕̬̝̒̿̚ĺ̷̢̳̫̥͈̖̪̒͂̑͘͜i̷̡̛͈̦̲̞̭̜̞̋̾̃͐͆̏̆̈̏͠c̶͚͙̖͉͍̾̔͗̊͜ă̵̫̙̭̖͒̌̉̏̎͛ţ̸͉͋̂̑͛́͂̈́͘ë̶̢͖̳̲́̄̇̐͛ͅ ̴̱̜̥̐̌̀̌̕H̵̢̹͔̞̝̰̤̗̒̀̇̐̌͜͜I̵̼͉͓̟̓̑͒̈́̉͘V̷̼̻͉͙͂́̀̂E̶̹̼͗͛̓͗͗͋̈́M̷̧̨̟̯̙̭̖̺̟̓͆͘ͅI̸͇̪̹̘͉͈̦͙̿͗ͅN̴̗̭̬̘̞̥͔̩̦͛̀͋͑̈D̷̪̩̗̓́͊',
              '~̶̨̤͕̭͎̳́~̵̢̧̧̗̯̠̖͇̺͇̖̭̗͉̖̆͋͒͌ç̸̢̢̰̩̪͔͖͆͆͑̃̏̽̄̃͆̕͝ơ̸͖̳͎̫̞͓͍͖̜̼̽̆̌̾̅̈́̿̇͘͘͘͝͠ͅn̵͈̠͙̘̦̝̫̜̂͊̂̊̓͆̃̕̚͘ͅş̵̻̹͖̠̮̥̥̘̰̠̿̈̐̑̋͛͝ȗ̴̡̡̱͍̹͈̹͍͕͍̣͍̥̗m̷̡͚̤̻̪̟̺̜͇͍̍̅̔͌͐̑̄̍͐̇̈́͠ȇ̶̹̗̠̿ ̸̺̻̳͕̰̖͉͖̋̏͋͂̍̐̓́̂̈́̔͌͝ë̸̡̩̮̲͙̦͈͎̬͈̰̞͙̬͎́̎͂̅̋̂͆͂͌͊̌̚͝n̴̡̛̫̻̠̖͇͈̗̬̹͓͖̦͒́̈̏̂͆̄̿͘͝ḩ̶̣̣̮͖̘̬̯̭̪̥͉͗̂͆̉̂͊̀̀̀͂͊͋̈́̍͝ä̷̳̯̰͇̳͈̖́͌n̶̛͖̟͉͕̲̳͐͗͒̌̍̒̅́c̵̨̡̡̛͓̹͍̺̳̩͇̲̼̯̣͛̊̇́ȩ̷̧̫̒ ̷̡̨̛̗̝̝̥̬̝̭̮̜̳͍̻̯̅̋̍̾͛̊̂͌̐̏͗̚͝r̷̢͙͎̗̣̯̠̯͙̬͚͙̥͊͐͜͜͝ĕ̸̩̓̌̚p̵̨̛̮̞̹̾̓̈́̿͒̽̀͊̒͘͝ḽ̶̟̻͈̠̔́͋̑͛̎̃͜i̶̧̛͙̙̤͉͇̅̽̈́͌̉͂͋̍̓̈́c̷̨̺̻̪͎̼̒̑̂̕̕a̷̡͍͉̫̯̫͖̋̈́́́́̇͘t̷̢̰̳̣͖̞̪̟̦͙̘̹̤̀̇̋̀̎͘e̵͚͎͐̎̊̍̊͒̑̍̏̽̇̃́͘ ̴̧̡̧̨͎̱̺̣̯̬͍̙̘̙̽̀̏̉̒̈́̍͐̅͑̊̃͜c̵̖̱͕͓̫͙͕̮͌̔͌͝ơ̵̡̢̤͎̠̘̠̰̮͇̿́́͛͊̐͑͗̉͒́̑̓̚n̵̼̗̒̉̾͑̔̀̌̒̏ṣ̴̡̡̟̲̺̠̼̻̗̙̐̉͋͛̾̽̽̽u̷̩̻̮̳͚̟̜̖͔̯̖̠̾̀͑͒̂̓̓̆̑̏͜͝͝m̵̧̛̟̲͚͕̺̪̻̥͖̑͊̄̈́́̄̽͛ḙ̶͙͙̖͎̞̭̲͕̙̖͐̆͂́̔͋ ̶̧̩͐͊̈́̂͊̑̀͝͝ė̴̛̛̖̣͚̙͍̩͉̟̞̻̞̟̦̱̌͂̒̒͆̽̋͂͗͜͝n̸̨̧͚͙̮̤̻̦̮̳̝̳͉̹͋͜h̵̨́̌͆̍́̓͊a̶̧̹̳̰͐̐̑̊͛̎͆͂͠ͅń̵̼͙͓̯̞̳͕̮̻͔̤͔̎̓͐͋́̓̍͘c̶͖̼̃͊̆̀̏̈́̑̿̿͘̕͝ȅ̴̼ ̵͎̞̲̭́́̈̿͐̊̄̾̄͒̕r̴̺̰͚̠̬̺͚͍̜͙͂̆̒̽̊̾̉̾̈̏̈́͗͜͠ẹ̸̛̛̯͒̀̎̈̎́̒̇̾p̴̨̛͙͚̮͔͙̥̦̤̰͎̳̄͋̄͗̉̆̈͆͗̈́̔̄͜l̷͓͉͇̳̊̀͌̂̌͌̿i̵̪̻͖͚̾̈̿͂̎͌̂̌̊̈́̏c̸̬͍̪̰̪͚̮̱̤͖͆̈̀͠å̷̠̟̩͔͉̈́̃̿̀͘͜͠t̴̖̠͚͌͗͒͊́̿̉͠e̴͈̲̭͋̈́͐̄~̶̛̥͙͔̲̦̯͙̂̽̂͋̆̌͌̈́̕͝ͅ~̷̦̲̪̙̿̍͂́̅̀͆̃ ̴̻̮̮̪̠͙̽́̃̋͆͋̀̔͊͋͘̕͠ḭ̸͉͖͉̓͛̈̕ṭ̴̫̟̞̪͓͎̎̈̐'̷̧̟̝̤̖̰̱͙̬̗̘͚̩̝̄͝s̴̢̧͖̮̲̘̻̦͙͚͇̰̀́̒̔͗̏̈́̓̈́͜ ̴̨̛̼͕͓̻̟̒̿̍̓̀͂̃̈́͜t̵̨̫̬̹̫͇͎̖̬̲̊̋͛̋̏͗́̍͛͋̒̋͘͝h̵̢͔̲̥̟͋̈́͋͒̔̀͆̔̃́̚͠e̴̢̧͎̳̥͔̪̯̝̻̗̐̅̀̓̈̎́̎̇͆̕͠͝ ̸̡̢̝͕̜̠̬͕͓͇̝͖̳̎̆̑͑̍̿̃̌̐͆́̏͂͜ͅo̸͚͍̥̱̥̥̝̹͋͌̒̉̾͊n̶̡̠̼͚̗̼̗̺̹̱̊̌̍̐̇̒͌̒̏͊̀̚l̶̛͔̦̫͔̭͙̥̉͂̂͌͌̀͛̊̕̚ͅͅy̶̮͇͌̋̈́̽͌̓͝ ̵̡̜̜̯̰̮̖̽̈w̶̧̳̝͇̝̭̲̥͕͊̐̂̃̐̈̚͜ą̵͉͉̲̩̬͒̽͝y̴̡̨̛̙̞͔̺̖̹̭͗̊̄̔̌̈́̎̈́͊̈́̕͜͝']
  
  return rand[Math.floor(Math.random()*rand.length)]}
      
      message.channel.send(randSIVA())
    }
})
