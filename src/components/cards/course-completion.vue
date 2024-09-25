<!-- course-completion displays information about the progress of a course, it displays number of completed modules and a progress bar -->

<script setup>
    import { useStore } from 'vuex';
    import ProgressBar from '../progress-bar.vue';
    import ModularCard from './modular-card.vue';
    import { computed } from 'vue';

    ///access vuex store
    const store = useStore();
    
    //modules stores the array of course modules stored in the vuex store
    const modules = store.state.modules;

    ///progress computes the progress of the course
    /// this is an object of totalModule, completedModules
    const progress = computed(()=> store.getters.getProgress);
    
</script>
<template>
    <div
        class="p-5 pt-0 overflow-auto relative"
    >
        <div
            class=" bg-surface-light w-full sticky top-0 left-0 pt-5 pb-1"
        >
            <h5
                class="text-emphasis-high mb-5 "
            >
                Course Completion
            </h5>
            <!-- ProgressBar takes progress(totalModule, completedModules) as props to render the progress bar of completion -->
            <ProgressBar 
                class="mb-5"
                :progress
            />
        </div>
        <div 
            class=" overflow-auto max-h-full"
        >   
            <!-- ModularCard displays the title and completion state of each module in the course -->
            <ModularCard 
                v-for="(module, index) in modules"
                :module
                :index
                :key="module.ModuleTitle"
            />
        </div>
    </div>
</template>