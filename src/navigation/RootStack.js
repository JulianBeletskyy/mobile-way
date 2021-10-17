import React from 'react'
import { Pressable, TouchableOpacity } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useSelector, shallowEqual } from 'react-redux'

import SplashScreen from '../screens/Splash'
import LoginScreen from '../screens/Login'
import SignUpScreen from '../screens/SignUp'
import RecoveryScreen from '../screens/Recovery'
import WebViewScreen from '../screens/WebView'

import TabStack from './TabStack'

import { ChevronLeftIcon } from '../components/icons'

const Stack = createNativeStackNavigator()

const RootStack = ({navigation}) => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				cardStyle: {backgroundColor: 'transparent'},
			}}>
			<Stack.Screen
        name="TabStack"
        component={TabStack}
        options={{title: ''}} />
    	<Stack.Screen
    		name="WebView"
    		options={{presentation: 'modal'}}
    		component={WebViewScreen} />
    	<Stack.Group screenOptions={({navigation}) => {
    		return {
					headerShown: true,
					gestureEnabled: false,
					headerShadowVisible: false,
					headerLeft: props => {
        		return (
        			<TouchableOpacity onPress={() => navigation.goBack()} {...props}>
        				<ChevronLeftIcon width={15} />
        			</TouchableOpacity>
      			)
        	}
				}
    	}}>
      	<Stack.Screen
	        name="Login"
	        component={LoginScreen}
	        options={{title: 'Login'}} />
	      <Stack.Screen
	        name="SignUp"
	        component={SignUpScreen}
	        options={{title: 'Sign Up'}} />
        <Stack.Screen
	        name="Recovery"
	        component={RecoveryScreen}
	        options={{title: ''}} />
      </Stack.Group>
		</Stack.Navigator>
	)
}

export default RootStack