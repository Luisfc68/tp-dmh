<template>
    <q-card bordered style="max-width: 300px;" class="q-ma-sm bg-grey-4">
        <q-card-section class="q-pb-sm">
            <div class="text-h5">
                {{titulo}}
            </div>
        </q-card-section>
        <q-card-section class="q-pa-none">
            <div :class="'bg-'+color" v-for="color in editableColors" :key="color" class="flex justify-center">
                <q-badge
                    :ref="color" 
                    class="q-my-sm text-subtitle2"
                    color="white"
                    text-color="black"
                    :label="colorCode(color)"
                />
            </div>
        </q-card-section>
        <q-card-actions class="row justify-center">
            <q-btn flat>Elegir</q-btn>
            <q-btn flat>Editar</q-btn>
            <q-btn flat>Eliminar</q-btn>
      </q-card-actions>
    </q-card>
</template>
<script>
import { colors } from 'quasar'
const {getPaletteColor} = colors

export default {
    name: 'ThemeComponent',
    data(){
        return {
            titulo: 'Test',
            editableColors: [
                'primary',
                'secondary',
                'accent',
                'dark',
                'positive',
                'negative',
                'info',
                'warning',
                'fondo',
                'dark-secondary'
            ]
        }
    },
    computed:{
        colorCode(){
            return (color) => getPaletteColor(color)
        } 
    }
}
</script>