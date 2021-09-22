import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SplashScreen from '../screens/Splash'
import LoginScreen from '../screens/Login'
import SignUpScreen from '../screens/SignUp'

import TabStack from './TabStack'

const Stack = createNativeStackNavigator()

const RootStack = ({navigation}) => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
		    drawerType: 'slide',
				useLegacyImplementation: true,
				cardStyle: {
					backgroundColor: 'transparent'
				},
			}}>
			<Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{title: ''}} />
      <Stack.Group screenOptions={{headerShown: true}}>
      	<Stack.Screen
	        name="Login"
	        component={LoginScreen}
	        options={{title: 'Login'}} />
	      <Stack.Screen
	        name="SignUp"
	        component={SignUpScreen}
	        options={{title: 'Sign Up'}} />
      </Stack.Group>
      <Stack.Screen
        name="TabStack"
        component={TabStack}
        options={{
        	title: '',
				}} />
		</Stack.Navigator>
	)
}

export default RootStack