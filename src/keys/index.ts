import { Keys } from '../types'

const keys : Keys ={
    clientToken : process.env.CLIENT_TOKEN ?? 'nil',
    GuildId: process.env.GUILD_ID ?? 'nil'
}

if (Object.values(keys).includes('nil')) {
    throw new Error('One or more keys are not set in the environment variables.')
}

export default keys