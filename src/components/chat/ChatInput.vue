<template>
    <div class='self-end row justify-center bg-grey-4 q-py-sm rounded-borders no-wrap full-width'>
        <div class='col-1 self-end q-mb-sm'>
            <q-btn 
                round 
                dense 
                flat 
                icon='logout' 
            />
        </div>
        <div class='col-1 self-end q-mb-sm q-mr-sm'>
            <q-btn 
                round 
                dense 
                flat 
                icon='cancel' 
            />
        </div>
        <q-input
            filled
            autogrow
            input-style='max-height: 3rem'
            class='col-8'
        />
        <div class='col-1 self-end q-mb-sm flex justify-center'>
            <q-btn 
                round 
                dense 
                flat 
                icon='send' 
            />
        </div>
    </div>
</template>
<script>
export default {
    name: 'ChatInput'

}
</script>