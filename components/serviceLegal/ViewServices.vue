<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-05-29 20:45:10
 * @LastEditors: hean
 * @LastEditTime: 2025-05-30 01:30:11
-->
<template>
  <div class="service-head md:h-[572px]">
    <div
      class="relative z-10 max-w-[1280px] mx-auto px-10 xl:px-52 py-12 lg:py-12"
    >
      <div
        class="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-16"
      >
        <div class="flex flex-col ">
          <p class="text-[42px] leading-[50px] font-bold text-[#333333]">
            Professional Legal Services for All Needs
          </p>
          <p class=" text-[#333333] text-[18px]">
            Serving various legal needs on-demand that you can access anytime and anywhere.
          </p>
          <div class="flex flex-wrap gap-2 mt-[4px]" >
            <span class="px-2 py-1 rounded-lg bg-[#B2F4D7] text-[#00854B] text-sm font-medium" >Document Creation</span>
            <span class="px-2 py-1 rounded-lg bg-[#B2F4D7] text-[#00854B] text-sm font-medium" > Corporate Notary Services</span>
            <span class="px-2 py-1 rounded-lg bg-[#B2F4D7] text-[#00854B] text-sm font-medium" > Copyright Registration</span>
            <span class="px-2 py-1 rounded-lg bg-[#B2F4D7] text-[#00854B] text-sm font-medium" > Tax Consultation</span>
         </div>

          <button class="font-bold px-4 py-2.5 md:px-6 md:py-3 md:w-60 rounded-md md:rounded-[16px]  bg-[linear-gradient(224deg,#18D683_0%,#00CE73_17%,#0DBC6F_46%,#04A45E_100%)]  mt-[10px] text-white text-[24px]">View Services</button>
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
.service-head {
  background-image: url("/image/service-page/service_head.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
