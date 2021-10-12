import React, { useEffect } from 'react'
import { View, StyleSheet, Text, TextInput, Pressable, Alert } from 'react-native'
import { CommonActions } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { LoginManager, Profile } from 'react-native-fbsdk-next'
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin'
import { useDispatch } from 'react-redux'

import { setAppKey } from '../actions/app'

import { FacebookIcon, GoogleIcon } from '../components/icons'
import MainBtn from '../components/buttons/MainBtn'

const SignUpScreen = ({navigation}) => {
	const insets = useSafeAreaInsets()
	const dispatch = useDispatch()

	const onSuccessLogin = () => {
		dispatch(setAppKey('isAuth', true))
	}

	const handleLogin = () => {
		onSuccessLogin()
	}

	const facebookAuth = () => {
		LoginManager.logInWithPermissions(['email']).then(({isCancelled, ...rest}) => {
      if (!isCancelled) {
      	Profile.getCurrentProfile().then(profile => {
      		if (profile) {
	      		Alert.alert(profile.name)
	      		onSuccessLogin()
      		}
      		
      	})
      }
    }).catch(error => {
      console.log(error)
    })
	}

	const googleAuth = () => {
		GoogleSignin.signIn().then(({user, idToken}) => {
			Alert.alert(user.name)
			onSuccessLogin()
		}).catch(error => {
			console.log(error)
		})
	}

	return (
		<View style={[styles.container, {paddingBottom: insets.bottom, paddingTop: insets.top}]}>
			<View style={{justifyContent: 'center', flex: 1}}>
				<Text style={styles.title}>Регистрация</Text>
				<View style={{width: '100%', marginBottom: 15}}>
					<TextInput
						placeholderTextColor="#828282" 
						placeholder="Email"
						style={styles.input} />
				</View>
				<View style={{width: '100%', marginBottom: 15}}>
					<TextInput
						placeholderTextColor="#828282"
						secureTextEntry={true}
						placeholder="Password"
						style={styles.input} />
				</View>
				<View style={{width: '100%', marginBottom: 25}}>
					<TextInput
						placeholderTextColor="#828282"
						secureTextEntry={true}
						placeholder="Password"
						style={styles.input} />
				</View>
			</View>
			<View>
				<MainBtn style={styles.button} onPress={handleLogin}>
					Регистрация
				</MainBtn>
				<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 15}}>
					<View style={styles.divider} />
					<Text style={[styles.description, {marginHorizontal: 4}]}>Или</Text>
					<View style={styles.divider} />
				</View>
				<View style={{flexDirection: 'row', alignItems: 'center'}}>
					<Pressable style={[styles.socialButton, {marginRight: 5}]} onPress={googleAuth}>
						<GoogleIcon style={{marginRight: 8}} />
						<Text style={{color: '#087012'}}>Google</Text>
					</Pressable>
					<Pressable style={[styles.socialButton, {marginLeft: 5}]} onPress={facebookAuth}>
						<FacebookIcon style={{marginRight: 8}} />
						<Text style={{color: '#087012'}}>Facebook</Text>
					</Pressable>
				</View>
				<Text style={[styles.description, {marginVertical: 20}]}>Уже есть аккаут?</Text>
				<Pressable  style={[styles.socialButton, {flex: 0}]} onPress={() => navigation.navigate('Login')}>
					<Text style={{textAlign: 'center', color: '#087012'}}>Войти</Text>
				</Pressable>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingLeft: 10,
		paddingRight: 10,
	},
	title: {
		color: '#0D4A13',
		textAlign: 'center',
		marginBottom: 30,
		fontSize: 25,
		fontWeight: '700',
	},
	input: {
		height: 40,
		width: '100%',
		borderRadius: 30,
		backgroundColor: 'rgba(196, 196, 196, 0.35)',
		paddingLeft: 30,
		paddingRight: 30,
	},
	divider: {
		height: 1,
		backgroundColor: '#BDBDBD',
		width: 88,
	},
	description: {
		color: '#828282',
		textAlign: 'center',
		fontWeight: '400',
		fontSize: 14,
	},
	button: {
		borderRadius: 40,
		width: '100%',
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
	},
	socialButton: {
		flexDirection: 'row',
		borderColor: '#087012',
		borderWidth: 1,
		height: 40,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 40,
	}
})

export default SignUpScreen
