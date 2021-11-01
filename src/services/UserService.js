import { api } from '../boot/axios'

export default {
    
    login({ nombre, password }){
        return api.post('/user/login',{
            username: nombre,
            password
        })
    },

    signup({ nombre, password, email }){
        return api.post('/user/signup',{
            username: nombre,
            password,
            email
        })
    }

}