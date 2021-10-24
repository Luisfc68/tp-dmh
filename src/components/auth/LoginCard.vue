<template>
    <q-form
        @reset="onReset()"
    >
        <q-card-section >
            <NombreInput v-model:nombre="nombre" ref='nombre' />
            <PasswordInput v-model:password="password" ref='password' />
        </q-card-section>
        <q-separator/>
        <q-card-actions class='q-pa-md' align='right'>
            <q-btn push class='q-mx-md' icon='done'>  Log in  </q-btn>
            <q-btn push class='q-mx-md' type='reset' icon='cancel'>  Cancel  </q-btn>
        </q-card-actions>
    </q-form>
</template>
<script>
import NombreInput from 'components/commons/NombreInput.vue'
import PasswordInput from 'components/commons/PasswordInput.vue'

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
        onReset: function(){
            this.nombre = null
            this.password = null
        }
    }
}
</script>