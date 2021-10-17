import React, { useCallback, useMemo, useRef, useState } from 'react'
import { View, StyleSheet, Text, ScrollView, useWindowDimensions, Pressable, Platform, Linking } from 'react-native'
import FastImage from 'react-native-fast-image'
import Carousel from 'react-native-snap-carousel'
import BottomSheet from '@gorhom/bottom-sheet'

import { TAB_BAR_HEIGHT } from '../config'
import { randomIntFromInterval } from '../utils/helpers'

import { StarFillIcon } from '../components/icons/rate'
import ProductDetailsCard from '../components/cards/ProductDetails'

const defaultProducts = {
	0: {
		image: require(`../../assets/img/default_1.png`),
		title: 'NEW BALANCE',
		description: 'Магазин Nike  американская транснациональная компания, специализирующаяся на спортивной одежде ',
		group: 'Sport clother',
		rate: 4.5,
		url: 'https://newbalance.ru/'
	},
	1: {
		image: require(`../../assets/img/default_2.png`),
		title: 'NIKE',
		description: 'Магазин Nike  американская транснациональная компания, специализирующаяся на спортивной одежде ',
		group: 'Clother',
		rate: 3.5,
		url: 'https://www.nike.com/ru/'
	},
	2: {
		image: require(`../../assets/img/default_3.png`),
		title: 'NEW BALANCE',
		description: 'Магазин Nike  американская транснациональная компания, специализирующаяся на спортивной одежде ',
		group: 'Sport clother',
		rate: 2.5,
		url: 'https://newbalance.ru/'
	},
	3: {
		image: require(`../../assets/img/default_4.png`),
		title: 'NIKE',
		description: 'Магазин Nike  американская транснациональная компания, специализирующаяся на спортивной одежде ',
		group: 'Clother',
		rate: 5,
		url: 'https://www.nike.com/ru/'
	}
}

const products1 = [...new Array(5)].map(() => defaultProducts[randomIntFromInterval(0,3)])
const products2 = [...new Array(5)].map(() => defaultProducts[randomIntFromInterval(0,3)])
const products3 = [...new Array(5)].map(() => defaultProducts[randomIntFromInterval(0,3)])
const products4 = [...new Array(5)].map(() => defaultProducts[randomIntFromInterval(0,3)])

const SLIDE_OFFSET = 16
const SLIDE_WIDTH = 305
const SLIDE_HEIGHT = 167
const SHADOW_WIDTH = 5

const HomeScreen = ({navigation, route}) => {
	const { width } = useWindowDimensions()
	const { bottomOffset } = route.params

	const bottomSheetRef = useRef(null)

  const snapPoints = useMemo(() => [400], [])

  const [selectedProduct, setSelectedProduct] = useState(null)

	const handlePressItem = item => () => {
		setSelectedProduct(item)
		bottomSheetRef.current.snapToIndex(0)
	}

	const handlePressSite = () => {
		Linking.openURL(selectedProduct.url)
	}

	const handlePressStore = () => {

	}

	const renderItem = ({item, index}) => {
		return (
			<View style={styles.slideContainer}>
				<Pressable style={styles.slideContent} onPress={handlePressItem(item)}>
					<FastImage source={item.image} style={styles.bannerImage} />
					<View style={{paddingLeft: 10, paddingRight: 10, paddingTop: 5}}>
						<View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 3}}>
							<Text style={{color: '#087012', fontSize: 18, marginRight: 5}}>{item.title}</Text>
							<StarFillIcon />
							<Text style={{marginLeft: 5, color: '#087012',}}>{item.rate.toFixed(2)}</Text>
						</View>
						<View style={{flexDirection: 'row', alignItems: 'center'}}>
							<Text style={{color: '#828282', fontSize: 12}}>{item.group}</Text>
							<Text style={{color: '#828282', fontSize: 12, marginHorizontal: 5}}>&bull;</Text>
							<Text style={{color: '#828282', fontSize: 12}}>8 min</Text>
						</View>
					</View>
				</Pressable>
			</View>
		)
	}

	return (
		<View style={[styles.container, {paddingBottom: bottomOffset}]}>
			<ScrollView>
				<View style={{marginBottom: 18}}>
					<Carousel
		        data={products1}
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
		        data={products2}
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
		        data={products3}
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
		        data={products4}
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
			<BottomSheet
	      ref={bottomSheetRef}
	      style={styles.sheetContainer}
	      backgroundStyle={Platform.OS === 'ios' ? styles.sheetBackground : null }
	      handleIndicatorStyle={styles.sheetHandler}
	      index={-1}
	      bottomInset={TAB_BAR_HEIGHT}
	      enablePanDownToClose={true}
	      snapPoints={snapPoints}>
	      <ProductDetailsCard
	      	{...selectedProduct}
	      	onPressSite={handlePressSite}
					onPressStore={handlePressStore} />
	    </BottomSheet>
    </View>
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
		elevation: 5,
		shadowOpacity: 0.1,
		shadowOffset: {width: 0, height: 2},
		shadowColor: 'rgba(0,0,0,1)',
		shadowRadius: 5,
		backgroundColor: '#fff'
	},
	bannerImage: {
		width: '100%',
		height: 108,
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
	},
	sheetContainer: {
		shadowOpacity: 0.1,
		shadowColor: 'rgba(0,0,0,1)',
		shadowRadius: 5,
		elevation: 5,
		shadowOffset: {width: 0, height: -5},
	},
	sheetHeader: {

	},
	sheetBackground: {
		borderTopLeftRadius: 32,
		borderTopRightRadius: 32,
		shadowOpacity: 0.1,
		shadowColor: 'rgba(0,0,0,1)',
		shadowRadius: 5,
		elevation: 5,
		shadowOffset: {width: 0, height: -5},

	},
	sheetHandler: {
		width: 80,
		backgroundColor: '#828282',
		height: 5,
	}
})

export default HomeScreen
