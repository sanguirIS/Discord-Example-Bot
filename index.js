const {token} = require('./config.json');
const { Client, Events, GatewayIntentBits, SlashCommandBuilder } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.once(Events.ClientReady, c => {
    console.log(`Logged in as ${c.user?.tag}`);
const ping = new SlashCommandBuilder()
.setName('ping')
.setDescription('Replies with "Pong!"');
const hello = new SlashCommandBuilder()
.setName('hello')
.setDescription('Says hello to someone');

client.application.commands.create(ping, "121927924964561324112");//copy link from group
client.application.commands.create(hello, "121927964343501324112");
});
client.on(Events. InteractionCreate, interaction => {
if(linteraction.isChatInputCommand()) return;
if(interaction.commandName === "ping"){
interaction.reply("Pong!");
}
if(interaction.commandName === "hello") {
interaction.reply('Hello ${interaction.user.username}!');
}
});
client.login(token);