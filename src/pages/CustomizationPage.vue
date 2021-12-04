<template>
  <q-page class="flex items-start">
      <div class="row full-width q-pa-lg justify-center">
          <div class="col-12 q-px-xl">
            <q-btn
              round 
              size='md' 
              color="dark" 
              icon="add"
              @click="editandoTema=true" 
            />
          </div>
          <ThemeComponent 
            class="col-sm-3" 
            v-for="(tema) in temas" 
            :key="tema.title" 
            :tema="tema"
            @update="tema => iniciarEdicion(tema)"
          />
      </div>
      <q-dialog v-model="editandoTema" persistent>
        <EditionThemeComponent :tema="temaEdicion" @close="editandoTema=false"/>
      </q-dialog>
  </q-page>
</template>
<script>
import ThemeComponent from '../components/custom/ThemeComponent.vue'
import EditionThemeComponent from '../components/custom/EditionThemeComponent.vue'
import { mapGetters } from 'vuex'
import { GET_THEMES } from 'src/store/custom/types'

export default {
    name: 'CustomizationPage',
    components: {
        ThemeComponent,
        EditionThemeComponent
    },
    data(){
      return {
        editandoTema: false,
        temaEdicion: null,
        temas: this.getThemes()
      }
    },
    methods:{
      ...mapGetters('custom',[GET_THEMES]),
      iniciarEdicion(tema){
        this.temaEdicion = tema
        this.editandoTema = true
      }
    },
    watch:{
      editandoTema: function(){
        if(!this.editandoTema)
          this.temaEdicion = null
      }
    }
}
</script>