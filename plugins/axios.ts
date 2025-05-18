import { defineNuxtPlugin } from '#app'
import axios from 'axios'

export interface ApiResponse<T = any> {
  code: number
  data: T
  message: string
//   success: boolean
//   requestId?: string
}

export interface AxiosOptions {
  baseURL?: string
  query?: Record<string, string | number | boolean>
  showError?: boolean
}

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  // 根据环境选择适合的 API 基础 URL
  let baseURL = ''
  const isClient = process.client // Nuxt 3 内置判断是否为客户端
  if (isClient) {
    // 客户端根据环境选择
    baseURL = config.public.env === 'production' ? config.public.prodApiBase : config.public.devApiBase
  } else {
    // SSG 模式下，服务器端使用生产环境 URL
    baseURL = config.public.prodApiBase
  }

  // 创建 axios 实例
  const axiosInstance = axios.create({
    baseURL,
    timeout: 10000, // 可根据需要调整
    headers: {
      'Content-Type': 'application/json',
    },
  })

  // 请求拦截器
  axiosInstance.interceptors.request.use((config) => {
    // 客户端添加 token
    if (isClient) {
      const token = localStorage.getItem('auth_token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
    }
    return config
  })

  /**
   * 封装的 axios 函数
   */
  const customAxios = async <T = any>(url: string, options: AxiosOptions = {}): Promise<ApiResponse<T>> => {
    const { query = {}, showError = true, ...axiosOptions } = options

    try {
      // 处理查询参数
      let fullUrl = url
      if (Object.keys(query).length > 0) {
        const searchParams = new URLSearchParams()
        Object.entries(query).forEach(([key, value]) => {
          if (value !== undefined && value !== null) {
            searchParams.append(key, String(value))
          }
        })
        fullUrl += `?${searchParams.toString()}`
      }

      // 发送请求
      const response: AxiosResponse<ApiResponse<T>> = await axiosInstance({
        url: fullUrl,
        ...axiosOptions,
      })

      const result = response.data

      // 检查 API 业务状态码
      if (result.code !== 200 && showError && isClient) {
        const toast = useToast()
        toast.add({
          title: '请求失败',
          description: result.message || '未知错误',
          color: 'error',
        })
      }

      return result
    } catch (error) {
      let errorMessage = '网络请求失败'
      if (axios.isAxiosError(error)) {
        errorMessage = error.response?.data?.message || error.message
      } else if (error instanceof Error) {
        errorMessage = error.message
      }

      if (showError && isClient) {
        const toast = useToast()
        toast.add({
          title: '请求错误',
          description: errorMessage,
          color: 'error',
        })
      }

      return {
        code: 500,
        data: null as T,
        message: errorMessage,
        success: false,
      }
    }
  }

  // 提供给全局使用
  nuxtApp.provide('customAxios', customAxios)
})