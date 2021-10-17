import React from 'react'
import { View, StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'

const WebViewScreen = ({navigation, route}) => {
	const { targetUrl } = route.params
	return (
		<WebView source={{ uri: targetUrl }} />
	)
}

const styles = StyleSheet.create({
	container: {

	}
})

export default WebViewScreen
