import { JOIN_ACTION, PONER_CHAT } from "./types"

export default{
    [JOIN_ACTION]({commit},data){
        commit(PONER_CHAT,data)
    }
}