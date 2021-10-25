<template>
    <q-item class='q-pl-md q-pt-md bg-primary' bordered >
        <q-item-section avatar>
            <q-avatar size='5rem'>
                <q-img src='https://i.imgur.com/PGaubL6.png'/>
            </q-avatar>
        </q-item-section>
        <q-item-section thumbnail class='text-h6 text-white text-capitalize'>
                <q-item-label lines="1">
                    {{ usuario.username }}
                </q-item-label>
                <q-item-label caption class='text-grey-4'>
                    {{usuario.email}}
                </q-item-label>
        </q-item-section>
        <q-item-section side class='self-right q-pr-xs q-pt-lg'>
            <q-btn flat outline round icon='settings' color='grey-5'/>
        </q-item-section>
    </q-item>
    <q-separator/>

</template>
<script>
export default {
    name: 'UserInfoComponent',
    props: ['usuario']
}
</script>