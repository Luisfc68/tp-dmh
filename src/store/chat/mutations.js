import { CHANGE_CHAT_ACTION, PONER_CHAT } from "./types"

export default{
    [PONER_CHAT](state,data){
        state.chat = data
    },
    [CHANGE_CHAT_ACTION](state,data){
        state.chat = data
    }
}