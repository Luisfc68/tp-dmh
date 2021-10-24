<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title class='row'>
          <q-avatar>
            <q-icon name='chat_bubble_outline' style='font-size: 2rem;'/>
          </q-avatar>
          <div class='col self-center q-ml-md'>
            Chat application TP
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div class='text-subtitle2'>Luis Chavez - Desarrollo movil hibrido</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'AuthLayout'
})
</script>
