import { PONER_CHAT } from "./types"

export default{
    [PONER_CHAT](state,data){
        state.chat = data
    }
}