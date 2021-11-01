<template>
    <q-form
        @reset="onReset()"
    >
        <q-card-section >
            <NombreInput v-model:nombre="nombre" ref='nombre' />
            <EmailInput v-model:email="email" ref='email' />
            <PasswordInput v-model:password="password" :required="true" ref='password' />
        </q-card-section>
        <q-separator/>
        <q-card-actions class='q-pa-md' align='right'>
            <q-btn push class='q-mx-md' icon='done'>  Sign up  </q-btn>
            <q-btn push class='q-mx-md' icon='cancel' type='reset'>  Cancel  </q-btn>
        </q-card-actions>
    </q-form>
</template>
<script>
import NombreInput from 'components/commons/NombreInput.vue'
import PasswordInput from 'components/commons/PasswordInput.vue'
import EmailInput from 'components/commons/EmailInput.vue'

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
        onReset: function(){
            this.nombre = null
            this.email = null
            this.password = null
        }
    }
}
</script>