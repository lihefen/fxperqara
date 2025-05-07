<template>
  <div
    class="hero-section container mx-auto px-4 py-8 md:py-12 flex flex-col md:flex-row items-center"
  >
    <div class="hero-content md:w-1/2 mb-8 md:mb-0">
      <div class="bebas-konsultasi">
        <h1 class="text-4xl md:text-6xl font-bold text-navy-blue">
          <span>BEBAS</span>
          <span class="text-red-500 font-script block md:inline"
            >Konsultasi</span
          >
        </h1>
        <p class="hashtag text-sm md:text-base mt-2">#PasAdaPerqara</p>
      </div>

      <div class="mt-6">
        <h2 class="text-xl md:text-2xl font-bold text-navy-blue">
          Rasakan BEBASnya<br />
          Konsultasi Hukum
        </h2>
        <div
          class="price-tag bg-red-500 text-white px-3 py-1 rounded-full text-sm inline-block mt-2"
        >
          Mulai dari Rp800/menit
        </div>

        <button
          class="consultation-btn w-full mt-4 bg-navy-blue text-white py-3 px-6 rounded-md font-medium"
        >
          Konsultasi Sekarang
        </button>

        <div class="pro-bono mt-4 bg-blue-100 rounded-md p-3 flex items-center">
          <div class="icon mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div class="text-sm">
            Dapat Konsultasi Gratis dengan Pro Bono
            <a href="#" class="text-blue-600 ml-1">Pelajari</a>
          </div>
        </div>

        <div class="partners mt-4 flex items-center">
          <span class="text-xs text-gray-500 mr-2">Terdaftar di:</span>
          <div class="partner-logos flex space-x-2">
            <div class="partner-logo bg-white p-1 rounded-md">
              <div class="w-8 h-8 bg-gray-200 rounded-md"></div>
            </div>
            <div class="partner-logo bg-white p-1 rounded-md">
              <div class="w-8 h-8 bg-gray-200 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="hero-image md:w-1/2 relative">
      <img
        src="https://sjc.microlink.io/x8OPO17JRUVtpVK9K81h_V5Dp1Tz8Bi6tuC4fWUfJPI1WovKozgZpckaJB1Hl98QNMphT-BdyuOXUF_4w8SvIw.jpeg"
        alt="Perqara Mobile App"
        class="w-full max-w-md mx-auto"
      />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
