import React, { useEffect } from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import FastImage from 'react-native-fast-image'

import SearchInput from '../components/SearchInput'

const banner = require('../../assets/img/banner.png')

const HomeScreen = ({navigation}) => {

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
		<ScrollView style={styles.container}>
			
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingLeft: 25,
		paddingRight: 25,
		paddingTop: 15,
		paddingBottom: 15,
	}
})

export default HomeScreen
