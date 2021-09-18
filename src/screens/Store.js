import React, { useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'

import SearchInput from '../components/SearchInput'

const StoreScreen = ({navigation}) => {

	useEffect(() => {
		navigation.setOptions({
			headerRight: () => {
				return (
					<SearchInput />
				)
			}
		})
	}, [])

	return (
		<View style={styles.container}>
			<Text>StoreScreen</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	}
})

export default StoreScreen