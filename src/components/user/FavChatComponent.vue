<template>
        <q-item clickable v-ripple class='text-capitalize' @click='join()'>
            <q-item-section top avatar>
                <q-avatar>
                    <img :src='chatImage'>
                </q-avatar>
            </q-item-section>
            <q-item-section>
                <q-item-label lines="1">{{chat.title}}</q-item-label>
                <q-item-label lines="1" caption>{{chat.description}}</q-item-label>
            </q-item-section>
            <q-item-section side top>
                <q-btn flat outline round icon="star" color="yellow" @click.stop='rm()'/>
            </q-item-section>
        </q-item>
        <div class='q-px-md'>
            <q-badge class='text-primary q-mx-xs' outline v-for='tag in chat.tags' :label='tag' :key='tag'/>
        </div>
    <q-separator class='q-my-sm'/>
</template>
<script>
import { RM_FAV_CHAT,JOIN_ROOM,ERROR,JOIN_CONFIRM } from 'src/socket/socketEvents'
import { mapActions } from 'vuex'
import { JOIN_ACTION } from 'src/store/chat/types'

export default {
    name: 'FavChatComponent',
    props: ['chat'],
    data(){
        return {
            stamp: 0,
            selected: false
        }
    },
    computed:{
        chatImage(){
            return this.$api.defaults.baseURL+'/chat/image/'+this.chat.id+'?stamp='+this.stamp
        }
    },
    methods:{
        ...mapActions('chat',[JOIN_ACTION]),
        rm(){
            this.$socket.client.emit(RM_FAV_CHAT,{chatId: this.chat.id})
        },
        join(){
            this.selected = true
            this.$socket.client.emit(JOIN_ROOM,{chatId: this.chat.id})
        }
    },
    watch:{
        chat: function() {
            console.log('cambio')
            this.stamp += 1
        } 
    },
    sockets:{
        [JOIN_CONFIRM](){
            if(this.selected){
                this.joinAction(this.chat).then(() =>{
                    this.$router.push({name: 'chat'})
                    this.selected = false
                })
                
            }
        },
        [ERROR](data){
            console.log(data)
        }
    }
}
</script>