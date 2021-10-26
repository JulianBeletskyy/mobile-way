import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { TAB_BAR_HEIGHT } from '../config'

import HomeScreen from '../screens/Home'

const Stack = createNativeStackNavigator()

const StoreStack = () => {
	return (
		<Stack.Navigator screenOptions={{headerShown: false}}>
			<Stack.Screen
      	name="Home"
      	initialParams={{bottomOffset: TAB_BAR_HEIGHT}}
      	component={HomeScreen} />
		</Stack.Navigator>
	)
}

export default StoreStack