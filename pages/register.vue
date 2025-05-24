<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-05-10 09:39:46
 * @LastEditors: hean
 * @LastEditTime: 2025-05-23 16:57:17
-->
<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-05-08 21:13:28
 * @LastEditors: hean
 * @LastEditTime: 2025-05-08 21:56:32
-->

<template>
  <div class="bg-cultured font-dm-sans min-h-screen">
    <div class="font-lexend antialiased">
        <div class="bg-[url('/image/register/banner-register.png')] bg-cover bg-[#E3F4FD] lg:min-h-screen">
            <div class="md:max-w-[492px] lg:max-w-[1280px] sm:px-4 xl:px-40 mx-auto py-6">
                <a href="/" class=""><img src="/image/logo-perqara.png" alt="logo-perqara" class="mx-auto mb-3"></a>
                <div>
                    <div class="flex items-center justify-between py-2 px-4 sm:px-0 mb-3"><button><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 18.3102C11.0975 18.7008 11.0975 19.3339 10.707 19.7244C10.3164 20.115 9.68327 20.115 9.29274 19.7244L3.49985 13.9315C2.7188 13.1505 2.7188 11.8842 3.49985 11.1031L9.29274 5.31023C9.68327 4.9197 10.3164 4.9197 10.707 5.31023C11.0975 5.70075 11.0975 6.33392 10.707 6.72444L5.91406 11.5173H19.9998C20.5521 11.5173 20.9998 11.965 20.9998 12.5173C20.9998 13.0696 20.5521 13.5173 19.9998 13.5173H5.91406L10.707 18.3102Z" fill="#262E35"></path></svg></button><div class="font-semibold sm:text-base text-sm"> Punya akun LawOnGo? <a href="/login" class=""><button class="ml-2 sm:h-10 h-8 bg-[#F3FBFF] rounded-md sm:px-4 px-3 sm:text-sm text-xs font-semibold text-blue-2 hover:bg-white hover:text-[#1192E8] transition-colors"> Masuk </button></a></div></div>

                    <div class="flex lg:flex-row flex-col gap-6">
                        <div class="lg:bg-[#E3F4FD]/80 lg:rounded-2xl lg:px-20 sm:px-0 px-4 lg:max-h-[800px] overflow-hidden flex-1">
                            <RegisterSwiper />
                        </div>

                        <div class="lg:w-[386px] space-y-3">
                            <div id="form-register" class="p-4 md:p-6 rounded-2xl bg-white md:shadow-[0_20px_50px_0_rgba(0,0,0,0.13)]">
                                <p class="text-center text-neutral-800 text-2xl font-bold pb-4"> Daftar Akun </p>
                                <div class="space-y-4">
                                    <div class="space-y-2">
                                        <label class="text-slate-700 text-xs">Nama Lengkap</label>
                                        <div>
                                            <el-input v-model="inputName" type="text" placeholder="Tuliskan email aktif Anda" ></el-input>
                                        </div>
                                    </div>

                                    <div class="space-y-2">
                                        <label class="text-slate-700 text-xs">Nomor Handphone</label>
                                        <div>
                                            <el-input v-model="inputPhone" type="tel" placeholder="Contoh: 08123456789"></el-input>
                                            <p class="text-[#647387] font-light mt-1 text-xs"> kode OTP akan dikirim melalui Whatsapp </p>
                                        </div>
                                    </div>

                                    <div id="border-solid" class="border-t border-lightgrey-5"></div>

                                    <div class="flex gap-2 items-center">
                                        <p class="text-slate-700 text-sm font-semibold"> Data Pendukung </p><button><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.58594 5.5299C7.36699 4.84648 8.63332 4.84648 9.41436 5.5299C10.1954 6.21331 10.1954 7.32135 9.41436 8.00477C9.27842 8.12372 9.12778 8.22197 8.96755 8.29951C8.47043 8.5401 8.00015 8.96505 8.00015 9.51733V10.0173M14 8.51733C14 11.831 11.3137 14.5173 8 14.5173C4.68629 14.5173 2 11.831 2 8.51733C2 5.20363 4.68629 2.51733 8 2.51733C11.3137 2.51733 14 5.20363 14 8.51733ZM8 12.0173H8.005V12.0223H8V12.0173Z" stroke="#3A475B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
                                    </div>

                                    <div class="px-3 py-2 bg-[#F5FBFD] rounded-lg flex gap-2">
                                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 13.2672L11.25 15.5172L15 10.2672M12 3.23145C9.8495 5.26807 6.94563 6.5172 3.75 6.5172C3.69922 6.5172 3.64852 6.51688 3.59789 6.51625C3.2099 7.69636 3 8.95729 3 10.2672C3 15.8588 6.82432 20.5571 12 21.8892C17.1757 20.5571 21 15.8588 21 10.2672C21 8.95729 20.7901 7.69636 20.4021 6.51625C20.3515 6.51688 20.3008 6.5172 20.25 6.5172C17.0544 6.5172 14.1505 5.26807 12 3.23145Z" stroke="#2072B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        <p class="text-slate-700 text-xs font-light flex-1"> Keamanan data Anda adalah prioritas utama kami, data ini akan digunakan secara eksklusif dalam layanan LawOnGo. </p>
                                    </div>

                                    <div class="space-y-2">
                                        <label class="text-slate-700 text-xs">Email</label>
                                        <div>
                                            <el-input v-model="inputEmail" type="email" placeholder="Tuliskan email aktif Anda"></el-input>
                                        </div>
                                    </div>

                                    <div class="space-y-2">
                                        <label class="text-slate-700 text-xs">Tanggal Lahir</label>
                                        <div>
                                            <el-date-picker
                                                v-model="inputDate"
                                                type="date"
                                                placeholder="年/月/日"
                                                size="large"
                                                class="w-full"
                                            />
                                        </div>
                                    </div>

                                    <!-- 性别 -->
                                    <div class="space-y-2">
                                        <label for="kelamin" class="text-xs text-slate-700">Jenis Kelamin</label>
                                        <div>
                                            <div class="flex w-full">
                                                <!-- 女性 -->
                                                <el-radio-group v-model="inputGender" size="large">
                                                    <el-radio-button label="Laki - Laki" value="Laki - Laki" />
                                                    <el-radio-button label="Perempuan" value="Perempuan" />
                                                </el-radio-group>


                                            </div>
                                        </div>
                                    </div>
                                    <!-- 城市 & 地区 -->
                                    <div class="space-y-2">
                                        <p class="text-slate-700 text-xs"> Kota </p>
                                        <div>
                                            <div class="mt-2 w-full rounded-lg text-black">
                                                <div class="multiselect">
                                                    <el-select
                                                        v-model="inputCity"
                                                        placeholder="Select"
                                                        size="large"
                                                        >
                                                        <el-option
                                                            v-for="item in options"
                                                            :key="item.value"
                                                            :label="item.label"
                                                            :value="item.value"
                                                        />
                                                    </el-select>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <p class="text-neutral-800 text-sm text-center"> Dengan mendaftar, saya menyetujui <a href="/syarat-ketentuan" class="text-steelBlue"> Syarat dan Ketentuan </a> serta <a href="/kebijakan-privasi" class="text-steelBlue"> Kebijakan Privasi </a> LawOnGo. </p>
                                    <button type="button" class="focus:outline-none focus:outline-0 focus-visible:outline-0 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 flex-shrink-0 transition-all ease-in-out duration-300 w-full flex justify-center items-center px-4.5 py-2.5 md:text-lg bg-blue-2 text-white hover:bg-blue-9 rounded-lg font-medium"><span> Daftar </span></button>
                                </div>
                            </div>
                            <div class="md:px-6 py-3 px-4 rounded-2xl bg-white">
                                <p class="font-semibold text-center mb-4"> Gabung Menjadi Advokat </p><a href="/register/advokat" class=""><img class="w-full cursor-pointer" src="/image/lawyer/login/banner-login-advokat.png" alt="banner-advokat"></a>
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
import RegisterSwiper from '@/components/RegisterSwiper.vue'

const router = useRouter()
const inputName = ref('')
const inputPhone = ref('')
const inputEmail = ref('')
const inputDate = ref('')
const inputGender = ref('Perempuan')
const inputCity = ref('')

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]

const navigateToRegister = () => {
    router.push('/login')
};
</script>