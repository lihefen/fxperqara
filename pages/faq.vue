<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-05-10 17:46:47
 * @LastEditors: hean
 * @LastEditTime: 2025-05-10 18:18:03
-->
<template>
  <div class="bg-cultured font-dm-sans min-h-screen">
    <main>
        <TheNavbar @loginHandler="loginHandler" />
        <div class="bg-cultured">
            <div class="px-6 md:px-10 lg:px-10 xl:px-36 2xl:px-72 h-auto pt-4 md:pt-8 container mx-auto">
                <h1 class="font-dm-sans text-black font-bold text-xl antialiased"> Frequently Asked Questions </h1>
                <h2 class="font-dm-sans text-black font-medium text-xl antialiased pt-8"> Tentang Perqara </h2>

                <section class="flex flex-col md:flex-row mt-4">
                    <div class="w-full">
                        <div>
                            <div class="bg-white rounded-lg shadow-lg p-4 mb-5">
                                <el-collapse  @change="handleChange">
                                    <el-collapse-item title="Consistency" name="1">
                                        <template #title="{ isActive }">
                                        <div :class="['title-wrapper', { 'is-active': isActive }]">
                                            <h4 class="font-dm-sans text-black text-base font-medium antialiased">Apa itu Perqara?</h4>
                                        </div>
                                        </template>
                                        <div>
                                            <div class="mt-2 text-base font-dm-sans text-slate-500 font-normal antialiased prose">Perqara adalah <i>all-in-one</i> online platform yang dapat menghubungkan Anda dengan berbagai macam profesional hukum terbaik di Indonesia. Melalui Perqara, Anda dapat mengakses berbagai layanan hukum kapanpun dan dimanapun. Layanan tersebut meliputi konsultasi hukum, layanan perusahaan, pembuatan dokumen, pendaftaran HAKI, dan konsultasi pajak.</div>
                                        </div>
                                    </el-collapse-item>
                                </el-collapse>
                            </div>
                        </div>

                        <div>
                            <div class="bg-white rounded-lg shadow-lg p-4 mb-5">
                                <el-collapse  @change="handleChange">
                                    <el-collapse-item title="Consistency" name="1">
                                        <template #title="{ isActive }">
                                        <div :class="['title-wrapper', { 'is-active': isActive }]">
                                            <h4 class="font-dm-sans text-black text-base font-medium antialiased">Apa saja jenis layanan yang tersedia di Perqara?</h4>
                                        </div>
                                        </template>
                                        <div>
                                            <div class="mt-2 text-base font-dm-sans text-slate-500 font-normal antialiased prose">Perqara menyediakan layanan hukum sebagai berikut:<br><ol><li>Konsultasi Hukum</li><ul><li>Konsultasi hukum langsung bersama Mitra Advokat Perqara melalui chat, voice call, maupun video call.</li></ul><li>Layanan Perusahaan</li><ul><li>Layanan pendirian badan usaha (PT, CV, Yayasan), perubahan akta, dan waarmerking.</li></ul><li>Pembuatan Dokumen</li><ul><li>Layanan pembuatan dokumen untuk individu/perusahaan seperti Perjanjian Jual Beli, Perjanjian Kerja, Surat Kuasa, dll.</li></ul><li>Pendaftaran HAKI</li><ul><li>Layanan pendaftaran Merek, Hak Cipta, dll.</li></ul><li>Konsultasi Pajak</li><ul><li>Konsultasi pelaporan pajak perusahaan maupun individu.</li></ul></ol></div>
                                        </div>
                                    </el-collapse-item>
                                </el-collapse>
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
const showLoginDialog = ref(false);
const loginHandler = () => {
    console.log("loginHandler");
    showLoginDialog.value = true;
};

const activeNames = ref(['1'])
const handleChange = (val) => {
  console.log(val)
}
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
