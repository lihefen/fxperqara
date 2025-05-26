<template>
  <ClientOnly>
    <div class="sm:px-4 xl:px-16 -mt-90">
      <div
        class="relative overflow-hidden xl:px-14 bg-card md:rounded-[32px] md:py-6 py-4 px-4 space-y-2"
      >
        <!-- <img
          class="absolute bottom-0 left-0 w-full z-0"
          src="/image/landing-page/shape-wave-advokat.webp"
          alt=""
        /> -->
        <div class="md:py-2 space-y-2 relative">
          <h2 class="md:text-3xl font-semibold text-xl text-black">
            Advocate Choice
          </h2>
          <p
            class="text-sm md:text-xs lg:text-base font-dm-sans font-normal antialiased text-neutral-900 mb-6"
          >
            Online advocate for your legal needs. Want to apply for Pro bono
            services ?

            <!-- <span
              class="text-transparent bg-gradient-to-r from-blue-2 to-blue-3 bg-clip-text font-bold"
              >Pro bono</span
            > -->

            <a href="/probono" class="cursor-pointer text-blue-5 underline">
              Click <span class="font-bold text-[#007B45]">here</span>
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
                        class="absolute bottom-0 bg-gradient-to-r from-[#54F9AB] to-[#04A45E] min-w-[62px] w-[62px] flex items-center justify-center gap-1 py-1 px-2 rounded-md"
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
                        >
                          {{ item.name }}
                        </span>
                      </div>
                      <div class="flex gap-1 text-xs items-center">
                        <div class="flex gap-1 items-center">
                          <font-awesome-icon
                            :icon="['fas', 'location-dot']"
                            class="size-4 text-[#04A45E]"
                          />
                          <span class="text-black capitalize">
                            {{ item.location }}
                          </span>
                        </div>
                        <div class="border-l h-2/3 border-gray-500"></div>
                        <div class="flex gap-1 flex-1">
                          <font-awesome-icon
                            :icon="['fas', 'medal']"
                            class="size-4 text-[#04A45E]"
                          />
                          <span class="text-black truncate"
                            >Terverifikasi oleh Peradi</span
                          >
                        </div>
                      </div>
                      <div class="flex items-center">
                        <p
                          class="text-xs antialiased text-black my-auto flex gap-1 items-center"
                        >
                          <font-awesome-icon
                            :icon="['fas', 'clock']"
                            class="size-4 text-[#04A45E]"
                          />
                          {{ item.experience }} years
                        </p>
                        <div class="flex items-center">
                          <div class="h-2 border-l border-gray-400 mx-2"></div>
                          <font-awesome-icon
                            :icon="['fas', 'star']"
                            class="size-3 text-[#FEAF27]"
                          />
                          <label class="my-auto ml-0.5 text-xs text-black">
                            {{ item.rating }}
                          </label>
                        </div>
                        <span class="text-xs text-[#757E8C] ml-1"
                          >({{ item.count }} consultations)</span
                        >
                      </div>
                      <div class="flex items-center justify-between gap-1">
                        <div class="flex text-xs justify-between">
                          <div class="flex gap-1">
                            <span
                              v-for="category in item.categories"
                              :key="category"
                              class="text-[#04A45E] bg-[#CBFFE8] text-xs leading-3 w-auto rounded px-1 py-0.5 max-w-[100px] truncate"
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
                        <div class="text-sm text-[#333333]">Mulai dari</div>
                        <div class="flex gap-1 items-center">
                          <p
                            class="text-[#04A45E] font-semibold !leading-5 text-sm"
                          >
                            Rp{{ item.price }}
                          </p>
                          <p class="text-xs line-through text-[#9B9B9B]">
                            Rp{{ item.oldPrice }}
                          </p>
                          <!-- <div
                            class="flex items-center justify-center w-[15px] bg-[#FF5B5E] rounded px-1 py-0.5 text-white text-[8px] leading-[10px]"
                          >
                            %
                          </div> -->
                        </div>
                      </div>
                    </div>
                    <button
                      class="font-medium px-4 py-2.5 rounded-xl text-xs bg-[#04A45E] text-white"
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
.bg-card {
  /* background: linear-gradient(
    180deg,
    rgba(210, 255, 235, 0.7) 0%,
    rgba(228, 255, 243, 0.7) 100%
  ); */
  overflow: hidden;
  background-image: url("/image/features/advocate-bg.jpg");
  background-repeat: no-repeat;
  background-size: center;
  background-position: 0 0;
  box-shadow: 0px 37px 27px -31px rgba(15, 169, 66, 0.15),
    inset 0px 3px 0px 0px #ffffff;
  border-radius: 24px;
  backdrop-filter: blur(5px);
}
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
  background-color: #54f9ab;
}
</style>
