<script setup>
    import { splitTextIntoChunks } from '../../helpers/utils';
    import RatingsCard from '../cards/ratingsCard.vue';
    import { useStore } from 'vuex';
    import { computed } from 'vue';

    const store = useStore(); 
     
    //// longText computes the description of the active module
    const longText = computed(()=> store.state.currentModule.description);

    //textChunck stores an arry of the longText broken down into paragraphs
    const textChunck = splitTextIntoChunks(longText.value);

</script>
<template>
    <div
        class="flex flex-col min-[520px]:flex-row w-full gap-5 py-5 h-full max-h-full overflow-auto"
    >
        <div>
            <p
                v-for="(text, i) in textChunck" 
                :key="i"
                class="mb-5"
            >{{ text }}</p>
        </div>
        <RatingsCard />
    </div>
</template>