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
  css: [
    "~/assets/css/main.css",
    "~/assets/css/entry.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  modules: ["@nuxt/eslint", "@nuxt/image", "@nuxt/ui"],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    // 配置图片服务
    provider: "ipx", // 或其他提供商
  },
  ui: {
    fonts: false,
  },
});
