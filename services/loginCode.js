const {$request} = useNuxtApp()
console.log(useNuxtApp(), $request)
export const loginCode = ({ ...other } = {}, config = {}) =>
	$request('/api/app/login/login/code', {
		data: {},
		method: 'POST',
		showToast: false,
		showLoading: false,
		...other,
		...config,
	});
