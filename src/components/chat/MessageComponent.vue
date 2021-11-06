<template>
    <div class="column">
        <q-chat-message
            :name='nombre'
            :avatar='avatarImage'
            :text='[message.content]'
            :stamp="fecha+' - '+hora"
            text-color="white"
            :bg-color='bgColor'
            style='max-width: 70%;'
            :sent='isOwner'
            :class="isOwnerStyle+' text-weight-medium'"
        />
    </div>
</template>
<script>
import { GET_USUARIO } from 'src/store/usuario/types'
import { mapGetters } from 'vuex'

export default {
    name: 'MessageComponent',
    props: ['message'],
    data(){
        return {
            dateObj: new Date(this.message.timestamp)
        }
    },
    methods:{
        ...mapGetters('usuario',[GET_USUARIO])
    },
    computed:{
        fecha(){
            return this.dateObj.toLocaleDateString('es-AR')
        },
        hora(){
            return this.dateObj.toLocaleTimeString('es-AR')
        },
        nombre(){
            let username = this.message.user.username
            return username.toLowerCase()
                    .replace(/\w/, primera => primera.toUpperCase());
        },
        isOwner(){
            const id = this.getUsuario().id
            return id === this.message.user.id
        },
        isOwnerStyle(){
            return this.isOwner ? 'self-end' : ''
        },
        bgColor(){
            return this.isOwner ? 'primary' : 'secondary'
        },
        avatarImage(){
            return this.$api.defaults.baseURL+'/user/image/'+this.message.user.id
        }
    }
}
</script>