<template>
  <ClientOnly>
    <Swiper
      class="swiper-testimonial"
      :slides-per-view="1.2"
      :space-between="16"
      :direction="'horizontal'"
      :loop="true"
      :mousewheel="true"
      :breakpoints="{
        '1024': {
          direction: 'vertical',
          slidesPerView: 3,
          spaceBetween: 24,
          centeredSlides: true,
        },
      }"
    >
      <SwiperSlide v-for="item in items" :key="item.name" class="!h-auto">
        <!--[-->
        <div
          class="bg-white rounded-xl lg:px-8 lg:pt-6 p-3 h-full shadow-[0_7px_25px_0_rgba(0,0,0,0.09)] flex lg:flex-col lg:gap-3.5 gap-2"
        >
            <div class="text-[10px] flex items-center gap-1">
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.07917 9.155C8.0325 9.14833 7.9725 9.14833 7.91917 9.155C6.74583 9.115 5.8125 8.155 5.8125 6.975C5.8125 5.76833 6.78583 4.78833 7.99917 4.78833C9.20583 4.78833 10.1858 5.76833 10.1858 6.975C10.1792 8.155 9.2525 9.115 8.07917 9.155Z"
                  stroke="#4D5B6A"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M12.4945 13.555C11.3078 14.6417 9.73448 15.3017 8.00115 15.3017C6.26781 15.3017 4.69448 14.6417 3.50781 13.555C3.57448 12.9284 3.97448 12.315 4.68781 11.835C6.51448 10.6217 9.50114 10.6217 11.3145 11.835C12.0278 12.315 12.4278 12.9284 12.4945 13.555Z"
                  stroke="#4D5B6A"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M7.9987 15.3017C11.6806 15.3017 14.6654 12.3169 14.6654 8.63505C14.6654 4.95315 11.6806 1.96838 7.9987 1.96838C4.3168 1.96838 1.33203 4.95315 1.33203 8.63505C1.33203 12.3169 4.3168 15.3017 7.9987 15.3017Z"
                  stroke="#4D5B6A"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span>Klien LawOnGo</span>
            </div>
            <img
                :src="item.image"
                alt="Yakup Putra Hasibuan, S.H., LL.M"
                class="lg:mx-auto lg:w-[472px] w-[158px] self-start"
            />
            <div class="space-y-2 flex-1">
                <p class="font-semibold text-sm lg:text-center">{{ item.name }}</p>
                <div class="border-t border-lightgrey-5"></div>
                <p class="text-xs font-light">"{{ item.description }}"</p>
            </div>
        </div>
        <!--]--><!---->
      </SwiperSlide>
    </Swiper>
  </ClientOnly>
</template>
<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
// import { Autoplay } from "swiper/modules";

import "swiper/css";

const isMobile = ref(false);
const items = ref([
  {
    name: "Rima Gravianty Baskoro",
    image: "/image/testimonial/testimonial-3.png",
    description:
      "“The lawyer really helped me in finding solutions and legal steps that I had to take regarding my problem.”",
  },
  {
    name: "Rima Gravianty Baskoro",
    image: "/image/testimonial/testimonial-3.png",
    description:
      "Saya cukup puas selama konsultasi, karena insight yang diberikan cukup baik dan jujur sehingga saya bisa menentukan keputusan apa yang sekiranya mungkin saya ambil.",
  },
  {
    name: "Rima Gravianty Baskoro",
    image: "/image/testimonial/testimonial-3.png",
    description:
      "Saya cukup puas selama konsultasi, karena insight yang diberikan cukup baik dan jujur sehingga saya bisa menentukan keputusan apa yang sekiranya mungkin saya ambil.",
  },
  {
    name: "Rima Gravianty Baskoro",
    image: "/image/testimonial/testimonial-3.png",
    description:
      "Saya cukup puas selama konsultasi, karena insight yang diberikan cukup baik dan jujur sehingga saya bisa menentukan keputusan apa yang sekiranya mungkin saya ambil.",
  },
  {
    name: "Rima Gravianty Baskoro",
    image: "/image/testimonial/testimonial-3.png",
    description:
      "Saya cukup puas selama konsultasi, karena insight yang diberikan cukup baik dan jujur sehingga saya bisa menentukan keputusan apa yang sekiranya mungkin saya ambil.",
  },
]);

const onResize = () => {
  isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
  onResize();
  window.addEventListener("resize", onResize);
});
</script>
<style>
.swiper-testimonial .swiper-slide-next,
.swiper-testimonial .swiper-slide-prev {
  opacity: 0.5;
}

.swiper-testimonial .swiper-slide-active {
  opacity: 1;
}
</style>
