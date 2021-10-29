<template>
    <div class='bg-grey-4 full-width rounded-borders self-start overflow-hidden'>
        <q-expansion-item>
            <template v-slot:header>
                <div class='row'>
                    <q-item-section avatar class='q-pr-md'>
                        <q-avatar size='72px'>
                            <q-img src='http://pm1.narvii.com/7527/310c26220f0c8c94f9a41f2db54e3f8fb43c3c3cr1-1178-1200v2_00.jpg'/>
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
    props: ['chat']
}
</script>