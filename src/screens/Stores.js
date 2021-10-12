import React, { useEffect, useState } from 'react'
import { View, StyleSheet, FlatList, Pressable, Text } from 'react-native'
import FastImage from 'react-native-fast-image'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { getStoresByGroup } from '../api'
import { DOMAIN, TAB_BAR_HEIGHT } from '../config'

const StoresScreen = ({route, navigation}) => {
	const { groupId } = route.params
	const insets = useSafeAreaInsets()

	const [stores, setStores] = useState([])

	useEffect(() => {
		getStoresByGroup(groupId).then(res => {
			if (res) {
				setStores(res)
			}
		})
	}, [groupId])

	const handlePressStore = store => () => {
		navigation.navigate('StoreDetails', {store})
	}

	const renderStore = ({item, index}) => {
		return (
			<Pressable style={{height: 60, flex: 1, marginBottom: 15, paddingLeft: 10, paddingRight: 10}} onPress={handlePressStore(item)}>
				<View style={{backgroundColor: '#fff', width: '100%', height: '100%', paddingLeft: 10, paddingRight: 10, flexDirection: 'row', alignItems: 'center', borderRadius: 10}}>
					<FastImage
						source={{uri: `${DOMAIN}${item.logo}`}}
						resizeMode={FastImage.resizeMode.contain}
						style={{width: 50, height: 50, marginRight: 10}} />
					<Text>{item.title}</Text>
				</View>
			</Pressable>
		)
	}

	return (
		<View style={[styles.container, {paddingBottom: TAB_BAR_HEIGHT}]}>
			<FlatList
				data={stores}
				renderItem={renderStore} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 15,
	}
})

export default StoresScreen
