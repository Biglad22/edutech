<script setup>
    import NavLinks from './nav-links.vue';
    import SmallNavLinks from './small-nav-links.vue';
    /// imports a navLinkSwitches, which is an array of objects containing info about each navBar switch 
    import { navLinkSwitches } from '../../helpers/data';

</script>
<template>
    <div 
        class=" w-full sm:w-min p-8 sm:px-0 h-fit sm:h-[100vh] border-r-2 border-outline bg-surface-light  flex flex-row items-center justify-between min-[520px]:items-start  min-[520px]:flex-col"
    >   
        <img 
            src="../../assets/logo.png" 
            alt="logo"
            class="max-w-20 h-auto inline-block sm:block sm:w-full sm:h-auto px-4 py-2" 
        />
        <!-- NavLinks contains all the nav switches for large screens -->
        <NavLinks :navLinks="navLinkSwitches"  class="hidden min-[520px]:flex w-full"/>
        <!-- SmallNavLinks contains all the nav switches for small screens, it is a drop menu -->
        <SmallNavLinks :navLinks="navLinkSwitches" class="block min-[520px]:hidden"/>
    </div>
</template>