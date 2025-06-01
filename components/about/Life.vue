<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-05-29 20:45:10
 * @LastEditors: hean
 * @LastEditTime: 2025-06-01 10:52:33
-->
<template>
  <div class="max-w-[1280px] mx-auto pt-12 px-10 xl:px-42">
    <div class="relative text-center">
      <img
        src="/image/about-us/title-bg.png"
        class="w-[120px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <div class="relative">
        <h2 class="text-[32px] font-bold text-[#333333]">Life at LawOnGo</h2>
        <p class="text-lg text-[#666666] leading-relaxed mt-2">
          Life in Pursuit of Dreams at LawOnGo
        </p>
      </div>
    </div>
  </div>

  <div class="custom-bg">
    <div class="max-w-[1280px] mx-auto mb-22 px-10 xl:px-42">
      <UCarousel
        v-slot="{ item }"
        arrows
        dots
        :autoplay="{ delay: 3000 }"
        :items="items"
        :ui="{
          dots: 'bottom-4',
          dot: 'w-6 h-2  rounded-[5px]  [&.bg-inverted]:bg-[#09EBA7]',
        }"
        class="mt-15"
      >
        <img :src="item" width="100%" height="350" class="rounded-lg" />
      </UCarousel>
      <div class="flex justify-center items-center gap-2 mt-9">
        <button class="linear-button text-2xl font-bold text-[#333333]">
          Join Us
          <font-awesome-icon :icon="['fas', 'arrow-right']" />
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const items = ref([
  "/image/about-us/life-placeholder-1.jpg",
  "/image/about-us/life-placeholder-2.jpg",
  "/image/about-us/life-placeholder-3.jpg",
]);
</script>
<style scoped>
.custom-bg {
  background: url("/image/about-us/life-bg.png") no-repeat center center;
  background-size: cover;
}
.linear-button {
  background: linear-gradient(270deg, #77ffce 0%, #a1ff83 100%);
  box-shadow: 0px 17px 23px -17px rgba(95, 229, 83, 0.66);
  border-radius: 18px;
  width: 236px;
  height: 66px;
}
</style>
