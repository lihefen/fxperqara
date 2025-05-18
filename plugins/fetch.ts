import { defineNuxtPlugin } from '#app'

export interface ApiResponse<T = any> {
    code: number
    data: T
    message: string
    // success: boolean
    // requestId?: string
}

export interface FetchOptions extends RequestInit {
    baseURL?: string
    query?: Record<string, string>
    showError?: boolean
}

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig()

    // 根据环境选择适合的 API 基础 URL
    let baseURL = ''
    if (typeof window !== 'undefined') {
        // 客户端根据环境选择
        baseURL = config.public.env === 'production'
            ? config.public.prodApiBase
            : config.public.devApiBase
    } else {
        // SSG 模式下，服务器端使用生产环境 URL
        baseURL = config.public.prodApiBase
    }

    /**
     * 封装的fetch函数
     */
    const customFetch = async <T = any>(
        url: string,
        options: FetchOptions = {}
    ): Promise<ApiResponse<T>> => {
        const {
            baseURL: optionsBaseURL,
            query = {},
            showError = true,
            ...fetchOptions
        } = options

        // 构建完整URL
        let fullUrl = `${optionsBaseURL || baseURL}${url}`

        // 添加查询参数
        if (Object.keys(query).length > 0) {
            const searchParams = new URLSearchParams()
            Object.entries(query).forEach(([key, value]) => {
                searchParams.append(key, value)
            })
            fullUrl += `?${searchParams.toString()}`
        }

        // 设置默认headers
        const headers = new Headers(fetchOptions.headers)
        if (!headers.has('Content-Type')) {
            headers.set('Content-Type', 'application/json')
        }

        // 获取token（如果有），确保兼容SSR
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('auth_token')
            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }
        }

        try {
            const response = await fetch(fullUrl, {
                ...fetchOptions,
                headers
            })

            // 检查HTTP状态
            if (!response.ok) {
                throw new Error(`HTTP错误: ${response.status}`)
            }

            const result = await response.json() as ApiResponse<T>

            // 检查API返回的业务状态码
            if (result.code !== 200 && showError) {
                const toast = useToast()
                toast.add({
                    title: '请求失败',
                    description: result.message || '未知错误',
                    color: 'error'
                })
            }

            return result
        } catch (error) {
            if (showError) {
                const toast = useToast()
                toast.add({
                    title: '请求错误',
                    description: error instanceof Error ? error.message : '网络请求失败',
                    color: 'error'
                })
            }

            return {
                code: 500,
                data: null as T,
                message: error instanceof Error ? error.message : '网络请求失败',
                success: false
            }
        }
    }

    // 将自定义的 fetch 方法提供给应用全局使用
    nuxtApp.provide('customFetch', customFetch);
})
