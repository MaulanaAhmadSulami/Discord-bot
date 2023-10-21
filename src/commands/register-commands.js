require('dotenv').config();
const {REST, Routes} = require('discord.js');


const commands = [
    {
    name: 'hey',
    description : 'Replies with hey!',
    },
    {
    name: 'ping',
    description : 'Replies with pong!',
    },
    {
        name: 'avatar',
        description : 'Display a user\' avatar',
        options : [
            {
                name: 'user',
                type: 6,
                description : 'Display a user\' avatar',
                required : false,
            },
        ],
    },
];

const rest = new REST({version: '10'}).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Registering slash commands..');

        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), {body : commands}
        )

        console.log('Slash commands has been registered successfully');
    } catch (error) {
        console.log(`Error occured : ${error}`)
    }
})();