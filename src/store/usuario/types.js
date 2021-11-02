import { CONNECTION_SUCCESS } from "src/socket/socketEvents"

//MUTATIONS
const PONER_USUARIO = 'ponerUsuario'
const QUITAR_USUARIO = 'quitarUsuario'

const PONER_TOKEN = 'ponerToken'
const QUITAR_TOKEN = 'quitarToken'

//GETTERS
const GET_USUARIO = 'getUsuario'
const GET_TOKEN = 'getToken'

//ACTIONS
const LOGIN_ACTION = 'loginAction'
const LOGOUT_ACTION = 'logoutAction'
const UPDATE_USUARIO = 'updateUsuario'

//SOCKET ACTIONS
const CONNECTION_SUCCESS_ACTION = 'socket_'+CONNECTION_SUCCESS

export {
    PONER_USUARIO,
    QUITAR_USUARIO,
    GET_USUARIO,
    PONER_TOKEN,
    QUITAR_TOKEN,
    GET_TOKEN,
    LOGIN_ACTION,
    LOGOUT_ACTION,
    CONNECTION_SUCCESS_ACTION,
    UPDATE_USUARIO
}