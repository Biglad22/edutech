<script setup>
    import NavSwitch from '../switches/nav-switch.vue';
    import { isActiveRoute } from '../../helpers/utils';


    ///nav-links is the route links expected on the nav bar
    ///it will take an array of objects containing route path and icon name
    const {navLinks} = defineProps({
        navLinks : {
            type: Array,
            required : true
        }
    });

    
</script>
<template>
    <div
        class="flex sm:flex-col flex-1 justify-between "
    >
        <div class="switches flex sm:flex-col gap-2">
            <!-- iterates through the navLinks array (contains info about each nav switch to be rendered) -->
            <NavSwitch  
                v-for="{icon, path} in navLinks" 
                :icon 
                :path
                class="-mr-[0.125rem]"
                :isActive="isActiveRoute(path)"
            />
        </div>

        <!-- switch for settings nav switch -->
        <NavSwitch 
            :icon="'cog'" 
            :path="'/settings'"
            :isActive="isActiveRoute('/settings')"
        />  
    </div>
</template>