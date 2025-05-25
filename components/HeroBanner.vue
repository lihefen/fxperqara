<template>
  <div
    class="w-full h-auto relative overflow-hidden bg-gradient-to-b from-[#F7FFFB] to-[#E2FFF1]"
  >
    <!-- Background decorations from Figma -->
    <img
      src="/image/figma-hero/figma-hero-bg.svg"
      alt="Background pattern"
      class="absolute w-full h-[60%] bottom-[10%] left-[2%] z-0 rotate-[-5deg]"
    />

    <div
      class="max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:px-40 mx-auto relative z-10 py-16 md:py-24 lg:py-32"
    >
      <div
        class="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-16"
      >
        <!-- Left Content: Text + Button -->
        <div class="text-center md:text-left md:w-1/2 lg:w-2/5">
          <h1
            class="font-roboto font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-[80px] leading-tight text-[#1D1F29]"
          >
            Feel Free
          </h1>
          <p
            class="font-roboto text-xl sm:text-2xl lg:text-[24px] text-[#1D1F29] mt-4 md:mt-6 mb-8 md:mb-10"
          >
            From Debt and in Control
          </p>
          <button
            type="button"
            class="font-roboto-mono font-bold text-lg sm:text-xl lg:text-[24px] text-white bg-[#04A45E] hover:bg-[#038a4c] transition-colors duration-300 py-4 px-8 sm:px-10 rounded-[24px] focus:outline-none focus:ring-2 focus:ring-[#04A45E] focus:ring-opacity-50"
          >
            Consult Now
          </button>
        </div>

        <!-- Right Content: Phone Image -->
        <div
          class="relative mt-8 md:mt-0 md:w-1/2 lg:w-3/5 flex justify-center md:justify-end"
        >
          <div
            class="relative w-[250px] h-[500px] sm:w-[300px] sm:h-[600px] md:w-[350px] md:h-[700px] lg:w-[415px] lg:h-[473px]"
          >
            <!-- Approximate aspect ratio from Figma node 0:1956 and 0:1954 -->
            <img
              src="/image/figma-hero/figma-phone-model-main.png"
              alt="Phone model"
              class="absolute inset-0 w-full h-full object-contain"
            />
            <img
              src="/image/figma-hero/figma-phone-screen-content.png"
              alt="App screen"
              class="absolute w-[136px] h-[136px] bottom-[82px] left-[-50px] object-cover"
            />
            <div
              class="absolute w-[409px] aspect-square rounded-full bg-linear-[146deg,#48e7ca_0%,#00c683_44%,#01d574_81%,#04f158_100%] z-[-1] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped></style>
