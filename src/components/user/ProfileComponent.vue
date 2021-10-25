<template>
    <q-btn  flat round icon='backspace' color='grey-5' @click="$emit('close')" class='fixed-top-right q-mt-md q-mr-lg z-top'/>
    <UserInfoComponent :usuario='usuario'/>
        <FavChatComponent
            v-for='chat in usuario.favChats' 
            :chat='chat'
            :key='chat.id'
        />
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