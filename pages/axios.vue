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
import forge from 'node-forge';
// import {JSEncrypt}  from '~/utils/JSEncrypt.js';
// console.log(JSEncrypt)

import JSEncrypt from 'jsencrypt';

const publicKey = 'MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAIbWcnQIWROhmlba/fhdJ8XGMLjHC5GC/Mb08ZueFocHLD7WUifTfyxTo0DjTm2KpRTMuUAO5YQbofuHU2kB018CAwEAAQ==';

// const dataText = JSON.stringify({
//     mobile: '13867676767',
// });
const dataText = JSON.stringify({
  channel: 'io.lawongo.app',
  mobile: '6281134946561',
  appName: 'LawOnGo'
});

function encryptDataWithRSA(data, publicKey) {
    const encryptor = new JSEncrypt();
    encryptor.setPublicKey(publicKey);
    const blockSize = 53; // 根据密钥大小调整此值，对于2048位的RSA，最大加密数据长度大约为245字节(考虑填充后)
    let byteArrays = [];
    for (let i = 0; i < data.length; i += blockSize) {
        let block = data.substr(i, blockSize);
        let encryptedBlock = encryptor.encrypt(block);
        console.log("明文encryptedBlock数:", encryptedBlock);
        // 使用forge将Base64编码的加密块转换为字节数组
        let byteArray = forge.util.decode64(encryptedBlock);
        // 将字符串转为字节数组
        byteArrays.push([...byteArray].map(c => c.charCodeAt(0)));
    }
    let combined = new Uint8Array(byteArrays.flat());
    // 将合并后的字节数组转换回Base64
    let finalBase64 = forge.util.encode64(String.fromCharCode.apply(null, combined));
    return finalBase64;
}

const dataBody = encryptDataWithRSA(dataText,publicKey)
console.log(222,dataBody,111)

const testRequest =  async() => {
    const res = await sendCode({
        data:dataBody
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
