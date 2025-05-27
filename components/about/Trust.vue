<template>
  <section class="p-4 md:-mt-60">
    <div class="relative z-10 max-w-[1280px] mx-auto mt-4 xl:px-52">
      <div
        class="relative card-bg p-4 md:py-6 rounded-3xl text-[#333333] overflow-hidden"
      >
        <!-- <img
          src="/image/landing-page/img-acc-right-card-service-page.svg"
          alt=""
          class="absolute right-0 top-0 w-16 md:w-auto"
        /> -->
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
          <div class="relative px-3 py-4">
            <img
              src="/image/about-us/trust-adorn.svg"
              class="absolute top-1/2 -translate-y-1/2 -left-10"
            />
            <img
              src="/image/about-us/trust-adorn.svg"
              class="absolute top-1/2 -translate-y-1/2 -right-10 rotate-y-180"
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
  </section>
</template>
<style scoped>
.card-bg {
  background-image: url("/image/about-us/trust_bg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0px 35px 28px -32px rgba(15, 169, 66, 0.22),
    inset 2px 2px 0px 0px #ffffff;
}
</style>
