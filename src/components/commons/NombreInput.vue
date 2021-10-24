<template>
    <q-input
        rounded 
        outlined
        label='Username'
        bottom-slots
        ref='nombre'
        :modelValue="nombre"
        @update:modelValue="event => $emit('update:nombre', event)"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Username required' ]"
    >
        <template v-slot:prepend>
            <q-icon name='person'/>
        </template>

        <template v-slot:append>
            <q-icon
                name='close'
                class='cursor-pointer'
                @click="$emit('update:nombre', '')"
            />
        </template>
    </q-input>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'NombreInput',
    props: {
        nombre: String
    }
})
</script>