<template>
  <section
    id="solution"
    class="max-w-[1280px] px-4 xl:px-20 mx-auto py-8 md:py-11"
  >
    <div class="story-bg relative min-h-[530px]">
      <img
        src="/image/features/story-top-left.png"
        alt=""
        class="absolute top-0 left-0 w-[260px] h-[150px] object-cover hidden lg:block"
      />
      <div className="w-[470px] absolute -top-2 right-20 hidden lg:block">
        <div className="relative">
          <div
            className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 transform -translate-y-1/2"
          />

          <div
            className="absolute top-1/2 left-0 right-0 h-0.5 transform -translate-y-1/2"
          >
            <div
              className="w-full h-full border-t-2 border-dashed border-green-500"
            />
          </div>

          <div className="relative flex justify-between items-center px-6">
            <div className="flex flex-col items-center">
              <div className="mb-1 text-lg font-bold text-gray-800">2024</div>
              <div
                className="w-2 h-2 bg-green-500 rounded-full relative z-10 mb-1"
              />
              <div className="text-lg text-[#333333] text-center max-w-xs">
                Established
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-1 text-lg font-bold text-gray-800">2025</div>
              <div
                className="w-2 h-2 bg-green-500 rounded-full relative z-10 mb-1"
              />
              <div className="text-lg text-[#333333] text-center max-w-xs">
                Established
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap lg:flex-nowrap justify-center gap-3 md:pt-28">
        <div
          v-for="item in items"
          :key="item.title"
          class="relative w-full md:w-[340px] p-5 card-bg flex flex-col items-center gap-2 shadow-lg overflow-hidden"
        >
          <Video
            :video="item.video"
            :poster="item.poster"
            class="w-[300px] h-[143px]"
          />

          <div class="w-full mt-2 px-10">
            <span class="text-lightgrey-5 text-xs sm:text-sm">
              {{ item.description }}
            </span>
          </div>
        </div>
      </div>
      <div
        class="flex justify-center w-full font-lexend text-sm font-bold antialiased"
      >
        <button
          type="button"
          class="w-full flex justify-center items-center px-4 py-2 bg-white text-lightblack-1 rounded-lg !text-[#04A45E] mt-4"
        >
          View all
          <font-awesome-icon
            icon="fa-solid fa-arrow-right"
            class="ml-2"
            style="color: #04a45e"
          />
        </button>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
import Video from "./Video.vue";

const items = ref([
  {
    title: "Leagal Consultation",
    description:
      "LawOnGo bermitra dengan Advokat-advokat terbaik yang telah disumpah.",
    video: "https://media.w3.org/2010/05/sintel/trailer.mp4",
    poster: "/image/features/story-placeholder.png",
  },
  {
    title: "Company Establishment",
    description:
      "Layanan pendirian badan usaha (PT, CV, Yayasan), perubahan akta, dan waarmerking.",
    video: "https://media.w3.org/2010/05/sintel/trailer.mp4",
    poster: "/image/features/story-placeholder.png",
  },
  {
    title: "Document Creation",
    description:
      "Layanan pembuatan dokumen untuk individu/perusahaan seperti Perjanjian Jual Beli, Perjanjian Kerja, Surat Kuasa, dll.",
    video: "https://media.w3.org/2010/05/sintel/trailer.mp4",
    poster: "/image/features/story-placeholder.png",
  },
]);
</script>
<style scoped>
.story-bg {
  background-image: url("/image/features/story-bg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* min-height: 530px; */
}
.card-bg {
  background: linear-gradient(179deg, #c6fce5 0%, #edfff7 100%);
  border-radius: 20px;
}
</style>
