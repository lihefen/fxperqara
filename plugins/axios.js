import axios from "axios";
import { ElMessage } from 'element-plus';

export default defineNuxtPlugin((NuxtApp) => {
    const errorHandler = error => {
        // 增加取消请求loading控制，在cancel里面植入cancel标识即不走到当前loading
        error.message != 'cancel' && ElMessage('网络异常，请稍后重试' );
        return error;
    };
    const request = axios.create({
        timeout: 10000,
        withCredentials: true,
        headers: {
            'Cache-Control': 'no-cache',
        },
    });

    const setRequestType = config => {
        let isForm = /x-www-form-urlencoded/.test(config.headers['Content-Type']);
        if ((config.requestType && config.requestType.toLowerCase() === 'form') || isForm) {
            config['transformRequest'] = [
                data => {
                    return urlEncode(data);
                },
            ];
        }
        return config;
    };
    // 请求拦截器
    request.interceptors.request.use(
        config => {
            setRequestType(config);
            let { showLoading } = config;
            if (showLoading) {
                config.loadingHandler = loading.show();
            }
    
            return config;
        },
        err => {
            errorHandler(err);
        }
    );
    
    request.interceptors.response.use(
        res => {
            let { config, status, data } = res;
            if (config.showToast && status !== 200) {
                ElMessage('网络错误，请稍后重试');
            }
            if (config.showLoading) {
                config.loadingHandler.hide();
            }
            return data;
        },
        err => {
            errorHandler(err);
        }
    );
    return {
        provide: {
            request
        }
    }

})