<template>
  <div class="space-y-3 text-white text-center md:px-20">
    <h1 class="md:text-3xl text-2xl font-semibold">
      Kenapa Konsultasi Hukum di Perqara?
    </h1>
    <p>
      Didukung dengan berbagai fitur yang memudahkan, ayo #BebasKonsultasi
      bersama Perqara sebagai langkah pertama bebas dari masalah hukum.
    </p>
  </div>
  <div class="md:hidden mx-auto mb-16">
    <UCarousel v-slot="{ item }" loop dots :items="items">
      <img :src="item" width="200" class="rounded-lg mx-auto" />
    </UCarousel>
  </div>
  <div
    class="grid grid-rows-2 grid-cols-2 md:grid-cols-3 grid-flow-col md:gap-x-10 md:gap-y-6 gap-4"
  >
    <div
      class="bg-[#F5FBFD] rounded-xl p-3 text-[#4D5B6A] font-light md:text-base text-sm space-y-1"
    >
      <img
        width="80"
        class="mix-blend-multiply"
        src="/image/landing-page/icon-feature-1.webp"
      />
      <h2 class="md:text-xl text-base font-semibold text-[#1D3743]">
        Konsultasi Instan
      </h2>
      <p>Konsultasi hukum online sekarang tanpa perlu buat janji temu.</p>
    </div>
    <div
      class="bg-[#F5FBFD] rounded-xl p-3 text-[#4D5B6A] font-light md:text-base text-sm space-y-1"
    >
      <img
        width="80"
        class="mix-blend-multiply"
        src="/image/landing-page/icon-feature-2.webp"
      />
      <h2 class="md:text-xl text-base font-semibold text-[#1D3743]">
        Advokat Terpercaya
      </h2>
      <p>
        Percayakan masalah hukum Anda kepada Advokat profesional yang terbaik di
        bidangnya
      </p>
    </div>
    <div class="hidden md:block row-span-2 my-auto">
      <UCarousel
        v-slot="{ item }"
        loop
        dots
        :autoplay="{ delay: 5000 }"
        :items="items"
      >
        <img :src="item" width="200" class="rounded-lg mx-auto" />
      </UCarousel>
    </div>
    <div
      class="bg-[#F5FBFD] rounded-xl p-3 text-[#4D5B6A] font-light md:text-base text-sm space-y-1"
    >
      <img
        width="80"
        class="mix-blend-multiply"
        src="/image/landing-page/icon-feature-3.webp"
      />
      <h2 class="md:text-xl text-base font-semibold text-[#1D3743]">
        Satu Harga untuk Semua
      </h2>
      <p>
        Bebas konsultasi hukum via chat, voice call atau video call hanya dengan
        membayar satu harga
      </p>
    </div>
    <div
      class="bg-[#F5FBFD] rounded-xl p-3 text-[#4D5B6A] font-light md:text-base text-sm space-y-1"
    >
      <img
        width="80"
        class="mix-blend-multiply"
        src="/image/landing-page/icon-feature-4.webp"
      />
      <h2 class="md:text-xl text-base font-semibold text-[#1D3743]">
        Proses Aman &amp; Transparan
      </h2>
      <p>
        Lacak semua proses dan transaksi layanan hukum yang Anda pesan di
        Perqara.
      </p>
    </div>
  </div>
  <div class="space-y-2">
    <div
      class="bg-[linear-gradient(320.87deg,#52BEE7_-98.31%,#FFFFFF_130.99%)] p-4 rounded-xl flex md:flex-row flex-col gap-4 justify-between items-center"
    >
      <div class="flex sm:flex-row flex-col gap-3 px-3 items-center">
        <img
          src="/image/landing-page/img-bebas-pilih-advokat.svg"
          alt="img bebas pilih advokat"
        />
        <img
          src="/image/landing-page/img-advokat-list.png"
          width="324"
          alt="list advokat"
        />
      </div>
      <div class="relative">
        <div
          class="absolute left-0 -top-3 bg-[linear-gradient(90deg,#FA4D56_0%,#FFA8AC_100%)] rounded-md py-0.5 px-1.5 text-white text-sm font-semibold"
        >
          Disc. 60%
        </div>
        <a href="/cari-advokat" class=""
          ><button
            class="border border-blue-2 bg-white h-12 text-blue-2 font-semibold rounded-md px-11 flex items-center gap-2"
          >
            <span>Konsultasi Sekarang</span>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.4302 6.28387L20.5002 12.3539L14.4302 18.4239"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M3.5 12.3539H20.33"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
        </a>
      </div>
    </div>
    <a href="/probono" class="block"
      ><div
        class="flex justify-between gap-1 py-2 px-4 rounded-md items-center text-lexend text-[#181E23] border border-[#BAE6FF] font-semibold bg-[linear-gradient(91.47deg,#52BEE7_-13.62%,#EFF8FF_56.52%)]"
      >
        <div class="flex items-center gap-2">
          <img
            src="/image/utils/icon-probono-payment.svg"
            alt="icon-probono"
            width="29"
            class="rounded-full"
          />
          <span class="text-sm font-semibold text-blue-1"
            >Dapatkan Konsultasi Gratis dengan Pro Bono</span
          >
        </div>
        <span class="text-blue-2 font-semibold text-sm">Selengkapnya</span>
      </div></a
    >
  </div>
</template>
<script setup>
const items = [
  "/image/landing-page/phone-first.webp",
  "/image/landing-page/phone-secondary.webp",
];
</script>
