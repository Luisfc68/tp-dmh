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
        <q-card-section class='q-mb-none q-pb-none'>
            <NombreInput v-model:nombre='editado.nombre'/>
            <EmailInput v-model:email='editado.email'/>
            <PasswordInput v-model:password='editado.password' :required='false'/>
        </q-card-section>
        <q-btn
            style='top: -15px;'
            class='q-ml-md q-pb-none'
            color="grey"
            flat
            dense
            :icon="expandido ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
            @click='expandido = !expandido'
            label='Mas opciones'
        />
        <q-slide-transition>
            <div v-show='expandido'>
                <q-separator/>
                <q-card-section>
                    <PlanSelectorComponent v-model:selected='nuevoPlan'/>
                </q-card-section>
                <q-separator/>
                <q-card-section>
                     <q-file 
                        outlined 
                        v-model='nuevaImagen'
                        label='Profile picture'
                        accept='image/png, image/jpeg'
                        clearable
                        style='max-width: 320px;'
                    >
                        <template v-slot:prepend>
                            <q-icon name="attach_file"/>
                        </template>
                    </q-file>
                </q-card-section>
            </div>
        </q-slide-transition>
        <q-separator/>
        <q-card-actions class='q-pa-md' align='right'>
            <q-btn push class='q-mx-md' icon='update' label='Update' @click='update()'/>
            <q-btn push class='q-mx-md' icon='logout' color='negative' @click='logout()' label='Log out' />
        </q-card-actions>
        
    </q-card>
</template>
<script>
import NombreInput from '../../commons/NombreInput.vue'
import PasswordInput from '../../commons/PasswordInput.vue'
import EmailInput from '../../commons/EmailInput.vue'
import { mapActions } from 'vuex'
import { LOGOUT_ACTION, UPDATE_USUARIO } from 'src/store/usuario/types'
import PlanSelectorComponent from './PlanSelectorComponent.vue'
import userService from 'src/services/userService'

export default {
    name: 'UserEdicion',
    props: ['usuario'],
    components:{
        NombreInput,
        EmailInput,
        PasswordInput,
        PlanSelectorComponent
    },
    data(){
        return {
            editado:{
                nombre: this.usuario.username,
                email: this.usuario.email,
                password: this.usuario.password 
            },
            nuevoPlan: null,
            nuevaImagen: null,
            expandido: false
        }
    },
    methods:{
        ...mapActions('usuario',[LOGOUT_ACTION,UPDATE_USUARIO]),
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
        },
        sendUpdate(){
            let nuevaClave
            if(this.editado.password && this.editado.password.trim() !== '' )
                nuevaClave = this.editado.password.trim()
            else
                nuevaClave = undefined

            this.nuevoPlan = this.nuevoPlan ? this.nuevoPlan.toLowerCase() : undefined

            return userService.update({
                nuevoNombre: this.editado.nombre.trim(),
                nuevoCorreo: this.editado.email.trim(),
                nuevaClave: nuevaClave,
                nuevaImagen: this.nuevaImagen,
                nuevoPlan: this.nuevoPlan
            })
        },
        update(){
            this.sendUpdate()
                .then(res => {
                    console.log(res.data)
                    this.updateUsuario(res.data)
                    this.$emit('close')
                    this.$emit('updated')
                    this.$q.notify({
                        type: 'positive',
                        message: 'Actualizacion exitosa'
                    })
                })
                .catch(e => {
                    let msg = (e.response.status === 400)? 'Datos invalidos' : e.response.data.message
                    this.$q.notify({
                        type: 'negative',
                        message: msg
                    })
                })
        }
    }

}
</script>