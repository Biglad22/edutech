<script setup>
    ///tab-switch takes tab-title route-path and isActive -[isActive is true if route component is in view]; 
    const {title = 'placeholder', isActive = false, path = '/'} = defineProps(['title','isActive', 'path']);


</script>
<template>
    <router-link 
        :to="path" 
        class="px-0 py-2 block w-fit leading-none capitalize"
        :class="isActive ? 'border-b-2 border-primary text-emphasis-high' : ' border-none text-emphasis-medium'"
    >
        {{ title }}
    </router-link>
</template>
