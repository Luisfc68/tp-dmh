<template>
    <div class='bg-grey-4 full-width rounded-borders self-start overflow-hidden'>
        <q-expansion-item header-class='bg-secondary text-white' expand-icon-class='text-grey-6'>
            <template v-slot:header>
                <div class='row'>
                    <q-item-section avatar class='q-pr-md'>
                        <q-avatar size='72px'>
                            <q-img :src='imageUrl'/>
                        </q-avatar>
                    </q-item-section>
                    <q-item-section>
                        <q-item-label class='text-h5 text-weight-medium text-capitalize'>
                            {{chat.title}}
                        </q-item-label>
                    </q-item-section>
                </div>
            </template>
            <div  class='bg-grey-3 q-pa-md'>
                <q-item-section >
                    {{chat.description}}
                </q-item-section>
            </div>
        </q-expansion-item>
    </div>
</template>
<script>
export default {
    name: 'ChatHeader',
    props: ['chat'],
    data(){
        return {
            stamp: 0
        }
    },
    computed: {
        imageUrl(){
            return this.$api.defaults.baseURL+'/chat/image/'+this.chat.id+'?stamp='+this.stamp
        }
    },
    watch:{
        chat: function(){
            this.stamp += 1
        }
    }
}
</script>