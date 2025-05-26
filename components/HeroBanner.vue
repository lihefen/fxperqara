<template>
  <div class="w-full h-auto relative overflow-hidden hero-bg">
    <!-- Background decorations from Figma -->
    <!-- <img
      src="/image/figma-hero/bg.png"
      alt="Background pattern"
      class="absolute w-full"
    /> -->

    <div
      class="max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:px-40 mx-auto relative z-10 py-16 md:py-24 lg:py-32"
    >
      <div
        class="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-16"
      >
        <!-- Left Content: Text + Button -->
        <div class="text-center md:text-left md:w-1/2 lg:w-2/5">
          <img src="/image/figma-hero/title.png" alt="title" class="" />
          <p
            class="font-roboto text-xl sm:text-2xl lg:text-[20px] text-[#1D1F29] mt-4 mb-8"
          >
            Bayar hanya jika mediasi berhasil. Privasi Anda dilindungi.
          </p>
          <button
            type="button"
            class="font-roboto-mono font-bold text-lg sm:text-xl lg:text-[24px] text-white bg-[#04A45E] hover:bg-[#038a4c] transition-colors duration-300 py-4 px-8 sm:px-10 rounded-[24px]"
          >
            Lihat Cara Kerjanya
            <font-awesome-icon
              icon="fa-solid fa-arrow-right"
              class="ml-2"
              style="color: #ffffff"
            />
          </button>
        </div>

        <!-- Right Content: Phone Image -->
        <div
          class="relative mt-8 md:mt-0 md:w-1/2 lg:w-3/5 flex justify-center md:justify-end"
        >
          <div class="relative w-[415px] h-[473px]">
            <!-- Approximate aspect ratio from Figma node 0:1956 and 0:1954 -->
            <img
              src="/image/figma-hero/figma-phone-model-main.png"
              alt="Phone model"
              class="absolute inset-0 w-full h-full object-contain"
            />
            <!-- <img
              src="/image/figma-hero/figma-phone-screen-content.png"
              alt="App screen"
              class="absolute w-[136px] h-[136px] bottom-[82px] left-[-50px] object-cover"
            />
            <div
              class="absolute w-[409px] aspect-square rounded-full bg-linear-[146deg,#48e7ca_0%,#00c683_44%,#01d574_81%,#04f158_100%] z-[-1] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
            ></div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped>
.hero-bg {
  background-image: url("/image/figma-hero/bg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
