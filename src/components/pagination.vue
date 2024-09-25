<script setup>
    // pagination take course field ( categorie course belongs to), course title  to be displayed  
    const {field ='management', title='project management'} = defineProps(['field', 'title'])
</script>
<template>
    <div
        class=" text-emphasis-low flex gap-2 capitalize items-start w-full"
    >
        <p
            class="max-[240px]:hidden"
        >
            <span
                class="max-[520px]:hidden"
            >my Courses</span>
            <span
                class="min-[520px]:hidden"
            >.</span>  
        </p>
        <p  class="max-[240px]:hidden">/</p>
        <p
            class="max-[240px]:hidden"
        >
            <span
                class="max-[520px]:hidden"
            >{{field}}</span>
            <span
                class="min-[520px]:hidden"
            >.</span>  
        </p>
        <p>/</p>
        <p
            class=" text-emphasis-high"
        >
            {{ title }}  
        </p>
    </div>
</template>