<script setup>
    import 'boxicons';
    
    ///nav-switch takes icon-name route-path and isActive -[isActive is true if route component is in view]; 
    const {icon = 'book', isActive = false, path = '/'} = defineProps(['icon','isActive', 'path']);


</script>
<template>
    <router-link 
        :to="path" 
        class="py-4 px-6 block w-fit leading-none cursor-pointer"
        :class="isActive ? 'border-b-2 border-r-0 sm:border-r-2 sm:border-b-0 border-primary bg-surface-active ' : ' border-none'"
    >
        <box-icon 
            :name="icon" 
            size="sm"
            :color="isActive? '#1061FF' : '#B3B4BC'"
            class="icon"
        ></box-icon>
    </router-link>
</template>
