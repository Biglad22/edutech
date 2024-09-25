<script setup>
    ////takes the loadingError prop a boolean, this prop tell the componet to display error message if true
    ///it has a default value of false 
    const {loadingError = false} = defineProps({loadingError:{
        type: Boolean,
        required : false
    }});

</script>
<template>
    <div
        class="w-[100vw] h-[100vh] flex items-center flex-col gap-10 justify-center"
    >
        <img 
            src="../assets/logo.png" 
            alt="our logo"
            class=" w-20 h-auto animate-pulse"
        />

        <!--error message to display if loadingError is true-->
        <h6
            class="animate-pulse capitalize font-medium"
            v-if="loadingError"
        >
            error has occured, please try again
        </h6>
    </div>
</template>