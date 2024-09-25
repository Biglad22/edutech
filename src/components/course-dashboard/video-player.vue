<!-- video player is used to play module videos -->
<script setup>
    import 'boxicons'
    import { ref, watch } from 'vue';


    ////takes link to module video
    const {video} = defineProps(['video'])
    ///but had to hard code path, because of mockoon error

    ///isPlaying store a boolean value, it's value is true if video is playing
    const isPlaying = ref(false);

    ///videoTag references the video tag in the DOM 
    const videoTag = ref(null);

    ///seekBarValue store a number value, the value at every point is the current video time
    const seekBarValue = ref(0);

    //handlePlayPause handles the play and pause state of the video
    // it updates the value of isPlaying
    const handlePlayPause = () =>{
        
        if(isPlaying.value){
            videoTag.value.pause();
        }else{
            videoTag.value.play();
        }

        isPlaying.value = !isPlaying.value;
    }

    // toggleFullScreen function toggles video to Fullscreen
    const toggleFullScreen = () => {
      if (videoTag.value.requestFullscreen) {
        videoTag.value.requestFullscreen();
      } else if (videoTag.value.mozRequestFullScreen) {
        videoTag.value.mozRequestFullScreen();
      } else if (videoTag.value.webkitRequestFullscreen) {
        videoTag.value.webkitRequestFullscreen();
      } else if (videoTag.value.msRequestFullscreen) {
        videoTag.value.msRequestFullscreen();
      }

    };

    ///updateSeekBar updates the value seekBarValue
    const updateSeekBar = () => {
        seekBarValue.value = videoTag.value.currentTime
    }

    // seek function forwards or backwards the currentTime of video
    const seek = (amount) => {
      videoTag.value.currentTime = Math.min(
        Math.max(videoTag.value.currentTime + amount, 0),
        videoTag.value.duration
      );
    };

    // Watch for time updates to update the seek bar
    watch(videoTag, () => {
      videoTag.value.addEventListener('timeupdate', updateSeekBar);
    });

    // Watch for videoTag end to reset play button
    watch(videoTag, () => {
      videoTag.value.addEventListener('ended', () => {
        isPlaying.value = false;
      });
    });


</script>
<template>
    <div
        class=" relative h-full w-full group"
    >
        <video 
            class=" absolute z-0 top-0 left-0 object-contain object-center h-full w-full " 
            ref="videoTag"
        >
            <source src="../../assets/testvideo.mp4" type="video/mp4" />
            <!-- <source :src="video" type="video/webm" />
            <source :src="video" type="video/x-matroska" /> -->
            Your browser does not support the video tag.
        </video>
        <div 
            class="contollers absolute top-0 left-0 z-10 w-full h-full bg-[rgba(10,10,10,0.25)] flex items-center justify-center gap-6 transition-all duration-200 ease-in-out"
            :class="isPlaying ? ' invisible group-hover:visible' : ' visible'"
        >
            <button 
                type="button"
                class="flex-1"
                v-show="isPlaying"
                @click="seek(-10)"
            >
                <box-icon 
                    name='revision'
                    size="lg" 
                    flip='horizontal' 
                    color='#FCFCFC'
                ></box-icon>
            </button>
            <button 
                type="button"
                class=" rounded-full p-1 bg-[rgba(255,255,255,0.25)] leading-none max-w-fit max-h-fit"
                @click="handlePlayPause"
            >
                <box-icon 
                    name='play'
                    size="lg"
                    color='#FCFCFC'
                    v-show="!isPlaying"
                ></box-icon>
                <box-icon 
                    name='pause'
                    size="lg"
                    color='#FCFCFC'
                    v-show="isPlaying"
                    
                ></box-icon>
            </button>
            <button 
                type="button"
                class="flex-1"
                v-show="isPlaying"
                @click="seek(-10)"
            >
                <box-icon 
                    name='revision'
                    size="lg" 
                    color='#FCFCFC'
                ></box-icon>
            </button>

            <button 
                type="button"
                class=" p-4 leading-none absolute bottom-0 right-0 z-20"
                @click="toggleFullScreen"
            >
                <box-icon 
                    name='fullscreen' 
                    color='#FCFCFC'
                    size="sm"
                ></box-icon>
            </button>
        </div>
    </div>
</template>