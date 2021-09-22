import React, { useEffect } from 'react'
import { View, StyleSheet, Text, TextInput, Pressable } from 'react-native'
import { CommonActions } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const LoginScreen = ({navigation}) => {
	const insets = useSafeAreaInsets()

	useEffect(() => {
		navigation.dispatch(state => {
      const routes = state.routes.filter(r => r.name !== 'Splash')
      const diff = state.routes.length - routes.length
      return CommonActions.reset({...state, routes, index: state.index - diff})
    })
	}, [])
	
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
			<Pressable style={styles.button} onPress={() => navigation.navigate('TabStack')}>
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
