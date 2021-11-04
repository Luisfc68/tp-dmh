<template>
    <q-page class='flex justify-center'>
        <div class='full-width limited'>
            <ChatHeader :chat='chat' class='absolute limited' style='z-index: 1;'/>
            <div class='relative-position' style='border: solid red 2px; top: 88px;'>    
                <ChatArea ref='area' :messages='messages' :messagesRemain='messagesRemain' style='max-height: 700px; height:calc(100vh - 215px);'/>
                <ChatInput @newMessage='(msg) => sendMessage(msg)'/>
            </div>
        </div>
    </q-page>
</template>
<script>
import ChatInput from '../components/chat/ChatInput.vue'
import ChatHeader from '../components/chat/ChatHeader.vue'
import ChatArea from '../components/chat/ChatArea.vue'
import { mapGetters } from 'vuex'
import { GET_CHAT } from 'src/store/chat/types'
import {MSG_REQUEST, MSG_SENT, ERROR, JOIN_ROOM} from 'src/socket/socketEvents'

export default {
    name: 'ChatPage',
    components: {
       ChatInput,
       ChatHeader,
       ChatArea
    },
    data(){
        return{
            messages: [],
            messagesRemain: true
        }
    },
    methods:{
        ...mapGetters('chat',[GET_CHAT]),
        sendMessage(msg){
            this.messages.push(msg)
            this.$socket.client.emit(MSG_SENT,{
                content: msg.content
            })
        }
    },
    computed:{
        chat(){
            return this.getChat()
        }
    },
    sockets:{
        [MSG_REQUEST](data){
            if(data.length !== 0)
                this.messages.unshift(...(data.reverse()))
            else
                this.messagesRemain = false
        },
        [MSG_SENT](data){
            this.messages.push(data)
            this.$refs.area.newSingleMessage()
        },
        [JOIN_ROOM](data){
            this.messages.push({
                content: data.username+' se ha unido al chat!',
                timestamp: Date.now(),
                user:{
                    id: data.id,
                    username: data.username
                }
            })
            this.$refs.area.newSingleMessage()
        },
        [ERROR](error){
            console.log(error)
        }
    }
}
</script>
<style scoped>
.limited{
    max-width: 850px;
}
</style>