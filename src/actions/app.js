import * as types from './types'

export const setAppKey = (key, data) => ({
	type: types.SET_APP_KEY,
	key,
	data,
})
