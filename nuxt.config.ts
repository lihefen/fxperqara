/*
 * @Description:
 * @version:
 * @Author: hean
 * @Date: 2025-05-07 23:27:22
 * @LastEditors: hean
 * @LastEditTime: 2025-05-14 14:12:32
 */
import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr:false,
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    css: [
        "~/assets/css/main.css",
        "~/assets/css/entry.css",
        "@fortawesome/fontawesome-svg-core/styles.css",
    ],
    modules: ["@nuxt/eslint", "@nuxt/image", "@nuxt/ui",'@element-plus/nuxt'],
    vite: {
        plugins: [tailwindcss()],
    },
    nitro: {
        devProxy:{
            "/proxyDev":{
                target: 'xxxx',
                changeOrigin: true,
                prependPath: true,
            }
        }
    },
    alias: {
        // services: "/<rootDir>/services",
    },
    devServer: {
        port: 5000, // 你可以选择一个未被占用的端口
        host: 'http://g.test.net'
    },
    image: {
        // 配置图片服务
        provider: "ipx", // 或其他提供商
    },
    ui: {
        fonts: false,
    },
      // 运行时配置
  runtimeConfig: {
    // 在客户端也可用的公共配置
    public: {
      // 开发环境 API 地址
      devApiBase: 'http://localhost:8000/api',
      // 生产环境 API 地址
      prodApiBase: 'https://api.yourdomain.com/api',
      // 当前环境（可以在 Cloudflare 环境变量中设置）
      env: 'development'
    }
  },
});
