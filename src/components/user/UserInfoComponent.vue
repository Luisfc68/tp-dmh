<template>
    <q-item class='q-pl-md q-pt-md bg-primary' bordered >
        <q-item-section avatar>
            <q-avatar size='5rem'>
                <q-img src='https://i.imgur.com/PGaubL6.png'/>
            </q-avatar>
        </q-item-section>
        <q-item-section thumbnail class='text-h6 text-white text-capitalize'>
                <q-item-label lines="1">
                    {{ usuario.username }}
                </q-item-label>
                <q-item-label caption class='text-grey-4'>
                    {{usuario.email}}
                </q-item-label>
        </q-item-section>
        <q-item-section side class='absolute-right q-mr-md q-pr-xs q-pt-xl'>
            <q-btn flat outline round icon='settings' color='grey-5' @click='editando = true'/>
        </q-item-section>
    </q-item>
    <q-separator class='q-mb-sm'/>
    <q-dialog v-model='editando' persistent>
        <UserEdicion :usuario='usuario'/>
    </q-dialog>

</template>
<script>
import UserEdicion from './edicion/UserEdicion.vue'

export default {
    name: 'UserInfoComponent',
    props: ['usuario'],
    components:{
        UserEdicion
    },
    data(){
        return {
            editando: false
        }
    }
}
</script>