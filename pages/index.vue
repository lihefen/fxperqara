<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-05-07 23:27:22
 * @LastEditors: hean
 * @LastEditTime: 2025-05-08 08:04:10
-->
<template>
  <div class="bg-[#f4f2f3] font-dm-sans min-h-screen">
    <main>
        <TheNavbar />
        <div class="bg-white font-lexend -mt-16">
            <section id="features" class="pt-10 md:pt-20 pb-10 font-lexend antialiased">
                <div class="relative z-[5] -mb-64 md:-mb-52">
                    <div class="max-w-[1280px] px-4 xl:px-40 mx-auto">
                        <div class="bg-[linear-gradient(180deg,#F3FBFF_-8.4%,#52BEE7_131.35%)] shadow p-3 md:p-6 rounded-xl flex flex-col items-center gap-3 md:gap-6">
                            <h5 class="text-2xl lg:text-3xl font-bold text-center"> Layanan Hukum Perqara </h5>
                            <div class="flex md:flex-row md:flex-wrap flex-col gap-4 md:gap-6 w-full cursor-pointer">
                                <a href="#" class="bg-white shadow-md p-3 space-y-2 md:space-y-4 rounded-xl md:flex-1">
                                    <div class="flex gap-2 items-center">
                                        <NuxtImg
                                            alt="icon-legal-consultation"
                                            class="w-12 md:w-14 lg:w-[72px]"
                                            src="/image/landing-page/icon-legal-consultation-colored.svg"
                                        />
                                        <p class="font-bold text-xl lg:text-2xl flex-1"> Konsultasi Hukum Online </p>
                                    </div>
                                    <p class="text-xs sm:text-sm text-[#647387]"> Perqara bermitra dengan Advokat-advokat terbaik yang telah disumpah. </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <NuxtImg
                    alt="bg-wave"
                    class="w-full"
                    src="/image/landing-page/bg-wave.svg"
                />
            </section>
        </div>
        <TheFooter />
    </main>
  </div>
</template>

<script setup lang="ts">
    console.log('11')
</script>
