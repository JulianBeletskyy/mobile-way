import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { enableScreens } from 'react-native-screens'

import RootStack from './RootStack'

enableScreens()
const Root = createNativeStackNavigator()

const Navigation = () => {
	return (
		<NavigationContainer>
			<Root.Navigator screenOptions={{
				headerShown: false,
				stackPresentation: 'modal',
				cardStyle: {
					backgroundColor: 'transparent'
				}
			}}>
				<Root.Screen
          name="RootStack"
          component={RootStack} />
			</Root.Navigator>
		</NavigationContainer>
	)
}

export default Navigation
