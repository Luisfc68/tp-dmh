<template>
    <q-page class='flex justify-center'>
        <div class='full-width limited'>
            <ChatHeader :chat='chat' class='absolute limited' style='z-index: 1;'/>
            <div class='relative-position' style='border: solid red 2px; top: 88px;'>    
                <ChatArea class='' style='max-height: 700px; height:calc(100vh - 215px);;'/>
                <ChatInput/>
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

export default {
    name: 'ChatPage',
    components: {
       ChatInput,
       ChatHeader,
       ChatArea
    },
    methods:{
        ...mapGetters('chat',[GET_CHAT])
    },
    computed:{
        chat(){
            return this.getChat()
        }
    }
}
</script>
<style scoped>
.limited{
    max-width: 850px;
}
</style>