import { CONNECTION_SUCCESS_ACTION, LOGIN_ACTION, LOGOUT_ACTION, PONER_TOKEN, PONER_USUARIO, QUITAR_TOKEN, QUITAR_USUARIO, UPDATE_USUARIO } from './types'
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
    }
}
