// For Nuxt 3
import VueScrollTo from 'vue-scrollto'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueScrollTo, {
        duration: 500,        // 滚动持续时间（毫秒）
        easing: "ease-in-out", // 滚动动画效果
        offset: -100,         // 滚动偏移量
    })
});
