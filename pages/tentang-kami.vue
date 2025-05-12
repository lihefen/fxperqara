<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-05-08 21:13:28
 * @LastEditors: hean
 * @LastEditTime: 2025-05-13 00:14:51
-->

<template>
  <div class="bg-[#f4f2f3] font-dm-sans min-h-screen">
    <main>
      <TheNavbar @loginHandler="loginHandler" />
      <div>
        <TentangkamiSection>
            
        </TentangkamiSection>
      </div>
      <TheFooter />
      <LoginDialog :show.sync="showLoginDialog" @hide="showLoginDialog = false" ></LoginDialog>
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