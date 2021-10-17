import React, { useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import FastImage from 'react-native-fast-image'
import LinearGradient from 'react-native-linear-gradient'
import * as Animatable from 'react-native-animatable'

const lightAnimation = {
  0: {
		opacity: 0.4
	},
	0.05: {
		opacity: 0.5
	},
	0.1: {
		opacity: 0.6
	},
	0.15: {
		opacity: 0.85
	},
	0.25: {
		opacity: 0.5
	},
	0.3: {
		opacity: 1
	},
	0.35: {
		opacity: 0.1
	},
	0.4: {
		opacity: 0.25
	},
	0.45: {
		opacity: 0.5
	},
	0.6: {
		opacity: 1
	},
	0.7: {
		opacity: 0.85
	},
	0.8: {
		opacity: 0.4
	},
	0.9: {
		opacity: 0.5
	},
	1: {
		opacity: 1
	},
}

const SplashScreen = ({navigation}) => {
	useEffect(() => {
		setTimeout(() => {
			navigation.navigate('RootStack', {screen: 'TabStack'})
		}, 3000)
	}, [])
	return (
		<LinearGradient colors={['#ACC760', '#0D4A13']} style={styles.container}>
			<Animatable.View
				animation={lightAnimation}
				iterationCount="infinite"
				easing="linear"
				duration={2000}
				direction="reverse"
				useNativeDriver={true}>
				<FastImage source={require('../../assets/img/logo.png')} style={[styles.logo, {marginBottom: 10}]} />
			</Animatable.View>
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