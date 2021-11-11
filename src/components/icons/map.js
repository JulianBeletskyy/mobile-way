import React from 'react'
import Svg, { Path, Defs, LinearGradient, Stop, RadialGradient, Text, TSpan, Circle, G, ClipPath, Mask, Pattern, Use, Image } from 'react-native-svg'

export const PositionIcon = props => {
  return (
    <Svg
      width={87}
      height={87}
      viewBox="0 0 87 87"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#prefix__filter0_d_127:7197)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M54.76 55.157c9.157-6.176 11.574-18.607 5.397-27.764-6.177-9.158-18.607-11.574-27.765-5.397-9.157 6.177-11.573 18.607-5.397 27.764 6.177 9.158 18.608 11.574 27.765 5.397z"
          fill="#07F"
        />
        <Path
          d="M55.599 56.4c9.844-6.639 12.441-20.002 5.801-29.846-6.64-9.844-20.002-12.442-29.846-5.802-9.845 6.64-12.442 20.003-5.802 29.847 6.64 9.844 20.003 12.442 29.847 5.802z"
          stroke="#fff"
          strokeWidth={3}
        />
      </G>
      <Path
        clipRule="evenodd"
        d="M37.575 44.117l6.052-16.637 5.856 16.708-5.933-3.608-5.975 3.537z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs></Defs>
    </Svg>
  )
}

export const GPSIcon = props => {
  return (
    <Svg
      width={58}
      height={58}
      viewBox="0 0 58 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#prefix__filter0_d_127:7213)">
        <Circle cx={29} cy={26} r={25} fill="#07F" />
      </G>
      <Path d="M29 13v26" stroke="#fff" strokeWidth={2} strokeLinecap="round" />
      <Circle
        cx={29}
        cy={26}
        r={9}
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path d="M42 26H16" stroke="#fff" strokeWidth={2} strokeLinecap="round" />
      <Defs></Defs>
    </Svg>
  )
}