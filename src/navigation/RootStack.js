import React from 'react'
import { Pressable, TouchableOpacity } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useSelector, shallowEqual } from 'react-redux'

import SplashScreen from '../screens/Splash'
import LoginScreen from '../screens/Login'
import SignUpScreen from '../screens/SignUp'
import RecoveryScreen from '../screens/Recovery'
import ProductDetailsScreen from '../screens/ProductDetails'

import TabStack from './TabStack'

import { ChevronLeftIcon } from '../components/icons'

const Stack = createNativeStackNavigator()

const RootStack = ({navigation}) => {
	const isAuth = useSelector(({app}) => app.isAuth, shallowEqual)
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
		    // drawerType: 'slide',
		   
				// useLegacyImplementation: true,
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
      				headerShown: false,
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
			        <Stack.Screen
				        name="Recovery"
				        component={RecoveryScreen}
				        options={({navigation}) => {
				        	return {
					        	title: '',
					        	headerShadowVisible: false,
					        	headerShown: true,
					        	headerLeft: props => {
					        		return (
					        			<TouchableOpacity onPress={() => navigation.goBack()} {...props}>
					        				<ChevronLeftIcon />
					        			</TouchableOpacity>
				        			)
					        	}
					        }
				        }} />
			      </Stack.Group>
      }
      <Stack.Screen
      	name="ProductDetails"
      	options={{
      		 presentation: 'transparentModal',
      		// headerMode: 'screen',
      		// cardOverlayEnabled: true,
      		// gestureResponseDistance: {vertical: 300},
      		// gestureEnabled: true,
      		// gestureResponseDistance: 500,
      	}}
      	component={ProductDetailsScreen} />
		</Stack.Navigator>
	)
}

export default RootStack