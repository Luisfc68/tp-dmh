import { boot } from 'quasar/wrappers'
import VueSocketIO from 'vue-socket.io'
import SocketIO  from 'socket.io-client'

const socket = SocketIO('ws://ec2-107-20-23-84.compute-1.amazonaws.com',{
                    reconnection: false,
                    autoConnect: false,
                    auth:{
                        token:''
                    }
                })

export default boot(( {app,store} ) =>{
    new VueSocketIO({
        debug: true,
        connection: socket,
        vuex: {
            store,
            actionPrefix: "SOCKET_",
            mutationPrefix: "SOCKET_"
          }
    })
    app.config.globalProperties.$socket = socket
})

export {socket}