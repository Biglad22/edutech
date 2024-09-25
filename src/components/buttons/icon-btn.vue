<script setup>
    import 'boxicons';
    import { ref } from 'vue';

    ///take name and size : 'sm' | 'md' | 'lg', of icon, function to call and type : 'outlined | filled | regular' as props
    const {
        name, 
        size,
        func,
        type,
    } = defineProps({
        name : {
            type : String,
            required : true 
        },
        size : {
            type: String,
            default: 'sm',
            validator: (value) =>{
              return ['sm', 'md', 'lg'].includes(value)
            }
        },
        type : {
            type: String,
            default: 'sm',
            validator: (value) =>{
              return ['outlined', 'filled', 'regular'].includes(value)
            }
        },
        func : {
            type: Function,
            default: ()=>{
                console.error('no function was passed');
            }
        }
    });

    
</script>
<template>
    <button 
        type="button"
        class="p-2 leading-none rounded-full"
        :class="type === 'outlined' ? 'border-2 border-emphasis-low bg-surface-light' : (type === 'filled' ? 'bg-primary' : 'bg-surface-light') "
        @click="func"
    >
        <box-icon
            :name
            :size
            :color="type === 'outlined' ? '#74696C' : (type === 'filled' ? '#FCFCFC' : '#08080B')"
        ></box-icon>
    </button>
</template>