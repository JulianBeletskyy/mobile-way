import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import FastImage from 'react-native-fast-image'

import MainBtn from '../buttons/MainBtn'
import Rate from '../Rate'

const ProductDetailsCard = ({title, description, group, image, rate, onPressSite, onPressStore}) => {
	return (
		<View style={styles.container}>
			<Text style={styles.shopTitle}>{title}</Text>
			<FastImage source={image} style={styles.bannerImage} />
			<View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 5}}>
				<View style={{flex: 1}}>
					<Text style={styles.productTitle}>{title}</Text>
					<View style={{marginBottom: 5}}>
						<Rate rate={rate} />
					</View>
					<Text style={styles.groupTitle}>{group}</Text>
				</View>
				<View style={{flex: 1, alignItems: 'flex-end'}}>
					<Text  style={styles.productTitle}>2 мин</Text>
					<Text style={styles.groupTitle}>130 м</Text>
				</View>
			</View>
			<Text style={styles.productDescription} numberOfLines={3}>{description}</Text>
			<View style={{flexDirection: 'row', marginTop: 'auto'}}>
				<MainBtn style={{flex: 1, marginRight: 5}} onPress={onPressSite}>На сайт</MainBtn>
				<MainBtn reverse style={{flex: 1, marginLeft: 5}} onPress={onPressStore}>В магазин</MainBtn>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		// width: '100%',
		// height: '100%',
		paddingBottom: 15,
		paddingLeft: 25,
		paddingRight: 25,
		flex: 1,
		backgroundColor: '#fff',
	},
	shopTitle: {
		textAlign: 'center',
		fontSize: 18,
		marginBottom: 10,
	},
	productTitle: {
		color: '#087012',
		fontSize: 18,
		marginBottom: 5,
	},
	groupTitle: {
		color: '#087012',
		fontSize: 12,
	},
	productDescription: {
		marginBottom: 10,
	},
	bannerImage: {
		width: '100%',
		height: 123,
		borderRadius: 8,
		marginBottom: 10,
	}
})

export default ProductDetailsCard
