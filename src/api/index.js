import { DOMAIN } from '../config'
import { responseHandler, errorHandler } from '../utils/helpers'

const BASE_URL = `${DOMAIN}/api/v1`

const HEADERS = {
	'Content-Type': 'application/json',
  'Accept': 'application/json',
}

export const getStoresGroups = () => {
	return fetch(`${BASE_URL}/shops/groups`, {headers: HEADERS})
		.then(responseHandler)
		.catch(errorHandler)
}

export const getStoresByGroup = groupId => {
	return fetch(`${BASE_URL}/shops/list/by-group/${groupId}`, {headers: HEADERS})
		.then(responseHandler)
		.catch(errorHandler)
}

