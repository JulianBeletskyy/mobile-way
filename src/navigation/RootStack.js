import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SplashScreen from '../screens/Splash'
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