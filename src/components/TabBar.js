import React from 'react'
import { View, StyleSheet, Pressable, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { HomeIcon, MapIcon, StoreIcon, CalendarIcon, ProfileIcon } from './icons'

const settings = {
	Home: {
		title: 'Home',
		icon: HomeIcon,
	},
	Map: {
		title: 'Map',
		icon: MapIcon,
	},
	StoreStack: {
		title: 'Store',
		icon: StoreIcon,
	},
	Calendar: {
		title: 'Calendar',
		icon: CalendarIcon,
	},
	Profile: {
		title: 'Profile',
		icon: ProfileIcon,
	},
}

const TabBar = ({navigation, state}) => {
	const insets = useSafeAreaInsets()
	return (
		<View style={[styles.container, {paddingBottom: insets.bottom}]}>
			{
				state.routes.map((route, i) => {
					const isFocused = state.index === i
					const onPress = () => {
						const event = navigation.emit({
	            type: 'tabPress',
	            target: route.key,
	            canPreventDefault: true,
	          })
						
	          if (!isFocused && !event.defaultPrevented) {
	            navigation.navigate(route.name)
	          }
					}
					
					const Icon = settings[route.name].icon
					return (
						<Pressable
							key={i}
							onPress={onPress}
							style={styles.tabItem}>
							<Icon active={isFocused} />
							<Text style={[styles.title, {color: isFocused ? '#3E7D5B' : '#737373' }]}>{settings[route.name].title}</Text>
						</Pressable>
					)
				})
			}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		paddingTop: 15,
	},
	tabItem: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	title: {
		
	}
})

export default TabBar
