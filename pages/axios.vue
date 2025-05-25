<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-05-10 17:46:47
 * @LastEditors: hean
 * @LastEditTime: 2025-05-10 19:57:58
-->
<template>
  <div class="bg-cultured font-dm-sans min-h-screen">
    测试接口
  </div>
</template>

<script setup>
import { ref} from "vue";
import { sendCode } from '~/services/sendCode';
// import {JSEncrypt}  from '~/utils/JSEncrypt.js';
// console.log(JSEncrypt)

import JSEncrypt from 'jsencrypt';

const publicKey = 'MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAIbWcnQIWROhmlba/fhdJ8XGMLjHC5GC/Mb08ZueFocHLD7WUifTfyxTo0DjTm2KpRTMuUAO5YQbofuHU2kB018CAwEAAQ==';

const dataText = JSON.stringify({
  mobile: '13867676767',
});


const encryptor = new JSEncrypt();
encryptor.setPublicKey(publicKey);
const encrypted = encryptor.encrypt(dataText);
console.log('Encrypted:', encrypted);


// const dataText = JSON.stringify({
//   channel: 'io.lawongo.app',
//   mobile: '13867676767',
//   appName: 'LawOnGo'
// });


const testRequest =  async() => {
    const res = await sendCode({
        data:encrypted
    })
}
testRequest()
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
