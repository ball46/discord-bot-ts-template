import {ClientEvents, Awaitable, Client} from 'discord.js'

type LoggerFunction = (...args: any[]) => void

export interface EventProps {
    client: Client
    log: LoggerFunction
}

/*
    * EventKeys is a union of all the keys of ClientEvents
    * such as 'ready', 'message', 'messageCreate', etc.
    * ypu can see more here: https://old.discordjs.dev/#/docs/discord.js/main/search?query=ClientEvents
 */
export type EventKeys = keyof ClientEvents


/*
    * EvenExec is a function that executes when an event is fired
 */
export type EvenExec<T extends EventKeys> =
    (props: EventProps, ...args: ClientEvents[T]) => Awaitable<unknown>


export interface Event<T extends EventKeys> {
    id: T
    exec: EvenExec<T>
}