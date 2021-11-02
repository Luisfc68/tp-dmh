<template>
    <q-item class='q-pl-md q-pt-md bg-primary' bordered >
        <q-item-section avatar>
            <q-avatar size='5rem'>
                <q-img v-show='id' :src="profileImg+id" ref='imagen'/>
            </q-avatar>
        </q-item-section>
        <q-item-section thumbnail class='text-h6 text-white'>
                <q-item-label class='text-capitalize' lines="1">
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
        <UserEdicion :usuario='usuario' @close='editando=false' @updated='refrescar()'/>
    </q-dialog>

</template>
<script>
import UserEdicion from './edicion/UserEdicion.vue'
import  { GET_USUARIO } from '../../store/usuario/types' 

export default {
    name: 'UserInfoComponent',
    props: ['usuario'],
    components:{
        UserEdicion
    },
    data(){
        return {
            editando: false,
            profileImg: this.$api.defaults.baseURL+'/user/image/',
            stamp: 0
        }
    },
    computed:{
        id(){
            let id =  this.$store.getters['usuario/'+GET_USUARIO].id
            return id ? id+'?stamp='+this.stamp : undefined
        }
    },
    methods:{
        refrescar(){
            this.stamp += 1
        }
    }
}
</script>