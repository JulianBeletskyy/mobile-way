import React from 'react'
import { View, StyleSheet, Pressable, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import * as Animatable from 'react-native-animatable'

import { TAB_BAR_HEIGHT } from '../config'

import { HomeIcon, MapIcon, StoreIcon, CalendarIcon, ProfileIcon } from './icons'

const AnimatedButton = Animatable.createAnimatableComponent(Pressable)

const settings = {
	Home: {
		title: 'Home',
		icon: HomeIcon,
	},
	Map: {
		title: '',
		icon: MapIcon,
		styles: {
			transform: [{translateY: -15}]
		}
	},
	StoreStack: {
		title: 'Shops',
		icon: StoreIcon,
	},
	Calendar: {
		title: 'Events',
		icon: CalendarIcon,
	},
	Profile: {
		title: 'Profile',
		icon: ProfileIcon,
	},
}

const TabBar = ({navigation, state}) => {
	const insets = useSafeAreaInsets()
	const isTransparent = state.routes[state.index].name === 'Map'
	return (
		<View style={[styles.container, {paddingBottom: insets.bottom, backgroundColor: isTransparent ? 'transparent' : '#fff'}]}>
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
						<AnimatedButton
							key={i}
							onPress={onPress}
							transition="translateY"
							useNativeDriver={true}
							style={[styles.tabItem, isFocused ? settings[route.name].styles : null]}>
							<Icon active={isFocused} style={{marginBottom: 5}} />
							<Text style={[styles.title, {color: isFocused ? '#3E7D5B' : '#737373' }]}>{settings[route.name].title}</Text>
						</AnimatedButton>
					)
				})
			}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		height: TAB_BAR_HEIGHT,
		width: '100%',
		position: 'absolute',
		bottom: 0,
		backgroundColor: '#fff',
		borderTopLeftRadius: 16,
		borderTopRightRadius: 16,
		shadowOffset: {width: 0, height: -5},
		shadowRadius: 10,
		shadowOpacity: 0.1,
		shadowColor: 'rgba(17, 79, 99, 1)',
	},
	tabItem: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
		transform: [{translateY: 0}],
	},
	title: {
		
	}
})

export default TabBar
