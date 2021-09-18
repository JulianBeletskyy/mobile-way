import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Pressable, View, Text, Keyboard } from 'react-native'
import FastImage from 'react-native-fast-image'

import TabBar from '../components/TabBar'
import SearchInput from '../components/SearchInput'

import HomeScreen from '../screens/Home'
import MapScreen from '../screens/Map'
import StoreScreen from '../screens/Store'
import CalendarScreen from '../screens/Calendar'
import ProfileScreen from '../screens/Profile'

const Tab = createBottomTabNavigator()

const TabStack = ({route}) => {
	return (
		<Tab.Navigator
			initialRouteName={'Home'}
			screenOptions={{
				title: '',
				headerStyle: {
					height: 120,
					backgroundColor: 'lightgrey',
				},
				headerLeftContainerStyle: {
					paddingLeft: 10,
				},
				headerRightContainerStyle: {
					paddingRight: 10,
				},
				headerLeft: () => {
					return (
						<View style={{alignItems: 'center'}}>
							<FastImage source={require('../../assets/img/logo.png')} style={{width: 40, height: 40}} />
							<Text>CITY CENTER</Text>
						</View>
					)
				},
			}}
			tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
      	name="Home"
      	component={HomeScreen} />
      <Tab.Screen
      	name="Map"
      	component={MapScreen} />
      <Tab.Screen
      	name="Store"
      	component={StoreScreen} />
      <Tab.Screen
      	name="Calendar"
      	component={CalendarScreen} />
      <Tab.Screen
      	name="Profile"
    		component={ProfileScreen} />
    </Tab.Navigator>
	)
}

export default TabStack
