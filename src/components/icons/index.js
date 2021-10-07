import React from 'react'
import Svg, { Path, Defs, LinearGradient, Stop, RadialGradient, Text, TSpan, Circle, G, ClipPath, Mask, Pattern, Use, Image } from 'react-native-svg'

export const HomeIcon = ({active, ...props}) => {
	return (
		<Svg
      width={28}
      height={27}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M18 26.42v-6.667a4 4 0 10-8 0v6.667H3.334a2.667 2.667 0 01-2.667-2.667V9.263a2.667 2.667 0 011.295-2.287l10.666-6.4a2.667 2.667 0 012.744 0l10.667 6.4a2.666 2.666 0 011.295 2.287v14.49a2.667 2.667 0 01-2.667 2.667H18z"
        fill={active ? '#217A4A' : '#4F4F4F'}
      />
    </Svg>
	)
}

export const MapIcon = ({active, ...props}) => {
	return (
		<Svg
      width={64}
      height={64}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M63.642 31.644c0 4.189-.814 8.187-2.292 11.844a31.69 31.69 0 01-8.51 11.966 31.542 31.542 0 01-20.848 7.833 31.485 31.485 0 01-15.982-4.326A31.792 31.792 0 015.03 48.225 31.458 31.458 0 01.44 34.14a31.093 31.093 0 01-.098-2.496C.342 14.169 14.512 0 31.992 0c.316 0 .63.004.943.013h.002c2.111.063 4.167.331 6.154.786a31.474 31.474 0 018.345 3.216c9.67 5.415 16.206 15.76 16.206 27.629z"
        fill={active ? 'url(#prefix__paint0_linear)' : '#4F4F4F'}
      />
      <Path
        d="M35.22 31.137l5.03-5.03a1.666 1.666 0 10-2.357-2.357l-5.03 5.03a3.34 3.34 0 00-4.083 4.083l-5.03 5.03a1.666 1.666 0 002.356 2.357l5.03-5.03a3.34 3.34 0 004.084-4.083zM32 48.667c-9.205 0-16.667-7.462-16.667-16.667 0-9.205 7.462-16.667 16.667-16.667 9.205 0 16.666 7.462 16.666 16.667 0 9.205-7.461 16.667-16.666 16.667z"
        fill="#fff"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={45.499}
          y1={54.5}
          x2={32}
          y2={7}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#087012" />
          <Stop offset={1} stopColor="#ACC760" />
        </LinearGradient>
      </Defs>
    </Svg>
	)
}

export const StoreIcon = ({active, ...props}) => {
	return (
		<Svg
      width={28}
      height={28}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M3.334 4.667V10H20.64l3.804-2.285a.445.445 0 000-.763L20.64 4.667H3.334zm8-2.667A1.333 1.333 0 1114 2h6.64c.484 0 .959.132 1.374.381l3.804 2.286a3.11 3.11 0 010 5.333l-3.804 2.285c-.415.25-.89.381-1.374.382H14V14h10.66a2.666 2.666 0 012.667 2.667V22a2.667 2.667 0 01-2.667 2.667H14V26a1.334 1.334 0 01-2.666 0v-1.333h-3.98c-.484 0-.959-.132-1.374-.382L2.176 22a3.111 3.111 0 010-5.333L5.98 14.38c.415-.25.89-.38 1.374-.381h3.98v-1.333h-8A2.667 2.667 0 01.667 10V4.667A2.667 2.667 0 013.334 2h8zM24.66 16.667H7.354L3.55 18.952a.444.444 0 000 .763L7.354 22H24.66v-5.333z"
        fill={active ? '#3E7D5B' : '#737373'}
      />
    </Svg>
	)
}

export const CalendarIcon = ({active, ...props}) => {
	return (
		<Svg
      width={28}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12.667 2.667V1.333a1.334 1.334 0 012.667 0v1.334h4V1.333a1.333 1.333 0 112.666 0v1.334h1.334a4 4 0 014 4V20a4 4 0 01-4 4H4.667a4 4 0 01-4-4V6.667a4 4 0 014-4H6V1.333a1.333 1.333 0 112.667 0v1.334h4zm0 2.666h-4v1.334a1.333 1.333 0 11-2.667 0V5.333H4.667a1.333 1.333 0 00-1.333 1.334V20a1.333 1.333 0 001.333 1.333h18.667A1.333 1.333 0 0024.667 20V6.667a1.334 1.334 0 00-1.333-1.334H22v1.334a1.334 1.334 0 01-2.666 0V5.333h-4v1.334a1.333 1.333 0 01-2.667 0V5.333zm-8 5.334h2.667v2.666H4.667v-2.666zm0 5.333h2.667v2.667H4.667V16zm16 0h2.667v2.667h-2.667V16zm0-5.333h2.667v2.666h-2.667v-2.666zm-10.667 0h2.667v2.666H10v-2.666zm5.334 0H18v2.666h-2.666v-2.666zm0 5.333H18v2.667h-2.666V16zM10 16h2.667v2.667H10V16z"
        fill={active ? '#3E7D5B' : '#737373'}
      />
    </Svg>
	)
}

export const ProfileIcon = ({active, ...props}) => {
	return (
		<Svg
      width={30}
      height={30}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M15 0C6.869 0 0 6.869 0 15s6.869 15 15 15 15-6.869 15-15S23.131 0 15 0zm0 7.5c2.59 0 4.5 1.908 4.5 4.5s-1.91 4.5-4.5 4.5c-2.589 0-4.5-1.908-4.5-4.5s1.911-4.5 4.5-4.5zM7.341 22.158c1.346-1.98 3.59-3.3 6.159-3.3h3c2.571 0 4.814 1.32 6.159 3.3C20.742 24.21 18.023 25.5 15 25.5c-3.023 0-5.742-1.29-7.659-3.342z"
        fill={active ? '#3E7D5B' : '#737373'}
      />
    </Svg>
	)
}

export const SearchIcon = (props) => {
	return (
		<Svg
      width={22}
      height={22}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9.889 18.778A8.889 8.889 0 109.889 1a8.889 8.889 0 000 17.778zM21 21l-4.833-4.833"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
	)
}
