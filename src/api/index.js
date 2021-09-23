import { responseHandler, errorHandler } from '../utils/helpers'

const BASE_URL = `https://dummyapi.io/data/v1`
const APP_ID = `614b1333d2c8362afcf2e248`

const HEADERS = {
	'Content-Type': 'application/json',
  'Accept': 'application/json',
  'app-id': APP_ID,
}

export const getCategories = () => {
	return fetch(`http://id4102.thestagingdomain.com/api/v1/shops/groups`, {headers: HEADERS})
		.then(responseHandler)
		.catch(errorHandler)
}

export const getStores = () => {
	return fetch(`${BASE_URL}/post?limit=10`, {headers: HEADERS})
		.then(responseHandler)
		.catch(errorHandler)
}

export const getBanners = () => {
	return fetch(`${BASE_URL}/tag/accessories/post?limit=4`, {headers: HEADERS})
		.then(responseHandler)
		.catch(errorHandler)
}
