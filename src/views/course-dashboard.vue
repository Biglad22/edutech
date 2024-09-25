<script setup>
    import CourseHeader from '../components/course-dashboard/course-header.vue';
    import TabBar from '../components/tab-views/tab-bar.vue';
    import VideoPlayer from '../components/course-dashboard/video-player.vue';
    import pagination from '../components/pagination.vue';
    import AboutCourse from '../components/cards/about-course.vue';
    import CourseCompletion from '../components/cards/course-completion.vue';
    import Divider from '../components/divider.vue';
    import smallTabBar from '../components/tab-views/small-tab-bar.vue';
    import { useStore } from 'vuex';
    import { computed } from 'vue';
    import { tabSwitches } from '../helpers/data';

    const store = useStore();
    
    const courseDetails = store.state.course;
    const instructor = courseDetails.instructor.name;
    const moduleTitle = computed(()=>store.state.currentModule.moduleTitle);
    
</script>
<template>
    <div
        class="flex flex-col sm:flex-row items-start relative max-h-[150vh] sm:max-h-[100vh]  overflow-auto" 
    >
        <div
            class=" p-8 border-r-2 border-outline flex-1 sticky top-auto left-auto flex flex-col h-[100vh] w-full"
        >   
            <div>
                <pagination 
                    :field="courseDetails.field"
                    :title="courseDetails.title"
                    class="mb-5" 
                />
                <CourseHeader 
                    class="mb-5"
                    :instructor
                    :moduleTitle
                />
                <div 
                    class="w-full h-[40vh] mb-5"
                >
                    <VideoPlayer />
                </div>
            </div>
            <div
                class="flex-1 relative"
            >
                <TabBar 
                    :switches="tabSwitches" 
                    class="max-[530px]:hidden sticky top-auto left-auto"
                />
                <smallTabBar 
                    :switches="tabSwitches"
                    class="min-[530px]:hidden sticky top-auto left-auto" 
                />
            </div>

            <router-view class="overflow-auto h-full"  />
        </div>
        <div
            class=" basis-full sm:basis-[30%] flex flex-col gap-0 max-h-[100vh] sticky left-auto top-0"
        >
            <AboutCourse 
                :courseDetails
                class="pt-8 flex-1" 
            />
            <Divider />
            <CourseCompletion 
                class="flex-1"
            />
        </div>
    </div>
</template>