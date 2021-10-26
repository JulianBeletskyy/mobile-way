import React from 'react'
import { View, StyleSheet, Text, TextInput, Pressable, Alert } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { LoginManager, Profile } from 'react-native-fbsdk-next'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { useDispatch } from 'react-redux'
import { useTheme } from '@react-navigation/native'

import { setUser } from '../actions/user'
import User from '../utils/objects/user'

import { FacebookIcon, GoogleIcon } from '../components/icons'
import MainBtn from '../components/buttons/MainBtn'

const LoginScreen = ({navigation}) => {
	const insets = useSafeAreaInsets()
	const dispatch = useDispatch()
	const { colors } = useTheme()

	const onSuccessLogin = user => {
		dispatch(setUser(user))
		navigation.navigate('Profile')
	}

	const handleLogin = () => {
		// onSuccessLogin()
	}

	const facebookAuth = () => {
		LoginManager.logInWithPermissions(['email']).then(({isCancelled, ...rest}) => {
      if (!isCancelled) {
      	Profile.getCurrentProfile().then((profile, ...rest) => {
      		if (profile) {
      			const user = new User(profile.userID, profile.email, profile.name, profile.imageURL)
	      		onSuccessLogin(user)
      		}
      		
      	})
      }
    }).catch(error => {
      console.log(error)
    })
	}

	const googleAuth = () => {
		GoogleSignin.signIn().then(res => {
			console.log(res.user)
			const user = new User(res.user.id, res.user.email, `${res.user.givenName} ${res.user.familyName}`, res.user.photo)
			onSuccessLogin(user)
		}).catch(error => {
			console.log(error)
		})
	}

	return (
		<View style={[styles.container, {paddingBottom: insets.bottom, paddingTop: insets.top}]}>
			<View style={{justifyContent: 'center', flex: 1}}>
				<Text style={[styles.title, {color: colors.primary}]}>Войти</Text>
				<View style={{width: '100%', marginBottom: 15}}>
					<TextInput
						placeholderTextColor="#828282" 
						placeholder="Email"
						style={styles.input} />
				</View>
				<View style={{width: '100%', marginBottom: 25}}>
					<TextInput
						placeholderTextColor="#828282"
						secureTextEntry={true}
						placeholder="Password"
						style={styles.input} />
				</View>
				<Text style={styles.description} onPress={() => navigation.navigate('Recovery')}>Забыли пароль?</Text>
			</View>
			<View>
				<MainBtn style={styles.button} onPress={handleLogin}>
					Войти
				</MainBtn>
				<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 15}}>
					<View style={styles.divider} />
					<Text style={[styles.description, {marginHorizontal: 4}]}>Или</Text>
					<View style={styles.divider} />
				</View>
				<View style={{flexDirection: 'row', alignItems: 'center'}}>
					<Pressable style={[styles.socialButton, {marginRight: 5, borderColor: colors.primary}]} onPress={googleAuth}>
						<GoogleIcon style={{marginRight: 8}} />
						<Text style={{color: colors.primary}}>Google</Text>
					</Pressable>
					<Pressable style={[styles.socialButton, {marginLeft: 5, borderColor: colors.primary}]} onPress={facebookAuth}>
						<FacebookIcon style={{marginRight: 8}} />
						<Text style={{color: colors.primary}}>Facebook</Text>
					</Pressable>
				</View>
				<Text style={[styles.description, {marginVertical: 20}]}>Еще нет аккаунта?</Text>
				<MainBtn reverse style={[styles.socialButton, {flex: 0}]} onPress={() => navigation.navigate('SignUp')}>
					Регистрация
				</MainBtn>
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
		borderWidth: 1,
		height: 40,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 40,
	}
})

export default LoginScreen
