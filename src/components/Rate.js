import React from 'react'
import { View, StyleSheet } from 'react-native'

import { StarFillIcon, StarEmptyIcon, StarHalfIcon } from './icons/rate'

const RATE_STEP = .5

const Rate = ({rate, maxRate = 5}) => {
	return (
		<View style={styles.container}>
			{
				[...new Array(maxRate)].map((_, i) => {
					const currentRate = i+1
					if (rate >= currentRate) {
						return <StarFillIcon key={i} />
					}
					if (rate+RATE_STEP >= currentRate) {
						return <StarHalfIcon key={i} />
					}
					return <StarEmptyIcon key={i} />
				})
			}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
	}
})

export default Rate
