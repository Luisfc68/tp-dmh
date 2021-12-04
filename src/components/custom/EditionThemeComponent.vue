<template>
    <q-card>
        <q-form @submit="confirmChange()">
            <q-card-section class="q-pb-xs">
                <q-input 
                    :readonly="!!tema"
                    outlined 
                    input-class="text-h6" 
                    v-model="theme.title" 
                    label="Titulo" 
                    class="q-mb-sm"
                    :rules="[ val => val && val.length > 0 || 'Title required' ]"
                />
            </q-card-section>
            <q-separator/>
            <q-card-section>
                <div class="flex justify-evenly items-center no-wrap">
                    <div class="flex column">
                        <div class="flex justify-center">
                            <q-badge
                                :label="theme.colors[selectedColor]"
                                :style="`background-color: ${theme.colors[selectedColor]};`" 
                                text-color="white" 
                                class="q-mx-md q-mb-sm q-px-sm text-uppercase text-subtitle2"
                            />
                        </div>
                        <q-color bordered v-model="theme.colors[selectedColor]" no-header no-footer class="q-mx-sm"/>
                    </div>
                    <div class="flex column">
                        <q-btn 
                            v-for="(color,index) in theme.colors" 
                            :key="index" 
                            :label="color"
                            :style="`color: ${index === selectedColor? 'black':color};`"
                            :outline="index === selectedColor"
                            class="text-uppercase q-mx-sm q-my-xs"
                            @click="colorSelection(index)"
                        />
                    </div>
                </div>
            </q-card-section>
            <q-separator/>
            <q-card-section class="flex justify-end">
                <q-btn
                    icon="check"
                    flat
                    color="positive"
                    :label="tema? 'Actualizar':'Crear'"
                    type="submit"
                />
                <q-btn
                    icon="cancel"
                    flat
                    color="negative"
                    label="Cancelar"
                    v-close-popup
                />
            </q-card-section>
        </q-form>
    </q-card>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
import { GET_ACTUAL_COLORS, PUSH_THEME, UPDATE_THEME } from 'src/store/custom/types'

export default {
    name: 'EditionThemeComponent',
    props: ['tema'],
    emits: ['close'],
    data(){
        let theme = {title:null,colors:null}

        if(this.tema){
            theme.title = this.tema.title
            /*
             * sin el spread operator asigna la referencia y no el contenido  
             * derivando en que tira error porque se esta editando el store 
             * fuera de una mutation
             */
            theme.colors = [...this.tema.colors]
        }else{
            theme.title = ''
            theme.colors = this.getActualColors()
        }

        return {
            theme,
            selectedColor: 0
        }
    },
    methods:{
        ...mapGetters('custom',[GET_ACTUAL_COLORS]),
        ...mapActions('custom',[PUSH_THEME,UPDATE_THEME]),
        colorSelection(index){
            this.selectedColor = index
        },
        confirmChange(){
            try{
                if(!this.tema){
                    this.pushTheme(this.theme)
                }else{
                    this.updateTheme(this.theme)
                }
                this.$emit('close')
            }catch(e){
                this.$q.notify({
                   type: 'negative',
                   message: e.message
                })
            }
        }
    }
}
</script>