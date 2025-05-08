<template>
  <div class="flex flex-col justify-center items-center relative">
    <div
      class="absolute top-0 bg-gradient-to-b from-[#52BEE7] to-[#2C73C6] bg-clip-text text-transparent font-bold text-[57px] lg:text-[90px] leading-13 text-center opacity-60"
    >
      ADVOKAT PERQARA
    </div>
    <img
      class="absolute top-20 md:top-10 m-auto"
      src="/image/landing-page/ellipsis-ornament.svg"
      alt="ornament"
    />
    <Swiper />

    <div
      class="bg-[#0A50A3] mt-6 p-2 rounded-full text-center font-semibold text-xs md:w-[350px]"
    >
      <p class="flex items-center justify-center text-white">
        <span class="text-yellow-400 text-xl pr-2">⭐</span> Lebih dari 500
        Advokat bersedia untuk Konsultasi Hukum Online dengan Anda!
        <span class="text-yellow-400 text-xl pl-2">⭐</span>
      </p>
    </div>
    <div
      class="flex justify-center w-[214px] font-lexend text-sm font-bold antialiased"
    >
      <button
        type="button"
        class="focus:outline-none focus:outline-0 focus-visible:outline-0 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 flex-shrink-0 transition-all ease-in-out duration-300 w-full flex justify-center items-center px-4 py-2 bg-white text-lightblack-1 hover:bg-cultured rounded-lg !text-blue-2 mt-4"
      >
        <span>
          Lihat semua Advokat
          <span class="ml-2">
            <Icon
              name="streamline:interface-arrows-right-arrow-right-keyboard"
              style="color: rgb(10, 80, 163)"
            />
          </span>
        </span>
      </button>
    </div>
  </div>
</template>
<script setup>
import Swiper from "./Swiper.vue";
</script>
