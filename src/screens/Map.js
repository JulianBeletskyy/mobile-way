import React, { useEffect, useState, useRef } from 'react'
import { View, StyleSheet, Alert, Dimensions, Pressable, Animated, useWindowDimensions } from 'react-native'
import FastImage from 'react-native-fast-image'
import { useIsFocused } from '@react-navigation/native'
import NaviginePlugin from 'rn-navigine-fake'
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';

import MainBtn from '../components/buttons/MainBtn'
import { PositionIcon, GPSIcon } from '../components/icons/map'

const POSITION_SIZE = 40
const SCREEN = Dimensions.get('window')
console.log('SCREEN', SCREEN)

const MapScreen = ({navigation, route}) => {
	const isFocused = useIsFocused()
	const [floorImage, setFloorImage] = useState(null)

	const imageSize = useRef({width: 0, height: 0})
	const zoom = useRef(1)
	const position = useRef({x: 0, y: 0})
	const azimuth = useRef(0)
	const zoomableViewRef = useRef(null)

	const positionAngle = useRef(new Animated.Value(0)).current
	const positionAngleDegrees = positionAngle.interpolate({
		inputRange: [0,360],
		outputRange: ['0deg', '360deg']
	})

	const realImageWidth = SCREEN.width * zoom.current
	const realImageHeight = imageSize.current.height * SCREEN.width / imageSize.current.width

	const realImageTop = SCREEN.height / 2 - realImageHeight / 2

	// console.log(realImageWidth, realImageHeight)

	useEffect(() => {
		if (isFocused) {
			const init = async () => {
				NaviginePlugin.init('apiKey', 'locationId', async () => {
					const imageSizes = await NaviginePlugin.getFloorImageSizes()
					imageSize.current = {width: imageSizes.x, height: imageSizes.y}

					const image = await NaviginePlugin.getFloorImage()
					setFloorImage(`data:image/png;base64,${image}`)

					const pos = await NaviginePlugin.getCurPosition()
					zoomableViewRef.current.moveTo(pos.x, pos.y)
					position.current = {x: pos.x, y: pos.y}

					const scale = await NaviginePlugin.getZoomScale()
					zoomableViewRef.current.zoomTo(1)
					zoom.current = scale

					const radians = await NaviginePlugin.getAzimuth()
					azimuth.current = radians
					rotatePosition(radians)
				})
			}
			init()
		}
			
	}, [isFocused])

	useEffect(() => {
		if (isFocused && route.params?.store) {
			const { store } = route.params
			Alert.alert(store.title)
		}
	}, [isFocused, route.params])

	const rotatePosition = radians => {
		const degrees = radians * (180/Math.PI)
		Animated.timing(positionAngle, {
			toValue: degrees,
			useNativeDriver: true,
		}).start()
	}

	const logOutZoomState = (event, gestureState, zoomableViewEventObject) => {
    // console.log('');
    // console.log('');
    // console.log('-------------');
    // console.log('Event: ', event);
    // console.log('GestureState: ', gestureState);
    // console.log('ZoomableEventObject: ', zoomableViewEventObject);
    // console.log('');
    // console.log(`Zoomed from ${zoomableViewEventObject.lastZoomLevel} to  ${zoomableViewEventObject.zoomLevel}`);
  }

	const onShiftingBefore = (event, gestureState, zoomableViewEventObject) => {
		// console.log('');
    // console.log('');
    // console.log('-------------');
    // console.log('Event: ', event);
    // console.log('GestureState: ', gestureState);
    // console.log('ZoomableEventObject: ', zoomableViewEventObject);
    // console.log('');
    // console.log(`Zoomed from ${zoomableViewEventObject.lastZoomLevel} to  ${zoomableViewEventObject.zoomLevel}`);
	}

	return (
		<View style={styles.container}>
			<ReactNativeZoomableView
				ref={zoomableViewRef}
				maxZoom={100}
				bindToBorders={false}
				initialOffsetX={0}
				initialOffsetY={0}
				onZoomAfter={logOutZoomState}
				onShiftingBefore={onShiftingBefore}
				style={{}}>
				<View style={{borderWidth: 1, borderColor: 'green', backgroundColor: 'grey'}}>
					<FastImage
						source={{uri: floorImage}}
						style={{width: '100%', height: '100%'}}
						resizeMode={FastImage.resizeMode.contain} />
					<Animated.View style={[styles.position, {top: realImageTop}, {transform: [{rotate: positionAngleDegrees}]}]}>
						<GPSIcon width={POSITION_SIZE} height={POSITION_SIZE} style={{borderWidth: 1}} />
					</Animated.View>
				</View>
			</ReactNativeZoomableView>
			
			<Pressable style={styles.gps}>
				<GPSIcon />
			</Pressable>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	position: {
		position: 'absolute',
		// borderWidth: 1,
		top: 0, //SCREEN.height/2 - POSITION_SIZE/2,
		left: 0, //SCREEN.width/2 - POSITION_SIZE/2,
	},
	gps: {
		position: 'absolute',
		right: 23,
		bottom: 150,
	}
})

export default MapScreen
