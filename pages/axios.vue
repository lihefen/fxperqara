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
import { info } from '~/services/info';
const { $customAxios } = useNuxtApp()
const {$customFetch} = useNuxtApp()
const testRequest =  async() => {
    const res = await $customAxios('/users',{
    method:'GET'
    })
    console.log(res)
}
testRequest()
const testFetch = async() => {
    const res = await $customFetch('/users')
    console.log(res)
}
testFetch()
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
