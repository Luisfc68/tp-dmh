<template>
  <q-layout view="hhh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class='row'>
          <div class='col self-center q-ml-md'>
            Chat application TP
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer :width=350 v-model="leftDrawerOpen" side="left" overlay elevated>
        <ProfileComponent :usuario='usuario' v-on:close='toggleLeftDrawer' />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'
import ProfileComponent from 'components/user/ProfileComponent.vue'

export default {
  name: 'AppLayout',
  components:{
    ProfileComponent
  },
  computed:{
      usuario: function(){
          return this.$store.getters['usuario/getUsuario']
      }
  },
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>