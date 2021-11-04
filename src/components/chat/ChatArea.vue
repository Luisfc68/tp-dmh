<template>
    <q-scroll-area class='q-px-sm bg-grey-6 rounded-borders row items-end' ref='area'>
        <q-infinite-scroll @load='onLoad' ref='scroll' reverse class='col-12' :debounce='500'>
            <template v-slot:loading>
            <div class='row justify-center q-my-md'>
                <q-spinner color='primary' name='dots' size='25px' />
            </div>
            </template>
            <MessageComponent 
                v-for='message in messages'
                :key='message.id'
                :message='message'
            />
        </q-infinite-scroll>
    </q-scroll-area>
</template>
<script>
import { MSG_REQUEST } from 'src/socket/socketEvents'
import MessageComponent from './MessageComponent.vue'

export default {
    name: 'ChatArea',
    components: {
        MessageComponent
    },
    emits: ['moreMsgs'],
    props: ['messages','messagesRemain','newMsg'],
    methods:{
        onLoad(index, done){
            setTimeout(() => {

                this.$socket.client.emit(MSG_REQUEST,{
                    offset: this.messages.length
                })

                if(!this.messagesRemain)
                    this.$refs.scroll.stop()

                if(this.messages.length <= 10)
                    this.$refs.area.setScrollPercentage('vertical', 1)
                else
                    this.$refs.area.setScrollPercentage('vertical', 0.2)
                
                done()

            },1500)
        },
        newSingleMessage(){
            setTimeout(() => {
                this.$refs.area.setScrollPercentage('vertical', 1)
            },300)
        }
    },
    watch:{
        newMsg: function(){
            this.newSingleMessage()
        }
    }
}
</script>