import React, { useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import FastImage from 'react-native-fast-image'
import LinearGradient from 'react-native-linear-gradient'

const SplashScreen = ({navigation}) => {
	useEffect(() => {
		setTimeout(() => {
			navigation.navigate('RootStack', {screen: 'Login'})
		}, 2000)
	}, [])
	return (
		<LinearGradient colors={['#ACC760', '#0D4A13']} style={styles.container}>
			<FastImage source={require('../../assets/img/logo.png')} style={[styles.logo, {marginBottom: 10}]} />
			<View style={{}}>
				<Text style={[styles.title, {marginBottom: 10}]}>Mobile Way</Text>
				<Text style={[styles.title, {fontSize: 18, fontWeight: '400'}]}>Smart indoor navigation</Text>
			</View>
			<View style={styles.logo}>
			</View>
		</LinearGradient>
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
		width: 168,
		height: 154,
	},
	title: {
		fontSize: 48,
		fontWeight: '700',
		color: '#F2F2F2',
		textAlign: 'center',
	}
})

export default SplashScreen