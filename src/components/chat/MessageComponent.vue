<template>
    <q-chat-message
        :name='message.user.username'
        avatar="https://static.13.cl/7/sites/default/files/esports/articulos/field-image/ricardo-milos_1.jpg"
        :text='[message.content]'
        :stamp="fecha+' - '+hora"
        text-color="white"
        bg-color="primary"
        style='max-width: 70%'
      />
</template>
<script>
export default {
    name: 'MessageComponent',
    props: ['message'],
    data(){
        return {
            dateObj: new Date(this.message.timestamp)
        }
    },
    computed:{
        fecha(){
            return this.dateObj.toLocaleDateString('es-AR')
        },
        hora(){
            return this.dateObj.toLocaleTimeString('es-AR')
        }
    }
}
</script>