/*
 * @Description:
 * @version:
 * @Author: hean
 * @Date: 2025-05-07 23:27:22
 * @LastEditors: hean
 * @LastEditTime: 2025-05-10 09:27:13
 */
import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css", "~/assets/css/entry.css"],
  modules: ["@nuxt/eslint", "@nuxt/image", "@nuxt/ui", "@nuxt/icon"],
  // swiper: {
  //   // 配置 swiper
  //   prefix: "Swiper", // 组件前缀
  //   styleLang: "css", // 样式语言
  //   modules: ["navigation", "pagination"], // 使用模块
  // },
  image: {
    // 配置图片服务
    provider: "ipx", // 或其他提供商
  },
  vite: {
    plugins: [tailwindcss()],
  },
  ui: {
    fonts: false,
  },
  icon: {
    mode: "css",
    cssLayer: "base",
    serverBundle: {
      collections: ["streamline"], // <!--- this
    },
  },
});
