<template>
    <q-card rounded>
        <q-card-section class='row bg-primary text-white    '>
            <div class='text-h6'>Settings</div>
            <q-space />
            <q-btn
                v-close-popup
                flat
                round
                dense
                icon="close" 
            />
        </q-card-section>
        <q-card-section>
            <NombreInput v-model:nombre='editado.nombre'/>
            <EmailInput v-model:email='editado.email'/>
            <PasswordInput v-model:password='editado.password' :required='false'/>
        </q-card-section>
        <q-separator/>
        <q-card-actions class='q-pa-md' align='right'>
            <q-btn push class='q-mx-md' icon='update' label='Update'/>
            <q-btn push class='q-mx-md' icon='logout' color='negative' @click='logout()' label='Log out' />
        </q-card-actions>
        
    </q-card>
</template>
<script>
import NombreInput from '../../commons/NombreInput.vue'
import PasswordInput from '../../commons/PasswordInput.vue'
import EmailInput from '../../commons/EmailInput.vue'
import { mapActions } from 'vuex'
import { LOGOUT_ACTION } from 'src/store/usuario/types'

export default {
    name: 'UserEdicion',
    props: ['usuario'],
    components:{
        NombreInput,
        EmailInput,
        PasswordInput
    },
    data(){
        return {
            editado:{
                nombre: this.usuario.username,
                email: this.usuario.email,
                password: this.usuario.password 
            }
        }
    },
    methods:{
        ...mapActions('usuario',[LOGOUT_ACTION]),
        logout(){
            this.$q.dialog({
                title: 'Salir',
                message: '¿Seguro que quieres salir?',
                persistent: true,
                cancel: true
            })
            .onOk( () => {
                this.$router.push({name: 'login'})
                this.logoutAction()
            })
        }
    }

}
</script>