import { Event } from '../types'
import ready from './ready'

/*
    * events is an array of all the events
    * You can see type Event in src\types\events.ts to check what it is
 */
const events: Event<any>[] = [
    ready
]

export default events