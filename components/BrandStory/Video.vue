<template>
  <div class="relative bg-black rounded-2xl overflow-hidden" @click="playVideo">
    <font-awesome-icon
      v-if="!isPlaying"
      icon="fa-solid fa-play"
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/80 text-3xl"
    />
    <video
      ref="videoRef"
      :src="video"
      :poster="poster"
      class="w-full h-full object-cover"
    />
  </div>
</template>
<script setup>
import { ref } from "vue";

defineProps({
  video: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
});

const videoRef = ref(null);
const isPlaying = ref(false);

const playVideo = () => {
  if (videoRef.value.paused) {
    videoRef.value.play();
    isPlaying.value = true;
  } else {
    videoRef.value.pause();
    isPlaying.value = false;
  }
};
</script>
