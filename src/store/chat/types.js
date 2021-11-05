import { CHAT_CHANGED } from "src/socket/socketEvents"

//MUTATIONS
const PONER_CHAT = 'ponerChat'

//ACTIONS
const JOIN_ACTION = 'joinAction'

//GETTERS
const GET_CHAT = 'getChat'

//SOCKET ACTIONS 
const CHANGE_CHAT_ACTION = 'socket_'+CHAT_CHANGED

export {
    PONER_CHAT,
    JOIN_ACTION,
    GET_CHAT,
    CHANGE_CHAT_ACTION
}