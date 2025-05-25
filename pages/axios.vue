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
import _ from 'lodash';

const publicKey = 'MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAIbWcnQIWROhmlba/fhdJ8XGMLjHC5GC/Mb08ZueFocHLD7WUifTfyxTo0DjTm2KpRTMuUAO5YQbofuHU2kB018CAwEAAQ==';
const dataText = JSON.stringify({
  channel: 'io.lawongo.app',
  mobile: '6281134946561',
  appName: 'LawOnGo'
});

const encryptor = new JSEncrypt();
encryptor.setPublicKey(publicKey);
// 分段加密函数
function rsaEncryptLongString(str, maxChunkSize = 31) {
  const chunks = [];
  for (let i = 0; i < str.length; i += maxChunkSize) {
    const chunk = str.substring(i, i + maxChunkSize);
    const encrypted = encryptor.encrypt(chunk);
    if (!encrypted) {
      throw new Error('加密失败，可能是分段过长');
    }
    chunks.push(encrypted);
  }
  return chunks; // 返回加密后的 Base64 数组
}

const encryptedChunks = rsaEncryptLongString(dataText);
console.log('Encrypted chunks:', encryptedChunks);
const testRequest =  async() => {
    const res = await sendCode({
        data:encryptedChunks
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
