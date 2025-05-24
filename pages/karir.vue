<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-05-11 10:03:08
 * @LastEditors: hean
 * @LastEditTime: 2025-05-24 13:15:59
-->
<template>
  <div class="bg-cultured font-dm-sans min-h-screen">
    <main>
        <TheNavbar @loginHandler="loginHandler" />
        <div class="bg-white text-[#3A475B] font-lexend">
            <div class="relative md:pb-20 sm:pb-12 pb-8 -mt-16">
                <div class="relative z-10">
                    <section id="life-at-perqara">
                        <div class="container max-w-[1280px] p-4 xl:px-40 mx-auto">
                            <div class="md:pt-32 sm:pt-24 pt-14 text-center">
                                <h1 class="text-[#1C232D] text-2xl sm:text-4xl font-semibold mb-4" > Life at <span class="text-steelBlue" >LawOnGo</span></h1>
                                <p class="text-sm text-[#3A475B] sm:inline-block hidden" > Temukan karir impianmu di LawOnGo! </p>
                            </div>
                            <img
                                alt="header"
                                class="w-full sm:mt-8 mt-0"
                                src="/image/career-page/header.png" />
                            <div class="flex sm:flex-row flex-col gap-4.5 justify-between items-start sm:mt-9 mt-4.5" >
                                <div class="relative" >
                                    <img src="/image/career-page/quotation-mark.svg" alt="" class="absolute z-[-1] -left-5 -top-1" >
                                    <p class="md:w-1/2 sm:text-base text-sm" ><b >LawOnGo</b> menawarkan lingkungan yang dinamis di mana setiap orang dapat terlibat dan berkontribusi pada setiap proyek. Kami percaya bahwa setiap opini, eksperimen, bahkan kegagalan adalah bagian dari proses pembelajaran yang pada akhirnya mengarah pada pengembangan produk dan layanan yang lebih baik. </p>
                                </div>
                                <button type="button" class="focus:outline-none focus:outline-0 focus-visible:outline-0 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 flex-shrink-0 transition-all ease-in-out duration-300 px-4.5 py-2.5 md:text-lg bg-blue-2 text-white hover:bg-blue-9 rounded-lg !px-7" >
                                    <span><!--[--> Lihat Karir <!--]--></span>
                                </button>
                            </div>

                            <div class="md:mt-32 sm:mt-10 mt-8" >
                                <div class="grid sm:grid-cols-3 grid-cols-2 sm:gap-4 gap-2" ><!--[-->
                                    <img
                                        class="sm:w-[256px] sm:h-[168.26px] object-cover rounded-xl w-full self-end justify-self-end"
                                        src="/image/career-page/img-1.png" />
                                    <img
                                        class="sm:w-[352px] w-full"
                                        src="/image/career-page/img-2.png" />
                                    <img
                                        class="sm:w-[256px] w-full self-end" 
                                        src="/image/career-page/img-3.png" />
                                    <img
                                       class="sm:w-[256px] sm:h-[150.41px] object-cover rounded-xl w-full self-start justify-self-end"
                                        src="/image/career-page/img-4.png" />
                                    <img
                                       class="sm:w-[352px] w-full"
                                        src="/image/career-page/img-5.png" />
                                    <img
                                        class="sm:w-[256px] w-full"
                                        src="/image/career-page/img-6.png" />
                                </div>
                            </div>

                            
                        </div>
                    </section>

                    <section id="value-perqara" class="md:mt-24 mt-8">
                        <h1 class="text-2xl sm:text-4xl text-[#1C232D] font-semibold text-center mb-12" > Our Values </h1>
                    </section>
                    <section id="career" class="md:mt-16 mt-8">
                        <div class="container max-w-[1280px] xl:px-32 mx-auto">
                            <div class="flex flex-col gap-6 bg-[#F5FBFD] md:p-8 p-4">
                                <h1 class="text-[#1C232D] text-2xl sm:text-4xl font-semibold text-center"> Karir </h1>

                                <div class="bg-[#FDFEFF] rounded-lg drop-shadow-[0_2px_10px_rgba(0,0,0,0.15)] md:px-8 sm:p-4 md:py-4 p-3 flex sm:flex-row flex-col md:gap-9 gap-3 md:items-center justify-between">
                                    <div class="flex flex-col gap-2 sm:w-1/3" >
                                        <h2 class="text-base md:text-2xl font-semibold text-[#2072B8]" >Product Manager</h2>
                                        <p class="text-base text-[#3A475B]" >Jakarta</p>
                                    </div>
                                    <div class="flex items-center gap-3 flex-1" >
                                        <div class="flex items-center gap-2" >
                                            <span class="relative flex items-center justify-center w-4.5 h-4.5" >
                                                <span class="absolute inline-flex h-full w-full rounded-full bg-[#E7ECF0]" >
                                                </span>
                                                <span class="relative inline-flex rounded-full h-3 w-3 bg-[#55707A]" >
                                                </span>
                                            </span>
                                            <span >Manager</span>
                                        </div>
                                        <div class="flex items-center gap-2" >
                                            <span class="relative flex items-center justify-center w-4.5 h-4.5" >
                                                <span class="absolute inline-flex h-full w-full rounded-full bg-[#E7ECF0]" ></span>
                                                <span class="relative inline-flex rounded-full h-3 w-3 bg-[#55707A]" ></span>
                                            </span>
                                            <span >Product</span>
                                        </div>
                                    </div>
                                    <button type="button" class="focus:outline-none focus:outline-0 focus-visible:outline-0 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 flex-shrink-0 transition-all ease-in-out duration-300 px-4.5 py-2.5 md:text-lg bg-blue-2 text-white hover:bg-blue-9 rounded-lg !px-7 sm:self-center" ><span><!--[--> Lihat Karir <!--]--></span></button>
                                </div>

                                <div class="bg-[#FDFEFF] rounded-lg drop-shadow-[0_2px_10px_rgba(0,0,0,0.15)] md:px-8 sm:p-4 md:py-4 p-3 flex sm:flex-row flex-col md:gap-9 gap-3 md:items-center justify-between">
                                    <div class="flex flex-col gap-2 sm:w-1/3" >
                                        <h2 class="text-base md:text-2xl font-semibold text-[#2072B8]" >Product Manager</h2>
                                        <p class="text-base text-[#3A475B]" >Jakarta</p>
                                    </div>
                                    <div class="flex items-center gap-3 flex-1" >
                                        <div class="flex items-center gap-2" >
                                            <span class="relative flex items-center justify-center w-4.5 h-4.5" >
                                                <span class="absolute inline-flex h-full w-full rounded-full bg-[#E7ECF0]" >
                                                </span>
                                                <span class="relative inline-flex rounded-full h-3 w-3 bg-[#55707A]" >
                                                </span>
                                            </span>
                                            <span >Manager</span>
                                        </div>
                                        <div class="flex items-center gap-2" >
                                            <span class="relative flex items-center justify-center w-4.5 h-4.5" >
                                                <span class="absolute inline-flex h-full w-full rounded-full bg-[#E7ECF0]" ></span>
                                                <span class="relative inline-flex rounded-full h-3 w-3 bg-[#55707A]" ></span>
                                            </span>
                                            <span >Product</span>
                                        </div>
                                    </div>
                                    <button type="button" class="focus:outline-none focus:outline-0 focus-visible:outline-0 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 flex-shrink-0 transition-all ease-in-out duration-300 px-4.5 py-2.5 md:text-lg bg-blue-2 text-white hover:bg-blue-9 rounded-lg !px-7 sm:self-center" ><span><!--[--> Lihat Karir <!--]--></span></button>
                                </div>


                                <div class="bg-[#FDFEFF] rounded-lg drop-shadow-[0_2px_10px_rgba(0,0,0,0.15)] md:px-8 sm:p-4 md:py-4 p-3 flex sm:flex-row flex-col md:gap-9 gap-3 md:items-center justify-between">
                                    <div class="flex flex-col gap-2 sm:w-1/3" >
                                        <h2 class="text-base md:text-2xl font-semibold text-[#2072B8]" >Product Manager</h2>
                                        <p class="text-base text-[#3A475B]" >Jakarta</p>
                                    </div>
                                    <div class="flex items-center gap-3 flex-1" >
                                        <div class="flex items-center gap-2" >
                                            <span class="relative flex items-center justify-center w-4.5 h-4.5" >
                                                <span class="absolute inline-flex h-full w-full rounded-full bg-[#E7ECF0]" >
                                                </span>
                                                <span class="relative inline-flex rounded-full h-3 w-3 bg-[#55707A]" >
                                                </span>
                                            </span>
                                            <span >Manager</span>
                                        </div>
                                        <div class="flex items-center gap-2" >
                                            <span class="relative flex items-center justify-center w-4.5 h-4.5" >
                                                <span class="absolute inline-flex h-full w-full rounded-full bg-[#E7ECF0]" ></span>
                                                <span class="relative inline-flex rounded-full h-3 w-3 bg-[#55707A]" ></span>
                                            </span>
                                            <span >Product</span>
                                        </div>
                                    </div>
                                    <button type="button" class="focus:outline-none focus:outline-0 focus-visible:outline-0 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 flex-shrink-0 transition-all ease-in-out duration-300 px-4.5 py-2.5 md:text-lg bg-blue-2 text-white hover:bg-blue-9 rounded-lg !px-7 sm:self-center" ><span><!--[--> Lihat Karir <!--]--></span></button>
                                </div>


                                <div class="bg-[#FDFEFF] rounded-lg drop-shadow-[0_2px_10px_rgba(0,0,0,0.15)] md:px-8 sm:p-4 md:py-4 p-3 flex sm:flex-row flex-col md:gap-9 gap-3 md:items-center justify-between">
                                    <div class="flex flex-col gap-2 sm:w-1/3" >
                                        <h2 class="text-base md:text-2xl font-semibold text-[#2072B8]" >Product Manager</h2>
                                        <p class="text-base text-[#3A475B]" >Jakarta</p>
                                    </div>
                                    <div class="flex items-center gap-3 flex-1" >
                                        <div class="flex items-center gap-2" >
                                            <span class="relative flex items-center justify-center w-4.5 h-4.5" >
                                                <span class="absolute inline-flex h-full w-full rounded-full bg-[#E7ECF0]" >
                                                </span>
                                                <span class="relative inline-flex rounded-full h-3 w-3 bg-[#55707A]" >
                                                </span>
                                            </span>
                                            <span >Manager</span>
                                        </div>
                                        <div class="flex items-center gap-2" >
                                            <span class="relative flex items-center justify-center w-4.5 h-4.5" >
                                                <span class="absolute inline-flex h-full w-full rounded-full bg-[#E7ECF0]" ></span>
                                                <span class="relative inline-flex rounded-full h-3 w-3 bg-[#55707A]" ></span>
                                            </span>
                                            <span >Product</span>
                                        </div>
                                    </div>
                                    <button type="button" class="focus:outline-none focus:outline-0 focus-visible:outline-0 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 flex-shrink-0 transition-all ease-in-out duration-300 px-4.5 py-2.5 md:text-lg bg-blue-2 text-white hover:bg-blue-9 rounded-lg !px-7 sm:self-center" ><span><!--[--> Lihat Karir <!--]--></span></button>
                                </div>


                                <div class="bg-[#FDFEFF] rounded-lg drop-shadow-[0_2px_10px_rgba(0,0,0,0.15)] md:px-8 sm:p-4 md:py-4 p-3 flex sm:flex-row flex-col md:gap-9 gap-3 md:items-center justify-between">
                                    <div class="flex flex-col gap-2 sm:w-1/3" >
                                        <h2 class="text-base md:text-2xl font-semibold text-[#2072B8]" >Product Manager</h2>
                                        <p class="text-base text-[#3A475B]" >Jakarta</p>
                                    </div>
                                    <div class="flex items-center gap-3 flex-1" >
                                        <div class="flex items-center gap-2" >
                                            <span class="relative flex items-center justify-center w-4.5 h-4.5" >
                                                <span class="absolute inline-flex h-full w-full rounded-full bg-[#E7ECF0]" >
                                                </span>
                                                <span class="relative inline-flex rounded-full h-3 w-3 bg-[#55707A]" >
                                                </span>
                                            </span>
                                            <span >Manager</span>
                                        </div>
                                        <div class="flex items-center gap-2" >
                                            <span class="relative flex items-center justify-center w-4.5 h-4.5" >
                                                <span class="absolute inline-flex h-full w-full rounded-full bg-[#E7ECF0]" ></span>
                                                <span class="relative inline-flex rounded-full h-3 w-3 bg-[#55707A]" ></span>
                                            </span>
                                            <span >Product</span>
                                        </div>
                                    </div>
                                    <button type="button" class="focus:outline-none focus:outline-0 focus-visible:outline-0 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 flex-shrink-0 transition-all ease-in-out duration-300 px-4.5 py-2.5 md:text-lg bg-blue-2 text-white hover:bg-blue-9 rounded-lg !px-7 sm:self-center" ><span><!--[--> Lihat Karir <!--]--></span></button>
                                </div>


                                <div class="bg-[#FDFEFF] rounded-lg drop-shadow-[0_2px_10px_rgba(0,0,0,0.15)] md:px-8 sm:p-4 md:py-4 p-3 flex sm:flex-row flex-col md:gap-9 gap-3 md:items-center justify-between">
                                    <div class="flex flex-col gap-2 sm:w-1/3" >
                                        <h2 class="text-base md:text-2xl font-semibold text-[#2072B8]" >Product Manager</h2>
                                        <p class="text-base text-[#3A475B]" >Jakarta</p>
                                    </div>
                                    <div class="flex items-center gap-3 flex-1" >
                                        <div class="flex items-center gap-2" >
                                            <span class="relative flex items-center justify-center w-4.5 h-4.5" >
                                                <span class="absolute inline-flex h-full w-full rounded-full bg-[#E7ECF0]" >
                                                </span>
                                                <span class="relative inline-flex rounded-full h-3 w-3 bg-[#55707A]" >
                                                </span>
                                            </span>
                                            <span >Manager</span>
                                        </div>
                                        <div class="flex items-center gap-2" >
                                            <span class="relative flex items-center justify-center w-4.5 h-4.5" >
                                                <span class="absolute inline-flex h-full w-full rounded-full bg-[#E7ECF0]" ></span>
                                                <span class="relative inline-flex rounded-full h-3 w-3 bg-[#55707A]" ></span>
                                            </span>
                                            <span >Product</span>
                                        </div>
                                    </div>
                                    <button type="button" class="focus:outline-none focus:outline-0 focus-visible:outline-0 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 flex-shrink-0 transition-all ease-in-out duration-300 px-4.5 py-2.5 md:text-lg bg-blue-2 text-white hover:bg-blue-9 rounded-lg !px-7 sm:self-center" ><span><!--[--> Lihat Karir <!--]--></span></button>
                                </div>

                                <div class="relative flex sm:flex-row flex-col gap-3 justify-between rounded-2xl md:p-6 p-3 bg-gradient-to-r from-blue-2 to-[#D301BE]/50 overflow-hidden" data-v-63014e6b="">
                                    <img src="/image/career-page/bg-form-career.svg" alt="" class="absolute inset-0 rounded-2xl z-0 w-full h-full" data-v-63014e6b="">
                                    <div class="relative text-cultured flex flex-col gap-2" data-v-63014e6b="">
                                        <h4 class="text-xl sm:text-2xl font-semibold" data-v-63014e6b=""> Tidak menemukan Karir yang anda cari? </h4>
                                        <p data-v-63014e6b="">Temukan karir impianmu di LawOnGo</p>
                                    </div>
                                    <button type="button" class="focus:outline-none focus:outline-0 focus-visible:outline-0 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 flex-shrink-0 transition-all ease-in-out duration-300 px-4.5 py-2.5 md:text-lg bg-white text-lightblack-1 hover:bg-cultured rounded-lg !px-10 sm:self-center relative font-semibold" data-v-63014e6b=""><span><!--[--> Isi Form Karir <!--]--></span></button>
                                </div>

                            </div>
                        </div>
                    </section>

                    <div class="container max-w-[1280px] px-4 xl:px-40 mx-auto md:mt-20 sm:mt-12 mt-8" >
                        <div class="relative bg-blue-2 rounded-2xl md:pt-3.5 md:pl-8 md:pr-14 md:pb-0 p-4 overflow-hidden" >
                            <img src="/image/bg-banner-consultation.svg" alt="" class="absolute inset-0 z-0 w-full h-full md:block hidden">
                            <img src="/image/landing-page/mobile-consult-now-bg.svg" alt="" class="absolute left-0 bottom-0 z-0 md:hidden block">
                            <div class="relative flex md:flex-row flex-col items-center flex-1 md:gap-0 gap-3">
                                <img src="/image/banner-icon-mobile.png" alt="">
                                <div class="flex lg:flex-row flex-col lg:items-center lg:gap-8 gap-3 lg:mb-0 md:mb-4">
                                    <div class="flex flex-col gap-2.5 text-cultured flex-1 md:text-left text-center">
                                        <h1 class="text-2xl font-semibold"> Consult your legal problem now！ </h1>
                                        <p>With LawOnGo,anyone can havea legal consultation anytime and anywhere.</p>
                                    </div>
                                    <div class="flex items-center md:justify-start justify-center gap-2">
                                        <a href="https://apps.apple.com/id/app/perqara/id6443946589" rel="noopener noreferrer" target="_blank">
                                            <img
                                                alt="appstore-logo"
                                                class="md:w-36 w-full"
                                                src="/image/landing-page/appstore-logo.png" />
                                        </a>
                                        <a href="https://play.google.com/store/apps/details?id=com.limaindonesia.perqara" rel="noopener noreferrer" target="_blank">
                                            <img
                                                alt="android-logo"
                                                class="md:w-36 w-full"
                                                src="/image/landing-page/google-logo.png" />
                                            </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-16">
            <TheFooter />
        </div>
        
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
const inputHukum =ref('')
const textareaDibutuhkan = ref('')
const loginHandler = () => {
    console.log("loginHandler");
    showLoginDialog.value = true;
};
const handleChange = (val) => {
  console.log(val)
}


const hukumOptions = [
  {
    value: 'Pembuatan Dokumen',
    label: 'Pembuatan Dokumen',
  },
  {
    value: 'Pendaftaran HAKI (Hak Kekayaan Intelektual)',
    label: 'Pendaftaran HAKI (Hak Kekayaan Intelektual)',
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
