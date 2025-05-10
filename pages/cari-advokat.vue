<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-05-10 20:00:23
 * @LastEditors: hean
 * @LastEditTime: 2025-05-10 20:39:24
-->
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
    <main>
        <TheNavbar @loginHandler="loginHandler" />
        <div class="bg-[#F6F9FD]">
            <div class="container max-w-[1280px] mx-auto xl:p-0 xl:px-40 h-full 2xl:h-auto relative">
                <div class="text-black pt-4 md:pt-8 p-4"><p class="font-lexend font-bold text-xl lg:text-3xl"> Konsultasi Hukum Online </p><h1 class="text-[#757E8C] font-lexend text-xs lg:text-base font-semibold antialiased"> Temukan Advokat terbaik untuk Anda </h1></div>

                <div id="wrap-inputSearching" class="pb-6 p-4 sticky top-16 z-[5] flex flex-row gap-5 lg:block bg-[#F6F9FD]">
                    <div class="basis-5/6">
                        <div class="relative">
                            <el-input
                                v-model="inputSearch"
                                type="search"
                                placeholder="Cari Nama Advokat"
                                :prefix-icon="Search"
                                size="large"
                            >
                                <template #suffix>
                                    <NuxtImg
                                    alt="icon-search"
                                    class="w-6 h-6"
                                    src="/image/utils/icon-search.png" />
                                </template>
                            </el-input>
                        </div>
                    </div>
                    <div class="relative basis-1/6 bg-white border border-blue-2 lg:hidden rounded-md flex justify-center items-center">
                        <button class="w-6 h-6">
                            <NuxtImg
                                alt="icon-filter"
                                class="w-6 h-6"
                                src="/image/utils/icon-filter.png" />
                        </button>
                    </div>
                </div>

                <div class="lg:grid lg:grid-cols-3 lg:gap-x-6 px-4">
                    <div>
                        <div id="wrap-filter-mobile">

                        </div>
                    </div>
                    <div class="lg:col-span-2">
                        <div class="lg:sticky lg:top-[150px]">
                            <div class="hidden lg:block">
                                <div class="z-10 grid place-items-center fixed overflow-auto top-0 left-0 h-full w-full bg-black bg-opacity-50 lg:static lg:overflow-visible lg:place-items-baseline lg:bg-transparent lg:top-auto lg:left-0"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <TheFooter />
    </main>
    <LoginDialog :show.sync="showLoginDialog" @hide="showLoginDialog = false" ></LoginDialog>

  </div>
</template>

<script setup>
import { ref ,defineEmits} from "vue";
const inputSearch = ref('')
const showLoginDialog = ref(false);
const loginHandler = () => {
    console.log("loginHandler");
    showLoginDialog.value = true;
};

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
