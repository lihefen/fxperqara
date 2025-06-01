<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-06-01 10:07:29
 * @LastEditors: hean
 * @LastEditTime: 2025-06-01 10:24:31
-->
<template>
   <div class="custom-bg mb-12">
    <div class="max-w-[1280px] mx-auto pt-12 ">
      <div class="relative text-center">
        <h2 class="relative text-xl h-[40px] lg:text-3xl text-center font-semibold text-[#333333]">
            <div class="absolute left-1/2 -translate-x-1/2 z-10">Our Value</div>
            <img class="absolute left-1/2 -translate-x-1/2 top-[10px] z-9" width="100" height="100"  src="/image/landing-page/font_bar.png">
        </h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div
          v-for="member in members"
          :key="member.name"
          class="flex flex-col items-center"
        >
         <div class="relative w-[366px] h-[360px]">
            <img
                :src="member.image"
                alt="Member"
                class="w-[366px] h-[360px] object-cover rounded-lg"
            />
           <div class="absolute w-full text-[24px] text-[#ffffff] font-bold left-0 bottom-[30px] text-center">{{ member.name }}</div>
         </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const members = ref([
  {
    name: "Customer First",
    image: "/image/landing-page/img_our_1.png",
  },
  {
    name: "Fairness Keadilan ",
    image: "/image/landing-page/img_our_2.png",
  },
  {
    name: "Professionalism",
    image: "/image/landing-page/img_our_3.png",
  },
]);
</script>

<style scoped>
</style>