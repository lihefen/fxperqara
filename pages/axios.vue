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
console.log(useNuxtApp())
const {$request} = useNuxtApp()
console.log($request)

const testRequest =  async() => {
    const res = await $request.get('/proxyDev/ter-fin-wealth/wap/account/info')
    console.log(res)
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
