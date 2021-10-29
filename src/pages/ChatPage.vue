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

export default {
    name: 'ChatPage',
    components: {
       ChatInput,
       ChatHeader,
       ChatArea
    },
    data(){
        return {
            chat: {
                title: 'titulo largooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio est enim quibusdam veritatis tempora consectetur alias voluptates, eligendi, itaque quos fuga libero nemo minima earum illum eum quisquam? Nulla, maiores.',
                tags:['1','2','3','hola','como','estas','tengo','hambre'],
                id: 54321,
                    owner:{
                        username: 'luisfc68',
                        id: 987654
                    }
            }
        }
    }
}
</script>
<style scoped>
.limited{
    max-width: 850px;
}
</style>