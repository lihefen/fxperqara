<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-05-11 10:03:08
 * @LastEditors: hean
 * @LastEditTime: 2025-05-11 16:47:47
-->
<template>
  <div class="bg-cultured font-dm-sans min-h-screen">
    <main>
        <TheNavbar @loginHandler="loginHandler" />
        <div class="font-lexend antialiased bg-[#F3FBFF] relative space-y-8 md:space-y-12">
            <div class="sticky z-20 top-16 bg-transparent py-2">
                <div class="max-w-[1280px] mx-auto px-2 xs:px-4 xl:px-40">
                    <el-anchor
                        :container="containerRef"
                        direction="horizontal"
                        type="default"
                        @click="handleClick"
                        class="flex items-center gap-2 xs:gap-3 pb-2 border-b md:w-fit border-transparent"
                        >
                        <el-anchor-link  href="#services" class="text-xs xs:text-sm !leading-5 p-2 cursor-pointer text-blue-2 transition-all duration-100" title="Pilihan Layanan " />
                        <el-anchor-link href="#services" class="text-xs xs:text-sm !leading-5 p-2 cursor-pointer text-blue-2 transition-all duration-100" title="Keunggulan Perqara" />
                        <el-anchor-link href="#why-choose-us" class="text-xs xs:text-sm !leading-5 p-2 cursor-pointer text-blue-2 transition-all duration-100" title="FAQ" />
                    </el-anchor>
                    <!-- <ul class="flex items-center gap-2 xs:gap-3 pb-2 border-b md:w-fit border-[#33B1FF]">
                        <li class="text-xs xs:text-sm !leading-5 p-2 cursor-pointer text-blue-2 transition-all duration-100"> Pilihan Layanan </li>
                        <li class="text-xs xs:text-sm !leading-5 p-2 cursor-pointer text-blue-2 transition-all duration-100"> Keunggulan Perqara </li>
                        <li class="text-xs xs:text-sm !leading-5 p-2 cursor-pointer text-blue-2 transition-all duration-100"> FAQ </li>
                    </ul> -->
                </div>
            </div>
            <div  ref="containerRef">
                <div class="relative z-10 max-w-[1280px] mx-auto px-4 xl:px-40 !mt-0">
                    <div class="relative mt-4 lg:mt-[72px] pb-5 flex flex-col lg:flex-row gap-4 lg:gap-12">
                        <div class="lg:max-w-[400px]">
                            <div class="space-y-3">
                                <div class="rounded-full w-fit text-xs xs:text-sm sm:text-base px-3 py-1 font-semibold text-[#F4F2F3] leading-5 bg-[linear-gradient(96.71deg,#EF5944_19.14%,#FF998B_104.79%)] shadow-[-0.8px_0.8px_1.59px_0px_#00000040]"> Pendirian PT, CV, Yayasan </div>
                                <h1 class="font-bold text-2xl sm:text-3xl text-[#2A3342]"> Solusi mudah dan lengkap untuk pendirian badan usaha </h1>
                                <p class="sm:font-semibold text-[#556987] text-sm xs:text-base"> Layanan pendirian badan usaha terlengkap yang diproses sepenuhnya secara online. </p>
                            </div>
                            <button type="button" class="focus:outline-none focus:outline-0 focus-visible:outline-0 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 flex-shrink-0 transition-all ease-in-out duration-300 px-4.5 py-2.5 md:text-lg bg-blue-2 text-white hover:bg-blue-9 rounded-lg hidden lg:inline-block font-semibold !px-20 mt-6"><span> Daftarkan Badan Usaha </span></button>
                        </div>
                        <div>
                            <NuxtImg
                                alt="img-hero"
                                class="w-full"
                                src="/image/notary/img-hero.png" />
                        </div>
                        <button type="button" class="focus:outline-none focus:outline-0 focus-visible:outline-0 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 flex-shrink-0 transition-all ease-in-out duration-300 w-full flex justify-center items-center px-4.5 py-2.5 md:text-lg bg-blue-2 text-white hover:bg-blue-9 rounded-lg lg:hidden font-semibold"><span> Daftarkan Badan Usaha </span></button>
                    </div>
                </div>
                <div id="services" class="relative z-10">
                    <section>
                        <div class="relative z-10 max-w-[1280px] mx-auto px-4 xl:px-40">
                            <div class="rounded-2xl bg-[linear-gradient(180deg,#F3FBFF_-8.4%,#37B3FF_131.35%)] p-6 space-y-6">
                                <h5 class="font-bold text-xl md:text-3xl text-center"> Pilihan Layanan </h5>
                                <div class="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
                                    <div class="bg-white ring-1 ring-[#F6F9FA] rounded-lg shadow-sm">
                                        <div class="px-3 md:px-6 space-y-4 pt-3">
                                            <img src="/image/notary/img-services-1.png" alt="Pendirian PT (Perseroan Terbatas)" class="md:max-h-[100px] w-full md:w-auto mx-auto">
                                            <div class="space-y-2">
                                                <h6 class="font-semibold leading-5 md:h-10 flex items-center">Pendirian PT (Perseroan Terbatas)</h6>
                                                <p class="text-xs text-[#647387] font-light !leading-[18px] md:h-[72px]">Layanan ini mencakup pembuatan akta pendirian PT, pengurusan Nomor Induk Berusaha (NIB), dan pendaftaran ke Kementerian Hukum dan HAM.</p>
                                                <div class="flex gap-1.5 items-end md:gap-1 rounded-lg">
                                                    <div class="text-xs text-[#647387]"> Mulai </div>
                                                    <p class="text-blue-2 font-bold !leading-5 text-xl">Rp4 Juta</p>
                                                </div>
                                                <div class="flex gap-1 items-center">
                                                    <p class="text-xs line-through text-[#757E8C]">Rp10.5 Juta</p>
                                                    <div class="flex items-center justify-center w-[15px] bg-[#FF5B5E] rounded px-1 py-0.5 text-white text-[8px] leading-[10px]"> % </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="border-t border-[#E7ECF0] my-3"></div>
                                        <div class="p-3 pt-0">
                                            <a href="/pendirian-badan-usaha/formulir-perusahaan" class="focus:outline-none focus:outline-0 focus-visible:outline-0 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 flex-shrink-0 transition-all ease-in-out duration-300 w-full flex justify-center items-center px-4 py-2 bg-blue-2 text-white hover:bg-blue-9 rounded-lg font-semibold"> Pilih Layanan </a>
                                        </div>
                                    </div>
                                    <div class="bg-white ring-1 ring-[#F6F9FA] rounded-lg shadow-sm">
                                        <div class="px-3 md:px-6 space-y-4 pt-3">
                                            <img src="/image/notary/img-services-1.png" alt="Pendirian PT (Perseroan Terbatas)" class="md:max-h-[100px] w-full md:w-auto mx-auto">
                                            <div class="space-y-2">
                                                <h6 class="font-semibold leading-5 md:h-10 flex items-center">Pendirian PT (Perseroan Terbatas)</h6>
                                                <p class="text-xs text-[#647387] font-light !leading-[18px] md:h-[72px]">Layanan ini mencakup pembuatan akta pendirian PT, pengurusan Nomor Induk Berusaha (NIB), dan pendaftaran ke Kementerian Hukum dan HAM.</p>
                                                <div class="flex gap-1.5 items-end md:gap-1 rounded-lg">
                                                    <div class="text-xs text-[#647387]"> Mulai </div>
                                                    <p class="text-blue-2 font-bold !leading-5 text-xl">Rp4 Juta</p>
                                                </div>
                                                <div class="flex gap-1 items-center">
                                                    <p class="text-xs line-through text-[#757E8C]">Rp10.5 Juta</p>
                                                    <div class="flex items-center justify-center w-[15px] bg-[#FF5B5E] rounded px-1 py-0.5 text-white text-[8px] leading-[10px]"> % </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="border-t border-[#E7ECF0] my-3"></div>
                                        <div class="p-3 pt-0">
                                            <a href="/pendirian-badan-usaha/formulir-perusahaan" class="focus:outline-none focus:outline-0 focus-visible:outline-0 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 flex-shrink-0 transition-all ease-in-out duration-300 w-full flex justify-center items-center px-4 py-2 bg-blue-2 text-white hover:bg-blue-9 rounded-lg font-semibold"> Pilih Layanan </a>
                                        </div>
                                    </div>
                                    <div class="bg-white ring-1 ring-[#F6F9FA] rounded-lg shadow-sm">
                                        <div class="px-3 md:px-6 space-y-4 pt-3">
                                            <img src="/image/notary/img-services-1.png" alt="Pendirian PT (Perseroan Terbatas)" class="md:max-h-[100px] w-full md:w-auto mx-auto">
                                            <div class="space-y-2">
                                                <h6 class="font-semibold leading-5 md:h-10 flex items-center">Pendirian PT (Perseroan Terbatas)</h6>
                                                <p class="text-xs text-[#647387] font-light !leading-[18px] md:h-[72px]">Layanan ini mencakup pembuatan akta pendirian PT, pengurusan Nomor Induk Berusaha (NIB), dan pendaftaran ke Kementerian Hukum dan HAM.</p>
                                                <div class="flex gap-1.5 items-end md:gap-1 rounded-lg">
                                                    <div class="text-xs text-[#647387]"> Mulai </div>
                                                    <p class="text-blue-2 font-bold !leading-5 text-xl">Rp4 Juta</p>
                                                </div>
                                                <div class="flex gap-1 items-center">
                                                    <p class="text-xs line-through text-[#757E8C]">Rp10.5 Juta</p>
                                                    <div class="flex items-center justify-center w-[15px] bg-[#FF5B5E] rounded px-1 py-0.5 text-white text-[8px] leading-[10px]"> % </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="border-t border-[#E7ECF0] my-3"></div>
                                        <div class="p-3 pt-0">
                                            <a href="/pendirian-badan-usaha/formulir-perusahaan" class="focus:outline-none focus:outline-0 focus-visible:outline-0 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 flex-shrink-0 transition-all ease-in-out duration-300 w-full flex justify-center items-center px-4 py-2 bg-blue-2 text-white hover:bg-blue-9 rounded-lg font-semibold"> Pilih Layanan </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div id="why-choose-us" class="relative z-10 max-w-[1280px] mx-auto px-4 xl:px-40">
                    <section class="space-y-3 md:space-y-8">
                        <h5 class="font-bold text-xl md:text-3xl text-center mb-6"> Mengapa mendirikan badan usaha melalui Perqara? </h5>
                        <div class="grid grid-cols-4 md:grid-cols-5 gap-3 md:gap-8">
                            <div class="relative bg-[linear-gradient(180deg,#012749_0%,#025DAF_100%)] overflow-hidden px-4 py-5 md:px-10 md:py-12 rounded-2xl h-full col-span-4 md:col-span-3">
                                <h6 class="text-white font-bold text-xl md:text-2xl !leading-7"> Praktisi Hukum <br><span class="md:text-3xl">Berpengalaman</span></h6>
                                <p class="font-light text-white text-sm sm:text-base !leading-[18px] mt-5 w-1/2"> Perqara berkomitmen untuk memberikan layanan terbaik untuk Anda. Semua praktisi hukum kami adalah praktisi hukum terpercaya dan berpengalaman di bidangnya. </p>
                                <img src="/image/notary/img-experienced-legal-practitioner.png" alt="img-experienced-legal-practitioner" class="absolute right-0 bottom-0 w-1/2">
                            </div>

                            <div class="bg-[linear-gradient(180deg,#4399E5_0%,#1A61A0_100%)] relative rounded-2xl h-full col-span-2 flex flex-col overflow-hidden">
                                <div class="p-3 md:px-7 md:pt-8 flex gap-3 relative z-10">
                                    <h6 class="text-white font-bold text-xl md:text-2xl !leading-7"> Pengerjaan 3x Lebih Cepat </h6><img src="/image/notary/img-services-fast.png" alt="img-services-fast" class="hidden md:block w-[115px] h-fit -mt-4">
                                </div>
                                <div class="p-3 md:pl-6 md:pr-10 md:pb-9 font-light text-white mt-auto text-sm relative z-10">
                                    <p>Dengan sistem OSS (Online Single Submission), pendirian badan usaha di Perqara selesai 3x lebih cepat dari pembuatan badan usaha secara manual.</p></div><div class="bg-white/10 rounded-[50%] w-[482px] h-[252px] absolute -bottom-20 left-1/2 -translate-x-1/2">
                                </div>
                            </div>

                            <div class="bg-[linear-gradient(180deg,#63B5FF_0%,#2686DD_100%)] relative rounded-2xl md:max-h-[282px] col-span-2 flex flex-col overflow-hidden">
                                <div class="p-3 md:pl-7 md:pt-8 md:pr-10 relative z-10">
                                    <h6 class="text-white font-bold text-xl md:text-2xl md:!leading-7"> Layanan Terjangkau dan Transparan </h6>
                                </div>
                                <div class="px-3 md:px-6 pb-3 md:pb-5 relative z-10 flex items-center mt-auto">
                                    <div class="font-light text-white text-sm">
                                        <p>Dengan proses yang transparan dan biaya yang terjangkau, Perqara menawarkan layanan hukum yang efisien dari segi biaya maupun waktu. </p>
                                    </div>
                                    <img src="/image/notary/img-services-transparent.png" alt="img-services-transparent" class="hidden md:block w-[140px] h-fit mt-5">
                                </div>
                                <div class="w-[350px] h-[350px] rounded-full bg-[#1C2E7F]/30 absolute z-0 top-16 -right-52"></div>
                            </div>

                            <div class="bg-[linear-gradient(90deg,#1A61A0_1.77%,#2280A8_41.43%,#3AA2FF_87.01%)] relative overflow-hidden md:max-h-[282px] p-3.5 md:pl-12 md:pt-10 md:pb-8 rounded-2xl col-span-4 md:col-span-3">
                                <div class="relative z-10">
                                    <h6 class="text-white font-bold text-xl md:text-3xl"> Konsultasi <br class="hidden md:block"><span class="md:text-5xl">Gratis</span></h6>
                                    <p class="font-light text-sm md:text-base text-white mt-4 w-4/5"> Untuk membantu Anda dalam menganalisa kebutuhan usaha, kami menyediakan konsultasi gratis bersama dengan Tim Perqara sebelum dan sesudah pemesanan jasa. </p>
                                    <img src="/image/notary/img-chat.png" alt="img-chat" class="absolute right-0 md:right-12 top-0 md:-top-4 w-20 md:w-40">
                                </div>
                                <div class="w-[350px] h-[350px] rounded-full bg-white/10 absolute z-0 -top-40 -right-52"></div>
                                <div class="w-[350px] h-[350px] rounded-full bg-white/10 absolute z-0 -bottom-36 -right-20"></div>
                            </div>
                        </div>

                        <div class="bg-blue-2 rounded-2xl p-3 md:px-6 md:py-3.5 flex gap-1 md:gap-3 md:items-center">
                            <img src="/image/notary/icon-lamp.png" alt="icon-lamp" class="w-16 h-16 md:w-20 md:h-20">
                            <div class="space-y-2 sm:space-y-2.5 text-[#F4F2F3] flex-1">
                                <p class="text-sm md:text-xl !leading-[18px]"> Tahukah Anda? </p><p class="md:text-2xl md:!leading-[30px]"> “<span class="font-bold">85% Perusahaan</span> yang berbadan hukum mengalami pertumbuhan lebih stabil dalam 5 tahun pertama” </p><p class="text-xs md:text-sm font-light"> (Sumber: World Bank, 2022) </p>
                            </div>
                        </div>
                    </section>
                </div>
                <div id="process-notary" class="relative z-10 max-w-[1280px] mx-auto px-4 xl:px-40">
                    <section class="space-y-8">
                        <h5 class="font-bold text-xl md:text-3xl text-center"> Proses Pendirian Badan Usaha di Perqara </h5>
                        <div class="flex lg:flex-wrap lg:justify-center gap-6 pb-2 overflow-x-auto">
                            <div class="rounded-xl shadow-sm bg-white min-w-[220px] max-w-[304px] overflow-hidden">
                                <div class="relative bg-[#33B1FF] overflow-hidden">
                                    <div class="absolute z-10 top-3 left-4 w-9 h-9 lg:w-12 lg:h-12 bg-blue-2 rounded-full border-4 lg:border-[6px] border-white text-white flex items-center justify-center text-sm lg:text-xl font-bold">1</div>
                                    <img src="/image/notary/img-process-1.png" alt="Pilih Layanan yang Sesuai" class="w-full relative z-[5]">
                                    <div class="w-[350px] h-[350px] rounded-full bg-white/10 absolute z-0 top-16 left-1/2 -translate-x-1/2"></div>
                                </div>
                                <div class="p-3 space-y-4">
                                    <p class="font-bold lg:text-xl lg:!leading-[22px] h-10 lg:h-[44px] text-center text-[#2A3342] lg:px-4">Pilih Layanan yang Sesuai</p><p class="text-xs lg:text-sm font-light !leading-[18px] lg:!leading-[22px] text-[#556987]">Telusuri berbagai layanan yang kami tawarkan, seperti pendirian PT, CV atau Yayasan. Pilih layanan yang paling sesuai dengan kebutuhan perusahaan Anda.</p>
                                </div>
                            </div>
                            <div class="rounded-xl shadow-sm bg-white min-w-[220px] max-w-[304px] overflow-hidden">
                                <div class="relative bg-[#33B1FF] overflow-hidden">
                                    <div class="absolute z-10 top-3 left-4 w-9 h-9 lg:w-12 lg:h-12 bg-blue-2 rounded-full border-4 lg:border-[6px] border-white text-white flex items-center justify-center text-sm lg:text-xl font-bold">1</div>
                                    <img src="/image/notary/img-process-1.png" alt="Pilih Layanan yang Sesuai" class="w-full relative z-[5]">
                                    <div class="w-[350px] h-[350px] rounded-full bg-white/10 absolute z-0 top-16 left-1/2 -translate-x-1/2"></div>
                                </div>
                                <div class="p-3 space-y-4">
                                    <p class="font-bold lg:text-xl lg:!leading-[22px] h-10 lg:h-[44px] text-center text-[#2A3342] lg:px-4">Pilih Layanan yang Sesuai</p><p class="text-xs lg:text-sm font-light !leading-[18px] lg:!leading-[22px] text-[#556987]">Telusuri berbagai layanan yang kami tawarkan, seperti pendirian PT, CV atau Yayasan. Pilih layanan yang paling sesuai dengan kebutuhan perusahaan Anda.</p>
                                </div>
                            </div>
                            <div class="rounded-xl shadow-sm bg-white min-w-[220px] max-w-[304px] overflow-hidden">
                                <div class="relative bg-[#33B1FF] overflow-hidden">
                                    <div class="absolute z-10 top-3 left-4 w-9 h-9 lg:w-12 lg:h-12 bg-blue-2 rounded-full border-4 lg:border-[6px] border-white text-white flex items-center justify-center text-sm lg:text-xl font-bold">1</div>
                                    <img src="/image/notary/img-process-1.png" alt="Pilih Layanan yang Sesuai" class="w-full relative z-[5]">
                                    <div class="w-[350px] h-[350px] rounded-full bg-white/10 absolute z-0 top-16 left-1/2 -translate-x-1/2"></div>
                                </div>
                                <div class="p-3 space-y-4">
                                    <p class="font-bold lg:text-xl lg:!leading-[22px] h-10 lg:h-[44px] text-center text-[#2A3342] lg:px-4">Pilih Layanan yang Sesuai</p><p class="text-xs lg:text-sm font-light !leading-[18px] lg:!leading-[22px] text-[#556987]">Telusuri berbagai layanan yang kami tawarkan, seperti pendirian PT, CV atau Yayasan. Pilih layanan yang paling sesuai dengan kebutuhan perusahaan Anda.</p>
                                </div>
                            </div>
                            <div class="rounded-xl shadow-sm bg-white min-w-[220px] max-w-[304px] overflow-hidden">
                                <div class="relative bg-[#33B1FF] overflow-hidden">
                                    <div class="absolute z-10 top-3 left-4 w-9 h-9 lg:w-12 lg:h-12 bg-blue-2 rounded-full border-4 lg:border-[6px] border-white text-white flex items-center justify-center text-sm lg:text-xl font-bold">1</div>
                                    <img src="/image/notary/img-process-1.png" alt="Pilih Layanan yang Sesuai" class="w-full relative z-[5]">
                                    <div class="w-[350px] h-[350px] rounded-full bg-white/10 absolute z-0 top-16 left-1/2 -translate-x-1/2"></div>
                                </div>
                                <div class="p-3 space-y-4">
                                    <p class="font-bold lg:text-xl lg:!leading-[22px] h-10 lg:h-[44px] text-center text-[#2A3342] lg:px-4">Pilih Layanan yang Sesuai</p><p class="text-xs lg:text-sm font-light !leading-[18px] lg:!leading-[22px] text-[#556987]">Telusuri berbagai layanan yang kami tawarkan, seperti pendirian PT, CV atau Yayasan. Pilih layanan yang paling sesuai dengan kebutuhan perusahaan Anda.</p>
                                </div>
                            </div>
                            <div class="rounded-xl shadow-sm bg-white min-w-[220px] max-w-[304px] overflow-hidden">
                                <div class="relative bg-[#33B1FF] overflow-hidden">
                                    <div class="absolute z-10 top-3 left-4 w-9 h-9 lg:w-12 lg:h-12 bg-blue-2 rounded-full border-4 lg:border-[6px] border-white text-white flex items-center justify-center text-sm lg:text-xl font-bold">1</div>
                                    <img src="/image/notary/img-process-1.png" alt="Pilih Layanan yang Sesuai" class="w-full relative z-[5]">
                                    <div class="w-[350px] h-[350px] rounded-full bg-white/10 absolute z-0 top-16 left-1/2 -translate-x-1/2"></div>
                                </div>
                                <div class="p-3 space-y-4">
                                    <p class="font-bold lg:text-xl lg:!leading-[22px] h-10 lg:h-[44px] text-center text-[#2A3342] lg:px-4">Pilih Layanan yang Sesuai</p><p class="text-xs lg:text-sm font-light !leading-[18px] lg:!leading-[22px] text-[#556987]">Telusuri berbagai layanan yang kami tawarkan, seperti pendirian PT, CV atau Yayasan. Pilih layanan yang paling sesuai dengan kebutuhan perusahaan Anda.</p>
                                </div>
                            </div>
                            <div class="rounded-xl shadow-sm bg-white min-w-[220px] max-w-[304px] overflow-hidden">
                                <div class="relative bg-[#33B1FF] overflow-hidden">
                                    <div class="absolute z-10 top-3 left-4 w-9 h-9 lg:w-12 lg:h-12 bg-blue-2 rounded-full border-4 lg:border-[6px] border-white text-white flex items-center justify-center text-sm lg:text-xl font-bold">1</div>
                                    <img src="/image/notary/img-process-1.png" alt="Pilih Layanan yang Sesuai" class="w-full relative z-[5]">
                                    <div class="w-[350px] h-[350px] rounded-full bg-white/10 absolute z-0 top-16 left-1/2 -translate-x-1/2"></div>
                                </div>
                                <div class="p-3 space-y-4">
                                    <p class="font-bold lg:text-xl lg:!leading-[22px] h-10 lg:h-[44px] text-center text-[#2A3342] lg:px-4">Pilih Layanan yang Sesuai</p><p class="text-xs lg:text-sm font-light !leading-[18px] lg:!leading-[22px] text-[#556987]">Telusuri berbagai layanan yang kami tawarkan, seperti pendirian PT, CV atau Yayasan. Pilih layanan yang paling sesuai dengan kebutuhan perusahaan Anda.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <section id="faqs" class="py-6 md:py-12 bg-[#E5F6FF]">
                    <div class="relative z-10 max-w-[1280px] mx-auto px-4 xl:px-40">
                        <div class="flex items-center justify-center gap-4">
                            <NuxtImg
                                alt="img-faq"
                                class="w-1/3 lg:w-[35%] md:block hidden"
                                src="image/notary/img-faq.png" />
                            <div class="space-y-4">
                                <h6 class="font-bold text-xl md:text-3xl text-center"> Masih Ada Pertanyaan? </h6>
                                <div class="space-y-4">
                                    <div class="group bg-white border border-[#EEF2F7] rounded-xl px-4 py-3 shadow-sm flex gap-4 cursor-pointer transition-all duration-300 ease-in-out">

                                    </div>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <TheFooter />
    </main>
    <LoginDialog :show.sync="showLoginDialog" @hide="showLoginDialog = false" ></LoginDialog>

  </div>
