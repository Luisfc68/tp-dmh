import { boot } from 'quasar/wrappers'
import VueSocketIO from 'vue-socket.io-extended'
import { io }  from 'socket.io-client'

const socket = io('ws://ec2-107-20-23-84.compute-1.amazonaws.com',{
                    reconnection: false,
                    autoConnect: false,
                    auth:{
                        token:''
                    }
                })

export default boot(( {app,store} ) =>{
    app.use(VueSocketIO,socket, {store})
})

export {socket}