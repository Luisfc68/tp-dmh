<template>
    <q-expansion-item popup expand-separator header-class='bg-info text-grey-10' expand-icon-class='text-grey-9'>
        <template v-slot:header>
            <div class='column q-py-sm overflow-hidden' style='width: 100%'>
                <div class='row'>
                    <q-item-section avatar class='q-pr-md'>
                        <q-avatar size='72px'>
                            <q-img :src='chatImageUrl'/>
                        </q-avatar>
                    </q-item-section>
                    <q-item-section :class='computedFontSize'>
                        <q-item-label>
                            {{chat.title}}
                        </q-item-label>
                    </q-item-section>
                </div>
                <q-item-section class='row q-ml-xl'>
                    <div>
                        <q-chip 
                            :ripple='false'
                            v-for='tag in chat.tags' 
                            :key='tag'
                        >
                            <q-avatar color='primary' text-color='white' icon='tag'/>
                            {{tag}}
                        </q-chip>
                    </div>
                </q-item-section>
            </div>
        </template>
    <q-card id='chat-info'>
        <q-separator/>
        <q-card-section :class="'q-mx-md text-weight-regular '+computedDescriptionSize">
            {{chat.description}}
        </q-card-section>
        <q-separator/>
        <q-card-section :class="'q-ml-'+computedMargins+' q-pt-sm row justify-between'">
            <div v-if='chat.owner.id !== loggedId'>
                <div class='text-h6'>
                    <q-item-label caption class='text-black'>
                        Created by:
                    </q-item-label>
                    <q-chip :ripple='false'>
                        <q-avatar size='40px'>
                            <q-img :src='ownerImageUrl'/>
                        </q-avatar>
                        {{chat.owner.username}}
                    </q-chip>
                </div>
            </div>
            <div v-else class='q-mt-sm row no-wrap'>
                <q-btn outline round color='dark' icon='settings'  @click='askForUpdate()'/>
                <q-btn class='q-ml-md' outline round color='negative' icon='delete' @click='deleteChat()'/>
            </div>
            <div :class="'q-mr-'+computedMargins+' q-mt-sm row no-wrap'">
                <q-btn class='q-mx-sm' outline rounded color='dark' label='Join' @click='join()'/>
                <q-btn class='q-mx-sm' outline round :text-color='computedStar' icon='star' @click='execFav()'/>
            </div>
        </q-card-section>
    </q-card>
    </q-expansion-item>
</template>
<script>
import {GET_USUARIO} from 'src/store/usuario/types'
import chatService from 'src/services/chatService'
import { ADD_FAV_CHAT, JOIN_ROOM, RM_FAV_CHAT, ERROR,JOIN_CONFIRM } from 'src/socket/socketEvents'
import { mapActions } from 'vuex'
import { JOIN_ACTION } from 'src/store/chat/types'

export default{
    name: 'ChatComponent',
    props: ['chat'],
    emits: ['deleted','update'],
    data(){
        return {
            loggedId: this.$store.getters['usuario/'+GET_USUARIO].id,
            selected: false
        }
    },
    computed:{
        computedFontSize(){
            return this.$q.platform.is.desktop ? 'text-h4' : 'text-h5 text-weight-regular'
        },
        computedDescriptionSize(){
            return this.$q.platform.is.desktop ? 'text-h6' : 'text-body1'
        },
        computedMargins(){
            return this.$q.platform.is.desktop ? 'xl' : 'sm'
        },
        chatImageUrl(){
            return this.$api.defaults.baseURL+'/chat/image/'+this.chat.id
        },
        ownerImageUrl(){
            return this.$api.defaults.baseURL+'/user/image/'+this.chat.owner.id
        },
        isFav(){
            return this.$store.getters['usuario/'+GET_USUARIO].favChats?.filter(c => c.id === this.chat.id).length !== 0
        },
        computedStar(){
            return this.isFav ? 'yellow-9' : 'grey-8'
        }
    },
    methods:{
        ...mapActions('chat',[JOIN_ACTION]),
        deleteChat(){
            this.$q.dialog({
                title: 'Eliminar chat',
                message: '¿Seguro que quieres eliminar el chat?',
                persistent: true,
                cancel: true,
                ok:{
                    color: 'negative'
                }
            })
            .onOk( () => {
                chatService.delete(this.chat.id)
                .then((res) => {
                    console.log(res)
                    this.$emit('deleted')
                })
                .catch(e => {
                    this.$q.notify({
                        type: 'negative',
                        message: e
                    })
                })
            })
        },
        askForUpdate(){
            this.$emit('update',this.chat)
        },
        execFav(){
            if(this.isFav)
                this.$socket.client.emit(RM_FAV_CHAT,{ chatId: this.chat.id})
            else
                this.$socket.client.emit(ADD_FAV_CHAT,{ chatId: this.chat.id})
        },
        join(){
            this.selected = true
            this.$socket.client.emit(JOIN_ROOM,{chatId: this.chat.id})
        }
    },
    sockets:{
        [JOIN_CONFIRM](){
            if(this.selected){
                this.joinAction(this.chat).then(() => {
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
<style lang="scss">
#chat-info{
    background-color: $dark-secondary;
}
</style>