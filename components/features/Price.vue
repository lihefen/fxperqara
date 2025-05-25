<template>
  <div class="antialiased">
    <p class="text-2xl font-bold text-black text-center mb-6">
      Consultation Price
    </p>
    <section
      class="justify-center items-center flex-col flex lg:flex-row lg:gap-8"
    >
      <div
        class="bg-linear-[180deg,#D2FFEB,#E2FFEF] rounded-[24px] p-8 mt-4 w-[340px] h-auto flex-1 relative overflow-visible"
      >
        <div id="content-payment">
          <div class="flex justify-between sm:justify-center items-center">
            <div
              id="wrap-title"
              class="flex sm:flex-col gap-2 items-center -mt-12"
            >
              <img
                src="/image/utils/icon-probono-payment.png"
                alt="icon"
                class="w-20"
              />
              <p class="font-bold antialiased sm:text-xl">Pro Bono</p>
            </div>
          </div>
          <div
            class="bg-white shadow-[0px_-1px_1px_1px_#00B267] rounded-full p-2 flex flex-col justify-center items-center w-full my-2"
          >
            <p class="text-2xl font-bold text-[#00673A] sm:text-[32px]">FREE</p>
            <p class="text-[#00673A] font-semibold antialiased">
              30 Minutes Consultat
            </p>
          </div>
          <p
            class="text-xs sm:text-base text-[#666666] leading-4 font-light h-18"
          >
            Get free legal consultation by uploading your Identity Card (KTP).
          </p>
        </div>
        <button
          type="button"
          class="flex-shrink-0 px-4.5 py-2.5 md:text-lg bg-linear-[264deg,#00D075,#069456] text-white rounded-2xl w-full text-center mt-4"
        >
          <span>Apply pro Bono</span>
        </button>
      </div>
      <div
        class="bg-linear-[180deg,#D2FFEB,#E2FFEF] rounded-[24px] p-8 mt-4 w-[340px] h-auto flex-1 relative overflow-visible"
      >
        <div id="content-payment">
          <div class="flex justify-between sm:justify-center items-center">
            <div
              id="wrap-title"
              class="flex sm:flex-col gap-2 items-center -mt-12"
            >
              <img
                src="/image/utils/icon-chat-payment.png"
                alt="icon"
                class="w-20"
              />
              <p class="font-bold antialiased sm:text-xl">Chat Saja</p>
            </div>
          </div>
          <div
            class="bg-white shadow-[0px_-1px_1px_1px_#00B267] rounded-full p-2 flex flex-col justify-center items-center w-full my-2"
          >
            <p class="font-bold relative text-[#00673A]">
              <span class="absolute top-0 left-0">Rp</span>
              <span class="text-2xl sm:text-[32px] ml-6">40.000</span>
            </p>
            <p class="text-[#00673A] font-semibold antialiased">
              30 Minutes Consultat
            </p>
          </div>
          <p
            class="text-xs sm:text-base text-[#666666] leading-4 font-light h-18"
          >
            The ideal solution for urgent legal needs and more concise
            discussions.
          </p>
        </div>
        <button
          type="button"
          class="flex-shrink-0 px-4.5 py-2.5 md:text-lg bg-linear-[264deg,#00D075,#069456] text-white rounded-2xl w-full text-center mt-4"
        >
          <span>Consult Now</span>
        </button>
      </div>
      <div
        class="three-card-bg rounded-[24px] p-8 mt-4 w-[340px] h-auto flex-1 relative overflow-visible"
      >
        <!-- <div
          class="bg-[linear-gradient(317.9deg,#2886F7_-145.55%,#F64F55_104.76%)] absolute -top-2 left-0 flex items-center justify-center rounded-tl-xl rounded-r-xl shadow-lg py-1 px-[6px]"
        >
          <div class="flex items-center space-x-2">
            <div class="text-white text-2xl">
              <img
                src="/image/utils/icon-thumbs-up.svg"
                alt="thumbs-up"
                width="16"
              />
            </div>
            <span class="text-white font-bold text-xs">Paling Hemat!</span>
          </div>
        </div> -->
        <div id="content-payment">
          <div class="flex justify-between sm:justify-center items-center">
            <div
              id="wrap-title"
              class="flex sm:flex-col gap-2 items-center -mt-12"
            >
              <img
                src="/image/utils/icon-fullpackage-payment.png"
                alt="icon"
                class="w-20"
              />
              <p class="font-bold antialiased sm:text-xl">
                Chat + Voice + Video Call
              </p>
            </div>
          </div>
          <div
            class="bg-white shadow-[0px_-1px_1px_1px_#00B267] rounded-full p-2 flex flex-col justify-center items-center w-full my-2"
          >
            <p class="font-bold relative text-[#00673A]">
              <span class="absolute top-0 left-0">Rp</span>
              <span class="text-2xl sm:text-[32px] ml-6">50.000</span>
            </p>
            <p class="text-[#00673A] font-semibold antialiased">
              60 Minutes Consultat
            </p>
          </div>
          <p
            class="text-xs sm:text-base text-[#556987] leading-4 font-light h-18"
          >
            Waktu lebih leluasa untuk membahas masalah hukum secara mendalam.
          </p>
        </div>
        <button
          type="button"
          class="flex-shrink-0 px-4.5 py-2.5 md:text-lg bg-linear-[259deg,#00D98A,#00E510_10%,#00BB4D] text-white rounded-2xl w-full text-center mt-4"
        >
          <span>Consult Now</span>
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
// 每个卡片独立展开/收起状态
const isOpen1 = ref(true); // 默认展开，可改为false
const isOpen2 = ref(true);
const isOpen3 = ref(true);

// 1024px 以上全部展开
const handleResize = () => {
  if (window.innerWidth >= 1024) {
    isOpen1.value = true;
    isOpen2.value = true;
    isOpen3.value = true;
  } else {
    isOpen1.value = false;
    isOpen2.value = false;
    isOpen3.value = true;
  }
};

// 监听窗口大小变化
onMounted(() => {
  window.addEventListener("resize", handleResize);
});
</script>

<style scoped>
.three-card-bg {
  background: url("/image/features/card-bg.png") no-repeat center center;
}
</style>
