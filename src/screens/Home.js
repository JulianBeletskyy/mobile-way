import React, { useEffect } from 'react'
import { View, StyleSheet, Text, ScrollView, useWindowDimensions } from 'react-native'
import FastImage from 'react-native-fast-image'
import Carousel from 'react-native-snap-carousel'

const banner = require('../../assets/img/banner.png')
const SLIDE_OFFSET = 16
const SLIDE_WIDTH = 305
const SLIDE_HEIGHT = 167
const SHADOW_WIDTH = 5

const HomeScreen = ({navigation}) => {
	const { width } = useWindowDimensions()

	const renderItem = ({item, index}) => {
		return (
			<View style={styles.slideContainer}>
				<View style={styles.slideContent}>
				</View>
			</View>
		)
	}

	return (
		<ScrollView style={styles.container}>
			<View style={{marginBottom: 18}}>
				<Carousel
	        data={[...new Array(5)]}
	        layout={'default'}
	        containerCustomStyle={{paddingLeft: SLIDE_OFFSET}}
	        loop={false}
	        firstItem={0}
	        activeSlideAlignment={'start'}
	        inactiveSlideScale={1}
	        inactiveSlideOpacity={1}
	        renderItem={renderItem}
	        sliderWidth={width}
	        itemWidth={SLIDE_WIDTH+SLIDE_OFFSET+SHADOW_WIDTH*2} />
        </View>
      <View style={{marginBottom: 18}}>
      	<Carousel
	        data={[...new Array(5)]}
	        layout={'default'}
	        containerCustomStyle={{paddingLeft: SLIDE_OFFSET}}
	        loop={false}
	        firstItem={0}
	        activeSlideAlignment={'start'}
	        inactiveSlideScale={1}
	        inactiveSlideOpacity={1}
	        renderItem={renderItem}
	        sliderWidth={width}
	        itemWidth={SLIDE_WIDTH+SLIDE_OFFSET+SHADOW_WIDTH*2} />
      </View>
      <View style={{marginBottom: 18}}>
      	<Carousel
	        data={[...new Array(5)]}
	        layout={'default'}
	        containerCustomStyle={{paddingLeft: SLIDE_OFFSET}}
	        loop={false}
	        firstItem={0}
	        activeSlideAlignment={'start'}
	        inactiveSlideScale={1}
	        inactiveSlideOpacity={1}
	        renderItem={renderItem}
	        sliderWidth={width}
	        itemWidth={SLIDE_WIDTH+SLIDE_OFFSET+SHADOW_WIDTH*2} />
      </View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingTop: 15,
		paddingBottom: 15,
	},
	slideContainer: {
		height : SLIDE_HEIGHT+SHADOW_WIDTH*2,
		paddingRight: SLIDE_OFFSET,
		paddingLeft: SHADOW_WIDTH,
		alignItems: 'center',
		justifyContent: 'center',
	},
	slideContent: {
		height: SLIDE_HEIGHT,
		width: '100%',
		borderRadius: 8,
		shadowOpacity: 0.1,
		shadowOffset: {width: 0, height: 2},
		shadowColor: 'rgba(0,0,0,1)',
		shadowRadius: 5,
		backgroundColor: '#fff'
	}
})

export default HomeScreen
