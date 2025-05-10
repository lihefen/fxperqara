<template>
  <ClientOnly>
    <div class="w-full overflow-auto scrollbar-hide scroll-smooth">
      <div class="flex gap-2 justify-center items-center">
        <button id="sampleSwiperPrev" class="bg-white rounded-full p-1 z-10" :disabled="activeIndex === 0"
          :class="{ 'opacity-50': activeIndex === 0 }" @click="swiperRef.slidePrev()">
          <img class="rotate-180" src="/image/arrow-right.svg" alt="" />
        </button>
        <div class="w-9/12 lg:w-[800px]">
          <Swiper slides-per-view="2" space-between="50" @swiper="onSwiper" @slide-change="onSlideChange">
            <swiper-slide v-for="item in items" :key="item.id">
              <div class="w-full lg:w-72 flex flex-col items-center justify-center text-white mt-6 relative">
                <div class="realtive flex-1 items-center">
                  <img :src="item.image" alt="name-lawyer" class="object-cover w-[214px]" />
                  <h3 class="-mt-14 text-center z-10 text-xl font-semibold w-[212px] line-clamp-3 absolute bottom-10">
                    {{ item.name }}
                  </h3>
                </div>
                <div class="flex justify-center space-x-1 mt-2 z-10">
                  <font-awesome-icon v-for="i in item.rating" :key="i" icon="fa-solid fa-star"
                    style="color: rgb(254, 228, 90)" />
                </div>
                <p class="text-sm text-white text-center font-medium">
                  {{ item.rating }} Star Advocate
                </p>
              </div>
            </swiper-slide>
          </Swiper>
        </div>
        <button id="sampleSwiperNext" class="bg-white rounded-full p-1 z-10" :disabled="activeIndex === 3"
          :class="{ 'opacity-50': activeIndex === 3 }" @click="swiperRef.slideNext()">
          <img src="/image/arrow-right.svg" alt="" />
        </button>
      </div>
    </div>
  </ClientOnly>
</template>
<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
// import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";

const swiperRef = ref(null);
const activeIndex = ref(0);

const items = ref([
  {
    id: 1,
    image: "/image/landing-page/lawyer/profile-lawyer-2.png",
    name: "Yakup Putra Hasibuan, S.H., LL.M",
    rating: 5,
  },
  {
    id: 2,
    image: "/image/landing-page/lawyer/profile-lawyer-1.png",
    name: "Alvin Alfiansyah S.H",
    rating: 5,
  },
  {
    id: 3,
    image: "/image/landing-page/lawyer/profile-lawyer-3.png",
    name: "Desi Permatasari, S.H., M.H.",
    rating: 5,
  },
  {
    id: 4,
    image: "/image/landing-page/lawyer/profile-lawyer-4.png",
    name: "Ricky Rachmat Yuniardi, S.H., M.H., C.L.A.",
    rating: 5,
  },
  {
    id: 5,
    image: "/image/landing-page/lawyer/profile-lawyer-5.png",
    name: "Chairunnisa Ratu Salma, S.H.",
    rating: 5,
  },
]);

const onSwiper = (newSwiper) => {
  swiperRef.value = newSwiper;
};

const onSlideChange = () => {
  activeIndex.value = swiperRef.value.activeIndex;
};
</script>
