import { api } from '../boot/axios'

export default {

    create({
        title,
        description,
        tags,
        image
    }){
        let cadena =  Promise.resolve()
        let nuevoChat = { title, description, tags}
        cadena = cadena.then(() =>  api.post('/chat',nuevoChat))

        if(image){
            cadena = cadena.then((res) => {
                const formData = new FormData()
                formData.append('image',image)
                return api.post('/chat/image/'+res.data.id,formData, {
                    headers: {
                      'Content-Type': 'multipart/form-data'
                    }
                })
            })
        }

        return cadena

    },

    delete(id){
        return api.delete('/chat/'+id)
    },
    
    update(chat,image){
        let cadena =  Promise.resolve()
        let nuevoChat = { 
            title: chat.title.trim(),
            description: chat.description.trim(),
            tags: chat.tags
        }
        cadena = cadena.then(() =>  api.put('/chat/'+chat.id,nuevoChat))

        if(image){
            cadena = cadena.then((res) => {
                const formData = new FormData()
                formData.append('image',image)
                return api.post('/chat/image/'+res.data.id,formData, {
                    headers: {
                      'Content-Type': 'multipart/form-data'
                    }
                })
            })
        }

        return cadena

    }


}