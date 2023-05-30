import {event} from '../utils'

export default event('ready', ({ log}, client): void => {
    log(`Logged in as ${client.user?.tag}`)
})