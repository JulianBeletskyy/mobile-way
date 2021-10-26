import React from 'react'
import { View, StyleSheet, Pressable, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { useTheme } from '@react-navigation/native'

const MainBtn = ({children, style, reverse, ...props}) => {
	const { colors } = useTheme()
	return (
		<Pressable style={[styles.container, {opacity: props.disabled ? 0.5 : 1, borderWidth: reverse ? 1 : 0, borderColor: colors.primary}, style]} {...props}>
			<LinearGradient
				colors={reverse ? ['#fff', '#fff'] : [colors.secondary, colors.primary]}
				start={{x: 0.5, y: 0}}
	    	end={{x: 0.5, y: 1}}
	    	style={styles.gradient}>
	    	{
					typeof children === 'string' ? <Text style={[styles.title, {color: reverse ? colors.primary : '#fff'}]}>{children}</Text> : children
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
