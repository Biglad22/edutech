<script setup>
    import { getPercent } from '../helpers/utils';

    ///progress-bar take progress as a prop 
    // progress is an object of the total number of modules in the course (totalModule) and the number of completed modules in the course (completedModules)
    const {progress} = defineProps(['progress']);
    const {totalModule, completedModules} = progress;

    ///progressLevel stores the percentage of the total number of module that has been completed
    const progressLevel = getPercent(completedModules, totalModule);

</script>
<template>
    <div class="progress-container">
        <div
            class="progress-details mb-3 flex justify-between text-emphasis-medium capitalize font-medium" 
        >
            <small>{{ `${progressLevel}%` }} completed</small>
            <small>{{ `${completedModules}/${totalModule}`}}</small>
        </div>
        <div 
            class="progress h-1 bg-outline rounded-sm">
            <div
                :class="`progress-bar bg-primary h-full`"
                :style="{ width: progressLevel + '%' }"
                role="progressbar"
                :aria-valuenow="progressLevel"
                aria-valuemin="0"
                aria-valuemax="100"
            ></div>
        </div>
    </div>
    
</template>