<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-05-10 15:16:42
 * @LastEditors: hean
 * @LastEditTime: 2025-05-23 17:05:21
-->
<template>
  <div class="bg-cultured font-dm-sans min-h-screen">
    <div class="font-lexend antialiased">
        <div class="bg-[url('/image/register/banner-register.png')] bg-cover bg-[#E3F4FD] lg:min-h-screen">
            <div class="md:max-w-[492px] lg:max-w-[1280px] sm:px-4 xl:px-40 mx-auto py-6">
                <a href="/" class=""><img src="/image/logo-perqara.png" alt="logo-perqara" class="mx-auto mb-3"></a>
                <div>
                    <div class="flex items-center justify-between py-2 px-4 sm:px-0 mb-3">
                        <button><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 18.3102C11.0975 18.7008 11.0975 19.3339 10.707 19.7244C10.3164 20.115 9.68327 20.115 9.29274 19.7244L3.49985 13.9315C2.7188 13.1505 2.7188 11.8842 3.49985 11.1031L9.29274 5.31023C9.68327 4.9197 10.3164 4.9197 10.707 5.31023C11.0975 5.70075 11.0975 6.33392 10.707 6.72444L5.91406 11.5173H19.9998C20.5521 11.5173 20.9998 11.965 20.9998 12.5173C20.9998 13.0696 20.5521 13.5173 19.9998 13.5173H5.91406L10.707 18.3102Z" fill="#262E35"></path></svg></button>
                        <div class="font-semibold sm:text-base text-sm"> Don’t have a LawOnGo
                            <button @click="navigateToRegister" class="ml-2 h-7 bg-[#F3FBFF] border-1 text-[#333333]  rounded-[18px] sm:px-4 px-3 sm:text-sm text-xs font-semibold  hover:bg-white hover:text-[#1192E8] transition-colors"> Login </button>
                        </div>
                    </div>

                    <div flex lg:flex-row flex-col gap-6>
                        <div class="lg:bg-[#E3F4FD]/80 lg:rounded-2xl lg:px-20 sm:px-0 px-4 lg:max-h-[800px] overflow-hidden flex-1">
                        </div>

                        <div class="flex flex-col justify-between w-full h-[532px] md:h-[640px] lg:w-[386px] p-4 md:p-6 rounded-2xl bg-white md:shadow-[0_20px_50px_0_rgba(0,0,0,0.13)]">
                            <div>
                                <div class="flex flex-col gap-6">
                                    <p class="text-2xl text-neutral-800 text-center font-bold"> Login</p>
                                    <div class="flex flex-col gap-3">
                                        <div>
                                            <p  class="font-medium font-dm-sans antialiased mb-2 text-black text-base">Nomor Ponsel atau Email</p>
                                            <div class="relative w-full">
                                                <el-input v-model="inputEmail" type="text" placeholder="email@email.com atau 0813302938***" ></el-input>
                                            </div>
                                        </div>
                                        <div >
                                            <p class="font-medium font-dm-sans antialiased mb-2 text-black text-base">Kata Sandi</p>
                                            <div class="relative w-full">
                                                <el-input
                                                    v-model="inputPassword"
                                                    type="password"
                                                    placeholder="Contoh: Abc1*"
                                                    show-password
                                                />

                                                <div class="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex justify-end -mt-4"><button class="text-sm text-blue-2 font-semibold text-right"> Lupa kata sandi? </button></div>
                                    <button type="button" class="focus:outline-none focus:outline-0 focus-visible:outline-0 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 flex-shrink-0 transition-all ease-in-out duration-300 w-full flex justify-center items-center px-4.5 py-2.5 md:text-lg bg-blue-2 text-white hover:bg-blue-9 rounded-lg font-medium"><span> Masuk </span></button>
                                </div>

                                <div class="flex flex-col gap-4">
                                    <div class="border-t border-[#CED1D6]"></div>
                                    <div>
                                        <p class="antialiased font-semibold mb-2"> Masuk sebagai Advokat </p>
                                        <a href="/login/advokat" class=""><img class="w-full cursor-pointer" src="/image/lawyer/login/banner-login-advokat.png" alt="banner-advokat"></a>
                                    </div>
                                    
                                    <div class="flex items-start gap-1"><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.6673 8.51725C14.6673 12.1992 11.6825 15.1839 8.00065 15.1839C4.31875 15.1839 1.33398 12.1992 1.33398 8.51725C1.33398 4.83535 4.31875 1.85059 8.00065 1.85059C11.6825 1.85059 14.6673 4.83535 14.6673 8.51725ZM8.00065 12.3506C8.27679 12.3506 8.50065 12.1267 8.50065 11.8506V7.85059C8.50065 7.57444 8.27679 7.35059 8.00065 7.35059C7.72451 7.35059 7.50065 7.57444 7.50065 7.85059V11.8506C7.50065 12.1267 7.72451 12.3506 8.00065 12.3506ZM8.00065 5.18392C8.36884 5.18392 8.66732 5.4824 8.66732 5.85059C8.66732 6.21878 8.36884 6.51725 8.00065 6.51725C7.63246 6.51725 7.33398 6.21878 7.33398 5.85059C7.33398 5.4824 7.63246 5.18392 8.00065 5.18392Z" fill="#757E8C"></path></svg>
                                    <p class="text-xs text-slate-500 antialiased font-light flex-1"> Untuk pengalaman lebih baik, anda dapat menggunakan browser <span class="font-semibold">Google Chrome</span> atau <span class="font-semibold">Firefox</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <TheFooter />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const inputEmail = ref('');
const inputPassword = ref('');
const navigateToRegister = () => {
    router.push('/register')
};


</script>