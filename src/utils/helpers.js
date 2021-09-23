export const responseHandler = async res => {
	const contentType = res.headers.get('content-type')
 	if (contentType.includes('application/json')) {
 		return await res.json()
	} else if (contentType.includes('text/plain')) {
		const obj = await res.text()
 		return JSON.parse(obj)
 	}
 	return false
}

export const errorHandler = error => {
	console.warn(error)
	return false
}
