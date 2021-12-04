<template>
    <q-card bordered style="max-width: 300px;" class="q-ma-sm bg-grey-4">
        <q-card-section class="q-pb-sm">
            <div class="text-h5">
                {{titulo}}
            </div>
        </q-card-section>
        <q-card-section class="q-pa-none">
            <div :style="`background-color: ${color};`" v-for="(color,index) in tema.colors" :key="index" class="flex justify-center">
                <q-badge
                    class="q-my-sm text-subtitle text-uppercase text-weight-bold"
                    color="white"
                    text-color="black"
                >
                    <div class="flex column">
                        <p class="q-mb-xs text-center">{{editableColors[index]}}</p>
                        <p class="q-mb-xs text-center">{{colors[index]}}</p>
                    </div>
                </q-badge>
            </div>
        </q-card-section>
        <q-card-actions class="row justify-center">
            <q-btn flat @click="setThisTheme()" :disable="checkSelected" :label="checkSelected? 'Elegido':'Elegir'"/>
            <q-btn flat @click="this.$emit('update',{title:titulo,colors})">Editar</q-btn>
            <q-btn flat @click="deleteThisTheme()" :disable="checkSelected">Eliminar</q-btn>
      </q-card-actions>
    </q-card>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
import {GET_ACTUAL_THEME, SET_THEME, REMOVE_THEME, GET_EDITABLE_COLORS} from 'src/store/custom/types'

export default {
    name: 'ThemeComponent',
    props: ['tema'],
    emits: ['update'],
    data(){
        return {
            titulo: this.tema.title,
            colors: this.tema.colors,
            editableColors: this.getEditableColors()
        }
    },
    methods: {
        ...mapGetters('custom',[GET_ACTUAL_THEME,GET_EDITABLE_COLORS]),
        ...mapActions('custom',[SET_THEME,REMOVE_THEME]),
        setThisTheme(){
            this.setTheme({
                title: this.titulo,
                colors: this.colors
            })
        },
        deleteThisTheme(){
            this.$q.dialog({
                title: 'Borrar tema',
                message: '¿Seguro que quieres borrar el tema?',
                persistent: true,
                cancel: true,
                ok:{
                    color: 'negative'
                }
            }).onOk(() =>{
                try{
                    this.removeTheme({title: this.titulo})
                }catch(e){
                    this.$q.notify({
                        type: 'negative',
                        message: e.message
                    })
                }
            })
        }
    },
    computed:{
        checkSelected(){
            return this.getActualTheme().title === this.titulo
        }
    },
    watch:{
        tema: function(){
            this.colors = this.tema.colors
        }
    }
}
</script>