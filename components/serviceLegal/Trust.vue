<template>
  <section class="p-4 md:-mt-60">
    <div class="relative z-10 max-w-[1280px] mx-auto mt-4 xl:px-52">
      <div
        class="card-bg p-4 md:py-6 rounded-[24px] text-[#333333] overflow-hidden"
      >
        <div class="flex flex-col gap-2 md:gap-4 items-center">
          <h5 class="sm:text-2xl lg:text-3xl font-semibold">
            A Trustworthy Platform
          </h5>
          <div class="flex flex-wrap gap-4 py-2">
            <img
              class="w-20 md:w-36"
              src="/image/about-us/trust-logo1.png"
              alt="peradi-footer"
            />
            <img
              class="w-20 md:w-36"
              src="/image/about-us/trust-logo2.png"
              alt="peradi-footer"
            />
            <img
              class="w-20 md:w-36"
              src="/image/about-us/trust-logo3.png"
              alt="peradi-footer"
            />
            <img
              class="w-20 md:w-36"
              src="/image/about-us/trust-logo4.png"
              alt="peradi-footer"
            />
            <img
              class="w-20 md:w-36"
              src="/image/about-us/trust-logo5.png"
              alt="peradi-footer"
            />
          </div>
          <div class="border-b border-white/30 w-full"></div>
          <div class="relative px-3 py-4 mb-8">
            <img
              src="/image/about-us/trust-adorn.svg"
              class="absolute top-1/2 -translate-y-1/2 left-0 md:-left-10"
            />
            <img
              src="/image/about-us/trust-adorn.svg"
              class="absolute top-1/2 -translate-y-1/2 right-0 md:-right-10 rotate-y-180"
            />
            <div
              class="flex items-center justify-center gap-4 md:gap-9 text-center text-[#333333]"
            >
              <div class="flex flex-col">
                <span class="md:text-2xl font-medium">27.000+</span>
                <span class="text-xs md:text-sm">Konsultasi Selesai</span>
              </div>
              <div class="flex flex-col">
                <span class="md:text-2xl font-medium">500+</span>
                <span class="text-xs md:text-sm">Advokat Terdaftar</span>
              </div>
              <div class="flex flex-col">
                <span class="md:text-2xl font-medium">130+</span>
                <span class="text-xs md:text-sm">Kota Dijangkau</span>
              </div>
              <div class="flex flex-col">
                <span
                  class="md:text-2xl font-medium flex items-center justify-center gap-1 md:gap-2"
                >
                  <img
                    src="/image/landing-page/icon-star.svg"
                    alt=""
                    class="w-4 md:w-6 h-4.5 md:h-8"
                  />
                  <span>4.9<span class="text-sm">/5.0</span></span>
                </span>
                <span class="text-xs md:text-sm">Kepuasan Klien</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="relative service-card  overflow-hidden xl:max-w-[1128px] xl:mx-auto -mt-32 pt-32 bg-[#F5FBFD] md:rounded-3xl">
        <div class="py-6 md:py-12 px-4 flex flex-col gap-4 md:gap-8">
                <h2 class="text-2xl lg:text-3xl font-semibold text-[#ffffff]  text-center xl:px-64">
                    What should you use legal services in LawOnGo
                </h2>
                <div class="md:px-20 px-4 grid md:grid-cols-4 grid-cols-2 md:gap-6 gap-x-4 gap-y-8" d>
                    <div class="flex flex-col items-center gap-3 md:gap-6"><img src="/image/landing-page/icon-accurate-service.svg" alt="" class="w-fit">
                    <div class="flex flex-col text-center gap-2"><span class="md:text-xl font-semibold" d>Biaya yang Transparan</span><span class="text-sm text-[#556987]" d>Dapatkan penawaran harga lengkap di awal tanpa khawatir penambahan biaya lain-lain</span></div>
                </div>
                <div class="flex flex-col items-center gap-3 md:gap-6" >
                    <img src="/image/landing-page/icon-fastest-process.svg" alt="" class="w-fit">
                    <div class="flex flex-col text-center gap-2" >
                        <span class="md:text-xl font-semibold">Hemat Waktu</span><span class="text-sm text-[#556987]">Seluruh proses dilakukan secara online untuk menghemat waktu Anda</span>
                    </div>
                </div>
                <div class="flex flex-col items-center gap-3 md:gap-6">
                    <img src="/image/landing-page/icon-flexible-packages.svg" alt="" class="w-fit">
                    <div class="flex flex-col text-center gap-2">
                        <span class="md:text-xl font-semibold">Hasil yang Akurat</span><span class="text-sm text-[#556987]">Tim kami akan memastikan Anda mendapatkan perizinan dan legalitas yang sesuai dengan kebutuhan</span>
                    </div>
                </div>
                <div class="flex flex-col items-center gap-3 md:gap-6">
                    <img src="/image/landing-page/icon-team-professional.svg" alt="" class="w-fit">
                    <div class="flex flex-col text-center gap-2"><span class="md:text-xl font-semibold">Tim Ahli Profesional</span><span class="text-sm text-[#556987]">Semua layanan di LawOnGo ditangani oleh tim yang tersertifikasi dan ahli di bidangnya</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>
<style scoped>
.card-bg {
  background-image: url("/image/about-us/trust_bg.png");
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  /* box-shadow: 0px 35px 28px -32px rgba(15, 169, 66, 0.22),
    inset 2px 2px 0px 0px #ffffff; */
}

.service-card {
    background-image: url("/image/service-page/service_card.png");
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
}
</style>
