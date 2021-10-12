import React from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import MainBtn from '../components/buttons/MainBtn'

const RecoveryScreen = () => {
	const insets = useSafeAreaInsets()

	return (
		<View style={[styles.container, {paddingBottom: insets.bottom}]}>
			<View style={{marginTop: 'auto', marginBottom: 'auto'}}>
				<Text style={styles.title}>Восстановление</Text>
				<Text style={[styles.title, {marginBottom: 30}]}>пароля</Text>
				<View style={{width: '100%'}}>
					<TextInput
						placeholderTextColor="#828282" 
						placeholder="Email"
						style={styles.input} />
				</View>
			</View>
			<MainBtn style={styles.button}>
				Восстановить
			</MainBtn>
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
		// marginBottom: 30,
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
	button: {
		borderRadius: 40,
		width: '100%',
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 'auto'
	},
})

export default RecoveryScreen
