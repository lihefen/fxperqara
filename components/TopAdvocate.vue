<template>
  <section id="top-advocate" class="bg-gradient-to-b from-[#1C2E7F] to-[#52BEE7] pb-4 md:pb-16 relative">
    <div class="h-4 bg-gradient-to-r from-[#3A67DD] via-[#52BEE7] to-[#3A67DD]"></div><img
      class="absolute top-3 w-full h-[98.5%] z-0" src="/image/top-advokat/ornament-background.png"
      alt="ornament-background">
    <div class="relative max-w-[1280px] xl:px-40 mx-auto px-4 z-10">
      <div class="flex justify-between md:items-center my-4 md:px-6">
        <p class="text-white text-2xl md:text-3xl font-bold">
          Mereka yang telah memberi pelayanan terbaik di Perqara.
        </p>
        <img alt="top-medal" class="w-20 md:w-40 h-20 md:h-40" src="/image/top-advokat/medal.png" />
      </div>
      <div class="bg-black/20 rounded-xl relative md:p-6 p-4 mt-8">
        <div class="flex justify-center">
          <img alt="appstore-logo" class="w-[155px] absolute -top-5" src="/image/top-advokat/title.png" />
          <div class="absolute -top-3.5 drop-shadow-md">
            <span class="text-lg text-white font-bold drop-shadow-lg">Maret</span>
          </div>
        </div>
        <div class="mt-4">
          <p class="text-center text-xl text-white font-bold mb-4"> Top Advokat </p>
          <div class="w-full overflow-hidden">
            <div class="w-full overflow-auto scrollbar-hide scroll-smooth flex space-x-2">
              <div class="inline-flex gap-1 space-x-1 animate-loop-scroll-reverse">
                <div v-for="item in firstRowItems" :key="item.name">
                  <div id="card-lawyer"
                    class="bg-white rounded-lg max-w-none w-24 h-32 p-1 md:p-2 md:w-56 md:h-auto flex items-center md:flex-row flex-col gap-2">
                    <img :src="item.image"
                      class="w-16 md:w-24 h-16 md:h-24 border-2 border-gray-300 rounded-lg object-cover object-center overflow-hidden aspect-square" />
                    <p class="font-semibold text-center text-xs line-clamp-3 flex-1">
                      {{ item.name }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="inline-flex gap-1 space-x-1 animate-loop-scroll-reverse">
                <div v-for="item in firstRowItems" :key="item.name">
                  <div id="card-lawyer"
                    class="bg-white rounded-lg max-w-none w-24 h-32 p-1 md:p-2 md:w-56 md:h-auto flex items-center md:flex-row flex-col gap-2">
                    <img :src="item.image"
                      class="w-16 md:w-24 h-16 md:h-24 border-2 border-gray-300 rounded-lg object-cover object-center overflow-hidden aspect-square" />
                    <p class="font-semibold text-center text-xs line-clamp-3 flex-1">
                      {{ item.name }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full overflow-hidden mt-4">
            <div class="w-full overflow-auto scrollbar-hide scroll-smooth flex space-x-2">
              <div class="inline-flex gap-1 space-x-1 animate-loop-scroll">
                <div v-for="item in secondRowItems" :key="item.name">
                  <div id="card-lawyer"
                    class="bg-white rounded-lg max-w-none w-24 h-32 p-1 md:p-2 md:w-56 md:h-auto flex items-center md:flex-row flex-col gap-2">
                    <img :src="item.image"
                      class="w-16 md:w-24 h-16 md:h-24 border-2 border-gray-300 rounded-lg object-cover object-center overflow-hidden aspect-square">
                    <p class="font-semibold text-center text-xs line-clamp-3 flex-1">
                      {{ item.name }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="inline-flex gap-1 space-x-1 animate-loop-scroll">
                <div v-for="item in secondRowItems" :key="item.name">
                  <div id="card-lawyer"
                    class="bg-white rounded-lg max-w-none w-24 h-32 p-1 md:p-2 md:w-56 md:h-auto flex items-center md:flex-row flex-col gap-2">
                    <img :src="item.image"
                      class="w-16 md:w-24 h-16 md:h-24 border-2 border-gray-300 rounded-lg object-cover object-center overflow-hidden aspect-square">
                    <p class="font-semibold text-center text-xs line-clamp-3 flex-1">
                      {{ item.name }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="h-1 border-t border-solid border-white my-4"></div>
          <p class="text-center text-xl text-white font-bold my-4"> Top Instansi </p>
          <div class="w-full flex md:flex-row flex-col justify-center gap-2">
            <div class="bg-white rounded-lg flex gap-2 items-center p-2"><img src="/image/top-advokat/gold-medal.svg"
                alt="gold-medal">
              <div class="flex items-center justify-center">
                <div
                  class="w-5 h-5 bg-gradient-to-r border rounded-full flex items-center justify-center from-[#FFD84F] to-[#F9894A] border-[#FFD84F]">
                  <span class="text-sm font-bold">1</span>
                </div>
              </div><span class="text-sm font-bold antialiased">PBH Peradi Cikarang</span>
            </div>
            <div class="bg-white rounded-lg flex gap-2 items-center p-2"><img src="/image/top-advokat/silver-medal.svg"
                alt="silver-medal">
              <div class="flex items-center justify-center">
                <div
                  class="w-5 h-5 bg-gradient-to-r border rounded-full flex items-center justify-center from-[#BEC2CD] to-[#EAEAEA] border-[#BEC2CD]">
                  <span class="text-sm font-bold">2</span>
                </div>
              </div><span class="text-sm font-bold antialiased">PBH Peradi Banjarmasin</span>
            </div>
            <div class="bg-white rounded-lg flex gap-2 items-center p-2"><img src="/image/top-advokat/bronze-medal.svg"
                alt="bronze-medal">
              <div class="flex items-center justify-center">
                <div
                  class="w-5 h-5 bg-gradient-to-r border rounded-full flex items-center justify-center from-[#D0B59A] to-[#E0D7CC] border-[#C1A07E]">
                  <span class="text-sm font-bold">3</span>
                </div>
              </div><span class="text-sm font-bold antialiased">YLC Peradi Cibinong</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'

const firstRowItems = ref([
  {
    name: 'Alvin Afriansyah, S.H., M.H.',
    image: 'https://storage.googleapis.com/perqara-public/lawyer/photo_1725247873'
  },
  {
    name: 'Augustinus Sitompul, S.H.',
    image: 'https://storage.googleapis.com/perqara-public/lawyer/photo_1721291548'
  },
  {
    name: 'Rangga Raditya Noviandhi, S.H., M.H.',
    image: 'https://storage.googleapis.com/perqara-public/lawyer/photo_1715676635'
  },
  {
    name: 'Roy Natanael Silaban, S.H.',
    image: 'https://storage.googleapis.com/perqara-public/lawyer/photo_1739950310'
  },
  {
    name: 'Adetya Nugraha SH.,CPM',
    image: 'https://storage.googleapis.com/perqara-public/lawyer/photo_1739950987'
  },
])

const secondRowItems = ref([
  {
    name: 'Rudi Heryandi Nasution, S.H., M.H.',
    image: 'https://storage.googleapis.com/perqara-public/lawyer/photo_1712162283'
  },
  {
    name: 'Sepriyanto, S.H., CPM.',
    image: 'https://storage.googleapis.com/perqara-public/lawyer/photo_1714632464'
  },
  {
    name: 'Aura Akhman, S.H., M.H.',
    image: 'https://storage.googleapis.com/perqara-public/lawyer/photo_1739951681'
  },
  {
    name: 'Terry Hasibuan, S.H.',
    image: 'https://storage.googleapis.com/perqara-public/lawyer/photo_1695804625'
  },
  {
    name: 'Ricky Rachmat Yuniardi, S.H., M.H., C.L.A.',
    image: 'https://storage.googleapis.com/perqara-public/lawyer/photo_1712291111'
  },

])

</script>
<style scoped>
@keyframes loop-scroll-reverse {
  0% {
    transform: translate(-100%);
  }

  100% {
    transform: translate(0);
  }
}

@keyframes loop-scroll {
  0% {
    transform: translate(0);
  }

  100% {
    transform: translate(-100%);
  }
}

.animate-loop-scroll-reverse {
  animation: loop-scroll-reverse 50s linear infinite;
}

.animate-loop-scroll {
  animation: loop-scroll 50s linear infinite;
}
</style>
