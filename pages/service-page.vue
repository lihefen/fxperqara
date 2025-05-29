<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-05-08 21:13:28
 * @LastEditors: hean
 * @LastEditTime: 2025-05-30 00:46:34
-->

<template>
    <div class="bg-white font-dm-sans min-h-screen">
      <main>
        <TheNavbar @loginHandler="loginHandler" />
        <About />
        <TheFooter />
        <LoginDialog
          :show.sync="showLoginDialog"
          @hide="showLoginDialog = false"
        ></LoginDialog>
      </main>
    </div>
  </template>
  
  <script setup>
  const showLoginDialog = ref(false);
  const loginHandler = () => {
    console.log("loginHandler");
    showLoginDialog.value = true;
  };
  </script>
  