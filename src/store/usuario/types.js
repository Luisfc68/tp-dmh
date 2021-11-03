import { CONNECTION_SUCCESS,ADD_FAV_CHAT,RM_FAV_CHAT } from "src/socket/socketEvents"

//MUTATIONS
const PONER_USUARIO = 'ponerUsuario'
const QUITAR_USUARIO = 'quitarUsuario'
const CAMBIAR_FAV_CHAT = 'cambiarFavChat'

const PONER_TOKEN = 'ponerToken'
const QUITAR_TOKEN = 'quitarToken'

//GETTERS
const GET_USUARIO = 'getUsuario'
const GET_TOKEN = 'getToken'

//ACTIONS
const LOGIN_ACTION = 'loginAction'
const LOGOUT_ACTION = 'logoutAction'
const UPDATE_USUARIO = 'updateUsuario'
const UPDATE_FAV_CHAT = 'updateFavChat'

//SOCKET ACTIONS
const CONNECTION_SUCCESS_ACTION = 'socket_'+CONNECTION_SUCCESS
const ADD_FAV_CHAT_ACTION = 'socket_'+ADD_FAV_CHAT
const RM_FAV_CHAT_ACTION = 'socket_'+RM_FAV_CHAT

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
    UPDATE_USUARIO,
    RM_FAV_CHAT_ACTION,
    ADD_FAV_CHAT_ACTION,
    UPDATE_FAV_CHAT,
    CAMBIAR_FAV_CHAT
}