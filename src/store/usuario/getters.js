import { GET_TOKEN, GET_USUARIO } from "./types"

export default {
    [GET_USUARIO](state){
        return state.usuario
    },
    [GET_TOKEN](state){
        return state.token
    }
}