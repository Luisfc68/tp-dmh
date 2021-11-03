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

    }

}