import { useNuxtApp } from '#app';

export const loginCode = ({ ...other } = {}, config = {}) => {
    const { $request } = useNuxtApp();
    return $request('/proxyDev/api/app/login/login/code', {
		data: {},
		method: 'POST',
		showToast: false,
		showLoading: false,
		...other,
		...config,
	})
}
