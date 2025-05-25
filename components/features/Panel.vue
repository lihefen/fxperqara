<template>
  <div class="relative">
    <div class="max-w-[1280px] px-4 xl:px-30 mx-auto">
      <div
        class="p-3 md:p-6 rounded-xl flex flex-col items-center gap-3 md:gap-6"
      >
        <h5 class="text-2xl lg:text-3xl font-bold text-center">
          LawOnGo Legal Services
        </h5>
        <div
          class="flex md:flex-row md:flex-wrap flex-col gap-4 md:gap-6 w-full cursor-pointer"
        >
          <a
            href="/cari-advokat"
            class="bg-gradient-panel px-6 py-9 space-y-2 md:space-y-4 rounded-xl md:flex-1"
          >
            <div class="flex gap-2 items-center">
              <img
                src="/image/landing-page/icon-legal-consultation-colored.png"
                alt="icon-legal-consultation"
                class="w-12 md:w-14 lg:w-[110px]"
              />
              <div>
                <p class="font-bold text-xl lg:text-2xl flex-1">
                  Debt <br />Consolidation
                </p>
                <p class="text-xs sm:text-sm text-[#647387]">
                  AI+Legal Consultation
                </p>
              </div>
            </div>
            <img
              src="/image/features/polka-dot.svg"
              alt="polka-dot"
              class="absolute right-0 bottom-0 w-[100px]"
            />
          </a>
          <a
            href="/pendirian-badan-usaha"
            class="bg-gradient-panel px-6 py-9 space-y-2 md:space-y-4 rounded-xl md:flex-1 relative cursor-pointer"
          >
            <!-- <div
              class="absolute right-4 -top-3 w-fit rounded-full px-2.5 py-0.5 font-semibold text-sm text-[#F4F2F3] bg-[linear-gradient(96.71deg,#EF5944_19.14%,#FF998B_104.79%)]"
            >
              Baru
            </div> -->
            <div class="flex gap-2 items-center !mt-0">
              <img
                src="/image/navbar/icon-company-establishment.png"
                alt="icon-company-establishment"
                class="w-12 md:w-14 lg:w-[110px]"
              />
              <div>
                <p class="font-bold text-xl lg:text-2xl flex-1">Debt Relief</p>
                <p class="text-xs sm:text-sm text-[#647387]">
                  Debt relief solution
                </p>
              </div>
            </div>
            <img
              src="/image/features/polka-dot.svg"
              alt="polka-dot"
              class="absolute right-0 bottom-0 w-[100px]"
            />
          </a>
          <a
            href="/layanan-lainnya"
            class="bg-gradient-panel px-6 py-9 space-y-2 md:space-y-4 md:max-w-[252px] cursor-pointer"
          >
            <div class="flex gap-2 items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M18.6704 2H16.7704C14.5904 2 13.4404 3.15 13.4404 5.33V7.23C13.4404 9.41 14.5904 10.56 16.7704 10.56H18.6704C20.8504 10.56 22.0004 9.41 22.0004 7.23V5.33C22.0004 3.15 20.8504 2 18.6704 2Z"
                  fill="#0072C3"
                ></path>
                <path
                  opacity="0.4"
                  d="M7.24 13.4302H5.34C3.15 13.4302 2 14.5802 2 16.7602V18.6602C2 20.8502 3.15 22.0002 5.33 22.0002H7.23C9.41 22.0002 10.56 20.8502 10.56 18.6702V16.7702C10.57 14.5802 9.42 13.4302 7.24 13.4302Z"
                  fill="#0072C3"
                ></path>
                <path
                  d="M6.29 10.58C8.6593 10.58 10.58 8.6593 10.58 6.29C10.58 3.9207 8.6593 2 6.29 2C3.9207 2 2 3.9207 2 6.29C2 8.6593 3.9207 10.58 6.29 10.58Z"
                  fill="#0072C3"
                ></path>
                <path
                  d="M17.7099 21.9999C20.0792 21.9999 21.9999 20.0792 21.9999 17.7099C21.9999 15.3406 20.0792 13.4199 17.7099 13.4199C15.3406 13.4199 13.4199 15.3406 13.4199 17.7099C13.4199 20.0792 15.3406 21.9999 17.7099 21.9999Z"
                  fill="#0072C3"
                ></path>
              </svg>
              <p class="font-bold text-xl lg:text-2xl flex-1">Other</p>
            </div>
            <p class="text-xs sm:text-sm text-[#647387]">
              Rapid debt reduction
            </p>
            <img
              src="/image/features/polka-dot.svg"
              alt="polka-dot"
              class="absolute right-0 bottom-0 w-[100px]"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.bg-gradient-panel {
  position: relative;
  background: linear-gradient(327deg, #e1fff2 0%, #ffffff 100%);
  box-shadow: 0px 38px 28px -36px rgba(15, 169, 66, 0.18),
    inset 1px 1px 0px 0px #5ae8ae;
  border-radius: 30px;
  overflow: hidden;
}
</style>
