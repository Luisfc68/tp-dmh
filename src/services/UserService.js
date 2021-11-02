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
    },

    update({
        nuevoNombre,
        nuevoCorreo,
        nuevaClave,
        nuevoPlan,
        nuevaImagen
    }){

        let cadena =  Promise.resolve()
        if(nuevoPlan){
            cadena = cadena.then(() => {
                return api.patch('/user/plan',{
                    plan: nuevoPlan
                })
            })
        }

        if(nuevaImagen){
            cadena = cadena.then(() => {
                const formData = new FormData()
                formData.append('image',nuevaImagen)
                return api.post('/user/image',formData, {
                    headers: {
                      'Content-Type': 'multipart/form-data'
                    }
                })
            })
        }

        let nuevoUsuario = {
            username: nuevoNombre,
            email: nuevoCorreo
        }
        if(nuevaClave)
            nuevoUsuario['password'] = nuevaClave
        cadena = cadena.then(() => api.put('/user',nuevoUsuario))
        
        return cadena 
    }

}