<script setup>
    import 'boxicons';
    import { getOrder } from '../../helpers/utils';
    import { useStore } from 'vuex';
    import { computed } from 'vue';
    import TextBtn from '../buttons/text-btn.vue';

    const store = useStore();

    //takes modules index, modules info  as a prop.
    const {module, index} = defineProps(['module', 'index']);

    ///order stores the exact order of the module in the Array of modules
    const order = getOrder(index); 
    
    // module contains the module id, title, and isCompleted -[isComplete will be true when user completes modular]
    const {
        moduleId,
        moduleTitle,
        isCompleted,
    } = module;
    
    // isActive computes a boolean value -[ isActive will be true if module is in view];    
    const isActive = computed(()=>{
        return store.state.currentModule.moduleId === moduleId;
    })

    ///displayModule changes the active module
    const displayModule = () => store.dispatch('changeModule', moduleId);


</script>
<template>
    <div
        class="px-2 py-4 font-medium flex gap-4 items-center"
        :class="isActive ? 'bg-surface-active' : 'bg-none'"
    >
        <p
            class="modular-order text-emphasis-low" 
        >
            {{ order }}
        </p>
        <TextBtn
            class="modular-title flex-1 capitalize p-0 text-left"
            :class="isCompleted && !isActive ? ' line-through text-emphasis-low' : 'text-emphasis-high'"
            :title="moduleTitle"
            :func="displayModule"
        />
        <box-icon
            :name="isCompleted? 'check' :  'lock-alt'" 
            :color="isCompleted ? '#41C037' : '#B3B4BC'"
            v-show="!isActive"
            size="sm"
        ></box-icon>
    </div>
</template>
