import React from 'react'
import { View, StyleSheet, Text, Pressable } from 'react-native'
import { useDispatch, shallowEqual, useSelector } from 'react-redux'
import { LoginManager } from 'react-native-fbsdk-next'
import FastImage from 'react-native-fast-image'

import { resetUser } from '../actions/user'

import MainBtn from '../components/buttons/MainBtn'

const ProfileScreen = ({navigation, route}) => {
	const dispatch = useDispatch()
	const authUser = useSelector(({user}) => user.data, shallowEqual)
	const isAuth = useSelector(({user}) => user.data.id, shallowEqual)
	const { bottomOffset } = route.params

	const logout = () => {
		LoginManager.logOut()
		dispatch(resetUser())
	}

	return (
		<View style={[styles.container, {paddingBottom: bottomOffset+20, paddingTop: 20}]}>
			{
				isAuth
					?	<View style={{flex: 1}}>
							<View>
								<FastImage
									source={{uri: authUser.avatar}}
									style={{width: 100, height: 100, borderRadius: 100/2, marginLeft: 'auto', marginRight: 'auto', marginBottom: 15}}
									resizeMode={'cover'} />
								<View style={{flexDirection: 'row'}}>
									<Text>Email: </Text>
									<Text style={{fontWeight: '800'}}>{authUser.email}</Text>
								</View>
								<View style={{flexDirection: 'row'}}>
									<Text>Name: </Text>
									<Text style={{fontWeight: '800'}}>{authUser.name}</Text>
								</View>
							</View>
							<MainBtn style={{width: 300, marginTop: 'auto', marginLeft: 'auto', marginRight: 'auto'}} onPress={logout}>
								Logout
							</MainBtn>
						</View>
					: <MainBtn style={{width: 300, marginTop: 'auto', marginLeft: 'auto', marginRight: 'auto'}} onPress={() => navigation.navigate('Login')}>
							Login
						</MainBtn>
			}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingLeft: 25,
		paddingRight: 25,
	},
})

export default ProfileScreen
