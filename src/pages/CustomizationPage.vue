<template>
  <q-page class="flex items-start">
      <div class="row full-width q-pa-lg justify-center">
          <div class="col-12 q-px-xl">
            <q-btn
              round 
              size='md' 
              color="dark" 
              icon="add" 
            />
          </div>
          <ThemeComponent class="col-sm-3" v-for="n in 10" :key="n"/>
      </div>
  </q-page>
</template>
<script>
import ThemeComponent from '../components/custom/ThemeComponent.vue'

export default {
    name: 'CustomizationPage',
    components: {
        ThemeComponent
    },
}
</script>