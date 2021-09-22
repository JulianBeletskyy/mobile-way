import React, { useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import FastImage from 'react-native-fast-image'

const SplashScreen = ({navigation}) => {
	useEffect(() => {
		setTimeout(() => {
			navigation.navigate('Login')
		}, 2000)
	}, [])
	return (
		<View style={styles.container}>
			<FastImage source={require('../../assets/img/logo.png')} style={styles.logo} />
			<Text style={styles.title}>CITY CENTER</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	logo: {
		width: 100,
		height: 100,
	},
	title: {
		fontSize: 20,
	}
})

export default SplashScreen