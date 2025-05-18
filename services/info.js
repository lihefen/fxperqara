const {$request} = useNuxtApp()
console.log(useNuxtApp(), $request)
export const info = ({ ...other } = {}, config = {}) =>
	$request('xxxxxxx', {
		data: {},
		method: 'get',
		showToast: false,
		showLoading: false,
		...other,
		...config,
	});
