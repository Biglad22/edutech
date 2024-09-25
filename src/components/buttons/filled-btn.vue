<template>
    <button
        class="px-3 py-2 bg-primary rounded-sm text-secondary capitalize font-medium"
        @click="handleClick"
    >{{ title }}</button>
</template>

<script setup>

    /// receives function to be called, and the title of the button
    const {func, title = 'button'} = defineProps(['func', 'title'])

    ///handles button click
    const handleClick = () => {
        if(!func) return;

        return func();
    }
</script>