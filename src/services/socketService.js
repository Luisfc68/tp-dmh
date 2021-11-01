import { socket } from "src/boot/socketio"

export default {
    connect(token){
        socket.auth.token = token
        socket.connect()
    }
}