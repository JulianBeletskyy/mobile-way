import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Pressable, View, Text, Keyboard, BackHandler } from 'react-native'
import FastImage from 'react-native-fast-image'
import { CommonActions } from '@react-navigation/native'

import { TAB_BAR_HEIGHT } from '../config'

import TabBar from '../components/TabBar'
import SearchInput from '../components/SearchInput'

import StoreStack from './StoreStack'
import HomeStack from './HomeStack'

import MapScreen from '../screens/Map'
import CalendarScreen from '../screens/Calendar'
import ProfileScreen from '../screens/Profile'

const Tab = createBottomTabNavigator()

const excludeRoutes = ['Login', 'SignUp', 'Splash']

const TabStack = ({navigation, route}) => {
	useEffect(() => {
		navigation.getParent().dispatch(state => {
      const routes = state.routes.filter(r => !excludeRoutes.includes(r.name))
      const diff = state.routes.length - routes.length
      return CommonActions.reset({...state, routes, index: state.index - diff})
    })
	}, [])

	return (
		<Tab.Navigator
			initialRouteName={'Home'}
			screenOptions={{
				title: '',
				headerTransparent: false,
				headerStyle: {
					elevation: 0,
          shadowOpacity: 0,
				},
				headerLeftContainerStyle: {
					paddingLeft: 24,
				},
				headerRightContainerStyle: {
					paddingRight: 24,
				},
				headerLeft: () => {
					return (
						<View style={{alignItems: 'center'}}>
							<Text style={{fontSize: 20, fontWeight: '700', color: '#0077FF'}}>Mobile Way</Text>
						</View>
					)
				},
				headerRight: () => {
					return (
						<SearchInput />
					)
				}
			}}
			tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
      	name="HomeStack"
      	component={HomeStack} />
    	<Tab.Screen
      	name="StoreStack"
      	initialParams={{bottomOffset: TAB_BAR_HEIGHT}}
      	component={StoreStack} />
      <Tab.Screen
      	name="Map"
				options={{headerTransparent: true}}
      	component={MapScreen} />
      <Tab.Screen
      	name="Calendar"
      	initialParams={{bottomOffset: TAB_BAR_HEIGHT}}
      	component={CalendarScreen} />
      <Tab.Screen
      	name="Profile"
      	initialParams={{bottomOffset: TAB_BAR_HEIGHT}}
    		component={ProfileScreen} />
    </Tab.Navigator>
	)
}

export default TabStack
