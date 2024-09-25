<!-- course-header displays the title of the active module -->
<script setup>    
    import IconBtn from '../buttons/icon-btn.vue';
 
    ////takes moduleTitle and course instructor's name as props
    const {
        moduleTitle = 'place-holder title',
        instructor = 'mr place-holder'
    } = defineProps(['moduleTitle', 'instructor']);

    /// array of icons button to be rendered
    const iconButtons = ['share-alt', 'bookmark-minus']

</script>
<template>
    <div>
        <div 
            class=" flex items-start max-[520px]:items-center max-[520px]:flex-col justify-between gap-2"
        >
            <h3
                class="text-emphasis-high capitalize font-medium max-[520px]:text-center"
            >{{ moduleTitle }}</h3>
            <div>
                <IconBtn
                    v-for="icon in iconButtons"
                    :name="icon"
                    :type="'outlined'"
                    :key="icon + ' icon'"
                    class="ml-2"
                />
            </div>
        </div>
        <h6
            class="text-emphasis-medium capitalize font-medium max-[520px]:text-center"
        >{{ instructor }}</h6>
    </div>
</template>