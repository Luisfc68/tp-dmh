import { CONNECTION_SUCCESS_ACTION, ADD_FAV_CHAT_ACTION, RM_FAV_CHAT_ACTION, LOGIN_ACTION, LOGOUT_ACTION, PONER_TOKEN, PONER_USUARIO, QUITAR_TOKEN, QUITAR_USUARIO, UPDATE_USUARIO, UPDATE_FAV_CHAT, GET_USUARIO, CAMBIAR_FAV_CHAT } from './types'
import userService from '../../services/userService' 
import { socket } from '../../boot/socketio'

export default {
    [LOGIN_ACTION]: ({commit},data) => {
        return userService.login({
            nombre: data.nombre, 
            password: data.password
        }).then(res => {
            const token = res.data
            localStorage.setItem('token',token)
            commit(PONER_TOKEN,token)
            return token
        }).catch(e => {
            throw e.response.data.message
        })
    },
    [LOGOUT_ACTION]:({commit}) => {
        localStorage.removeItem('token')
        socket.disconnect()
        commit(QUITAR_TOKEN)
        commit(QUITAR_USUARIO)
    },
    [CONNECTION_SUCCESS_ACTION]({commit},data){
        commit(PONER_USUARIO,data)
    },
    [UPDATE_USUARIO]({commit},data){
        commit(PONER_USUARIO,data)
    },
    [UPDATE_FAV_CHAT]({commit,getters},data){
        let usuario = getters[GET_USUARIO]
        let index = usuario.favChats.findIndex(c => c.id === data.id)
        if(index>-1)
            commit(CAMBIAR_FAV_CHAT,{index,chat: data})
    },
    [RM_FAV_CHAT_ACTION]({commit},data){
        console.log(data)
        commit(PONER_USUARIO,data)
    },
    [ADD_FAV_CHAT_ACTION]({commit},data){
        commit(PONER_USUARIO,data)
    }
}
