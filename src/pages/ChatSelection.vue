<template>
  <q-page class="flex flex-center">
    <div class='q-pa-md' style='width: 95%'>
      <div class='full-width row justify-end'>
        <q-btn round size='sm' color="primary" icon="add" class='q-mb-sm q-mr-lg' @click='crear()'/>
      </div>
      <q-list>
        <ChatComponent v-for='chat in chats' :key='chat.id' :chat='chat' @deleted='refresh()' @update='(data) => actualizar(data)'/>
      </q-list>
    </div>
  </q-page>
  <q-dialog v-model='creando' persistent>
    <ChatEdicion 
      :creationMode='creationMode' 
      @close='creando=false' 
      @created='refresh()' 
      @updated='refresh()' 
      :chatRecibido='chatEnviado'
    /> 
  </q-dialog>
</template>
<script>
import ChatComponent from '../components/chat/ChatItemComponent.vue'
import ChatEdicion from '../components/chat/edicion/ChatEdicion.vue'
import {CHAT_REQUEST} from 'src/socket/socketEvents'

export default {
  name: 'ChatSelectionPage',
  components: {
    ChatComponent,
    ChatEdicion
  },
  data(){
    return {
      chats:[],
      creando: false,
      creationMode: true,
      chatEnviado: null
    } 
  },
  methods:{
    pedir(){
      this.$socket.client.emit(CHAT_REQUEST,{
        offset: this.chats.length
      })
    },
    refresh(){
      this.chats = []
      this.pedir()
    },
    crear(){
      this.chatEnviado = null
      this.creationMode = true
      this.creando = true
    },
    actualizar(chat){
      this.chatEnviado = chat
      this.creationMode = false
      this.creando = true
    }
  },
  sockets:{
    [CHAT_REQUEST](data){
      this.chats.push(...data);
    }
  },
  mounted(){
    this.pedir()
  }
}
</script>