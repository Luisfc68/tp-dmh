<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class='row'>
          <div class='col self-center q-ml-md'>
            Chat application TP
          </div>
        </q-toolbar-title>
        <q-btn
          :to="{name: 'lobby'}"
          flat
          round
          dense
          icon="chat" 
        />
      </q-toolbar>
    </q-header>

    <q-drawer :width=350 v-model="leftDrawerOpen" side="left" overlay elevated class='bg-fondo'>
        <ProfileComponent :usuario='usuario' v-on:close='toggleLeftDrawer' />
    </q-drawer>

    <q-page-container class='bg-fondo'>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'
import ProfileComponent from 'components/user/ProfileComponent.vue'
import { GET_USUARIO } from 'src/store/usuario/types'
import { OTHER_CONNECTION } from 'src/socket/socketEvents'

export default {
  name: 'AppLayout',
  components:{
    ProfileComponent
  },
  computed:{
      usuario: function(){
          return this.$store.getters['usuario/'+GET_USUARIO]
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
  },
  sockets:{
    [OTHER_CONNECTION](){
      this.$q.dialog({
          title: 'X_X',
          message: 'Iniciaste sesión en otro lado',
          persistent: true,
          ok: false
      })
    }
  }
}
</script>