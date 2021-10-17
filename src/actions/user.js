import * as types from './types'

export const setUserKey = (key, data) => ({
	type: types.SET_USER_KEY,
	key,
	data,
})

export const setUser = data => ({
	type: types.SET_USER,
	data,
})

export const resetUser = () => ({
	type: types.RESET_USER,
})

