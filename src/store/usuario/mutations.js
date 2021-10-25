import { PONER_USUARIO, QUITAR_USUARIO } from "./types";

export default{
    [PONER_USUARIO] (state,data) {
        state.user = data;
    },
    [QUITAR_USUARIO](state){
        state.user = null
    }
}
