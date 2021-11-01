import socketService from "src/services/socketService"

const token = localStorage.getItem('token')
if(token)
  socketService.connect(token) //esto hace que el usuario se actualice

export default {
  token,
  usuario: {}
}
