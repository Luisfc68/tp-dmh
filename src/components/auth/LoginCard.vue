<template>
    <q-form
        ref='form'
        @reset="onReset()"
        @submit='login()'
    >
        <q-card-section >
            <NombreInput v-model:nombre="nombre" ref='nombre' />
            <PasswordInput v-model:password="password" :required="true" ref='password' />
        </q-card-section>
        <q-separator/>
        <q-card-actions class='q-pa-md' align='right'>
            <q-btn push class='q-mx-md' icon='done' type='submit' color='secondary'>  Log in  </q-btn>
            <q-btn push class='q-mx-md' type='reset' icon='close' color='secondary'>  Cancel  </q-btn>
        </q-card-actions>
    </q-form>
</template>
<script>
import NombreInput from 'components/commons/NombreInput.vue'
import PasswordInput from 'components/commons/PasswordInput.vue'
import { mapActions } from 'vuex'
import { LOGIN_ACTION } from 'src/store/usuario/types'

export default {
    name: 'LoginCard',
    components:{
        NombreInput,
        PasswordInput
    },
    data(){
        return {
            nombre:'',
            password:''
        }
    },
    methods:{
        ...mapActions('usuario',[LOGIN_ACTION]),
        onReset(){
            this.nombre = null
            this.password = null
        },
        login(){
            this.loginAction({
                nombre: this.nombre,
                password: this.password
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
<style lang="scss">
#formulario{
    background-color: #FEDFD4;
}
</style>