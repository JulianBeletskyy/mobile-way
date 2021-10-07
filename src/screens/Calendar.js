import React, { useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'

const CalendarScreen = ({navigation}) => {
	return (
		<View style={styles.container}>
			<Text>CalendarScreen</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	}
})

export default CalendarScreen
