<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-05-08 21:13:28
 * @LastEditors: hean
 * @LastEditTime: 2025-05-31 14:15:15
-->

<template>
    <div class="bg-white font-dm-sans min-h-screen">
      <main>
        <TheNavbar @loginHandler="loginHandler" />
        <div class="service-head md:h-[572px]">
            <div
            class="relative z-10 max-w-[1280px] mx-auto px-10 xl:px-52 py-12 lg:py-12"
            >
            <div
                class="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-16"
            >
                <div class="flex flex-col ">
                <p class="text-[42px] leading-[50px] font-bold text-[#333333]">
                    Professional Legal Services for All Needs
                </p>
                <p class=" text-[#333333] text-[18px]">
                    Serving various legal needs on-demand that you can access anytime and anywhere.
                </p>
                <div class="flex flex-wrap gap-2 mt-[4px]" >
                    <span class="px-2 py-1 rounded-lg bg-[#B2F4D7] text-[#00854B] text-sm font-medium" >Document Creation</span>
                    <span class="px-2 py-1 rounded-lg bg-[#B2F4D7] text-[#00854B] text-sm font-medium" > Corporate Notary Services</span>
                    <span class="px-2 py-1 rounded-lg bg-[#B2F4D7] text-[#00854B] text-sm font-medium" > Copyright Registration</span>
                    <span class="px-2 py-1 rounded-lg bg-[#B2F4D7] text-[#00854B] text-sm font-medium" > Tax Consultation</span>
                </div>

                <button class="font-bold px-4 py-2.5 md:px-6 md:py-3 md:w-60 rounded-md md:rounded-[16px]  bg-[linear-gradient(224deg,#18D683_0%,#00CE73_17%,#0DBC6F_46%,#04A45E_100%)]  mt-[10px] text-white text-[24px]">View Services</button>
                </div>
                <!-- <Video
                video="https://media.w3.org/2010/05/sintel/trailer.mp4"
                poster="/image/features/story-placeholder.png"
                class="w-[360px] h-[212px] shrink-0"
                /> -->
                <iframe
                src="https://www.youtube.com/embed/Sy4ROOthOg4"
                class="w-[360px] h-[212px] rounded-xl shrink-0"
                />
            </div>
            </div>
        </div>
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
                        <div class="md:px-20 px-4 grid md:grid-cols-4 grid-cols-2 md:gap-6 gap-x-4 gap-y-8">
                            <div class="flex flex-col items-center gap-3 md:gap-6"><img src="/image/service-page/costs_icon.png" alt="" class="w-fit">
                            <div class="flex flex-col text-center gap-2"><span class="md:text-xl font-semibold text-[#ffffff]" >Transparent Costs</span><span class="text-sm text-[#ffffff]" >Get a complete price quote at the beginning without worrying about the addition of other costs</span></div>
                        </div>
                        <div class="flex flex-col items-center gap-3 md:gap-6" >
                            <img src="/image/service-page/save_time_icon.png" alt="" class="w-fit">
                            <div class="flex flex-col text-center gap-2" >
                                <span class="md:text-xl font-semibold text-[#ffffff]">Save Time</span><span class="text-sm text-[#ffffff]">The entire process is done online to save you time</span>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-3 md:gap-6">
                            <img src="/image/service-page/accurate_icon.png" alt="" class="w-fit">
                            <div class="flex flex-col text-center gap-2">
                                <span class="md:text-xl font-semibold text-[#ffffff]">Accurate Results</span><span class="text-sm text-[#ffffff]">Our team will ensure that you obtain the necessary permits and legalities</span>
                            </div>
                        </div>

                        <div class="flex flex-col items-center gap-3 md:gap-6">
                            <img src="/image/service-page/team-icon.png" alt="" class="w-fit">
                            <div class="flex flex-col text-center gap-2">
                                <span class="md:text-xl font-semibold text-[#ffffff]">Professional Expert Team</span><span class="text-sm text-[#ffffff]">All services at Perqara are handled by a certified team and experts in their field</span>
                            </div>
                        </div>
                        <!-- <div class="flex flex-col items-center gap-3 md:gap-6">
                            <img src="/image/service-page/team_icon.png" alt="" class="w-fit">
                            <div class="flex flex-col text-center gap-2"><span class="md:text-xl font-semibold text-[#ffffff]">Professional Expert Team</span><span class="text-sm text-[#ffffff]">All services at Perqara are handled by a certified team and experts in their field</span>
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>
        </section>
        <section id="konsultasi-hukum" class="py-6 md:py-12 relative z-10">
            <div class="max-w-[1280px] mx-auto px-4 xl:px-40">
                <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    <div class="relative w-full md:w-1/2">
                        <img
                        alt="img-legal-consultation"
                        class="w-full"
                        src="/image/service-page/img-legal-consultation.png" />
                        <img  src="/image/service-page/icon-legal-consultation-colored.png" alt="" class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-fit md:hidden">
                    </div>
                    <div  class="flex flex-col gap-6 w-full md:w-1/2">
                        <div  class="flex flex-col gap-4">
                            <img  src="/image/service-page/icon-legal-consultation-colored.png" alt="" class="w-fit md:inline-block hidden w-[10px]" >
                            <h2 class="relative mt-[-60px] ml-[20px] text-2xl md:text-3xl font-bold md:text-left text-center"> Legal Consultation</h2><p  class="text-[#55707A]">Entrust your legal problems to the best professional Advocate in his field online without having to make an appointment.</p>
                        </div>
                        <button  class="bg-[#04A45E] px-5 py-3 w-full text-center md:w-fit text-white rounded-[18px] shadow-gray-500 hover:bg-[#04A45E]/80  transition-all ease-in-out duration-300 cursor-pointer"> Consult Now</button>
                    </div>
                </div>
            </div>
        </section>

        <section id="pendirian-badan-usaha" class="py-6 md:py-12 bg-[#F5FBFD] relative z-10">
            <div class="max-w-[1280px] mx-auto px-4 xl:px-40">
                <div class="flex flex-col-reverse md:flex-row gap-8 md:gap-12">
                    <div class="flex flex-col gap-6 w-full md:w-1/2">
                        <img src="/image/service-page/icon-company-establishment-colored.png" alt="" class="w-fit md:inline-block hidden" >
                        <h2 class="relative mt-[-60px] ml-[20px]  text-2xl md:text-3xl font-bold md:text-left text-center" > Establishment of a Business Entity </h2>
                        <p class="text-[#55707A]" >A simple and complete solution for establishing a business entity includes:</p>
                        <div class="flex flex-col gap-3" >
                            <div class="flex items-start gap-3" >
                                <img src="/image/service-page/icon-check.png" alt="" >
                                <div class="flex flex-col" >
                                    <span class="md:text-xl font-bold" >Establishment of PT, CV, Foundation</span><span class="text-[#55707A]" >PT, CV, Foundation e</span>
                                </div>
                            </div>
                            <div class="flex items-start gap-3" >
                                <img src="/image/service-page/icon-check.png" alt="" >
                                <div class="flex flex-col" >
                                    <span class="md:text-xl font-bold" >Changes to the Act</span><span class="text-[#55707A]" >Information change services related to several aspects of business under the Enterprise Act</span>
                                </div>
                            </div>
                            <div class="flex items-start gap-3" >
                                <img src="/image/service-page/icon-check.png" alt="" >
                                <div class="flex flex-col" >
                                    <span class="md:text-xl font-bold italic" >Authentication</span><span class="text-[#55707A]" >Bookkeeping service (warmerking) on ​​letters under hand</span>
                                </div>
                            </div>
                        </div>
                        <button  class="bg-[#04A45E] px-5 py-3 w-full text-center md:w-fit text-white rounded-[18px] shadow-gray-500 hover:bg-[#04A45E]/80  transition-all ease-in-out duration-300 cursor-pointer"> Apply Now </button>
                    </div>
                    <div  class="relative w-full md:w-1/2">
                        <img
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
                        <img
                            alt="img-document-creation"
                            class="w-full"
                            src="/image/service-page/img-document-creation.png" />


                        <img  src="/image/service-page/icon-document-creation-colored.png" alt="" class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-fit md:hidden">
                    </div>
                    <div  class="flex flex-col gap-6 w-full md:w-1/2">
                        <div class="flex flex-col gap-4" >
                            <img src="/image/service-page/icon-document-creation-colored.png" alt="" class="w-fit md:inline-block hidden" >
                            <h2 class="relative mt-[-60px] ml-[20px]  text-2xl md:text-3xl font-bold md:text-left text-center" > Document Creation </h2><p class="text-[#55707A]" >Create various letters and legal agreements in an instant. Just answer the guide questions, your legal document will be filled automatically and ready to download.</p>
                            <div class="flex flex-wrap gap-2" >
                                <span class="px-2 py-0.5 rounded-lg bg-[#CBFFE8] text-[#04A45E] text-sm font-medium" >Sale and Purchase Agreement</span>
                                <span class="px-2 py-0.5 rounded-lg bg-[#CBFFE8] text-[#04A45E] text-sm font-medium" >Power of Attorney</span>
                                <span class="px-2 py-0.5 rounded-lg bg-[#CBFFE8] text-[#04A45E] text-sm font-medium" >Employment Agreement</span>
                                <span class="px-2 py-0.5 rounded-lg bg-[#CBFFE8] text-[#04A45E] text-sm font-medium" >+24</span>
                            </div>
                        </div>
                        <button  class="bg-[#04A45E] px-5 py-3 w-full text-center md:w-fit text-white rounded-[18px] shadow-gray-500 hover:bg-[#04A45E]/80  transition-all ease-in-out duration-300 cursor-pointer"> Create Now </button>
                    </div>
                </div>
            </div>
        </section>

        <section  id="pendaftaran-haki" class="py-6 md:py-12 bg-[#F5FBFD] relative z-10">
            <div  class="max-w-[1280px] mx-auto px-4 xl:px-40">
                <div  class="flex flex-col-reverse md:flex-row gap-8 md:gap-12">
                    <div  class="flex flex-col gap-4 w-full md:w-1/2">
                        <img src="/image/service-page/icon-haki-registration-colored.png" alt="" class="w-fit md:inline-block hidden" >
                        <h2 class="relative mt-[-60px] ml-[20px]  text-2xl md:text-3xl font-bold md:text-left text-center" > Registration of RIGHTS (Intellectual Property Rights)</h2>
                        <p class="text-[#55707A]" > Get easy registration and legal protection for Intellectual Property Rights (IPR) including:</p>
                        <div class="flex flex-col gap-3" >
                            <div class="flex items-start gap-3" >
                                <img src="/image/service-page/icon-check.png" alt="" >
                                <div class="flex flex-col" >
                                    <span class="md:text-xl font-bold" >Pendaftaran Merek</span><span class="text-[#55707A]" >Dapatkan hak eksklusif atas merek berikut perlindungan hukumnya</span>
                                </div>
                            </div>
                            <div class="flex items-start gap-3" >
                                <img src="/image/service-page/icon-check.png" alt="" >
                                <div class="flex flex-col" >
                                    <span class="md:text-xl font-bold" >Pencatatan Hak Cipta</span><span class="text-[#55707A]" >Dapatkan hak eksklusif dari sebuah karya ciptaan.</span>
                                </div>
                            </div>
                            <div class="flex items-start gap-3" >
                                <img src="/image/service-page/icon-check.png" alt="" ><div class="flex flex-col" ><span class="md:text-xl font-bold" >Permohonan Desain Industri</span><span class="text-[#55707A]" >Dapatkan perlindungan atas kreasi desain yang berguna untuk menghasilkan suatu produk, barang komoditas industri, atau kerajinan tangan.</span>
                            </div>
                        </div>
                    </div>
                    <button  class="bg-[#04A45E] px-5 py-3 w-full text-center md:w-fit text-white rounded-[18px] shadow-gray-500 hover:bg-[#04A45E]/80  transition-all ease-in-out duration-300 cursor-pointer"> Register Now </button>
                </div>
                <div  class="relative w-full md:w-1/2">
                    <img
                        alt="img-hero-service-page"
                        class="w-full"
                        src="/image/service-page/img-haki-registration.png" />
                    <img  src="/image/service-page/icon-haki-registration-colored.png" alt="" class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-fit md:hidden"></div>
                </div>
            </div>
        </section>

        <section  id="konsultasi-pajak" class="py-6 md:py-12 relative z-10">
            <div class="max-w-[1280px] mx-auto px-4 xl:px-40">
                <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    <div class="relative w-full md:w-1/2">
                        <img
                            alt="img-tax-consultation"
                            class="w-full"
                            src="/image/service-page/img-tax-consultation.png" />
                            
                        <img  src="/image/service-page/icon-tax-consultation-colored.png" alt="" class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-fit md:hidden">
                    </div>
                    <div  class="flex flex-col gap-6 w-full md:w-1/2">
                        <div  class="flex flex-col gap-4">
                            <img  src="/image/service-page/icon-tax-consultation-colored.png" alt="" class="w-fit md:inline-block hidden">
                            <h2  class="relative mt-[-60px] ml-[20px] text-2xl md:text-3xl font-bold md:text-left text-center"> Tax Consultation </h2>
                            <p  class="text-[#55707A]"> Report corporate and personal taxes accurately with an experienced and certified attorney in the field of taxation. </p>
                        </div>
                        <button  class="bg-[#04A45E]  px-5 py-3 w-full text-center md:w-fit text-white rounded-[18px] shadow-gray-500 hover:bg-[#04A45E]/80   transition-all ease-in-out duration-300 cursor-pointer"> Consult Now </button>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-8 md:py-12 relative z-10" >
            <div class="max-w-[1280px] mx-auto px-4 xl:px-40" >
                <div class="flex flex-col gap-12" >
                    <h2 class="text-2xl md:text-3xl font-bold text-center" > Process Stages </h2>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 text-center" >
                        <div relative  p-4 pt-6 md:p-6 md:pt-8 flex flex-col gap-2 md:gap-4>
                            <div class=" process-title-1  mx-auto  w-[130px] h-[130px]" ></div>
                            <div class="processCard relative mt-[-80px]  p-4 pt-6 md:p-6 md:pt-8 flex flex-col gap-2 md:gap-4" >
                            <span class="text-lg md:text-2xl font-bold" >Submit Offer Form</span><span class="text-[#556987] font-light text-left" >Explain the details of your legal needs by filling out the offer form.</span>
                            </div>
                        </div>

                        <div relative  p-4 pt-6 md:p-6 md:pt-8 flex flex-col gap-2 md:gap-4>
                            <div class=" process-title-2  mx-auto  w-[130px] h-[130px]" ></div>
                            <div class="processCard relative mt-[-80px]  p-4 pt-6 md:p-6 md:pt-8 flex flex-col gap-2 md:gap-4" >
                            <span class="text-lg md:text-2xl font-bold" >Consult Your Needs</span><span class="text-[#556987] font-light text-left" >The LawOnGo team will contact you within a maximum of 24 hours.</span>
                            </div>
                        </div>

                        <div relative  p-4 pt-6 md:p-6 md:pt-8 flex flex-col gap-2 md:gap-4>
                            <div class=" process-title-3  mx-auto  w-[130px] h-[130px]" ></div>
                            <div class="processCard relative mt-[-80px]  p-4 pt-6 md:p-6 md:pt-8 flex flex-col gap-2 md:gap-4" >
                            <span class="text-lg md:text-2xl font-bold" >Transparent Process</span><span class="text-[#556987] font-light text-left" >Our professional team will report the work process periodically until completion.</span>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </section>

        <section id="form" class="md:py-12 relative z-10">
            <div class="max-w-[1280px] mx-auto xl:px-56">
                <div class="rounded-2xl bg-white px-4 md:px-8 py-7 shadow-[0_-8px_10px_-5px_rgba(0,0,0,0.04),_0_10px_25px_-5px_rgba(0,0,0,0.10)]">
                    <div class="flex flex-col gap-4">
                        <h2 class="text-2xl font-semibold text-center md:w-[52%] mx-auto"> Complete your personal data so that we can immediately contact you</h2>
                        <div class="flex flex-col sm:flex-row gap-6">
                            <div class="w-full sm:w-1/2 flex flex-col gap-3">
                                <div>
                                    <p class="font-medium font-dm-sans antialiased mb-2 text-black text-base">Full Name</p>
                                    <div class="relative w-full text-black">
                                        <el-input v-model="inputName" type="text"  placeholder="Write your full name" size="large" ></el-input>
                                    </div>
                                </div>

                                <div>
                                    <p  class="font-medium font-dm-sans antialiased mb-2 text-black text-base">Mobile Number (Whats</p>
                                    <div class="relative w-full text-black">
                                        <el-input v-model="inputPhone" type="text"  placeholder="Example:08123456789" size="large" ></el-input>
                                    </div>
                                </div>

                                <div >
                                    <p  class="font-medium font-dm-sans antialiased mb-2 text-black text-base">Email</p>
                                    <div  class="relative w-full  text-black ">
                                        <el-input v-model="inputEmail" type="text"  placeholder="Tuliskan email aktif anda"  size="large" ></el-input>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full sm:w-1/2 flex flex-col gap-3">
                                <div>
                                    <label class="mb-2 block">Legal Services</label>
                                    <div class="relative z-100">
                                        <el-select
                                            v-model="inputHukum"
                                            placeholder="Choose legal service"
                                            size="large"
                                            >
                                            <el-option
                                                v-for="item in hukumOptions"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value"
                                            />
                                        </el-select>
                                    </div>
                                </div>

                                <div>
                                    <label class="mb-2 block">Type of Service</label>
                                    <div class="relative z-100">
                                        <el-select
                                            v-model="inputType"
                                            placeholder="Choose legal service"
                                            size="large"
                                            >
                                            <el-option
                                                v-for="item in hukumOptions"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value"
                                            />
                                        </el-select>
                                    </div>
                                </div>

                                <div >
                                    <p  class="font-medium font-dm-sans antialiased mb-2 text-black text-base">Business Field (Optional)</p>
                                    <div  class="relative w-full  text-black ">
                                        <el-input v-model="inputBusiness" type="text"  placeholder="Example:Food,Beverages,Heavy Equipen"  size="large" ></el-input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="border-b border-[#E7ECF0]"></div>
                        <div>
                            <label class="mb-2 block">Detail of Required Services</label>
                            <el-input
                                v-model="textareaDibutuhkan"
                                :rows="5"
                                type="textarea"
                                placeholder="Example: I want to register my furniture company brand"
                            />
                            <div class="flex items-center justify-between gap-2 text-xs">
                                <span class="text-[#676767]">Minimal 10 karakter</span><span class="mr-1 transform duration-300 ease-in-out -translate-y-4 opacity-0">0</span>
                            </div>
                        </div>
                        <div  class="rounded-lg px-3 py-2 flex items-center gap-2 bg-[#E7FFF4] text-[#00854B] text-sm">
                            <img class="w-4" src="/image/register/anquan_icon.png"><span  class="flex-1">Your data security is our top priority, this data will be used exclusively in Perqara services.</span>
                        </div>
                        <button  class="text-center bg-[#04A45E] px-7 py-2.5 w-full text-lg text-white rounded-md shadow-gray-500 hover:bg-[#04A45E]/80 transition-all ease-in-out duration-300 cursor-pointer"> Kirim </button>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-8 relative z-10 bg-gradient-to-b from-[#DDF6EB] to-[#FFFFFF] ">
            <div class="max-w-[1280px] mx-auto px-4 xl:px-40">
                <div class="space-y-4">
                    <h2 class="text-2xl md:text-3xl font-bold text-[#262E35] text-center" > Frequently Asked Questions </h2>
                    <div class="space-y-4">
                        <el-collapse  @change="handleChange" class="rounded-xl px-4 py-3 shadow-sm flex gap-4 ">
                            <el-collapse-item title="Consistency" name="1">
                                <template #title="{ isActive }">
                                <div :class="['title-wrapper', { 'is-active': isActive }]">
                                    <div class="space-y-2 flex-1">
                                        <p class="font-semibold leading-5" >What is LawOnGo?</p>
                                    </div>
                                </div>
                                </template>
                                <div>
                                    <p class="font-light text-[#737373] leading-6 group-data-[active=false]:hidden" >Layanan hukum on-demand LawOnGo memungkinkan Anda mendapatkan bantuan hukum sesuai kebutuhan. Anda bisa mengurus perizinan usaha, registrasi hak cipta, konsultasi pajak hingga membuat dokumen hukum kapan saja dengan biaya transparan.</p>
                                </div>
                            </el-collapse-item>
                        </el-collapse>
                    </div>
                    <div class="space-y-4">
                        <el-collapse  @change="handleChange" class="rounded-xl px-4 py-3 shadow-sm flex gap-4 ">
                            <el-collapse-item title="Consistency" name="1">
                                <template #title="{ isActive }">
                                <div :class="['title-wrapper', { 'is-active': isActive }]">
                                    <div class="space-y-2 flex-1">
                                        <p class="font-semibold leading-5" >Apa itu layanan hukum on-demand LawOnGo?</p>
                                    </div>
                                </div>
                                </template>
                                <div>
                                    <p class="font-light text-[#737373] leading-6 group-data-[active=false]:hidden" >Layanan hukum on-demand LawOnGo memungkinkan Anda mendapatkan bantuan hukum sesuai kebutuhan. Anda bisa mengurus perizinan usaha, registrasi hak cipta, konsultasi pajak hingga membuat dokumen hukum kapan saja dengan biaya transparan.</p>
                                </div>
                            </el-collapse-item>
                        </el-collapse>
                    </div>
                    <div class="space-y-4">
                        <el-collapse  @change="handleChange" class="rounded-xl px-4 py-3 shadow-sm flex gap-4 ">
                            <el-collapse-item title="Consistency" name="1">
                                <template #title="{ isActive }">
                                <div :class="['title-wrapper', { 'is-active': isActive }]">
                                    <div class="space-y-2 flex-1">
                                        <p class="font-semibold leading-5" >Apa itu layanan hukum on-demand LawOnGo?</p>
                                    </div>
                                </div>
                                </template>
                                <div>
                                    <p class="font-light text-[#737373] leading-6 group-data-[active=false]:hidden" >Layanan hukum on-demand LawOnGo memungkinkan Anda mendapatkan bantuan hukum sesuai kebutuhan. Anda bisa mengurus perizinan usaha, registrasi hak cipta, konsultasi pajak hingga membuat dokumen hukum kapan saja dengan biaya transparan.</p>
                                </div>
                            </el-collapse-item>
                        </el-collapse>
                    </div>
                    <div class="space-y-4">
                        <el-collapse  @change="handleChange" class="rounded-xl px-4 py-3 shadow-sm flex gap-4 ">
                            <el-collapse-item title="Consistency" name="1">
                                <template #title="{ isActive }">
                                <div :class="['title-wrapper', { 'is-active': isActive }]">
                                    <div class="space-y-2 flex-1">
                                        <p class="font-semibold leading-5" >Apa itu layanan hukum on-demand LawOnGo?</p>
                                    </div>
                                </div>
                                </template>
                                <div>
                                    <p class="font-light text-[#737373] leading-6 group-data-[active=false]:hidden" >Layanan hukum on-demand LawOnGo memungkinkan Anda mendapatkan bantuan hukum sesuai kebutuhan. Anda bisa mengurus perizinan usaha, registrasi hak cipta, konsultasi pajak hingga membuat dokumen hukum kapan saja dengan biaya transparan.</p>
                                </div>
                            </el-collapse-item>
                        </el-collapse>
                    </div>
                </div>
            </div>
        </section>

        <section  class="py-8 relative z-10">
            <div  class="max-w-[1280px] mx-auto px-4 xl:px-60">
                <div class="relative bg-gradient-to-r from-[#00B163] to-[#00D89C]  md:p-6  flex flex-col md:flex-row items-center gap-3 md:gap-6 rounded-2xl">
                    <img class="absolute left-[0] -bottom-[0px]"  src="/image/landing-page/icon-customer-service.png" alt="">
                    <div  class="flex flex-col md:flex-row items-center justify-between w-full text-center md:text-left gap-3">
                        <span  class="flex-1 font-semibold text-xl md:text-2xl text-cultured ml-[260px]">Can't find the service you need?</span>
                        <button  class="w-full md:w-auto text-lightblack-1 font-semibold bg-white w-[180px] px-5 py-3 text-[#005F38] text-center rounded-[18px] text-[24px] shadow"> Contact Us </button>
                    </div>
                </div>
            </div>
        </section>
        <TheFooter />
        <LoginDialog
          :show.sync="showLoginDialog"
          @hide="showLoginDialog = false"
        ></LoginDialog>
      </main>
    </div>
  </template>
  
 <style scoped>
 .service-head {
  background-image: url("/image/service-page/service_head.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
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

.processCard {
    background-image: url("/image/service-page/process_bg.png");
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
}

.process-title-1 {
    background-image: url("/image/service-page/process_title_1.png");
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
}
.process-title-2 {
    background-image: url("/image/service-page/process_title_2.png");
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
}
.process-title-3 {
    background-image: url("/image/service-page/process_title_3.png");
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
}

::v-deep .el-collapse-item__header {
    border: none;
    font-size: inherit;
}

::v-deep .el-collapse {
    border: none;
    background: #fff;
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
  <script setup>
    const showLoginDialog = ref(false);
    const inputName = ref("");
    const inputPhone = ref("");
    const inputHukum =ref('')
    const inputEmail = ref('')
    const inputType = ref('')
    const inputBusiness = ref('')
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
    const loginHandler = () => {
        console.log("loginHandler");
        showLoginDialog.value = true;
    };
  </script>
  