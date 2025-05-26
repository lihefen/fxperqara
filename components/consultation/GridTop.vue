<template>
  <div class="px-4 xl:px-30">
    <div class="bg-card p-8 relative">
      <img
        src="/image/features/bg-top-left.png"
        class="absolute top-0 left-0 w-[260px] h-[150px]"
      />
      <div class="space-y-1 mb-5 text-white">
        <h2 class="md:text-3xl font-semibold md:leading-[56px] text-xl">
          What Legal Consultation Do You Want?
        </h2>
        <p>
          Advocates at Perqara are ready to listen and help resolve issues
          related to:
        </p>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
        <div v-for="category in categories" :key="category.name">
          <div
            class="w-full flex justify-center min-h-[64px] lg:h-auto h-[104px] max-h-[104px] lg:justify-start p-2 category-card-bg gap-2 hover:shadow-lg shadow-[rgba(15, 169, 66, 0.27)]/50"
          >
            <div class="rounded-md cursor-pointer flex-1">
              <div class="lg:flex items-start gap-1 lg:gap-2">
                <img
                  class="w-10 mx-auto lg:mx-0"
                  :src="category.image"
                  alt=""
                />
                <div class="grid gap-1">
                  <p
                    class="sm:leading-6 text-center lg:text-left text-xs text-neutral-800 font-dm-sans font-bold"
                  >
                    {{ category.name }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="h-80" />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const categories = ref([
  {
    name: "Bankruptcy & PKPU",
    image: "/image/category/kepailitan.png",
  },
  {
    name: "Employment",
    image: "/image/category/ketenagakerjaan.png",
  },
  {
    name: "Marriage & Divorce",
    image: "/image/category/perkawinan.png",
  },
  {
    name: "Land",
    image: "/image/category/pertanahan.png",
  },
  {
    name: "Criminal",
    image: "/image/category/pidana.png",
  },
  {
    name: "Civil",
    image: "/image/category/perdata.png",
  },
  {
    name: "Corporate",
    image: "/image/category/corporate.png",
  },
  {
    name: "Personal Tax",
    image: "/image/category/tax.png",
  },
]);
</script>
<style scoped>
.bg-card {
  background: linear-gradient(
    180deg,
    #00ba69 0%,
    rgba(26, 203, 125, 0.63) 53%,
    rgba(81, 208, 152, 0) 100%
  );
  border-radius: 30px;
}
.category-card-bg {
  background: #ffffff;
  border-radius: 16px;
}
</style>
