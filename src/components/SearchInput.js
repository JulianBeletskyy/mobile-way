import React, { useRef, useState, useEffect } from 'react'
import { View, StyleSheet, Pressable, TextInput, Animated } from 'react-native'

import { SearchIcon } from './icons'

const AnimatedInput = Animated.createAnimatedComponent(TextInput)

const SearchInput = () => {

	const input = useRef(null)

	const [showSearch, setShowSearch] = useState(false)

	const widthValue = useRef(new Animated.Value(showSearch*280)).current

	const showAnimation = useRef(Animated.timing(widthValue, {
		toValue: 280,
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
			<Pressable onPress={handlePressSearch} style={styles.button}>
				<SearchIcon />
			</Pressable>
			<AnimatedInput
				ref={input}
				onBlur={handleBlur}
				style={[styles.input, {width: widthValue, paddingLeft: showSearch*10, paddingRight: showSearch*10}]} />
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
		right: 0,
		height: '100%',
	},
	input: {
		backgroundColor: '#fff',
		height: '100%',
		borderRadius: 4,
		// paddingLeft: 10,
		// paddingRight: 10,
	}
})

export default SearchInput
