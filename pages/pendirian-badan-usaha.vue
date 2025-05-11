<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-05-11 10:03:08
 * @LastEditors: hean
 * @LastEditTime: 2025-05-11 10:24:57
-->
<template>
  <div class="bg-cultured font-dm-sans min-h-screen">
    <main>
        <TheNavbar @loginHandler="loginHandler" />
        <div class="font-lexend antialiased bg-[#F3FBFF] relative space-y-8 md:space-y-12">
            <div class="sticky z-20 top-16 bg-transparent py-2">
                <div class="max-w-[1280px] mx-auto px-2 xs:px-4 xl:px-40">
                    <ul class="flex items-center gap-2 xs:gap-3 pb-2 border-b md:w-fit border-[#33B1FF]">
                        <li class="text-xs xs:text-sm !leading-5 p-2 cursor-pointer text-blue-2 transition-all duration-100"> Pilihan Layanan </li>
                        <li class="text-xs xs:text-sm !leading-5 p-2 cursor-pointer text-blue-2 transition-all duration-100"> Keunggulan Perqara </li>
                        <li class="text-xs xs:text-sm !leading-5 p-2 cursor-pointer text-blue-2 transition-all duration-100"> FAQ </li>
                    </ul>
                </div>
            </div>
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
        </div>
        <TheFooter />
    </main>
    <LoginDialog :show.sync="showLoginDialog" @hide="showLoginDialog = false" ></LoginDialog>

  </div>
</template>

<script setup>
import { ref ,defineEmits} from "vue";
const inputSearch = ref('')
const radioStatus = ref(1)
const showLoginDialog = ref(false);
const loginHandler = () => {
    console.log("loginHandler");
    showLoginDialog.value = true;
};

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
::v-deep .el-collapse-item__header {
    border: none;
}

::v-deep .el-collapse {
    border: none;
}
::v-deep .el-collapse-item__wrap {
    border: none;
    
}

::v-deep .el-collapse-item__content {
    padding-bottom: 10px;
}

</style>
