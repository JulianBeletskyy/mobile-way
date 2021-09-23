import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import StoreGroupsScreen from '../screens/StoreGroups'
import StoresScreen from '../screens/Stores'
import StoreDetailsScreen from '../screens/StoreDetails'

const Stack = createNativeStackNavigator()

const StoreStack = () => {
	return (
		<Stack.Navigator screenOptions={{headerShown: false}}>
			<Stack.Screen
      	name="StoreGroups"
      	component={StoreGroupsScreen} />
    	<Stack.Screen
      	name="Stores"
      	component={StoresScreen} />
    	<Stack.Screen
      	name="StoreDetails"
      	options={({route}) => ({
      		title: route.params.title,
      	})}
      	component={StoreDetailsScreen} />
		</Stack.Navigator>
	)
}

export default StoreStack
