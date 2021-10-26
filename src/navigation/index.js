import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { enableScreens } from 'react-native-screens'

import RootStack from './RootStack'
import SplashScreen from '../screens/Splash'

enableScreens()
const Root = createNativeStackNavigator()

const CustomTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0077FF',
		secondary: '#77C7F5',
  },
}

const Navigation = () => {
	return (
		<NavigationContainer theme={CustomTheme}>
			<Root.Navigator screenOptions={{
				headerShown: false,
				stackPresentation: 'modal',
				cardStyle: {
					backgroundColor: 'transparent'
				}
			}}>
				<Root.Screen
	        name="Splash"
	        component={SplashScreen}
	        options={{title: ''}} />
				<Root.Screen
          name="RootStack"
          component={RootStack} />
			</Root.Navigator>
		</NavigationContainer>
	)
}

export default Navigation
