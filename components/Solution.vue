<template>
  <section
    id="solution"
    class="max-w-[1280px] px-4 xl:px-20 mx-auto py-8 md:py-11"
  >
    <h1 class="text-2xl md:text-3xl font-semibold text-center mb-12">
      Various Other Legal Solutions for You
    </h1>
    <div class="flex flex-wrap lg:flex-nowrap justify-center gap-3">
      <a
        v-for="item in items"
        :key="item.title"
        :href="item.link"
        class="relative w-full md:w-[230px] p-3 card-bg flex flex-row sm:flex-col items-start gap-2 shadow-lg overflow-visible"
      >
        <img
          :src="item.image"
          alt=""
          class="absolute left-6"
          :style="{ top: item.top + 'px' }"
        />
        <!-- <img
          src="/image/landing-page/icon-legal-consultation-colored.svg"
          alt=""
          class="w-10 md:w-16"
        /> -->
        <div class="flex flex-col gap-1 sm:gap-2 w-full mt-6 md:mb-2 z-10">
          <div class="flex items-center justify-between gap-2">
            <span class="text-lightgrey-4 sm:text-lg font-blod">
              {{ item.title }}
            </span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.64969 17.7238C8.30518 17.3655 8.31635 16.7958 8.67464 16.4512L13.3999 12L8.67464 7.54875C8.31635 7.20424 8.30517 6.6345 8.64969 6.2762C8.9942 5.91791 9.56394 5.90674 9.92224 6.25125L15.3222 11.3512C15.4987 11.5209 15.5984 11.7552 15.5984 12C15.5984 12.2448 15.4987 12.4791 15.3222 12.6487L9.92224 17.7487C9.56394 18.0933 8.9942 18.0821 8.64969 17.7238Z"
                fill="#333333"
              ></path>
            </svg>
          </div>
          <span class="text-lightgrey-5 text-xs sm:text-sm">
            {{ item.description }}
          </span>
        </div>
      </a>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";

const items = ref([
  {
    title: "Leagal Consultation",
    description:
      "LawOnGo bermitra dengan Advokat-advokat terbaik yang telah disumpah.",
    image: "/image/features/chat.png",
    link: "/cari-advokat",
    top: -20,
  },
  {
    title: "Company Establishment",
    description:
      "Layanan pendirian badan usaha (PT, CV, Yayasan), perubahan akta, dan waarmerking.",
    image: "/image/features/gongsi-2.png",
    link: "/pendirian-badan-usaha",
    top: -7,
  },
  {
    title: "Document Creation",
    description:
      "Layanan pembuatan dokumen untuk individu/perusahaan seperti Perjanjian Jual Beli, Perjanjian Kerja, Surat Kuasa, dll.",
    image: "/image/features/wendang-2.png",
    link: "/layanan-lainnya?to=pembuatan-dokumen",
    top: -7,
  },
  {
    title: "Haki Registration",
    description: "Layanan pendaftaran Merek, Paten, Hak Cipta, dll.",
    image: "/image/features/zhishichanquan.png",
    link: "/layanan-lainnya?to=pendaftaran-haki",
    top: -8,
  },
  {
    title: "Tax Consultation",
    description: "Konsultasi pelaporan pajak perusahaan maupun individu.",
    image: "/image/features/tax.png",
    link: "/layanan-lainnya?to=konsultasi-pajak",
    top: -5,
  },
]);
</script>
<style scoped>
.card-bg {
  background: linear-gradient(179deg, #c6fce5 0%, #edfff7 100%);
  border-radius: 20px;
}
</style>
