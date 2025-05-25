<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-05-07 23:27:22
 * @LastEditors: hean
 * @LastEditTime: 2025-05-10 17:45:16
-->
<template>
  <div class="bg-[#f4f2f3] font-dm-sans min-h-screen">
    <main>
      <TheNavbar @loginHandler="loginHandler" />
      <div class="bg-white font-lexend -mt-16">
        <HeroBanner />
        <Features />
        <Consultation />
        <Solution />
        <TopAdvocate />
        <Testimonies />
        <FootBanner />
        <TheFooter />
      </div>
    </main>
    <LoginDialog
      v-model:show="showLoginDialog"
      @hide="showLoginDialog = false"
    ></LoginDialog>
  </div>
</template>
<script setup>
import { ref, defineEmits } from "vue";
const showLoginDialog = ref(false);
const loginHandler = () => {
  console.log("loginHandler");
  showLoginDialog.value = true;
};
</script>
