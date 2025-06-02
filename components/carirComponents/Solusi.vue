<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-05-31 14:46:30
 * @LastEditors: hean
 * @LastEditTime: 2025-06-02 12:32:34
-->
<template>
  <div>
    <h2 class="relative text-xl h-[40px] lg:text-3xl text-center font-semibold text-[#333333]">
        <div class="absolute left-1/2 -translate-x-1/2 z-10">What they say</div>
        <img class="absolute left-1/2 -translate-x-1/2 top-[10px] z-9" width="100" height="100"  src="/image/landing-page/font_bar.png">
    </h2>
    <div class="xl:flex xl:justify-center">
      <div class="max-w-[1280px] ">
        <div
          id="testimony-wrapper"
          class="flex flex-row overflow-x-auto scrollbar-hide scroll-smooth gap-6 px-2"
        >
          <UCarousel
            ref="carousel"
            arrows
            v-slot="{ item }"
            :items="items"
            :ui="{
              item: 'basis-auto',
              controls: 'absolute -bottom-0 h-10 left-1/2 -translate-x-1/2',
              prevIcon: prevIcon,
              nextIcon: nextIcon
            }"
            class="inline-flex gap-4 md:gap-6 w-full pb-10"
            @select="onSelect"
          >
            <div
              class="relative w-[458px]  h-[175px] md:w-60 lg:w-[458px] xl:w-[458px] rounded-[24px] bg-card "
            >
             <div class="flex pl-[20px] pr-[20px]">
                <div class="w-[90px]">
                    <div><img class="w-[90px]" src="/image/landing-page/img_sayphoto.png"></div>
                    <div class="text-center text-[24px] font-bold">{{ item.name }}</div>
                </div>
                <div class="pl-[10px] pb-4 overflow-auto scrollbar-hide w-[300px]">
                    <blockquote class="pt-2 text-sm antialiased text-slate-500">
                    {{ item.quote }}
                    </blockquote>
                </div>
             </div>
             
             <img class="absolute right-[-10px] bottom-0" src="/image/landing-page/icon_say.png" alt="kutip" />
            </div>
          </UCarousel>
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
    name: "Siska",
    quote:
      "LawOnGo is a fast paced starup in a relatively new industry that has been exposing me with a step learning curve.",
  },
  {
    id: 2,
    name: "Siska",
    quote:
      "Advocate advice in this application is very helpful for small communities like me. ",
  },
  {
    id: 3,
    name: "Siska",
    quote:
      "Advocate advice in this application is very helpful for small communities like me. ",
  },
]);

const carousel = useTemplateRef("carousel");
const prevBtnDisabled = ref(false);
const nextBtnDisabled = ref(false);

const prevIcon = ref('/image/landing-page/pre_button_icon.png');
const nextIcon = ref('/image/landing-page/next_button_icon.png');

const onSelect = () => {
  if (!carousel.value) return;
  prevBtnDisabled.value = !carousel.value.emblaApi.canScrollPrev();
  nextBtnDisabled.value = !carousel.value.emblaApi.canScrollNext();
};

// const onNextButtonClick = () => {
//   if (!carousel.value) return;
//   carousel.value.emblaApi.scrollNext();
// };

// const onPrevButtonClick = () => {
//   if (!carousel.value) return;
//   carousel.value.emblaApi.scrollPrev();
// };
</script>
<style scoped>
.bg-card {
    background: linear-gradient(172deg, #cdffe9 0%, #ffffff 100%);
    box-shadow: 0px 35px 27px -35px rgba(15, 169, 66, 0.21),
        inset -1px -1px 0px 0px #78fea9;
    box-sizing: border-box;
}
</style>
