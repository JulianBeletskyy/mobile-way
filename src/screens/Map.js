import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, useWindowDimensions, ScrollView, Alert } from 'react-native'
import FastImage from 'react-native-fast-image'
import { useIsFocused } from '@react-navigation/native'

import SearchInput from '../components/SearchInput'

const image = require('../../assets/img/store_layout.png')

const MapScreen = ({navigation, route}) => {
	const { width, height } = useWindowDimensions()
	const isFocused = useIsFocused()

	useEffect(() => {
		navigation.setOptions({
			headerRight: () => {
				return (
					<SearchInput />
				)
			}
		})
	}, [])

	useEffect(() => {
		if (isFocused && route.params?.store) {
			const { store } = route.params
			Alert.alert(store.title)
		}
	}, [isFocused, route.params])

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
