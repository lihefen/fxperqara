<template>
  <div>
    <h2 class="text-xl lg:text-3xl font-semibold">
      Seperti Mereka, Siapa Pun Bisa Menemukan Solusi!
    </h2>
    <div class="xl:flex xl:justify-center">
      <div id="wrapper-carousel" class="max-w-[1280px] xl:px-40">
        <div id="testimony-wrapper"
          class="flex flex-row overflow-x-auto scrollbar-hide scroll-smooth gap-6 pt-6 pb-2 px-2">
          <UCarousel ref="carousel" v-slot="{ item }" :items="items" :ui="{ item: 'basis-auto' }"
            class="inline-flex gap-4 md:gap-6 w-full" @select="onSelect">
            <div class="w-52 pt-4 h-auto md:w-60 lg:w-[290px] xl:w-[320px] bg-white rounded-md shadow">
              <div class="px-4 pb-4 overflow-auto h-44 md:h-32 scrollbar-hide">
                <blockquote class="pt-2 text-sm antialiased text-slate-500">
                  {{ item.quote }}
                </blockquote>
              </div>
              <div class="flex justify-between">
                <div class="flex items-center pl-4 py-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="none" class="w-4 h-4 md:w-6 md:h-6 fill-blue-2 stroke-blue-2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z">
                    </path>
                  </svg>
                  <label class="text-black bottom-0 pl-2">{{ item.name }}</label>
                </div>
                <div>
                  <img src="/image/card-testimoni.png" alt="kutip" />
                </div>
              </div>
            </div>

          </UCarousel>
        </div>
        <div class="hidden lg:flex flex-row justify-between mt-2">
          <div id="dots-slider" class="pt-2">
            <div class="inline-flex px-1">
              <button>
                <span id="rounded-button" class="w-3 h-3 rounded-full block bg-steelBlue"></span>
              </button>
            </div>
          </div>
          <div class="flex">
            <button class="p-2 mx-1 my-2 shadow-md rounded-full bg-white" :disabled="prevBtnDisabled"
              :class="{ 'opacity-50!': prevBtnDisabled }" @click="onPrevButtonClick">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                <path
                  d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z">
                </path>
              </svg>
            </button>
            <button class="p-2 my-2 shadow-md rounded-full bg-white" :disabled="nextBtnDisabled"
              :class="{ 'opacity-50!': nextBtnDisabled }" @click="onNextButtonClick">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                <path
                  d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z">
                </path>
              </svg>
            </button>
          </div>
        </div>
        <div class="flex lg:hidden justify-center items-center">
          <button class="p-2 mx-1 my-2 shadow-md rounded-full bg-white" :disabled="prevBtnDisabled"
            :class="{ 'opacity-50!': prevBtnDisabled }" @click="onPrevButtonClick">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
              <path
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z">
              </path>
            </svg>
          </button>
          <button class="p-2 my-2 shadow-md rounded-full bg-white" :disabled="nextBtnDisabled"
            :class="{ 'opacity-50!': nextBtnDisabled }" @click="onNextButtonClick">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
              <path
                d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z">
              </path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const items = ref([
  {
    id: 1,
    name: "Bayu",
    quote: "Saran advokat di aplikasi ini sangat membantu masyarakat kecil seperti saya. Semoga LawOnGo dapat terus menjadi jembatan untuk mendapatkan kesetaraan keadilan secara hukum.",
  },
  {
    id: 2,
    name: "Anto",
    quote: "Advokat sangat informatif, dan berusaha memahami konteks permasalahan saya. Penyampaiannya simple, lugas, dan firm walaupun notobene saya berkonsultasi tanpa biaya.",
  },
  {
    id: 3,
    name: "Siska",
    quote: "Pelayanan di LawOnGo bagus, ini sudah konsultasi kedua saya. Advokat benar-benar menjelaskan secara detail dan sabar untuk saya yang tidak mengerti hukum",
  },
]);

const carousel = useTemplateRef('carousel')
const prevBtnDisabled = ref(false)
const nextBtnDisabled = ref(false)

const onSelect = () => {
  if (!carousel.value) return
  prevBtnDisabled.value = !carousel.value.emblaApi.canScrollPrev()
  nextBtnDisabled.value = !carousel.value.emblaApi.canScrollNext()
}

const onNextButtonClick = () => {
  if (!carousel.value) return
  carousel.value.emblaApi.scrollNext()
}

const onPrevButtonClick = () => {
  if (!carousel.value) return
  carousel.value.emblaApi.scrollPrev()
}

</script>
