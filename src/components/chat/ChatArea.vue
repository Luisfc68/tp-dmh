<template>
    <div class='q-px-sm scroll bg-grey-6 rounded-borders row items-end' ref='area'>
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
    </div>
</template>
<script>
import { MSG_REQUEST } from 'src/socket/socketEvents'
import MessageComponent from './MessageComponent.vue'
import { scroll } from 'quasar'

export default {
    name: 'ChatArea',
    components: {
        MessageComponent
    },
    emits: ['moreMsgs'],
    props: ['messages','messagesRemain'],
    methods:{
        onLoad(index, done){
            setTimeout(() => {

                this.$socket.client.emit(MSG_REQUEST,{
                    offset: this.messages.length
                })

                if(!this.messagesRemain)
                    this.$refs.scroll.stop()

                const { getScrollTarget, setVerticalScrollPosition  } = scroll
                const reference = this.$refs.area
                if(this.messages.length <= 10)
                    setVerticalScrollPosition(getScrollTarget(reference), reference.clientHeight)
                else
                    setVerticalScrollPosition(getScrollTarget(reference), reference.clientHeight*0.25)
                
                done()

            },1500)
        }
    }
}
</script>