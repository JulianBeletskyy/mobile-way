import React, { useEffect } from 'react'
import { View, StyleSheet, Text, TextInput, Pressable, Alert } from 'react-native'
import { CommonActions } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { LoginManager, Profile } from 'react-native-fbsdk-next'
import { useDispatch } from 'react-redux'

import { setAppKey } from '../actions/app'

const LoginScreen = ({navigation}) => {
	const insets = useSafeAreaInsets()
	const dispatch = useDispatch()

	const onSuccessLogin = () => {
		dispatch(setAppKey('isAuth', true))
	}

	const handleLogin = () => {
		onSuccessLogin()
	}

	const facebookAuth = () => {
		LoginManager.logInWithPermissions(['email']).then(({isCancelled}) => {
      if (!isCancelled) {
      	Profile.getCurrentProfile().then(profile => {
      		console.log(profile)
      		Alert.alert(`${profile.firstName} ${profile.lastName}`)
      		onSuccessLogin()
      	})
      }
    }).catch(error => {
      console.log(error)
    })
	}

	return (
		<View style={[styles.container, {paddingBottom: insets.bottom}]}>
			<View style={{flex: 1, justifyContent: 'center'}}>
				<View style={{width: '100%', marginBottom: 15}}>
					<Text>Email</Text>
					<TextInput style={styles.input} />
				</View>
				<View style={{width: '100%'}}>
					<Text>Password</Text>
					<TextInput style={styles.input} />
				</View>
			</View>
			<Pressable style={styles.button} onPress={facebookAuth}>
				<Text>Facebook</Text>
			</Pressable>
			<Pressable style={styles.button} onPress={handleLogin}>
				<Text>Login</Text>
			</Pressable>
			<Text style={{textAlign: 'center'}} onPress={() => navigation.navigate('SignUp')}>Registration</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingLeft: 25,
		paddingRight: 25,
	},
	input: {
		borderWidth: 1,
		height: 40,
		width: '100%',
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

export default LoginScreen
