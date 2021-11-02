<template>
    <q-form
        ref='form'
        @reset='onReset()'
        @submit='signup()'
    >
        <q-card-section >
            <NombreInput v-model:nombre="nombre" ref='nombre' />
            <EmailInput v-model:email="email" ref='email' />
            <PasswordInput v-model:password="password" :required="true" ref='password' />
        </q-card-section>
        <q-separator/>
        <q-card-actions class='q-pa-md' align='right'>
            <q-btn push class='q-mx-md' icon='done' type='submit'>  Sign up  </q-btn>
            <q-btn push class='q-mx-md' icon='cancel' type='reset'>  Cancel  </q-btn>
        </q-card-actions>
    </q-form>
</template>
<script>
import NombreInput from 'components/commons/NombreInput.vue'
import PasswordInput from 'components/commons/PasswordInput.vue'
import EmailInput from 'components/commons/EmailInput.vue'
import userService from 'src/services/userService'
import { mapActions } from 'vuex'
import {LOGIN_ACTION} from 'src/store/usuario/types'

export default {
    name: 'SignUpCard',
    components:{
        NombreInput,
        EmailInput,
        PasswordInput
    },
    data(){
        return {
            nombre:'',
            email:'',
            password:''
        }
    },
    methods:{
        ...mapActions('usuario',[LOGIN_ACTION]),
        onReset(){
            this.nombre = null
            this.email = null
            this.password = null
        },
        signup(){
            userService.signup({
                nombre: this.nombre,
                password: this.password,
                email: this.email
            })
            .then(res => {
                return this.loginAction({
                    nombre: res.data.username,
                    password: this.password
                })
            })
            .then((token) => {
                this.$socket.client.auth.token = token
                this.$socket.client.connect()
                this.$refs.form.reset()
                this.$router.push({name: 'lobby'})
            })
            .catch(e => {
                console.log(e)
               this.$q.notify({
                   type: 'negative',
                   message: e
               })
            })
        }
    }
}
</script>