<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-05-08 23:42:04
 * @LastEditors: hean
 * @LastEditTime: 2025-05-13 00:26:43
-->

<template>
    <section class="xl:px-32">
        <div class="bg-linear-gradient px-8 lg:py-8 -mt-10 rounded-3xl lg:rounded-[51px] relative">
            <NuxtImg class="absolute -top-40 -left-10 md:w-3/5 xl:-top-52 md:-left-24" src="/image/about-us/ornament-founder-left.png" alt="left-ornament" />
    
            <NuxtImg class="absolute hidden md:block md:w-1/2 md:-top-32 md:right-8 xl:right-32" src="/image/about-us/ornament-founder-right.png" alt="right-ornament" />
            <NuxtImg class="absolute hidden md:block md:top-36 md:right-8 md:w-2/3" src="/image/about-us/rectangle-founder.png" alt="rectangle-ornament" />
            <NuxtImg class="absolute top-80 right-0 md:hidden" src="/image/about-us/rectangle-founder-mobile.svg" alt="rectangle-ornament" />
            <NuxtImg class="absolute bottom-0 left-0 hidden md:block md:w-1/3" src="/image/about-us/ornament-founder-bottom.svg" alt="ornament-bottom"  />
            <div  class="relative z-10">
                <div id="founder-coFounder" class="mt-10 md:flex md:justify-around md:gap-4">
                    <div id="founder-coFounder1">
                        <div  class="flex flex-col">
                            <div  id="wrap-image" class="flex justify-center">
                                <NuxtImg class="w-32 md:w-44" src="/image/about-us/founder.svg" alt="0" />
                            </div>
                            <p class="font-dm-sans font-bold antialiased text-center mt-2">Yakup Hasibuan</p>
                            <p class="font-dm-sans antialiased text-center text-[#737373] text-sm md:text-base mt-1">Founder &amp; CEO Perqara</p>
                            <div class="flex justify-center">
                                <p  class="font-dm-sans text-gray-700 text-xs md:text-sm antialiased mt-2 md:w-72">Sebagai seorang advokat muda, Yakup ikut berperan aktif dalam berbagai organisasi advokat seperti Young Lawyers Committee.  Pengalamannya sebagai advokat   membuatnya memiliki gambaran yang jelas mengenai berbagai tantangan dalam memajukan industri hukum di Indonesia.</p>
                            </div>
                        </div>
                    </div>
                    <div id="founder-coFounder2">
                        <div  class="flex flex-col"><div  id="wrap-image" class="flex justify-center">
                            <NuxtImg class="w-32 md:w-44" src="/image/about-us/co-founder.svg" alt="1" />
                        </div>
                        <p class="font-dm-sans font-bold antialiased text-center mt-2">Sebastian Simanjuntak</p><p class="font-dm-sans antialiased text-center text-[#737373] text-sm md:text-base mt-1">Co-Founder &amp; COO Perqara</p>
                        <div class="flex justify-center"><p  class="font-dm-sans text-gray-700 text-xs md:text-sm antialiased mt-2 md:w-72">Dengan berbagai pengalaman dan jenjang karir baik di Indonesia maupun Eropa, Sebastian telah sukses memimpin Perqara sejak awal didirikan. Ia merupakan seorang profesional dengan pengalaman yang signifikan di bidang keuangan, Supply Chain Management (SCM), dan teknologi.</p>
                        </div>
                    </div>
                    </div>
                </div>
                
                <div id="life-at-perqara">
                    <p class="font-dm-sans font-bold antialiased text-2xl text-center mb-8"> Life at <span class="text-[#2072B8]">Perqara</span></p>
                </div>

                <div id="career" class="mt-14">
                    <div  class="gradient-box rounded-lg relative h-auto md:hidden">
                        <NuxtImg  class="rounded-lg w-full" src="/image/about-us/ornament-career.png" alt="ornament" />
                        
                        <div class="font-dm-sans antialiased absolute pl-6 pr-7 py-3 top-0">
                            <p  class="text-2xl text-white font-bold"> Bergabung Bersama Kami! </p>
                            <p  class="text-base text-white mt-2"> Temukan karir impianmu di Perqara </p>
                            <button  class="font-bold text-[#333333] bg-white w-full rounded py-2 mt-6"> Lihat Karir </button>
                        </div>
                    </div>
                
                    <div class="gradient-box rounded-2xl relative h-auto hidden md:block w-full">
                        <NuxtImg class="rounded-2xl object-cover w-full" src="/image/about-us/ornament-career-laptop.png" alt="ornament-laptop" />
                        <div class="font-dm-sans flex justify-between items-center w-full antialiased absolute pl-6 pr-7 top-0 xl:mt-3">
                            <div class="mt-5">
                                <p class="text-2xl text-white font-bold"> Bergabung Bersama Kami! </p>
                                <p class="text-base text-white mt-2"> Temukan karir impianmu di Perqara </p>
                            </div>
                            <button  class="font-bold text-[#333333] bg-white w-fit px-8 rounded py-3 mt-5 xl:mt-3"> Lihat Karir </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>


