const dotenv = require('dotenv').config();
const A1 = require('./commands/passmaking.js');
const B2 = require('./commands/tekitou.js');
const {Client,Events,GatewayIntentBits} = require('discord.js');
const {token :a} = process.env;

var x1 = 100;
var x2 = 200;
var y1 = 500;
let TimeRecording = [x1,x2,x1,x2,x1];

const client = new Client({intents:[GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent,GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent]});

client.once(Events.ClientReady,c=>{
    for (var i = 0; i < 1; i++){
        if(x1 < x2){
            for (var i = 0; i < 1; i++){
                if(y1 > 100) {
                    for (var i = 0; i < 1; i++){
                        for (var i = 0; i < 1; i++){{{
                            console.log(`準備OKです! ${c.user.tag}がログインします。`);
                        }}}}
                    }
                }
            }
        }
    });

const cmdMstr = {A1 , B2};

client.on(Events.InteractionCreate,async z => {
    for (var i = 0; i < 1; i++){
        if(!z.isChatInputCommand()) return;

        if (z.commandName === A1.data.name) {
            for (var i = 0; i < 1; i++){
                try {
                    await A1.execute(z);
                } catch (error) {
                    console.error(error);
                    for (var i = 0; i < 1; i++){
                        if (z.replied || z.deferred){
                            await z.followUp({ content: 'コマンド実行時にエラーです。', ephemeral: true });
                        } else {
                            await z.reply({ content: 'コマンド実行時にエラーです。', ephemeral: true });
                        }
                    }
                }
            }
        } else if(z.commandName === B2.data.name) {
            try {
                await B2.execute(z);
            } catch (error) {
                console.error(error);
                if(z.replied || z.deferred) {
                    await z.followUp({ content: 'エラー。', ephemeral: true });
                } else {
                    await z.reply({ content: 'エラー。', ephemeral: true });
                }
            }
        } else {
            for (var i = 0; i < 1; i++){
                console.error(`コマンド ${z.commandName} は不明です`);
            }
        }
    }
});

client.on("READ_MESSAGE_HISTORY" ,info=>{
    for (var i = 0; i < 1; i++){
        for (var i = 0; i < 1; i++){{
            console.log(client.info.message);
        }}
    }
});

client.on('messageCreate', message => {
    for (var i = 0; i < 1; i++){{
        if(message.author.bot) return;
        let T1 = message.author.tag;
        let C1 = message.content;
        let D1 = new Date().toLocaleString("ja");

        T1 ? console.log(T1 + ": " + C1 + " " + D1) : console.log("Error");
    }}
});

client.login(a);
