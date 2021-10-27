<template>
  <q-page class="flex flex-center">
    <div class='q-pa-md' style='width: 95%'>
      <q-list>
        <ChatComponent v-for='chat in chats' :key='chat.id' :chat='chat'/>
      </q-list>
    </div>
  </q-page>
</template>
<script>
import ChatComponent from '../components/chat/ChatItemComponent.vue'

export default {
  name: 'ChatSelectionPage',
  components: {
    ChatComponent
  },
  data(){
    return {
      chats:[
        {
          title: 'titulo largooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
          description: 'descripcion',
          tags:['1','2','3'],
          id: 54321,
          owner:{
            username: 'luisfc68',
            id: 987654
          }
        },
        {
          title: 'Chat de Luis Fernando Chavez Quevedo',
          description: 'descripcion',
          tags:['1','2','3'],
          id: 54321,
          owner:{
            username: 'luisfc68',
            id: 987654
          }
        },
        {
          title: 'titulo',
          description: 'descripcion',
          tags:['1','2','3'],
          id: 54321,
          owner:{
            username: 'luisfc68',
            id: 987654
          }
        },
        {
          title: 'titulo',
          description: 'descripcion',
          tags:['1','2','3'],
          id: 54321,
          owner:{
            username: 'luisfc68',
            id: 987654
          }
        },
        {
          title: 'titulo',
          description: 'descripcion',
          tags:['1','2','3'],
          id: 54321,
          owner:{
            username: 'luisfc68',
            id: 987654
          }
        },
        {
          title: 'titulo',
          description: 'descripcion',
          tags:['1','2','3'],
          id: 54321,
          owner:{
            username: 'luisfc68',
            id: 987654
          }
        },
        {
          title: 'titulo',
          description: 'descripcion',
          tags:['1','2','3'],
          id: 54321,
          owner:{
            username: 'luisfc68',
            id: 987654
          }
        },
        {
          title: 'titulo',
          description: 'descripcion',
          tags:['1','2','3'],
          id: 54321,
          owner:{
            username: 'luisfc68',
            id: 987654
          }
        },
        {
          title: 'titulo',
          description: 'descripcion',
          tags:['1','2','3'],
          id: 54321,
          owner:{
            username: 'luisfc68',
            id: 987654
          }
        },
        {
          title: 'titulo',
          description: 'descripcion',
          tags:['1','2','3'],
          id: 54321,
          owner:{
            username: 'luisfc68',
            id: 987654
          }
        },
        {
          title: 'titulo',
          description: 'descripcion',
          tags:['1','2','3'],
          id: 54321,
          owner:{
            username: 'luisfc68',
            id: 987654
          }
        },
      ]
    } 
  }
}
</script>