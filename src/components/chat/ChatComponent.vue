<template>
    <q-expansion-item popup expand-separator>
        <template v-slot:header>
            <div class='column q-py-sm overflow-hidden' style='width: 100%'>
                <div class='row'>
                    <q-item-section avatar class='q-pr-md'>
                        <q-avatar size='72px'>
                            <q-img src='http://pm1.narvii.com/7527/310c26220f0c8c94f9a41f2db54e3f8fb43c3c3cr1-1178-1200v2_00.jpg'/>
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
        <q-card-section class='q-mx-md'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa atque quo delectus quae laboriosam maiores pariatur ipsum quasi nisi rem nobis repellat temporibus doloribus, hic modi omnis amet adipisci quos possimus vitae sit sint quam! Fuga aliquid debitis illum distinctio iure odio! Facere, quod quas? Placeat provident quis hic. Quidem?
        </q-card-section>
        <q-separator/>
        <q-card-section :class="'q-ml-'+computedMargins+' q-pt-sm row justify-between no-wrap'">
            <div class='text-h6'>
                <q-item-label caption>
                    Created by:
                </q-item-label>
                <q-chip :ripple='false'>
                    <q-avatar size='40px'>
                        <q-img src='https://i.imgur.com/QzmkkPQ.png'/>
                    </q-avatar>
                    {{chat.owner.username}}
                </q-chip>
            </div>
            <div :class="'q-mr-'+computedMargins+' q-mt-sm row'">
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
            return this.$q.platform.is.desktop ? 'text-h4' : 'text-h6'
        },
        computedMargins(){
            return this.$q.platform.is.desktop ? 'xl' : 'sm'
        }
    }
}
</script>