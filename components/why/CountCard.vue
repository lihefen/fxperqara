<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-05-18 18:45:48
 * @LastEditors: hean
 * @LastEditTime: 2025-05-24 13:37:13
-->
<template>
  <div
    class="bg-card flex flex-col mt-20 sm:gap-6 gap-3 rounded-2xl sm:py-6 p-3 md:px-20 sm:px-10 lg:w-[820px] mx-auto"
  >
    <div
      class="px-3 py-2 flex justify-center items-center md:gap-9 sm:gap-6 gap-2"
    >
      <div class="text-center">
        <p class="text-[#181E23] sm:text-2xl font-semibold">170000+</p>
        <p class="text-[#39424D] sm:text-sm text-xs">Clients Enrolled</p>
      </div>
      <div class="text-center">
        <p class="text-[#181E23] sm:text-2xl font-semibold">500+</p>
        <p class="text-[#39424D] sm:text-sm text-xs">Dedicated Team</p>
      </div>
      <div class="text-center">
        <p
          class="sm:text-2xl font-semibold flex items-center justify-center gap-1 sm:gap-2"
        >
          <img
            src="/image/landing-page/icon-star.svg"
            alt=""
            class="w-4 sm:w-6 h-4.5 sm:h-8"
          /><span>4.9</span>
        </p>
        <p class="text-[#39424D] sm:text-sm text-xs">Excellent rating</p>
      </div>
    </div>
    <div class="border-t border-[#F1F1F1]"></div>
    <div class="flex justify-center gap-4">
      <a
        href="https://play.google.com/store/apps/details?id=com.limaindonesia.perqara"
        rel="noopener noreferrer"
        target="_blank"
        ><img
          alt="android-logo"
          class="w-36"
          src="/image/landing-page/google-logo.png" /></a
      ><a
        href="https://apps.apple.com/id/app/perqara/id6443946589"
        rel="noopener noreferrer"
        target="_blank"
        ><img
          alt="appstore-logo"
          class="w-36"
          src="/image/landing-page/appstore-logo.png"
      /></a>
    </div>
  </div>
</template>
<style scoped>
.bg-card {
  background-color: rgba(255, 255, 255, 0.5);
  background-image: url("/image/features/count-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  box-shadow: 0px 40px 27px -31px rgba(153, 174, 160, 0.07),
    inset 0px -1px 1px 0px #37d795;
  border-radius: 24px;
}
</style>