</template>

<script setup>
import { ref ,defineEmits} from "vue";
// const containerRef = ref<HTMLElement | null>(null);
const inputSearch = ref('')
const radioStatus = ref(1)
const showLoginDialog = ref(false);
const activeNames = ref(['1'])
const loginHandler = () => {
    console.log("loginHandler");
    showLoginDialog.value = true;
};
const handleChange = (val) => {
  console.log(val)
}


const provinsiOptions = [
  {
    value: 'ACEH',
    label: 'ACEH',
  },
  {
    value: 'SUMATERA UTARA',
    label: 'SUMATERA UTARA',
  },
  {
    value: 'SUMATERA BARAT',
    label: 'SUMATERA BARAT',
  },
  {
    value: 'RIAU',
    label: 'RIAU',
  },
  {
    value: 'JAMBI',
    label: 'JAMBI',
  },
]

const kotaOptions = [
    {
        value: 'SIMEULUE',
        label: 'SIMEULUE',
    },
    {
        value: 'ACEH SINGKIL',
        label: 'ACEH SINGKIL',
    },
    {
        value: 'ACEH SELATAN',
        label: 'ACEH SELATAN',
    },
    {
        value: 'ACEH TENGGARA',
        label: 'ACEH TENGGARA',
    },
    
]

</script>


<style scoped>
.gap-4 {
    gap: 1rem;
}
::v-deep .el-collapse-item__header {
    border: none;
    font-size: inherit;
}

::v-deep .el-collapse {
    border: none;
}
::v-deep .el-collapse-item__wrap {
    border: none;
    
}

::v-deep .el-collapse-item__content {
    padding-bottom: 10px;
    font-size: inherit;
}

::v-deep .el-anchor {
    background:initial;
    font-size: initial;
}

::v-deep  .el-anchor__link {
    font-size: initial;
}

::v-deep  .el-anchor__marker {
    display: none;
}

</style>
