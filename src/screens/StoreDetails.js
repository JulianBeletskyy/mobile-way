import React from 'react'
import { View, StyleSheet, Text, Pressable } from 'react-native'
import FastImage from 'react-native-fast-image'

import { DOMAIN } from '../config'

const StoreDetails = ({navigation, route}) => {
	const { store } = route.params

	const navigateToMap = () => {
		navigation.navigate('Map', {store})
	}

	return (
		<View style={styles.container}>
			<Text style={{textAlign: 'center', fontSize: 20, marginBottom: 15}}>{store.title}</Text>
			<FastImage
				source={{uri: `${DOMAIN}${store.logo}`}}
				resizeMode={FastImage.resizeMode.contain}
				style={{width: '100%', height: 150}} />
			<Pressable style={styles.button} onPress={navigateToMap}>
				<Text>To store</Text>
			</Pressable>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 15,
		paddingLeft: 25,
		paddingRight: 25,
	},
	button: {
		marginTop: 'auto',
		borderWidth: 1,
		width: '100%',
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 10,
	}
})

export default StoreDetails
