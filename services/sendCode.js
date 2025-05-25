
import { useNuxtApp } from '#app';

export const sendCode = ({ ...other } = {}, config = {}) => {
    const { $request } = useNuxtApp();
    return $request('/proxyDev/api/app/login/send-code', {
		data: {},
		method: 'POST',
		showToast: false,
		showLoading: false,
		...other,
		...config,
	})
}