</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";

const swiperRef = ref(null);
const activeIndex = ref(0);
const isMobile = ref(false);

const onResize = () => {
  isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
  window.addEventListener("resize", onResize);
});

const items = ref([
  {
    name: "Aura Akhman, S.H., M.H.",
    image:
      "https://storage.googleapis.com/perqara-public/lawyer/photo_1722932861",
    location: "Jakarta Selatan",
    verified: true,
    experience: 4,
    rating: 5.0,
    count: 275,
    categories: ["Pidana", "Perdata"],
    addCount: 3,
    price: 40000,
    oldPrice: 60000,
    video: false,
  },
  {
    name: "Dwi Kurniawan, S.H.",
    image:
      "https://storage.googleapis.com/perqara-public/lawyer/photo_1722932861",
    location: "Jakarta Selatan",
    verified: true,
    experience: 4,
    rating: 4.9,
    count: 344,
    addCount: 5,
    categories: ["Pidana", "Perkawinan &amp; Perceraian"],
    price: 40000,
    oldPrice: 60000,
    video: true,
  },
  {
    name: "Dwi Kurniawan, S.H.",
    image:
      "https://storage.googleapis.com/perqara-public/lawyer/photo_1722932861",
    location: "Jakarta Selatan",
    verified: true,
    experience: 4,
    rating: 5.0,
    count: 304,
    addCount: 3,
    categories: ["Pidana"],
    price: 40000,
    oldPrice: 60000,
    video: false,
  },
  {
    name: "Dwi Kurniawan, S.H.",
    image:
      "https://storage.googleapis.com/perqara-public/lawyer/photo_1722932861",
    location: "Jakarta Selatan",
    verified: true,
    experience: 4,
    rating: 5.0,
    count: 304,
    addCount: 3,
    categories: ["Pidana"],
    price: 40000,
    oldPrice: 60000,
    video: false,
  },
  {
    name: "Dwi Kurniawan, S.H.",
    image:
      "https://storage.googleapis.com/perqara-public/lawyer/photo_1722932861",
    location: "Jakarta Selatan",
    verified: true,
    experience: 4,
    rating: 5.0,
    count: 304,
    addCount: 3,
    categories: ["Pidana"],
    price: 40000,
    oldPrice: 60000,
    video: false,
  },
]);

const pagination = ref({
  clickable: true,
  enabled: true,
  el: ".pagination-lawyer",
});

const onSwiper = (newSwiper) => {
  swiperRef.value = newSwiper;
};

const onSlideChange = () => {
  activeIndex.value = swiperRef.value.activeIndex;
};
</script>


<style scoped>
    .gradient-box {
        background: linear-gradient(40deg,#0a50a3 50%,#d301be 120%)
    }
</style>