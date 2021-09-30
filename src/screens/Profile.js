import React from 'react'
import { View, StyleSheet, Text, Pressable } from 'react-native'
import { useDispatch } from 'react-redux'
import { LoginManager } from 'react-native-fbsdk-next'

import { setAppKey } from '../actions/app'

const ProfileScreen = ({navigation}) => {
	const dispatch = useDispatch()

	const logout = () => {
		LoginManager.logOut()
		dispatch(setAppKey('isAuth', false))
	}

	return (
		<View style={styles.container}>
			<Pressable style={styles.button} onPress={logout}>
				<Text>Logout</Text>
			</Pressable>
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

export default ProfileScreen
