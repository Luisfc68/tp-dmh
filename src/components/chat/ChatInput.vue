<template>
    <div class='self-end row justify-center bg-grey-4 q-py-sm rounded-borders no-wrap full-width'>
        <div class='col-1 self-end q-mb-sm'>
            <q-btn 
                round 
                dense 
                flat 
                icon='logout'
                @click='leave()' 
            />
        </div>
        <div class='col-1 self-end q-mb-sm q-mr-sm'>
            <q-btn 
                @click='cleanLeave()'
                round 
                dense 
                flat 
                icon='cancel' 
            />
        </div>
        <q-input
            @keyup.enter="send()"
            v-model='content'
            filled
            autogrow
            input-style='max-height: 3rem'
            class='col-8'
        />
        <div class='col-1 self-end q-mb-sm flex justify-center'>
            <q-btn 
                @click='send()' 
                round 
                dense 
                flat 
                icon='send' 
            />
        </div>
    </div>
</template>
<script>
import { GET_USUARIO } from 'src/store/usuario/types'
import { mapGetters } from 'vuex'
import { CLEAN_LEAVE_ROOM, LEAVE_ROOM } from 'src/socket/socketEvents'

export default {
    name: 'ChatInput',
    emits: ['newMessage'],
    data(){
        return {
            content: ''
        }
    },
    methods:{
        ...mapGetters('usuario',[GET_USUARIO]),
        send(){

            if(this.content.trim() === '')
                return

            let user = this.getUsuario()

            const msg = {
                content: this.content.trim(),
                timestamp: Date.now(),
                user:{
                    id: user.id,
                    username: user.username
                }
            }

            this.$emit('newMessage',msg)
            this.content = ''
        },
        leave(){
            this.$socket.client.emit(LEAVE_ROOM)
            this.$router.push({name: 'lobby'})
        },
        cleanLeave(){
            this.$q.dialog({
                title: 'Esfumarse',
                message: '¿Seguro que quieres borrar todos tus mensajes?',
                persistent: true,
                cancel: true,
                ok:{
                    color: 'negative'
                }
            }).onOk(() =>{
                this.$socket.client.emit(CLEAN_LEAVE_ROOM)
                this.$router.push({name: 'lobby'})
            })
        }
    }
}
</script>