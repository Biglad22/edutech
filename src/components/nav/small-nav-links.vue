<script setup>
    import NavSwitch from '../switches/nav-switch.vue';
    import { useRouter } from 'vue-router';
    import IconBtn from '../buttons/icon-btn.vue';
    import { ref } from 'vue';
    import { Transition } from 'vue';
    import { isActiveRoute } from '../../helpers/utils';
    
    ///nav-links is the route links expected on the nav bar
    ///it will take an array of objects containing route path and icon name
    const {navLinks} = defineProps({
        navLinks : {
            type: Array,
            required : true
        }
    });

    ////isVisible stores the sate of the menu. 
    ///if isVisible.vaue = true, then the nav-links are visible
    ///else they are hidden
    const isVisible = ref(false);

    ///updateIsVisibility  updates the value of isVisible to either display or hide nav-links
    const updateIsVisibility = () => isVisible.value = !isVisible.value
</script>
<template>

    <div
        class="relative w-fit"
    >
        <IconBtn
            name="menu" 
            size="md"
            type="regular" 
            :func="updateIsVisibility"
        />
        <Transition name="nav-links">
            <div
                class="flex flex-col flex-1 justify-between w-fit absolute z-50 top-full right-0 bg-surface-light"
                v-show="isVisible"
            >
                <div class="switches flex flex-col gap-2">
                    <NavSwitch  
                        v-for="{icon, path} in navLinks" 
                        :icon 
                        :path
                        class="-mr-[0.125rem]"
                        :isActive="isActiveRoute(path)"
                    />
                </div>
                <NavSwitch 
                    :icon="'cog'" 
                    :path="'/settings'"
                    :isActive="isActiveRoute('/settings')"
                />
            </div>
        </Transition>
    </div>
</template>

<style scoped>

    .nav-links-enter-active, .nav-links-leave-active{
        transition: all 0.5s ease-in-out;
        opacity: 1;
    }
    .nav-links-enter-from, .nav-links-leave-to{
        transition: all 0.5s ease-in-out;
        transform: translateY(-0.8rem);
        opacity: 0;
    }
</style>