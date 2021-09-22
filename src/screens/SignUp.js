import React from 'react'
import { View, StyleSheet, Text, TextInput, Pressable } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const SignUpScreen = ({navigation}) => {
	const insets = useSafeAreaInsets()
	return (
		<View style={[styles.container, {paddingBottom: insets.bottom}]}>
			<View style={{flex: 1, justifyContent: 'center'}}>
				<View style={{width: '100%', marginBottom: 15}}>
					<Text>Email</Text>
					<TextInput style={styles.input} />
				</View>
				<View style={{width: '100%', marginBottom: 15}}>
					<Text>Password</Text>
					<TextInput style={styles.input} />
				</View>
				<View style={{width: '100%'}}>
					<Text>Confirm Password</Text>
					<TextInput style={styles.input} />
				</View>
			</View>
			<Pressable style={styles.button} onPress={() => navigation.navigate('TabStack')}>
				<Text>Sign Up</Text>
			</Pressable>
			<Text style={{textAlign: 'center'}} onPress={() => navigation.navigate('Login')}>Login</Text>
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

export default SignUpScreen
