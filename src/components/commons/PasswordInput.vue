<template>
    <q-input
        rounded 
        outlined
        label='Password'
        bottom-slots
        ref='password'
        :type="isPwd ? 'password' : 'text'"
        :modelValue="password"
        @update:modelValue="event => $emit('update:password', event)"
        lazy-rules
        :rules="[ (val => val && val.length > 0 || !required) || 'Password required' ]"
    >
        <template v-slot:prepend>
            <q-icon 
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
            />
        </template>

        <template v-slot:append>
            <q-icon
                name='close'
                class='cursor-pointer'
                @click="$emit('update:password', '')"
            />
        </template>
    </q-input>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'PasswordInput',
    props: {
        required: Boolean,
        password:String
    },
    data(){
        return {
            isPwd: true
        }
    }
})
</script>