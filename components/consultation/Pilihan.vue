<template>
  <ClientOnly>
    <div class="sm:px-4 xl:px-20">
      <div
        class="relative overflow-hidden xl:px-20 bg-[#CCDBEC] md:rounded-[32px] rounded-2xl md:py-6 py-4 px-4 space-y-2"
      >
        <img
          class="absolute bottom-0 left-0 w-full z-0"
          src="/image/landing-page/shape-wave-advokat.webp"
          alt=""
        />
        <div class="md:py-2 space-y-2 relative">
          <h2 class="md:text-3xl font-semibold text-xl text-black">
            Advocate Choice
          </h2>
          <p
            class="text-sm md:text-xs lg:text-base font-dm-sans font-normal antialiased text-neutral-900 mb-6"
          >
          Online advocate for your legal needs. Want to apply for Pro bono services ? 
            
            <!-- <span
              class="text-transparent bg-gradient-to-r from-blue-2 to-blue-3 bg-clip-text font-bold"
              >Pro bono</span
            > -->
            
            <a href="/probono" class="cursor-pointer text-blue-5 underline">
                Click <span
              class="font-bold text-[#007B45]"
              >here</span
            >
            </a>
          </p>
        </div>
        <div class="relative">
          <Swiper
            :slides-per-view="1"
            :space-between="24"
            :pagination="pagination"
            :modules="[Pagination, Autoplay, Navigation]"
            :breakpoints="{
              '768': {
                slidesPerView: 2,
              },
            }"
            @swiper="onSwiper"
            @slide-change="onSlideChange"
          >
            <SwiperSlide v-for="item in items" :key="item.id">
              <div
                class="bg-white relative rounded-lg min-w-[332px] max-h-[185px] my-2 cursor-pointer"
              >
                <!---->
                <div class="relative py-2">
                  <div class="absolute left-2 top-2">
                    <span class="relative z-[5] flex h-3 w-3"
                      ><span
                        class="animate-ping-slow absolute inline-flex h-full w-full rounded-full opacity-75 bg-green-200"
                      ></span
                      ><span
                        class="relative inline-flex rounded-full h-3 w-3 bg-green-500"
                      ></span
                    ></span>
                  </div>
                  <div class="px-2 flex gap-2">
                    <div class="relative h-fit">
                      <img
                        src="https://storage.googleapis.com/perqara-public/lawyer/photo_1722932861"
                        class="min-w-[62px] w-[62px] min-h-[93px] h-[93px] rounded-md object-cover"
                      />
                      <div
                        v-if="item.video"
                        id="tagging-video-voice-call"
                        class="absolute bottom-0 bg-gradient-to-r from-[#52BEE7] to-[#1C2E7F] min-w-[62px] w-[62px] flex items-center justify-center gap-1 py-1 px-2 rounded-md"
                      >
                        <img
                          alt="video-icon"
                          class="w-2"
                          src="/image/landing-page/video-icon.png"
                        />
                        <p
                          class="text-[8px] text-center text-white font-semibold antialiased"
                        >
                          Tersedia
                        </p>
                      </div>
                    </div>
                    <div class="flex-1 flex flex-col gap-1">
                      <div class="flex items-center h-[40px]">
                        <span
                          class="text-base font-bold line-clamp-2 leading-5 text-black"
                          >{{ item.name }}</span
                        >
                      </div>
                      <div class="flex gap-1 text-xs items-center">
                        <div class="flex gap-1 items-center">
                          <img
                            alt="location"
                            class="w-4 h-4"
                            src="/image/landing-page/icon-location.png"
                          /><span class="text-[#4D5B6A] capitalize">{{
                            item.location
                          }}</span>
                        </div>
                        <div class="border-l h-2/3 border-gray-500"></div>
                        <div class="flex gap-1 flex-1">
                          <img
                            class="w-4 h-4"
                            src="/image/landing-page/icon-medal-star.png"
                            alt="medal-star"
                          />
                          <span class="text-[#0072C3] truncate"
                            >Terverifikasi oleh Peradi</span
                          >
                        </div>
                      </div>
                      <div class="flex items-center">
                        <p
                          class="text-xs antialiased text-[#344052] my-auto flex gap-1 items-center"
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.3026 4.07139C11.8068 3.52306 10.9784 3.24889 9.77677 3.24889H9.63677V3.22556C9.63677 2.24556 9.63677 1.03223 7.44344 1.03223H6.55677C4.36344 1.03223 4.36344 2.25139 4.36344 3.22556V3.25473H4.22344C3.01594 3.25473 2.19344 3.52889 1.6976 4.07723C1.1201 4.71889 1.1376 5.58223 1.19594 6.17139L1.20177 6.21223L1.24695 6.68664C1.25527 6.77401 1.30233 6.85293 1.37576 6.90098C1.51565 6.99252 1.74977 7.14343 1.8901 7.22139C1.97177 7.27389 2.05927 7.32056 2.14677 7.36723C3.14427 7.91556 4.24094 8.28306 5.3551 8.46389C5.4076 9.01223 5.64677 9.65389 6.92427 9.65389C8.20177 9.65389 8.4526 9.01806 8.49344 8.45223C9.68344 8.25973 10.8326 7.84556 11.8709 7.23889C11.9059 7.22139 11.9293 7.20389 11.9584 7.18639C12.1899 7.05559 12.4299 6.89442 12.6488 6.73655C12.7147 6.68899 12.7569 6.61546 12.7659 6.53466L12.7751 6.45139L12.8043 6.17723C12.8101 6.14223 12.8101 6.11306 12.8159 6.07223C12.8626 5.48306 12.8509 4.67806 12.3026 4.07139ZM7.63594 8.06723C7.63594 8.68556 7.63594 8.77889 6.91844 8.77889C6.20094 8.77889 6.20094 8.66806 6.20094 8.07306V7.33806H7.63594V8.06723ZM5.1976 3.24889V3.22556C5.1976 2.23389 5.1976 1.86639 6.55677 1.86639H7.44344C8.8026 1.86639 8.8026 2.23973 8.8026 3.22556V3.25473H5.1976V3.24889Z"
                              fill="#0072C3"
                            ></path>
                            <path
                              d="M12.1759 8.01136C12.3822 7.91321 12.6198 8.0767 12.5991 8.30419L12.3897 10.6106C12.2672 11.7773 11.7889 12.9673 9.22225 12.9673H4.77725C2.21058 12.9673 1.73225 11.7773 1.60975 10.6164L1.411 8.43019C1.39056 8.20534 1.6227 8.04203 1.8284 8.13509C2.49306 8.43581 3.71989 8.96932 4.47774 9.16781C4.57359 9.19292 4.65111 9.26152 4.69308 9.35127C5.04715 10.1085 5.81506 10.5114 6.92391 10.5114C8.02181 10.5114 8.79942 10.093 9.15466 9.33389C9.19669 9.24408 9.27429 9.1755 9.37019 9.15026C10.1749 8.93851 11.4808 8.34215 12.1759 8.01136Z"
                              fill="#0072C3"
                            ></path>
                          </svg>
                          {{ item.experience }} Tahun
                        </p>
                        <div class="flex items-center">
                          <div class="h-2 border-l border-gray-400 mx-2"></div>
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6.29311 1.87199C6.55464 1.24319 7.44541 1.24319 7.70694 1.87199L8.92144 4.79199L12.0738 5.04472C12.7527 5.09914 13.0279 5.94631 12.5107 6.38935L10.1089 8.44674L10.8427 11.5229C11.0007 12.1854 10.2801 12.7089 9.69891 12.354L7.00003 10.7055L4.30115 12.354C3.71996 12.7089 2.99931 12.1854 3.15733 11.5229L3.89111 8.44674L1.48933 6.38935C0.972122 5.94631 1.24738 5.09914 1.92623 5.04472L5.07861 4.79199L6.29311 1.87199Z"
                              fill="#FEAF27"
                            ></path>
                          </svg>
                          <label class="my-auto ml-0.5 text-xs text-black">{{
                            item.rating
                          }}</label>
                        </div>
                        <span class="text-xs text-[#757E8C] ml-1"
                          >({{ item.count }} Konsultasi)</span
                        >
                      </div>
                      <div class="flex items-center justify-between gap-1">
                        <div class="flex text-xs justify-between">
                          <div class="flex gap-1">
                            <span
                              v-for="category in item.categories"
                              :key="category"
                              class="text-blue-2 bg-lightblue-3 text-xs leading-3 w-auto rounded px-1 py-0.5 max-w-[100px] truncate"
                            >
                              {{ category }}
                            </span>
                          </div>
                        </div>
                        <div class="flex items-center gap-1 text-xs text-black">
                          <span>+{{ item.addCount }}</span>
                          <font-awesome-icon :icon="['fas', 'chevron-down']" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="border-b my-2 border-[#E7ECF0]"></div>
                  <div class="flex justify-between items-center gap-1 px-2">
                    <div class="flex items-center gap-0.5">
                      <!----><!---->
                      <div class="flex flex-col gap-0.5 md:gap-1 rounded-lg">
                        <div class="text-xs text-[#757E8C]">Mulai dari</div>
                        <div class="flex gap-1 items-center">
                          <p
                            class="text-blue-2 font-semibold !leading-5 text-sm"
                          >
                            Rp{{ item.price }}
                          </p>
                          <p class="text-xs line-through text-slate-400">
                            Rp{{ item.oldPrice }}
                          </p>
                          <div
                            class="flex items-center justify-center w-[15px] bg-[#FF5B5E] rounded px-1 py-0.5 text-white text-[8px] leading-[10px]"
                          >
                            %
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      class="font-medium px-4 py-2.5 rounded-md text-xs bg-blue-2 text-white"
                    >
                      Konsultasi
                    </button>
                  </div>
                </div>
              </div>
              <!---->
            </SwiperSlide>
          </Swiper>
          <div class="flex justify-center sm:justify-between mt-4">
            <div class="sm:inline-block hidden">
              <div class="pagination-lawyer"></div>
            </div>
            <div class="flex">
              <button
                class="navigation-prev-lawyer button-arrow mr-3"
                :disabled="activeIndex === 0"
                :class="{ 'opacity-50': activeIndex === 0 }"
                @click="swiperRef.slidePrev()"
              >
                <img class="rotate-180" src="/image/arrow-right.svg" alt="" />
              </button>
              <button
                class="navigation-next-lawyer button-arrow"
                :class="{ 'opacity-50': isEnd }"
                :disabled="isEnd"
                @click="swiperRef.slideNext()"
              >
                <img src="/image/arrow-right.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";

const swiperRef = ref(null);
const activeIndex = ref(0);
const isEnd = ref(false);

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
  console.log(swiperRef.value.isEnd);
  activeIndex.value = swiperRef.value.activeIndex;
  isEnd.value = swiperRef.value.isEnd;
};
</script>
<style scoped>
.button-arrow {
  align-items: center;
  border-radius: 9999px;
  display: flex;
  height: 2.25rem;
  justify-content: center;
  width: 2.25rem;
  background-color: white;
}

/* 慢速波纹动画 */
@keyframes ping-slow {
  0% {
    transform: scale(1);
    opacity: 0.75;
  }

  80% {
    transform: scale(2.5);
    opacity: 0;
  }

  100% {
    transform: scale(2.5);
    opacity: 0;
  }
}

.animate-ping-slow {
  animation: ping-slow 1s cubic-bezier(0, 0, 0.2, 1) infinite;
}
</style>

<style>
.pagination-lawyer > .swiper-pagination-bullet {
  display: inline-block;
  width: 12px;
  height: 12px;
  opacity: 1;
  border-radius: 50%;
  background-color: white;
  margin-right: 8px;
}

.pagination-lawyer > .swiper-pagination-bullet-active {
  background-color: #2072b8;
}
</style>
