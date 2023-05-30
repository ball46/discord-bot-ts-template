import { SlashCommandBuilder } from 'discord.js'
import { command } from '../../utils'

const meta = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with pong!')

export default command(meta, ({ interaction }) =>{
    interaction.reply('pong!')
})