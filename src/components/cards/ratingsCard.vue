<!-- ratingsCard lests users rate course, using a 5-star system -->
<script setup>
    import 'boxicons' 
    import { ref } from 'vue';
    import { useStore } from 'vuex';
    const store = useStore();
    
    //rating stores a number value, the number of stars user rates.
    const rating = ref(0);

    ///setRating take star as a parameter and sets the rate and sends it to the server
    ///it takes a number as star parameter 
    const setRating = async(star) =>{
        try {
            await store.dispatch('submitRate', star);
            rating.value = star;
            
        } catch (error) {
            console.log(error);
        }
        
    }
</script>
<template>
    <div    
        class=" bg-surface-light rounded-sm border border-outline p-4 w-fit h-fit"
    >
        <p
            class=" text-emphasis-high text-center mb-1"
        >
            Give this chapter a star
        </p>
        <small
            class=" text-emphasis-low text-center block mb-3"
        >
            (1 is disappointing, 5 is great) 
        </small>

        <div
            class="flex w-full items-center gap-2 justify-center "
        >
            <box-icon 
                v-for="star in 5"
                :key="star"
                type='solid' 
                name='star'
                :color="star < rating ? '#FFD700' : '#B3B4BC'"
                @click="setRating(star + 1)"
                class=" cursor-pointer"
            ></box-icon>
        </div>
    </div>
</template>