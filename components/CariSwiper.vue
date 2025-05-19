<template>
  <div class="mb-3 bg-white rounded-lg p-2">
    <Swiper
      :slides-per-view="1.04"
      :space-between="8"
      :modules="[Pagination, Navigation]"
      :pagination="pagination"
      @swiper="onSwiper"
      @slide-change="onSlideChange"
    >
      <SwiperSlide>
        <a
          href="/advokatmu/identifikasi"
          class="relative rounded-lg p-3 bg-gradient-to-r from-white to-[#D9F5FF] font-semibold flex gap-2 items-center"
        >
          <div class="flex items-center gap-2 flex-1">
            <img
              alt="logo"
              class="w-12 h-12"
              src="/image/FindYourLawyer/logo-banner.png"
            />
            <div>
              <p
                class="text-neutral-800 text-sm md:text-xl font-bold font-dm-sans leading-normal"
              >
                Bingung Pilih Advokat?
              </p>
              <p
                class="text-dm-sans text-[#3A475B] text-xs md:text-sm font-normal"
              >
                Gunakan panduan LawOnGo dan temukan advokat yang tepat
              </p>
            </div>
          </div>
          <img
            class="w-fit h-[88px] absolute right-10 hidden md:block z-0"
            src="/image/FindYourLawyer/ornament-banner.png"
            alt="ornament"
          />

          <font-awesome-icon
            icon="fa-solid fa-chevron-right"
            size="lg"
            class="mx-2"
          />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="/probono" class="w-full"
          ><div
            class="flex justify-between gap-1 py-2 px-4 rounded-md items-center text-lexend text-[#262626] border border-[#BAE6FF] font-semibold bg-[#BAE6FF] h-[80px] sm:h-[74px]"
          >
            <div class="flex items-start sm:items-center gap-2">
              <img
                src="/image/utils/icon-probono-slide-banner.svg"
                alt="icon-probono"
                class="rounded-full w-8 sm:w-12"
              />
              <div>
                <p class="text-sm sm:text-base font-bold">
                  Ajukan Konsultasi Gratis
                </p>
                <p class="text-[#3A475B] text-xs sm:text-sm antialiased">
                  Dapatkan Konsultasi Gratis dengan Pro bono.
                </p>
              </div>
            </div>
            <font-awesome-icon
              icon="fa-solid fa-chevron-right"
              size="lg"
              class="mx-2"
            />
          </div>
        </a>
      </SwiperSlide>
      <SwiperSlide />
    </Swiper>
    <div class="flex lg:justify-between mt-2">
      <div class="inline-block">
        <div class="pagination-banner"></div>
      </div>
      <div class="lg:flex gap-3 hidden">
        <button
          class="navigation-prev button-arrow"
          :disabled="activeIndex === 0"
          :class="{ 'opacity-50': activeIndex === 0 }"
          @click="onPrev"
        >
          <img class="rotate-180" src="/image/arrow-right.svg" alt="" />
        </button>
        <button
          class="navigation-next button-arrow"
          :class="{ 'opacity-50': isEnd }"
          :disabled="isEnd"
          @click="onNext"
        >
          <img src="/image/arrow-right.svg" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";

const swiperRef = ref(null);
const activeIndex = ref(0);
const isEnd = ref(false);

const pagination = ref({
  clickable: true,
  enabled: true,
  el: ".pagination-banner",
});

const onSwiper = (newSwiper) => {
  console.log(newSwiper);
  swiperRef.value = newSwiper;
};

const onSlideChange = () => {
  console.log(swiperRef.value.activeIndex);
  activeIndex.value = swiperRef.value.activeIndex;
  isEnd.value = swiperRef.value.isEnd;
};

const onNext = () => {
  console.log("onNext");
  swiperRef.value.slideNext();
};

const onPrev = () => {
  console.log("onPrev");
  swiperRef.value.slidePrev();
};
</script>
<style scoped>
.button-arrow {
  align-items: center;
  border-radius: 9999px;
  display: flex;
  height: 1.5rem;
  justify-content: center;
  width: 1.5rem;
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));
  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color),
    0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
</style>
<style>
.pagination-banner > .swiper-pagination-bullet {
  display: inline-block;
  width: 8px;
  height: 8px;
  opacity: 1;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.2);
  margin-right: 8px;
}

.pagination-banner > .swiper-pagination-bullet-active {
  background-color: #2072b8;
}
</style>
