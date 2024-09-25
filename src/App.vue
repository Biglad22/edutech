<script setup>
  import 'boxicons';
  import NavBar from './components/nav/nav-bar.vue';
  import LoadingState from './components/loadingState.vue';
  import { useStore } from 'vuex';
  import { ref, onMounted } from 'vue';

  ///access vuex store
  const store = useStore();

  ///pageHasLoaded stores a boolean value. it's value is true, if API request for course detail and modules details is successfull and states ar successfully set
  /// in the event of a failed request or any error, LoadingError is updated to true. LoadingError stores a boolean value.
  const pageHasLoaded = ref(false)
  const loadingError = ref(false);

  ///// loadPage function dispatch 'fetchCourseData', to send API request to the server.
  const loadPage = async () =>{
    try {

      ///if API request is successfull pageHasLoaded is updated accordingly 
      await store.dispatch('fetchCourseData');
      pageHasLoaded.value = true;

    } catch (error) {
      ///if API request fails and throws an error, LoadingError is updated accordingly
      loadingError.value = true;
      
    }
  }

  onMounted(()=>{
    loadPage();
  })

</script>

<template>
  <!--loadingState is the initail loading page to be rendered, while API request is processing-->
  <!-- it is unmounted when API request is successful, it takes the loadingError as a prop and a default error message is rendered when the value of loadingError changes -->
  <LoadingState  
    v-if="!pageHasLoaded" 
    :loadingError
  />

  <!-- the main body of the app is rendered when the value of pageHasLoaded changes to true -->
  <div 
    class="flex gap-1 flex-col sm:flex-row max-h-[100vh] relative overflow-auto bg-surface-light"
    v-else
  >
    <NavBar  class="sticky top-0 left-0 z-40"/>
    <router-view class="flex-1"></router-view>
  </div>
</template>

<style scoped>

</style>
