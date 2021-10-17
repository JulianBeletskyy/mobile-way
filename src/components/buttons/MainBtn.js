import React from 'react'
import { View, StyleSheet, Pressable, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const MainBtn = ({children, style, reverse, ...props}) => {
	return (
		<Pressable style={[styles.container, {opacity: props.disabled ? 0.5 : 1, borderWidth: reverse ? 1 : 0}, style]} {...props}>
			<LinearGradient
				colors={reverse ? ['#fff', '#fff'] : ['#ACC760', '#087012']}
				start={{x: 0.5, y: 0}}
	    	end={{x: 0.5, y: 1}}
	    	style={styles.gradient}>
	    	{
					typeof children === 'string' ? <Text style={[styles.title, {color: reverse ? '#087012' : '#fff'}]}>{children}</Text> : children
				}
			</LinearGradient>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	container: {
		overflow: 'hidden',
		borderRadius: 32,
		height: 40,
		borderColor: '#087012',
	},
	gradient: {
		width: '100%',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		paddingLeft: 10,
		paddingRight: 10,
	},
	title: {
		color: '#fff',
	}
})

export default MainBtn
