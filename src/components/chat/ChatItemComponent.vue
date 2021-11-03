<template>
    <q-expansion-item popup expand-separator>
        <template v-slot:header>
            <div class='column q-py-sm overflow-hidden' style='width: 100%'>
                <div class='row'>
                    <q-item-section avatar class='q-pr-md'>
                        <q-avatar size='72px'>
                            <q-img :src='chatImageUrl'/>
                        </q-avatar>
                    </q-item-section>
                    <q-item-section :class='computedFontSize'>
                        <q-item-label>
                            {{chat.title}}
                        </q-item-label>
                    </q-item-section>
                </div>
                <q-item-section class='row q-ml-xl'>
                    <div>
                        <q-chip 
                            :ripple='false'
                            v-for='tag in chat.tags' 
                            :key='tag'
                        >
                            <q-avatar color='primary' text-color='white' icon='tag'/>
                            {{tag}}
                        </q-chip>
                    </div>
                </q-item-section>
            </div>
        </template>
    <q-card>
        <q-separator/>
        <q-card-section :class="'q-mx-md text-weight-regular '+computedDescriptionSize">
            {{chat.description}}
        </q-card-section>
        <q-separator/>
        <q-card-section :class="'q-ml-'+computedMargins+' q-pt-sm row justify-between'">
            <div class='text-h6'>
                <q-item-label caption>
                    Created by:
                </q-item-label>
                <q-chip :ripple='false'>
                    <q-avatar size='40px'>
                        <q-img :src='ownerImageUrl'/>
                    </q-avatar>
                    {{chat.owner.username}}
                </q-chip>
            </div>
            <div :class="'q-mr-'+computedMargins+' q-mt-sm row no-wrap'">
                <q-btn class='q-mx-sm' outline rounded color="primary" label="Join" />
                <q-btn class='q-mx-sm' outline round text-color='grey-4' icon="star" />
            </div>
        </q-card-section>
    </q-card>
    </q-expansion-item>
</template>
<script>

export default{
    name: 'ChatComponent',
    props: ['chat'],
    computed:{
        computedFontSize(){
            return this.$q.platform.is.desktop ? 'text-h4' : 'text-h5 text-weight-regular'
        },
        computedDescriptionSize(){
            return this.$q.platform.is.desktop ? 'text-h6' : 'text-body1'
        },
        computedMargins(){
            return this.$q.platform.is.desktop ? 'xl' : 'sm'
        },
        chatImageUrl(){
            return this.$api.defaults.baseURL+'/chat/image/'+this.chat.id
        },
        ownerImageUrl(){
            return this.$api.defaults.baseURL+'/user/image/'+this.chat.owner.id
        }
    }
}
</script>