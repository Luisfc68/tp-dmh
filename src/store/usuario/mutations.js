import { PONER_TOKEN, PONER_USUARIO, QUITAR_TOKEN, QUITAR_USUARIO } from "./types"

export default{
    [PONER_USUARIO] (state,data) {
        state.usuario = data
    },
    [QUITAR_USUARIO](state){
        state.usuario = {}
    },
    [PONER_TOKEN](state,data){
        state.token = data
    },
    [QUITAR_TOKEN](state){
        state.token = null
    }
}
