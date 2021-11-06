<template>
  <q-page class="flex flex-center">
    <div class='q-pa-md' style='width: 95%'>
      <div class='full-width row justify-between'>

        <div class='q-ml-lg q-mb-sm row items-end'>
          <q-input
            v-model='query' 
            label='Busca chats (# -> tags)' 
            dense 
            @keyup.enter='pedirQuery(false)' 
            :disable='searching' 
            label-color='black'
            color='primary'
            input-class='text-black'
          >
            <template v-slot:append>
              <q-icon v-if="query !== ''" name='close' @click='resetQuery()' class='cursor-pointer' color='primary'/>
              <q-icon name='search' class='cursor-pointer' @click='pedirQuery(false)' color='primary' />
            </template>
          </q-input>
        </div>

        <div class='q-mb-sm q-mr-lg row items-end'>
          <q-btn round size='sm' color="dark" icon="add" @click='crear()'/>
        </div>

      </div>
      <q-infinite-scroll @load='onLoad' :offset='350' ref='scroll'>
        <q-list>
          <ChatComponent v-for='chat in chats' :key='chat.id' :chat='chat' @deleted='refresh()' @update='(data) => actualizar(data)'/>
        </q-list>
        <template v-slot:loading>
          <div class="row justify-center q-my-md">
            <q-spinner-dots color="accent" size="40px" />
          </div>
        </template>
      </q-infinite-scroll>
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
      chatEnviado: null,
      query: '',
      searching: false
    } 
  },
  methods:{
    onLoad(index, done){
      if(this.query === '')
        this.pedir()
      else
        this.pedirQuery(true)
      setTimeout(() => {
        done()
      },2000)
    },
    pedir(){
      this.$socket.client.emit(CHAT_REQUEST,{
        offset: this.chats.length
      })
    },
    parsearQuery(){
      const title = this.query.split(" ").filter(p => !p.startsWith('#')).join(' ')
      const tags = this.query.split(" ").filter(p => p.startsWith('#')).map(p => p.substring(1))
      const parsed = { title,tags }
      return parsed
    },
    pedirQuery(isNextPage){
      this.searching = true
      const query = this.parsearQuery()
      if(!isNextPage){
        this.chats = []
        this.$refs.scroll.resume()  
      }
      let busqueda = {
        offset: this.chats.length,
        title: query.title,
        ...(query.tags.length !== 0) && {tags: query.tags}
      }
      this.$socket.client.emit(CHAT_REQUEST,busqueda)
    },
    resetQuery(){
      this.query = ''
      this.refresh()
    },
    refresh(){
      this.chats = []
      this.$refs.scroll.resume()
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
      this.searching = false
      if(data.length === 0)
        this.$refs.scroll.stop()
    }
  }
}
</script>