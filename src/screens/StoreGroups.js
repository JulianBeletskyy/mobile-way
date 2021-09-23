import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, FlatList, Pressable } from 'react-native'
import FastImage from 'react-native-fast-image'

import { getStoresGroups } from '../api'

import SearchInput from '../components/SearchInput'

const StoreGroupsScreen = ({navigation}) => {

	const [groups, setGroups] = useState([])

	useEffect(() => {
		getStoresGroups().then(res => {
			if (res) {
				setGroups(res)
			}
		})
		navigation.setOptions({
			headerRight: () => {
				return (
					<SearchInput />
				)
			}
		})
	}, [])

	const handlePressGroup = group => () => {
		navigation.navigate('Stores', {title: group.name, groupId: group.id})
	}

	const renderGroup = ({item, index}) => {
		return (
			<Pressable style={{height: 60, flex: 1, marginBottom: 15, paddingLeft: 10, paddingRight: 10}} onPress={handlePressGroup(item)}>
				<View style={{backgroundColor: '#fff', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 10}}>
					<Text>{item.name}</Text>
				</View>
			</Pressable>
		)
	}

	return (
		<View style={styles.container}>
			<Text style={{textAlign: 'center', marginBottom: 15}}>Stores</Text>
			<FlatList
				data={groups}
				numColumns={2}
				renderItem={renderGroup} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingLeft: 25,
		paddingRight: 25,
		backgroundColor: '#ccc',
	}
})

export default StoreGroupsScreen
