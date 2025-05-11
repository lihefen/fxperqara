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
        <div class="bg-white relative font-lexend">
            <picture >
                <img src="/image/landing-page/bg-header-service-page.svg" alt="" class="-mt-16 sm:block w-full hidden">
                <img src="/image/landing-page/bg-header-service-page-mobile.svg" alt="" class="-mt-16 xs:max-h-[80px] w-full sm:hidden">
            </picture>
            <div class="max-w-[1280px] mx-auto px-4 xl:px-40">
                <div class="md:pt-10 pb-12 md:pb-20 flex flex-col md:flex-row items-center md:gap-12 gap-4">
                    <div class="flex flex-col gap-6">
                        <div class="flex flex-col gap-2 md:gap-4">
                            <div class="px-3 w-fit py-1 text-cultured font-medium rounded-full bg-gradient-to-r from-red-1 to-red-2 shadow-lg"> Baru </div>
                            <h1 class="text-2xl md:text-[32px] font-bold md:leading-[44px]">
                                Layanan    <span class="bg-gradient-to-r from-blue-5 to-blue-3 bg-clip-text text-transparent">Hukum Profesional</span> untuk Segala Kebutuhan 
                            </h1>
                            <p class="font-semibold text-[#556987]"> Melayani berbagai kebutuhan hukum secara on-demand yang dapat Anda akses kapan pun dan di mana pun. </p>
                            <div class="hidden md:flex flex-wrap gap-4">
                                <span class="px-2 py-0.5 font-medium text-sm text-blue-2 rounded-lg bg-lightblue-1 shadow">Pembuatan Dokumen</span><span class="px-2 py-0.5 font-medium text-sm text-blue-2 rounded-lg bg-lightblue-1 shadow">Layanan Notaris Perusahaan</span><span  class="px-2 py-0.5 font-medium text-sm text-blue-2 rounded-lg bg-lightblue-1 shadow">Pendaftaran HAKI</span><span  class="px-2 py-0.5 font-medium text-sm text-blue-2 rounded-lg bg-lightblue-1 shadow">Konsultasi Pajak</span>
                            </div>
                        </div>
                        <button  class="hidden md:inline-block bg-blue-2 px-16 py-2.5 w-full md:w-fit md:text-lg text-white rounded-md shadow-gray-500 hover:bg-blue-9 transition-all ease-in-out duration-300 cursor-pointer"> Lihat Layanan </button>
                    </div>
                    <NuxtImg
                        alt="img-hero-service-page"
                        src="/image/landing-page/img-hero-service-page.png" />

                    <div class="md:hidden flex flex-wrap sm:w-3/5 justify-center gap-2">
                        <span  class="px-2 py-0.5 font-medium text-sm text-blue-2 rounded-lg bg-lightblue-1 shadow">Pembuatan Dokumen</span><span  class="px-2 py-0.5 font-medium text-sm text-blue-2 rounded-lg bg-lightblue-1 shadow">Layanan Notaris Perusahaan</span><span  class="px-2 py-0.5 font-medium text-sm text-blue-2 rounded-lg bg-lightblue-1 shadow">Pendaftaran HAKI</span><span  class="px-2 py-0.5 font-medium text-sm text-blue-2 rounded-lg bg-lightblue-1 shadow">Konsultasi Pajak</span>
                    </div>
                    <button  class="md:hidden text-center bg-blue-2 px-7 py-2.5 w-full md:w-fit md:text-lg text-white rounded-md shadow-gray-500 hover:bg-blue-9 transition-all ease-in-out duration-300 cursor-pointer"> Lihat Layanan </button>
                </div>
            </div>
            <section>
                <div  class="relative z-10 max-w-[1280px] mx-auto px-4 xl:px-52">
                    <div  class="relative bg-radial-gradient p-4 md:py-6 md:px-40 rounded-3xl text-white overflow-hidden">
                        <img src="/image/landing-page/img-acc-left-card-service-page.svg" alt="" class="absolute left-0 top-0 w-14 md:w-auto">
                        <img src="/image/landing-page/img-acc-right-card-service-page.svg" alt="" class="absolute right-0 top-0 w-16 md:w-auto">
                        <div class="flex flex-col gap-2 md:gap-4 justify-center items-center">
                            <h5 class="sm:text-2xl lg:text-3xl font-semibold" > Dipercaya Oleh </h5>
                            <div class="flex gap-7 py-2" >
                                <img class="w-20 md:w-36" src="/image/peradi-footer.png" alt="peradi-footer" >
                                <img class="w-20 md:w-36" src="/image/ylc-footer.png" alt="peradi-footer" >
                                <img class="w-20 md:w-36" src="/image/pbh-footer.png" alt="peradi-footer" >
                            </div>
                            <div class="border-b border-white/30 w-full" ></div>
                            <div  class="px-3 py-4">
                                <div class="flex items-center justify-center gap-4 md:gap-9 text-center text-white">
                                    <div class="flex flex-col"><span  class="md:text-2xl font-medium">27.000+</span><span  class="text-xs md:text-sm text-[#E7ECF0]">Konsultasi Selesai</span>
                                    </div>
                                    <div  class="flex flex-col"><span  class="md:text-2xl font-medium">500+</span><span  class="text-xs md:text-sm text-[#E7ECF0]">Advokat Terdaftar</span></div>
                                    <div class="flex flex-col"><span class="md:text-2xl font-medium">130+</span><span  class="text-xs md:text-sm text-[#E7ECF0]">Kota Dijangkau</span></div>
                                    <div class="flex flex-col">
                                        <span class="md:text-2xl font-medium flex items-center justify-center gap-1 md:gap-2">
                                        <img src="/image/landing-page/icon-star.svg" alt="" class="w-4 md:w-6 h-4.5 md:h-8"><span >4,9/5</span></span><span  class="text-xs md:text-sm text-[#E7ECF0]">Kepuasan Klien</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="relative overflow-hidden xl:max-w-[1128px] xl:mx-auto -mt-32 pt-32 bg-[#F5FBFD] md:rounded-3xl">
                    <div class="absolute top-0 left-0 w-full">
                        <img src="/image/landing-page/bg-card-service-page.svg" alt=""></div>
                        <div class="py-6 md:py-12 px-4 flex flex-col gap-4 md:gap-8">
                            <h2 class="text-2xl lg:text-3xl font-semibold text-center xl:px-64"> Mengapa harus menggunakan layanan hukum di <span class="text-[#0A50A3]">Perqara</span>? </h2>
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
                                <div class="flex flex-col text-center gap-2"><span class="md:text-xl font-semibold">Tim Ahli Profesional</span><span class="text-sm text-[#556987]">Semua layanan di Perqara ditangani oleh tim yang tersertifikasi dan ahli di bidangnya</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="konsultasi-hukum" class="py-6 md:py-12 relative z-10">
                <div class="max-w-[1280px] mx-auto px-4 xl:px-40">
                    <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                        <div class="relative w-full md:w-1/2">
                            <NuxtImg
                            alt="img-legal-consultation"
                            class="w-full"
                            src="/image/landing-page/img-legal-consultation.png" />
                            <img  src="/image/landing-page/icon-legal-consultation-colored.svg" alt="" class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-fit md:hidden">
                        </div>
                        <div  class="flex flex-col gap-6 w-full md:w-1/2">
                            <div  class="flex flex-col gap-4">
                                <img  src="/image/landing-page/icon-legal-consultation-colored.svg" alt="" class="w-fit md:inline-block hidden">
                                <h2 class="text-2xl md:text-3xl font-bold md:text-left text-center"> Konsultasi Hukum </h2><p  class="text-[#55707A]"> Percayakan masalah hukum Anda kepada Advokat profesional yang terbaik di bidangnya secara online tanpa perlu membuat janji kunjungan. </p>
                            </div>
                            <button  class="bg-blue-2 px-5 py-3 w-full text-center md:w-fit text-white rounded-md shadow-gray-500 hover:bg-blue-9 transition-all ease-in-out duration-300 cursor-pointer"> Konsultasi Sekarang </button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="pendirian-badan-usaha" class="py-6 md:py-12 bg-[#F5FBFD] relative z-10">
                <div class="max-w-[1280px] mx-auto px-4 xl:px-40">
                    <div class="flex flex-col-reverse md:flex-row gap-8 md:gap-12">
                        <div class="flex flex-col gap-6 w-full md:w-1/2">
                            <img src="/image/landing-page/icon-company-establishment-colored.svg" alt="" class="w-fit md:inline-block hidden" >
                            <h2 class="text-2xl md:text-3xl font-bold md:text-left text-center" > Pendirian Badan Usaha </h2>
                            <p class="text-[#55707A]" > Solusi mudah dan lengkap untuk pendirian badan usaha meliputi: </p>
                            <div class="flex flex-col gap-3" >
                                <div class="flex items-start gap-3" >
                                    <img src="/image/landing-page/icon-check.svg" alt="" >
                                    <div class="flex flex-col" >
                                        <span class="md:text-xl font-bold" >Pendirian PT, CV, Yayasan</span><span class="text-[#55707A]" >Layanan pendirian PT, CV, Yayasan</span>
                                    </div>
                                </div>
                                <div class="flex items-start gap-3" >
                                    <img src="/image/landing-page/icon-check.svg" alt="" >
                                    <div class="flex flex-col" >
                                        <span class="md:text-xl font-bold" >Perubahan Akta</span><span class="text-[#55707A]" >Layanan perubahan informasi terkait beberapa aspek usaha pada Akta perusahaan</span>
                                    </div>
                                </div>
                                <div class="flex items-start gap-3" >
                                    <img src="/image/landing-page/icon-check.svg" alt="" >
                                    <div class="flex flex-col" >
                                        <span class="md:text-xl font-bold italic" >Waarmerking</span><span class="text-[#55707A]" >Layanan pembukuan (waarmerking) atas surat di bawah tangan</span>
                                    </div>
                                </div>
                            </div>
                            <button  class="bg-blue-2 px-5 py-3 w-full text-center md:w-fit text-white rounded-md shadow-gray-500 hover:bg-blue-9 transition-all ease-in-out duration-300 cursor-pointer"> Ajukan Sekarang </button>
                        </div>
                        <div  class="relative w-full md:w-1/2">
                            <NuxtImg
                                alt="iimg-company-services"
                                class="w-full"
                                src="/image/landing-page/img-company-services.png" />
                            <img  src="/image/landing-page/icon-company-establishment-colored.svg" alt="" class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-fit md:hidden">
                        </div>
                    </div>
                </div>
            </section>

            <section  id="pembuatan-dokumen" class="py-6 md:py-12 relative z-10">
                <div class="max-w-[1280px] mx-auto px-4 xl:px-40">
                    <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                        <div  class="relative w-full md:w-1/2">
                            <NuxtImg
                                alt="img-document-creation"
                                class="w-full"
                                src="/image/landing-page/img-document-creation.png" />


                            <img  src="/image/landing-page/icon-document-creation-colored.svg" alt="" class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-fit md:hidden">
                        </div>
                        <div  class="flex flex-col gap-6 w-full md:w-1/2">
                            <div class="flex flex-col gap-4" >
                                <img src="/image/landing-page/icon-document-creation-colored.svg" alt="" class="w-fit md:inline-block hidden" >
                                <h2 class="text-2xl md:text-3xl font-bold md:text-left text-center" > Pembuatan Dokumen </h2><p class="text-[#55707A]" > Buat berbagai surat dan perjanjian hukum dalam sekejap. Cukup jawab pertanyaan panduan, dokumen hukum Anda akan terisi secara otomatis dan siap untuk diunduh. </p>
                                <div class="flex flex-wrap gap-2" >
                                    <span class="px-2 py-0.5 rounded-lg bg-lightblue-1 text-blue-2 text-sm font-medium" >Perjanjian Jual Beli</span><span class="px-2 py-0.5 rounded-lg bg-lightblue-1 text-blue-2 text-sm font-medium" >Surat Kuasa</span><span class="px-2 py-0.5 rounded-lg bg-lightblue-1 text-blue-2 text-sm font-medium" >Perjanjian Kerja</span><span class="px-2 py-0.5 rounded-lg bg-lightblue-1 text-blue-2 text-sm font-medium" >+24</span>
                                </div>
                            </div>
                            <button  class="bg-blue-2 px-5 py-3 w-full text-center md:w-fit text-white rounded-md shadow-gray-500 hover:bg-blue-9 transition-all ease-in-out duration-300 cursor-pointer"> Buat Sekarang </button>
                        </div>
                    </div>
                </div>
            </section>

            <section  id="pendaftaran-haki" class="py-6 md:py-12 bg-[#F5FBFD] relative z-10">
                <div  class="max-w-[1280px] mx-auto px-4 xl:px-40">
                    <div  class="flex flex-col-reverse md:flex-row gap-8 md:gap-12">
                        <div  class="flex flex-col gap-4 w-full md:w-1/2">
                            <img src="/image/landing-page/icon-haki-registration-colored.svg" alt="" class="w-fit md:inline-block hidden" >
                            <h2 class="text-2xl md:text-3xl font-bold md:text-left text-center" > Pendaftaran HAKI (Hak Kekayaan Intelektual) </h2>
                            <p class="text-[#55707A]" > Dapatkan kemudahan pendaftaran dan perlindungan hukum atas Hak Kekayaan Intelektual (HAKI) meliputi: </p>
                            <div class="flex flex-col gap-3" >
                                <div class="flex items-start gap-3" >
                                    <img src="/image/landing-page/icon-check.svg" alt="" >
                                    <div class="flex flex-col" >
                                        <span class="md:text-xl font-bold" >Pendaftaran Merek</span><span class="text-[#55707A]" >Dapatkan hak eksklusif atas merek berikut perlindungan hukumnya</span>
                                    </div>
                                </div>
                                <div class="flex items-start gap-3" >
                                    <img src="/image/landing-page/icon-check.svg" alt="" >
                                    <div class="flex flex-col" >
                                        <span class="md:text-xl font-bold" >Pencatatan Hak Cipta</span><span class="text-[#55707A]" >Dapatkan hak eksklusif dari sebuah karya ciptaan.</span>
                                    </div>
                                </div>
                                <div class="flex items-start gap-3" >
                                    <img src="/image/landing-page/icon-check.svg" alt="" ><div class="flex flex-col" ><span class="md:text-xl font-bold" >Permohonan Desain Industri</span><span class="text-[#55707A]" >Dapatkan perlindungan atas kreasi desain yang berguna untuk menghasilkan suatu produk, barang komoditas industri, atau kerajinan tangan.</span>
                                </div>
                            </div>
                        </div>
                        <button  class="bg-blue-2 px-5 py-3 w-full text-center md:w-fit text-white rounded-md shadow-gray-500 hover:bg-blue-9 transition-all ease-in-out duration-300 cursor-pointer"> Daftarkan Sekarang </button>
                    </div>
                    <div  class="relative w-full md:w-1/2">
                        <NuxtImg
                            alt="img-hero-service-page"
                            class="w-full"
                            src="/image/landing-page/img-haki-registration.png" />
                        <img  src="/image/landing-page/icon-haki-registration-colored.svg" alt="" class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-fit md:hidden"></div>
                    </div>
                </div>
            </section>

            <section  id="konsultasi-pajak" class="py-6 md:py-12 relative z-10">
                <div class="max-w-[1280px] mx-auto px-4 xl:px-40">
                    <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                        <div class="relative w-full md:w-1/2">
                            <NuxtImg
                                alt="img-tax-consultation"
                                class="w-full"
                                src="/image/landing-page/img-tax-consultation.png" />
                                
                            <img  src="/image/landing-page/icon-tax-consultation-colored.svg" alt="" class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-fit md:hidden">
                        </div>
                        <div  class="flex flex-col gap-6 w-full md:w-1/2">
                            <div  class="flex flex-col gap-4">
                                <img  src="/image/landing-page/icon-tax-consultation-colored.svg" alt="" class="w-fit md:inline-block hidden">
                                <h2  class="text-2xl md:text-3xl font-bold md:text-left text-center"> Konsultasi Pajak </h2>
                                <p  class="text-[#55707A]"> Lapor pajak perusahaan maupun pribadi secara tepat bersama advokat yang berpengalaman dan tersertifikasi di bidang perpajakan. </p>
                            </div>
                            <button  class="bg-blue-2 px-5 py-3 w-full text-center md:w-fit text-white rounded-md shadow-gray-500 hover:bg-blue-9 transition-all ease-in-out duration-300 cursor-pointer"> Konsultasi Sekarang </button>
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-8 md:py-12 relative z-10" >
                <div class="max-w-[1280px] mx-auto px-4 xl:px-40" >
                    <div class="flex flex-col gap-12" >
                        <h2 class="text-2xl md:text-3xl font-bold text-center" > Tahapan Proses </h2>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 text-center" >
                            <div class="relative bg-lightblue-1 rounded-xl p-4 pt-6 md:p-6 md:pt-8 flex flex-col gap-2 md:gap-4" >
                                <span class="absolute -top-6 left-1/2 transform -translate-x-1/2 shadow-[0_0_0_7px] rounded-full bg-steelBlue flex items-center justify-center text-white text-xl font-semibold w-12 h-12" >1</span><span class="text-lg md:text-2xl font-bold" >Kirim Formulir Penawaran</span><span class="text-[#556987] font-light text-left" >Jelaskan detail kebutuhan legal Anda dengan mengisi formulir penawaran.</span>
                            </div>
                            <div class="relative bg-lightblue-1 rounded-xl p-4 pt-6 md:p-6 md:pt-8 flex flex-col gap-2 md:gap-4" >
                                <span class="absolute -top-6 left-1/2 transform -translate-x-1/2 shadow-[0_0_0_7px] rounded-full bg-steelBlue flex items-center justify-center text-white text-xl font-semibold w-12 h-12" >2</span><span class="text-lg md:text-2xl font-bold" >Konsultasikan Kebutuhan Anda</span><span class="text-[#556987] font-light text-left" >Tim Perqara akan menghubungi Anda dalam waktu maksimal 24 jam.</span>
                            </div>
                            <div class="relative bg-lightblue-1 rounded-xl p-4 pt-6 md:p-6 md:pt-8 flex flex-col gap-2 md:gap-4" >
                                <span class="absolute -top-6 left-1/2 transform -translate-x-1/2 shadow-[0_0_0_7px] rounded-full bg-steelBlue flex items-center justify-center text-white text-xl font-semibold w-12 h-12" >3</span><span class="text-lg md:text-2xl font-bold" >Proses yang Transparan</span><span class="text-[#556987] font-light text-left" >Tim profesional kami akan mengabarkan proses pengerjaan secara berkala hingga selesai.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="form" class="md:py-12 relative z-10">
                <div class="max-w-[1280px] mx-auto xl:px-56">
                    <div class="rounded-2xl bg-white px-4 md:px-8 py-7 shadow-[0_-8px_10px_-5px_rgba(0,0,0,0.04),_0_10px_25px_-5px_rgba(0,0,0,0.10)]">
                        <div class="flex flex-col gap-4">
                            <h2 class="text-2xl font-semibold text-center md:w-[52%] mx-auto"> Lengkapi Data Diri agar Kami Dapat Segera Menghubungi Anda </h2>
                            <div class="flex flex-col sm:flex-row gap-6">
                                <div class="w-full sm:w-1/2 flex flex-col gap-3">
                                    <div>
                                        <p class="font-medium font-dm-sans antialiased mb-2 text-black text-base">Nama Lengkap</p>
                                        <div class="relative w-full text-black">
                                            <el-input v-model="inputName" type="text"  placeholder="Tuliskan nama lengkap anda" size="large" ></el-input>
                                        </div>
                                    </div>

                                    <div>
                                        <p  class="font-medium font-dm-sans antialiased mb-2 text-black text-base">Nomor Handphone (Whatsapp)</p>
                                        <div class="relative w-full text-black">
                                            <el-input v-model="inputPhone" type="text"  placeholder="Contoh: 08123456789" size="large" ></el-input>
                                        </div>
                                    </div>

                                    <div >
                                        <p  class="font-medium font-dm-sans antialiased mb-2 text-black text-base">Email</p>
                                        <div  class="relative w-full  text-black ">
                                            <el-input v-model="inputEmail" type="text"  placeholder="Tuliskan email aktif anda"  size="large" ></el-input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
