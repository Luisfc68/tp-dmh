<template>
    <q-btn  flat round icon='backspace' color='grey-5' @click="$emit('close')" class='fixed-top-right q-pr-xs q-mt-md q-mr-lg z-top'/>
    <UserInfoComponent :usuario='usuario'/>
        <div v-if='usuario.favChats && usuario.favChats.length !== 0'>
            <FavChatComponent
                v-for='chat in usuario.favChats' 
                :chat='chat'
                :key='chat.id'
            />
        </div>
        <div v-else>
            <p class='q-pa-sm text-body-1' style='font-size: 20px;'>
                No tienes ningún chat en favorito :(
            </p>
        </div>
</template>
<script>
import FavChatComponent from './FavChatComponent.vue'
import UserInfoComponent from './UserInfoComponent.vue'
export default {
    name: 'ProfileComponent',
    props: ['usuario'],
    emits: ['close'],
    components:{
        UserInfoComponent,
        FavChatComponent
    }
}
</script>