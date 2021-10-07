import React, { useRef, useState, useEffect } from 'react'
import { View, StyleSheet, Pressable, TextInput, Animated, useWindowDimensions } from 'react-native'

import { SearchIcon } from './icons'

const ICON_WIDTH = 22

const AnimatedInput = Animated.createAnimatedComponent(TextInput)

const SearchInput = () => {
	const { width } = useWindowDimensions()
	const input = useRef(null)

	const [showSearch, setShowSearch] = useState(false)

	const widthValue = useRef(new Animated.Value(showSearch*(width-48))).current

	const showAnimation = useRef(Animated.timing(widthValue, {
		toValue: width-48,
		useNativeDriver: false,
		duration: 300,
	})).current

	const hideAnimation = useRef(Animated.timing(widthValue, {
		toValue: 0,
		useNativeDriver: false,
		duration: 300,
	})).current

	const handlePressSearch = () => {
		showSearch
			? hideAnimation.start(() => setShowSearch(false))
			: showAnimation.start(() => {
					input.current.focus()
					setShowSearch(true)
				})
	}

	const handleBlur = () => {
		hideAnimation.start(() => setShowSearch(false))
	}

	return (
		<View style={styles.container}>
			<Animated.View style={{width: widthValue, flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff'}}>
				<TextInput
					ref={input}
					onBlur={handleBlur}
					style={[styles.input, {paddingLeft: showSearch*(ICON_WIDTH+10), paddingRight: showSearch*10}]} />
					<Pressable onPress={handlePressSearch} style={[styles.button, {left: !showSearch*-ICON_WIDTH}]}>
						<SearchIcon />
					</Pressable>
			</Animated.View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		height: 33,
	},
	button: {
		position: 'absolute',
		// left: 0,
		top: 33/2 - ICON_WIDTH/2,
		height: '100%',
	},
	input: {
		backgroundColor: '#fff',
		height: '100%',
		width: '100%',
		borderRadius: 4,
		shadowOpacity: 1,
		shadowColor: 'rgba(8, 112, 18, 0.1)',
		shadowOffset: {width: 0, height: 0},
		shadowRadius: 5,
	}
})

export default SearchInput
