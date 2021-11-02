<template>
    <q-select
        options-cover
        transition-show='scale'
        transition-hide='scale'
        :options='plans'
        label='Renovar plan'
        v-model='selected'
        clearable
        square
        outlined
        @update:modelValue="event => $emit('update:selected', event)"
    />
</template>
<script>
export default {
    name: 'PlanSelectorComponent',
    data(){
        return{
            plans: [
                'Regular',
                'Medium',
                'Premium'
            ],
            selected: null
        }
    }
}
</script>