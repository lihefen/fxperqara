<template>
  <div class="font-lexend antialiased">
    <p class="text-2xl font-bold text-white text-center">Consultation Price</p>
    <section class="justify-center items-center flex-col flex lg:flex-row lg:gap-8">
      <div class="bg-white rounded-xl p-3 mt-4 w-[328px] h-auto flex-1 relative">
        <div id="content-payment">
          <div class="flex justify-between sm:justify-center items-center">
            <div id="wrap-title" class="flex sm:flex-col gap-2 items-center">
              <img src="/image/utils/icon-probono-payment.png" alt="icon" class="w-8 sm:w-14" />
              <p class="font-bold antialiased sm:text-xl">Pro Bono</p>
            </div>
            <div class="lg:hidden">
              <font-awesome-icon icon="fa-solid fa-chevron-down" size="xl"
                class="transition-all duration-300 cursor-pointer" :class="isOpen1 ? '' : 'rotate-180'"
                @click="isOpen1 = !isOpen1" />

            </div>
          </div>
          <div class="bg-[#E5F6FF] rounded-xl p-2 flex flex-col justify-center items-center w-full my-2">
            <p class="text-2xl font-bold text-[#00673A]">FREE</p>
            <p class="text-[#00673A] font-semibold antialiased">
                30 Minutes Consultat
            </p>
          </div>
          <p class="text-xs sm:text-sm text-[#556987] leading-4 font-light h-14">
            Get free legal consultation by uploading your Identity Card (KTP).
          </p>
        </div>
        <div v-show="isOpen1">
          <!-- <ul class="mt-4 space-y-2 text-[#556987] text-sm">
            <div id="border-solid" class="h-1 border-t border-solid border-[#9EADBF] my-3"></div>
            <li class="flex gap-2 items-center">
              <img src="/image/utils/icon-checkbox.svg" alt="checkbox" /> Chat
              Konsultasi
            </li>
            <li class="flex gap-2 items-center">
              <img src="/image/utils/icon-checkbox.svg" alt="checkbox" />
              Lampiran File
            </li>
            <li class="flex gap-2 items-center">
              <img src="/image/utils/icon-checkbox.svg" alt="checkbox" />
              Ringkasan Konsultasi
            </li>
            <li class="flex gap-2 items-center text-[#9EADBF]">
              <img src="/image/utils/icon-close-checkbox.svg" alt="close-checkbox" width="26" />
              <span class="line-through">Voice Call</span>
            </li>
            <li class="flex gap-2 items-center text-[#9EADBF]">
              <img src="/image/utils/icon-close-checkbox.svg" alt="close-checkbox" width="26" />
              <span class="line-through">Video Call</span>
            </li>
          </ul> -->
          <button type="button"
            class="focus:outline-none focus:outline-0 focus-visible:outline-0 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 flex-shrink-0 transition-all ease-in-out duration-300 px-4.5 py-2.5 md:text-lg bg-[linear-gradient(90deg,#00D075_0%,#069456_100%)] text-white hover:bg-blue-9 rounded-lg w-full text-center mt-4">
            <span>Apply pro Bono</span>
          </button>
        </div>
      </div>
      <div class="bg-white rounded-xl p-3 mt-4 w-[328px] h-auto flex-1 relative">
        <div id="content-payment">
          <div class="flex justify-between sm:justify-center items-center">
            <div id="wrap-title" class="flex sm:flex-col gap-2 items-center">
              <img src="/image/utils/icon-chat-payment.png" alt="icon" class="w-8 sm:w-14" />
              <p class="font-bold antialiased sm:text-xl">Just Chat</p>
            </div>
            <div class="lg:hidden">
              <font-awesome-icon icon="fa-solid fa-chevron-down" size="xl"
                class="transition-all duration-300 cursor-pointer" :class="isOpen2 ? '' : 'rotate-180'"
                @click="isOpen2 = !isOpen2" />
            </div>
          </div>
          <div class="bg-[#E5F6FF] rounded-xl p-2 flex flex-col justify-center items-center w-full my-2">
            <p class="font-bold relative text-[#00673A]">
              <span class="absolute top-0 left-0">Rp</span>
              <span class="text-2xl sm:text-[32px] ml-6">40.000</span>
            </p>
            <p class="text-[#8896AB] font-semibold antialiased">
               <span class="text-[#00673A]">60 Minutes Consultat</span>
            </p>
          </div>
          <p class="text-xs sm:text-sm text-[#556987] leading-4 font-light h-14">
            The ideal solution for urgent legal needs and more concise discussions.
          </p>
        </div>
        <div v-show="isOpen2">
          <!-- <ul class="mt-4 space-y-2 text-[#556987] text-sm">
            <div id="border-solid" class="h-1 border-t border-solid border-[#9EADBF] my-3"></div>
            <li class="flex gap-2 items-center">
              <img src="/image/utils/icon-checkbox.svg" alt="checkbox" /> Chat
              Konsultasi
            </li>
            <li class="flex gap-2 items-center">
              <img src="/image/utils/icon-checkbox.svg" alt="checkbox" />
              Lampiran File
            </li>
            <li class="flex gap-2 items-center">
              <img src="/image/utils/icon-checkbox.svg" alt="checkbox" />
              Ringkasan Konsultasi
            </li>
            <li class="flex gap-2 items-center text-[#9EADBF]">
              <img src="/image/utils/icon-close-checkbox.svg" alt="close-checkbox" width="26" />
              <span class="line-through">Voice Call</span>
            </li>
            <li class="flex gap-2 items-center text-[#9EADBF]">
              <img src="/image/utils/icon-close-checkbox.svg" alt="close-checkbox" width="26" />
              <span class="line-through">Video Call</span>
            </li>
          </ul> -->
          <button type="button"
            class="focus:outline-none focus:outline-0 focus-visible:outline-0 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 flex-shrink-0 transition-all ease-in-out duration-300 px-4.5 py-2.5 md:text-lg bg-[linear-gradient(90deg,#00D075_0%,#069456_100%)]  text-white hover:bg-blue-9 rounded-lg w-full text-center mt-4">
            <span>Consult Now</span>
          </button>
        </div>
      </div>
      <div
        class="bg-[linear-gradient(2.28deg,#C7FBE6_34.51%,#8DFFBD_98.09%)] bg-white rounded-xl p-3 mt-4 w-[328px] h-auto flex-1 relative">
        <div
          class="bg-[linear-gradient(317.9deg,#2886F7_-145.55%,#F64F55_104.76%)] absolute -top-2 left-0 flex items-center justify-center rounded-tl-xl rounded-r-xl shadow-lg py-1 px-[6px]">
          <div class="flex items-center space-x-2">
            <div class="text-white text-2xl">
              <img src="/image/utils/icon-thumbs-up.svg" alt="thumbs-up" width="16" />
            </div>
            <span class="text-white font-bold text-xs">Paling Hemat!</span>
          </div>
        </div>
        <div id="content-payment">
          <div class="flex justify-between sm:justify-center items-center">
            <div id="wrap-title" class="flex sm:flex-col gap-2 items-center">
              <img src="/image/utils/icon-fullpackage-payment.png" alt="icon" class="w-8 sm:w-14" />
              <p class="font-bold antialiased sm:text-xl">
                Chat + Voice + Video Call
              </p>
            </div>
            <div class="lg:hidden">
              <font-awesome-icon icon="fa-solid fa-chevron-down" size="xl"
                class="transition-all duration-300 cursor-pointer" :class="isOpen3 ? 'rotate-180' : ''"
                @click="isOpen3 = !isOpen3" />
            </div>
          </div>
          <div class="bg-[#E5F6FF] rounded-xl p-2 flex flex-col justify-center items-center w-full my-2">
            <p class="font-bold relative">
              <span class="absolute top-0 left-0">Rp</span>
              <span class="text-2xl sm:text-[32px] ml-6">50.000</span>
            </p>
            <p class="text-[#333333] font-semibold antialiased">
               <span class="text-[#333333]">60 Minutes Consultat</span>
            </p>
          </div>
          <p class="text-xs sm:text-sm text-[#556987] leading-4 font-light h-14">
            More time to discuss legal issues in depth.
          </p>
        </div>
        <div v-show="isOpen3">
          <!-- <ul class="mt-4 space-y-2 text-[#556987] text-sm">
            <div id="border-solid" class="h-1 border-t border-solid border-[#9EADBF] my-3"></div>
            <li class="flex gap-2 items-center">
              <img src="/image/utils/icon-checkbox.svg" alt="checkbox" /> Chat
              Konsultasi
            </li>
            <li class="flex gap-2 items-center">
              <img src="/image/utils/icon-checkbox.svg" alt="checkbox" />
              Lampiran File
            </li>
            <li class="flex gap-2 items-center">
              <img src="/image/utils/icon-checkbox.svg" alt="checkbox" />
              Ringkasan Konsultasi
            </li>
            <li class="flex gap-2 items-center">
              <img src="/image/utils/icon-checkbox.svg" alt="checkbox" />
              Voice Call
            </li>
            <li class="flex gap-2 items-center">
              <img src="/image/utils/icon-checkbox.svg" alt="checkbox" />
              Video Call
            </li>
          </ul> -->
          <button type="button"
            class="focus:outline-none focus:outline-0 focus-visible:outline-0 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 flex-shrink-0 transition-all ease-in-out duration-300 px-4.5 py-2.5 md:text-lg bg-[linear-gradient(90deg,#00D075_0%,#069456_100%)]  text-white hover:bg-blue-9 rounded-lg w-full text-center mt-4">
            <span>Consult Now</span>
          </button>
        </div>
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
