<template>
    <q-input
        rounded 
        outlined
        label='E-mail'
        bottom-slots
        ref='email'
        type='email'
        :modelValue="email"
        @update:modelValue="event => $emit('update:email', event)"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Email required' ]"
    >
        <template v-slot:prepend>
            <q-icon name='email'/>
        </template>

        <template v-slot:append>
            <q-icon
                name='close'
                class='cursor-pointer'
                @click="$emit('update:email', '')"
            />
        </template>
    </q-input>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'EmailInput',
    props: {
        email:String
    }
})
</script>