import { JOIN_ACTION, PONER_CHAT,CHANGE_CHAT_ACTION } from "./types"

export default{
    [JOIN_ACTION]({commit},data){
        commit(PONER_CHAT,data)
    },
    [CHANGE_CHAT_ACTION]({commit},data){
        commit(PONER_CHAT,data)
    }
}