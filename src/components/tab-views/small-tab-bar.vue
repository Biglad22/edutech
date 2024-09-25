<script setup>
    import TabSwitcher from '../switches/tab-switch.vue';
    import { useRouter } from 'vue-router';
    import IconBtn from '../buttons/icon-btn.vue';
    import { ref } from 'vue';
    import { Transition } from 'vue';
    import { isActiveRoute } from '../../helpers/utils';

    const router = useRouter();
    

    ///nav-links is the tab links expected on the nav bar
    ///it will take an array of objects containing route path and icon name
    const {switches} = defineProps({
        switches : {
            type: Array,
            required : true,
        }
    })

    ////isVisible stores the sate of the menu. 
    ///if isVisible.vaue = true, then the tab-links are visible
    ///else they are hidden
    const isVisible = ref(false);

    ///updateIsVisibility  updates the value of isVisible to either display or hide tab-links
    const updateIsVisibility = () => isVisible.value = !isVisible.value
</script>
<template>

    <div
        class="relative w-fit"
    >
        <IconBtn
            name="menu-alt-left" 
            size="sm"
            :type="isVisible? 'regular' : 'outlined'" 
            :func="updateIsVisibility"
        />
        <Transition name="tab-links">
            <div
                class="flex flex-col w-max absolute z-30 top-full left-0 bg-surface-light"
                v-show="isVisible"
            >
                <TabSwitcher 
                    v-for="{title, path} in switches" 
                    :key="title"
                    :title
                    :path 
                    :isActive="isActiveRoute(path)"
                    class="w-full"
                />
            </div>
        </Transition>
    </div>
</template>

<style scoped>

    .tab-links-enter-active, .tab-links-leave-active{
        transition: all 0.5s ease-in-out;
        opacity: 1;
    }
    .tab-links-enter-from, .tab-links-leave-to{
        transition: all 0.5s ease-in-out;
        transform: translateY(-0.8rem);
        opacity: 0;
    }
</style>