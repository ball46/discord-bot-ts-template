import {event} from '../utils'

/*
    * As you see, in async function we call log function for showing log in console in src\utils\event.ts
 */
export default event('ready', ({client, log}) => {
    log(`Logged in as ${client.user?.tag}`)
})