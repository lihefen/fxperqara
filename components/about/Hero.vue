<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-05-29 20:45:10
 * @LastEditors: hean
 * @LastEditTime: 2025-05-30 14:58:22
-->
<template>
    <div class="card-bg md:h-[572px]">
      <div
        class="relative z-10 max-w-[1280px] mx-auto px-10 xl:px-52 py-12 lg:py-22"
      >
        <div
          class="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-16"
        >
          <div class="flex flex-col text-white gap-4">
            <p class="text-[42px] leading-[50px]">
              Building a Bridge between Law and Life
            </p>
            <p class="text-lg">
              LawOnGo is an AI-based legal service platform,focusing on providing
              one-stop online legal solutions such as debt mediation,legal
              consultation,and contract support for individuals and small and
              medium-sized enterprises in Indonesia.
            </p>
          </div>
          <!-- <Video
            video="https://media.w3.org/2010/05/sintel/trailer.mp4"
            poster="/image/features/story-placeholder.png"
            class="w-[360px] h-[212px] shrink-0"
          /> -->
          <iframe
            src="https://www.youtube.com/embed/Sy4ROOthOg4"
            class="w-[360px] h-[212px] rounded-xl shrink-0"
          />
        </div>
      </div>
    </div>
  </template>
  <script setup>
  // import Video from "../BrandStory/Video.vue";
  </script>
  <style scoped>
  .card-bg {
    background-image: url("/image/about-us/hero-bg.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  </style>