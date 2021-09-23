import React from 'react'
import { View, StyleSheet, Text, Pressable } from 'react-native'

const ProfileScreen = ({navigation}) => {
	return (
		<View style={styles.container}>
			<Pressable style={styles.button} onPress={() => navigation.navigate('Login')}>
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
