<template>
    <div class='q-px-sm scroll bg-grey-6 rounded-borders' >
            <MessageComponent 
                v-for="i in 30"
                :key="i"
                :message='message'
            />
    </div>
</template>
<script>
import MessageComponent from './MessageComponent.vue'
export default {
    name: 'ChatArea',
    components: {
        MessageComponent
    },
    data(){
        return {
            message: {
                content: 'soy un mensajeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
                timestamp: 1635477228108,
                user:{
                    username: 'luis',
                    id: '123abc'
                }
            }
        }
    }
}
</script>