<template>
  <div class="bg-cultured font-dm-sans min-h-screen">
    <div class="font-lexend antialiased">
        <div class="bg-[#E3F4FD] lg:min-h-screen">
            <div class="md:max-w-[492px] lg:max-w-[1280px] sm:px-4 xl:px-40 mx-auto py-6">
                <a href="/" class=""><img src="/image/logo-perqara.png" alt="logo-perqara" class="mx-auto mb-3"></a>
                <div>
                    111
                </div>
            </div>
        </div>
        <TheFooter />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import RegisterSwiper from '@/components/RegisterSwiper.vue'

const router = useRouter()
const inputEmail = ref('');
const inputPassword = ref('');
const navigateToRegister = () => {
    router.push('/register')
};


</script>