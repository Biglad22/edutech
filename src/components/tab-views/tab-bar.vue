<!-- tab-bar is the tab bar for large screens -->
<script setup>
    import TabSwitcher from '../switches/tab-switch.vue';
    import { isActiveRoute } from '../../helpers/utils';

    ///component takes an array of info on switches to be rendered
    const {switches} = defineProps({
        switches : {
            type: Array,
            required : true,
        }
    })
    
</script>
<template>
    <div
        class="flex gap-3 border-b-2 border-b-outline"
    >
        <TabSwitcher 
            v-for="{title, path} in switches" 
            :title
            :path 
            :isActive="isActiveRoute(path)"
            class="-mb-[0.125rem]"
        />
    </div>
</template>