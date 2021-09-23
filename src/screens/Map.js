import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, useWindowDimensions, ScrollView } from 'react-native'
import FastImage from 'react-native-fast-image'

import SearchInput from '../components/SearchInput'

const image = require('../../assets/img/store_layout.png')

const MapScreen = ({navigation}) => {
	const { width, height } = useWindowDimensions()

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
			<FastImage source={image} style={{flex: 1}} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	}
})

export default MapScreen
