<template>
        <q-item clickable v-ripple class='text-capitalize'>
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
                <q-btn flat outline round icon="star" color="yellow" @click="click()"/>
            </q-item-section>
        </q-item>
        <div class='q-px-md'>
            <q-badge class='text-primary q-mx-xs' outline v-for='tag in chat.tags' :label='tag' :key='tag'/>
        </div>
    <q-separator class='q-my-sm'/>
</template>
<script>
import { RM_FAV_CHAT } from 'src/socket/socketEvents'
export default {
    name: 'FavChatComponent',
    props: ['chat'],
    data(){
        return {
            stamp: 0
        }
    },
    computed:{
        chatImage(){
            return this.$api.defaults.baseURL+'/chat/image/'+this.chat.id+'?stamp='+this.stamp
        }
    },
    methods:{
        click(){
            this.$socket.client.emit(RM_FAV_CHAT,{chatId: this.chat.id})
        }
    },
    watch:{
        chat: function() {
            console.log('cambio')
            this.stamp += 1
        } 
    }
}
</script>