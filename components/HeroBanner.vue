<template>
  <div class="w-full h-full relative">
    <!---->
    <div class="max-w-[1280px] px-4 xl:px-40 mx-auto relative z-10">
      <div class="flex md:flex-row flex-col justify-between">
        <div class="mt-16">
          <img
            sizes="(max-width: 768px) 276px, 384px"
            class="mx-auto"
            src="/image/landing-page/hero-bebas-konsultasi.png"
          />
          <div class="hidden md:flex items-center flex-col gap-3">
            <p class="text-[#003A6D] font-semibold text-xl text-center w-3/4">
              Rasakan <span class="text-blue-2">BEBAS</span>nya Konsultasi Hukum
            </p>
            <div class="relative w-full">
              <div
                class="absolute right-0 -top-3 bg-[linear-gradient(90deg,#FA4D56_0%,#FFA8AC_100%)] rounded-md py-0.5 px-1.5 text-white text-sm font-semibold"
              >
                Mulai dari Rp800/menit
              </div>
              <button
                type="button"
                class="focus:outline-none focus:outline-0 focus-visible:outline-0 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 flex-shrink-0 transition-all ease-in-out duration-300 w-full flex justify-center items-center px-4.5 py-2.5 md:text-lg bg-blue-2 text-white hover:bg-blue-9 rounded-lg md:w-[384px]"
              >
                <span>Konsultasi Sekarang</span>
              </button>
            </div>
            <a href="/probono" class="w-full">
              <div
                class="flex justify-between gap-1 py-2 px-4 rounded-md items-center text-lexend text-[#181E23] border border-[#BAE6FF] font-semibold bg-[linear-gradient(91.47deg,#52BEE7_-13.62%,#EFF8FF_56.52%)]"
              >
                <div class="flex items-center gap-2">
                  <img
                    src="/image/utils/icon-probono-payment.svg"
                    alt="icon-probono"
                    width="24"
                    class="rounded-full"
                  />
                  <span class="text-[10px] sm:text-xs"
                    >Dapat Konsultasi Gratis dengan Pro Bono</span
                  >
                </div>
                <span class="text-blue-2 text-xs">Pelajari</span>
              </div>
            </a>
          </div>
          <div class="hidden md:flex gap-3 justify-start items-center mt-3">
            <img src="/image/landing-page/icon-peradi.svg" alt="peradi" /><img
              class="mt-1"
              src="/image/landing-page/icon-verified-perqara.svg"
              alt="verified-perqara"
            />
            <div class="pl-2">
              <p class="mb-1 text-[#7C8DA1] text-[10px]">Terdaftar di:</p>
              <img
                src="/image/partner/kominfo.png"
                class="w-20"
                alt="kominfo"
              />
            </div>
          </div>
        </div>
        <div class="md:mx-0 mx-auto md:mt-16 mt-6">
          <img
            sizes="(max-width: 640px) 466px, 466px"
            src="/image/landing-page/hero-picture-video-call.png"
          />
        </div>
        <div class="flex md:hidden flex-col gap-3 mt-6">
          <p class="text-[#003A6D] font-semibold text-xl text-center">
            Rasakan <span class="text-blue-2">BEBAS</span>nya Konsultasi Hukum
          </p>
          <div class="relative w-full">
            <div
              class="absolute right-0 -top-3 bg-[linear-gradient(90deg,#FA4D56_0%,#FFA8AC_100%)] rounded-md py-0.5 px-1.5 text-white text-sm font-semibold"
            >
              Disc. 60%
            </div>
            <button
              type="button"
              class="focus:outline-none focus:outline-0 focus-visible:outline-0 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 flex-shrink-0 transition-all ease-in-out duration-300 w-full flex justify-center items-center px-4.5 py-2.5 md:text-lg bg-blue-2 text-white hover:bg-blue-9 rounded-lg"
            >
              <span>Konsultasi Sekarang</span>
            </button>
          </div>
          <a href="/probono" class="w-full"
            ><div
              class="flex justify-between gap-1 py-2 px-4 rounded-md items-center text-lexend text-[#181E23] border border-[#BAE6FF] font-semibold bg-[linear-gradient(91.47deg,#52BEE7_-13.62%,#EFF8FF_56.52%)] text-xs"
            >
              <div class="flex items-center gap-2">
                <img
                  src="/image/utils/icon-probono-payment.svg"
                  alt="icon-probono"
                  width="24"
                  class="rounded-full"
                />
                <span class="text-[10px] sm:text-xs"
                  >Dapat Konsultasi Gratis dengan Pro Bono</span
                >
              </div>
              <span class="text-blue-2 text-xs">Pelajari</span>
            </div>
          </a>
        </div>
        <div class="flex md:hidden gap-3 justify-center items-center mt-3">
          <img src="/image/landing-page/icon-peradi.svg" alt="peradi" /><img
            class="mt-1"
            src="/image/landing-page/icon-verified-perqara.svg"
            alt="verified-perqara"
          />
          <div class="p-2">
            <p class="mb-1 text-[#7C8DA1] text-[10px]">Terdaftar di:</p>
            <img
              src="/image/partner/kominfo.png"
              class="w-20 object-fit"
              alt="kominfo"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="z-0">
      <img
        class="absolute w-full top-20 right-0 md:hidden"
        src="/image/landing-page/m-ellipse-bg.svg"
        alt="ornament"
      /><img
        class="absolute w-1/2 top-0 right-0 hidden md:block"
        src="/image/landing-page/d-ellipse-bg.svg"
        alt="ornament"
      />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
