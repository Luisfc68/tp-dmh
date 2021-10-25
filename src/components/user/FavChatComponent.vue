<template>
        <q-item clickable v-ripple>
            <q-item-section top avatar>
                <q-avatar>
                    <img src="https://i.imgur.com/dnJejEA.jpeg">
                </q-avatar>
            </q-item-section>
            <q-item-section>
                <q-item-label lines="1">{{chat.title}}</q-item-label>
                <q-item-label lines="1" caption>{{chat.description}}</q-item-label>
            </q-item-section>
            <q-item-section side top>
                <q-btn flat outline round icon="star" color="yellow" @click="click()"/>
            </q-item-section>
        </q-item>
        <q-badge class="text-primary q-mx-xs" outline v-for='tag in chat.tags' :label='tag' :key='tag'/>
    <q-separator class='q-my-sm'/>
</template>
<script>
export default {
    name: 'FavChatComponent',
    props: ['chat'],
    methods:{
        click: () => console.log('click')
    }
}
</script>