<!-- about-course displays infomation about the course(course description) and information about the course instructor -->
<script setup>
    import TextBtn from '../buttons/text-btn.vue';
    import { ref } from 'vue';

    ///takes course details as a prop
    ///course-details includes details about course instructor, and course description  
    const {courseDetails} = defineProps(['courseDetails']);


    /////coursDetails will include an object called instructor 
    //instructor includes image, name, role 
    const {instructor} = courseDetails;
    ///had to hard code instructirs image because of mockoon error

    //// course description is gotten from courseDetails
    const {description} = courseDetails;

    //reduceDesc is boolean, if true course description is shorten
    const reduceDesc = ref(true);

    //updates the value of reduceDesc
    const updateReduceDesc =()=> reduceDesc.value = !reduceDesc.value; 

</script>

<template>
    <div
        class="p-5"
    >
        <h5
            class="text-emphasis-high mb-5"
        >
            About the Course
        </h5>
        <div 
            class="teacher-details w-full flex gap-4 mb-4 items-center"
        >   
            <img 
                src="../../assets/testImg.jpg" 
                :alt="`image of ${instructor.name}`"
                class=" rounded-full w-[3.2rem] h-[3.2rem] object-top object-cover"
            />
            <div
                class="flex-1 font-medium"
            >
                <p 
                    class=" capitalize text-emphasis-high block mb-0"
                >{{ instructor.name }}</p>
                <small
                    class=" text-emphasis-medium capitalize"
                >{{ instructor.role }}</small>
            </div>
        </div>
        <div 
            class="course-desc text-emphasis-medium"
        >
            <p> 
                <span
                    :class="reduceDesc ? 'line-clamp-3' : 'line-clamp-none'"
                >{{ description }}</span>  
                <TextBtn 
                    :title="reduceDesc ? 'see more' : 'see less'" 
                    :func="updateReduceDesc"
                />
            </p>
        </div>
    </div>
</template>