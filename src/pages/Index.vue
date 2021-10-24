<template>
  <q-page class="flex flex-center">
    <AuthComponent/>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import AuthComponent from 'src/components/auth/AuthComponent.vue'

export default defineComponent({
  name: 'PageIndex',
  components: {
    AuthComponent
  }
})
</script>
