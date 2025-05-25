<template>
  <div class="flex flex-col justify-center items-center relative">
    <div class="relative w-full h-[100px]">
      <div
        class="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-linear-[135deg,#12EB92,#50FFBE_57%,#BEFFEE] bg-clip-text text-transparent font-bold text-[70px] lg:text-[110px] text-center opacity-60"
      >
        Our Team
      </div>
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-black font-black text-2xl lg:text-4xl"
      >
        Our Team
      </div>
    </div>
    <!-- <img
      class="absolute top-20 md:top-10 m-auto"
      src="/image/landing-page/ellipsis-ornament.svg"
      alt="ornament"
    /> -->
    <div class="bg-linear1 absolute top-0 w-[100vw] h-full"></div>
    <Swiper />

    <!-- <div
      class="bg-[#0A50A3] mt-6 p-2 rounded-full text-center font-semibold text-xs md:w-[350px]"
    >
      <p class="flex items-center justify-center text-white">
        <span class="text-yellow-400 text-xl pr-2">⭐</span> Lebih dari 500
        Advokat bersedia untuk Konsultasi Hukum Online dengan Anda!
        <span class="text-yellow-400 text-xl pl-2">⭐</span>
      </p>
    </div> -->
    <div
      class="flex justify-center w-[214px] font-lexend text-sm font-bold antialiased"
    >
      <button
        type="button"
        class="focus:outline-none focus:outline-0 focus-visible:outline-0 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 flex-shrink-0 transition-all ease-in-out duration-300 w-full flex justify-center items-center px-4 py-2 bg-white text-lightblack-1 hover:bg-cultured rounded-lg !text-[#04A45E] mt-4"
      >
        <span>
          View all advocates
          <span class="ml-2">
            <font-awesome-icon
              icon="fa-solid fa-arrow-right"
              style="color: #04a45e"
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
<style scoped>
.bg-linear1 {
  background: linear-gradient(
    180deg,
    rgba(204, 255, 235, 0.96) 0%,
    rgba(194, 255, 231, 0.73) 60%,
    rgba(255, 255, 255, 0.19) 100%
  );
  border-radius: 36px;
  opacity: 0.3657;
  filter: blur(16px);
}
</style>
