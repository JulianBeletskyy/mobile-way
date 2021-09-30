import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useSelector, shallowEqual } from 'react-redux'

import SplashScreen from '../screens/Splash'
import LoginScreen from '../screens/Login'
import SignUpScreen from '../screens/SignUp'

import TabStack from './TabStack'

const Stack = createNativeStackNavigator()

const RootStack = ({navigation}) => {
	const isAuth = useSelector(({app}) => app.isAuth, shallowEqual)
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
      {
      	isAuth
      		? <Stack.Screen
			        name="TabStack"
			        component={TabStack}
			        options={{
			        	title: '',
							}} />
      		: <Stack.Group screenOptions={{
      				headerShown: true,
      				animationTypeForReplace: isAuth ? 'push' : 'pop',
      				gestureEnabled: false}}>
			      	<Stack.Screen
				        name="Login"
				        component={LoginScreen}
				        options={{title: 'Login', headerLeft: null}} />
				      <Stack.Screen
				        name="SignUp"
				        component={SignUpScreen}
				        options={{title: 'Sign Up'}} />
			      </Stack.Group>
      }
		</Stack.Navigator>
	)
}

export default RootStack