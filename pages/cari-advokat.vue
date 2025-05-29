<template>
  <div class="bg-cultured font-dm-sans min-h-screen">
    <main>
        <TheNavbar @loginHandler="loginHandler" />
        <div class="bg-[#F6F9FD]">
            <div class="container max-w-[1200px] mx-auto xl:p-0  h-full 2xl:h-auto relative">
                <div class="text-black pt-4 md:pt-8 p-4"><p class="font-lexend font-bold text-xl lg:text-3xl"> Debt Consolidation </p><h1 class="text-[#757E8C] font-lexend text-xs lg:text-base font-semibold antialiased"> Find the best Advoca </h1></div>

                <div id="wrap-inputSearching" class="pb-6 p-4 sticky top-16 z-[5] flex flex-row gap-5 lg:block bg-[#F6F9FD]">
                    <div class="basis-5/6">
                        <div class="relative">
                            <el-input
                                v-model="inputSearch"
                                type="search"
                                placeholder="Search Advocate Name"
                                :prefix-icon="Search"
                                size="large"
                            >
                                <template #suffix>
                                    <img
                                    alt="icon-search"
                                    class="w-6 h-6"
                                    src="/image/utils/icon-search.png" />
                                </template>
                            </el-input>
                        </div>
                    </div>
                    <div class="relative basis-1/6 bg-white border border-blue-2 lg:hidden rounded-md flex justify-center items-center">
                        <button class="w-6 h-6">
                            <img
                                alt="icon-filter"
                                class="w-6 h-6"
                                src="/image/utils/icon-filter.png" />
                        </button>
                    </div>
                </div>

                <div class="lg:grid lg:grid-cols-3 lg:gap-x-6 px-4">
                    <div>
                        <div id="wrap-filter-mobile">

                        </div>
                        <div class="lg:sticky lg:top-[150px]">
                            <div class="hidden lg:block">
                                <div class="z-10 grid place-items-center fixed overflow-auto top-0 left-0 h-full w-full bg-black bg-opacity-50 lg:static lg:overflow-visible lg:place-items-baseline lg:bg-transparent lg:top-auto lg:left-0">
                                    <div class="bg-white min-w-[328px] lg:min-w-[304px] rounded-lg p-3 fixed w-full lg:relative bottom-0 font-lexend antialiased">
                                        <section id="top-filter" class="lg:bg-transparent mb-4">
                                            <div class="flex justify-between items-center"><p class="text-black text-xl font-bold flex items-center gap-2"> Filter </p><button class="text-blue-2 font-bold text-xs hidden lg:block"> Reset </button><button class="lg:hidden"><img src="/image/exit.png" alt="arrow"></button>
                                            </div>
                                        </section>
                                        <div id="border-solid" class="h-1 border-t border-solid border-lightgrey-2"></div>
                                        <section id="content-filter" class="overflow-y-auto scroll-smooth h-[550px] p-1">
                                            <div class="flex flex-col gap-4">
                                                <div id="wrap-status">
                                                    <div class="text-black antialiased font-medium text-xs leading-6"><h2>Status</h2></div>
                                                    <div class="flex flex-col gap-1.5">
                                                        <el-radio-group v-model="radioStatus">
                                                            <el-radio :value="1"> Semua Status </el-radio>
                                                            <el-radio :value="2">online</el-radio>
                                                        </el-radio-group>
                                                    </div>
                                                </div>
                                                <div id="border-solid" class="h-1 border-t border-solid border-lightgrey-2"></div>
                                                <div id="wrap-kategori">
                                                    <div class="text-black antialiased font-medium text-xs leading-6"><h2>Kategori</h2></div>
                                                    <div>
                                                        <div>
                                                            <el-checkbox v-model="checked1" label="Kepailitan &amp; PKPU" size="large" />
                                                        </div>
                                                        <div>
                                                            <el-checkbox v-model="checked1" label="Ketenagakerjaan" size="large" />
                                                        </div>
                                                        <div>
                                                            <el-checkbox v-model="checked1" label="Perkawinan & Perceraian" size="large" />
                                                        </div>
                                                        <div>
                                                            <el-checkbox v-model="checked1" label="Pertanahan" size="large" />
                                                        </div>
                                                        <div>
                                                            <el-checkbox v-model="checked1" label="Perdata" size="large" />
                                                        </div>
                                                        <div>
                                                            <el-checkbox v-model="checked1" label="Pajak Perusahaan" size="large" />
                                                        </div>
                                                        <div>
                                                            <el-checkbox v-model="checked1" label="Pajak Pribadi" size="large" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="border-solid" class="h-1 border-t border-solid border-lightgrey-2"></div>
                                                <div id="wrap-province">
                                                    <div class="text-black antialiased font-medium text-xs leading-6"><h2>Provinsi</h2></div>
                                                    <div>
                                                        <el-select
                                                            v-model="inputCity"
                                                            placeholder="Cari Provinsi"
                                                            size="large"
                                                        >
                                                            <el-option
                                                                v-for="item in provinsiOptions"
                                                                :key="item.value"
                                                                :label="item.label"
                                                                :value="item.value"
                                                            />
                                                        </el-select>
                                                    </div>
                                                </div>
                                                <div id="wrap-kota">
                                                    <div class="text-black antialiased font-medium text-xs leading-6"><h2>Kota</h2></div>
                                                    <div>
                                                        <el-select
                                                            v-model="inputCity"
                                                            placeholder="Cari Kota"
                                                            size="large"
                                                        >
                                                            <el-option
                                                                v-for="item in kotaOptions"
                                                                :key="item.value"
                                                                :label="item.label"
                                                                :value="item.value"
                                                            />
                                                        </el-select>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="lg:col-span-2">
                        <!-- <CariSwiper /> -->
                        <div class="mb-4">
                            <div>
                                <div class="cursor-pointer relative font-lexend min-w-[328px] max-h-[239px] mb-4">
                                    <div class="relative bg-white rounded-lg overflow-hidden border border-[#E7ECF0]">
                                        <div class="relative md:py-3 py-2">
                                            <div class="absolute left-2 top-2 z-[4]"><span class="relative flex h-3 w-3"><span class="absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75 bg-green-200 animate-ping-slow"></span><span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span></span></div>

                                            <div class="md:px-3 px-2 flex gap-3">
                                                <div class="relative h-fit">
                                                    <img src="/image/photo/photo_1722932861.jpeg" class="min-w-[62px] w-[62px] md:w-[80px] max-w-[80px] min-h-[80px] h-[80px] md:h-[123px] max-h-[123px] rounded-md md:rounded-lg md:ml-1 object-cover border border-[#E7ECF0]">
                                                    <!-- <div id="tagging-video-voice-call" class="absolute bottom-0 bg-gradient-to-r from-[#52BEE7] to-[#1C2E7F] min-w-[62px] w-[62px] md:w-[90px] max-w-[90px] flex items-center justify-center gap-1 py-1 px-2 md:py-2 md:px-3 rounded-md md:rounded-lg">
                                                        <img
                                                        alt="ivideo-icon"
                                                        class="w-2 md:w-4"
                                                        src="/image/lawyer-card/video-icon.png" />
                                                        <p class="text-[8px] md:text-xs text-center text-white font-semibold antialiased"> Tersedia </p>
                                                    </div> -->
                                                </div>
                                                <div class="flex-1 flex flex-col gap-1.5">
                                                    <div class="flex items-center h-[40px] md:h-[52px]">
                                                        <span class="text-sm md:text-xl font-bold line-clamp-2 leading-4 md:leading-6">Dwi Kurniawan, S.H.</span>
                                                    </div>
                                                    <div class="flex gap-1 text-xs md:text-sm items-center">
                                                        <div class="flex gap-1 items-center">
                                                            <img
                                                                alt="location"
                                                                class="w-4 h-4"
                                                                src="/image/landing-page/icon-location.png" />
                                                            <span class="text-[#4D5B6A] capitalize">bogor</span>
                                                        </div>
                                                        <div class="border-l h-2/3 border-gray-500"></div><div class="flex gap-1 flex-1">
                                                            <img
                                                                alt="medal-star"
                                                                class="w-4 h-4"
                                                                src="/image/landing-page/icon-medal-star.png" />
                                                                <span class="text-[#0072C3] truncate">Terverifikasi oleh Peradi</span>
                                                        </div>
                                                    </div>
                                                    <div class="flex items-center">
                                                        <p class="text-xs md:text-sm antialiased text-[#344052] my-auto flex gap-1 items-center !leading-4"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.3026 4.07139C11.8068 3.52306 10.9784 3.24889 9.77677 3.24889H9.63677V3.22556C9.63677 2.24556 9.63677 1.03223 7.44344 1.03223H6.55677C4.36344 1.03223 4.36344 2.25139 4.36344 3.22556V3.25473H4.22344C3.01594 3.25473 2.19344 3.52889 1.6976 4.07723C1.1201 4.71889 1.1376 5.58223 1.19594 6.17139L1.20177 6.21223L1.24695 6.68664C1.25527 6.77401 1.30233 6.85293 1.37576 6.90098C1.51565 6.99252 1.74977 7.14343 1.8901 7.22139C1.97177 7.27389 2.05927 7.32056 2.14677 7.36723C3.14427 7.91556 4.24094 8.28306 5.3551 8.46389C5.4076 9.01223 5.64677 9.65389 6.92427 9.65389C8.20177 9.65389 8.4526 9.01806 8.49344 8.45223C9.68344 8.25973 10.8326 7.84556 11.8709 7.23889C11.9059 7.22139 11.9293 7.20389 11.9584 7.18639C12.1899 7.05559 12.4299 6.89442 12.6488 6.73655C12.7147 6.68899 12.7569 6.61546 12.7659 6.53466L12.7751 6.45139L12.8043 6.17723C12.8101 6.14223 12.8101 6.11306 12.8159 6.07223C12.8626 5.48306 12.8509 4.67806 12.3026 4.07139ZM7.63594 8.06723C7.63594 8.68556 7.63594 8.77889 6.91844 8.77889C6.20094 8.77889 6.20094 8.66806 6.20094 8.07306V7.33806H7.63594V8.06723ZM5.1976 3.24889V3.22556C5.1976 2.23389 5.1976 1.86639 6.55677 1.86639H7.44344C8.8026 1.86639 8.8026 2.23973 8.8026 3.22556V3.25473H5.1976V3.24889Z" fill="#0072C3"></path><path d="M12.1759 8.01136C12.3822 7.91321 12.6198 8.0767 12.5991 8.30419L12.3897 10.6106C12.2672 11.7773 11.7889 12.9673 9.22225 12.9673H4.77725C2.21058 12.9673 1.73225 11.7773 1.60975 10.6164L1.411 8.43019C1.39056 8.20534 1.6227 8.04203 1.8284 8.13509C2.49306 8.43581 3.71989 8.96932 4.47774 9.16781C4.57359 9.19292 4.65111 9.26152 4.69308 9.35127C5.04715 10.1085 5.81506 10.5114 6.92391 10.5114C8.02181 10.5114 8.79942 10.093 9.15466 9.33389C9.19669 9.24408 9.27429 9.1755 9.37019 9.15026C10.1749 8.93851 11.4808 8.34215 12.1759 8.01136Z" fill="#0072C3"></path></svg> 6 Tahun </p><div class="flex items-center"><div class="h-2 border-l border-gray-400 mx-2"></div><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[14px] h-[14px] md:w-4 md:h-4"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.29311 1.87199C6.55464 1.24319 7.44541 1.24319 7.70694 1.87199L8.92144 4.79199L12.0738 5.04472C12.7527 5.09914 13.0279 5.94631 12.5107 6.38935L10.1089 8.44674L10.8427 11.5229C11.0007 12.1854 10.2801 12.7089 9.69891 12.354L7.00003 10.7055L4.30115 12.354C3.71996 12.7089 2.99931 12.1854 3.15733 11.5229L3.89111 8.44674L1.48933 6.38935C0.972122 5.94631 1.24738 5.09914 1.92623 5.04472L5.07861 4.79199L6.29311 1.87199Z" fill="#FEAF27"></path></svg><label class="my-auto ml-0.5 text-xs md:text-sm text-black">4.9</label></div><span class="text-xs md:text-sm text-[#757E8C] ml-1">(346 Konsultasi)</span>
                                                    </div>
                                                    <div class="flex items-center justify-between gap-1 md:gap-2">
                                                        <div class="flex text-xs md:text-sm justify-between">
                                                            <div class="flex gap-1 md:gap-2">
                                                                <span class="text-[#04A45E] bg-[#CBFFE8] text-xs md:text-sm leading-3 w-auto rounded px-1 md:px-2 py-0.5 md:py-1 self-start max-w-[150px] truncate">Criminal</span><span class="text-[#04A45E] bg-[#CBFFE8] text-xs md:text-sm leading-3 w-auto rounded px-1 md:px-2 py-0.5 md:py-1 self-start max-w-[150px] truncate">Civil</span><span class="text-[#04A45E] bg-[#CBFFE8] text-xs md:text-sm leading-3 w-auto rounded px-1 md:px-2 py-0.5 md:py-1 self-start max-w-[150px] truncate">Employment</span>
                                                            </div>
                                                        </div>
                                                        <!-- <div class="flex items-center gap-2 text-xs md:text-sm">
                                                            <span>+2</span><svg class="svg-inline--fa fa-chevron-down text-xs md:text-sm" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path class="" fill="currentColor" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path></svg>
                                                        </div> -->
                                                    </div>
                                                </div>
                                                <!-- flex justify-between items-center gap-1 md:px-3 px-2 -->
                                                <div>
                                                    <div class="">
                                                        <div class="flex items-center gap-2">
                                                            <div class="flex flex-col gap-0.5 md:gap-1 rounded-lg">
                                                                <div class="text-xs text-[#757E8C]">Starting from</div>
                                                                <div class="flex gap-1 items-center"><p class="text-[#04A45E] font-semibold !leading-5 text-sm md:text-lg">Rp40.000</p><p class="text-xs line-through text-[#9B9B9B]">Rp60.000</p>
                                                                    <!-- <div class="flex items-center justify-center w-[15px] bg-[#FF5B5E] rounded px-1 py-0.5 text-white text-[8px] leading-[10px]"> % 
                                                                    </div> -->
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button class="font-medium px-4 py-2.5 md:px-6 md:py-3 md:w-32 rounded-md md:rounded-lg text-xs md:text-base bg-[#04A45E] text-white">Konsultasi</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- <div class="border-b my-2 border-[#E7ECF0]"></div> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <TheFooter />
    </main>
    <LoginDialog :show.sync="showLoginDialog" @hide="showLoginDialog = false" ></LoginDialog>

  </div>
</template>

<script setup>
import { ref ,defineEmits} from "vue";
import CariSwiper from "~/components/CariSwiper.vue";

const inputSearch = ref('')
const inputCity = ref('')
const checked1 = ref(false)
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
