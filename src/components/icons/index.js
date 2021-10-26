import React from 'react'
import Svg, { Path, Defs, LinearGradient, Stop, RadialGradient, Text, TSpan, Circle, G, ClipPath, Mask, Pattern, Use, Image } from 'react-native-svg'

export const HomeIcon = ({active, color = "#217A4A", ...props}) => {
	return (
    <Svg
      width={27}
      height={27}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M27 18.415v7.244c0 .83-.51 1.341-1.343 1.341h-8.513c-.8 0-1.262-.469-1.262-1.276 0-1.762.005-3.517 0-5.278-.005-1.175-.704-2.128-1.762-2.43-1.606-.457-3.152.69-3.163 2.37-.016 1.762-.006 3.517-.006 5.278 0 .889-.445 1.336-1.342 1.336H1.337C.451 27 0 26.548 0 25.654V11.3c0-1.212.483-2.155 1.472-2.86C5.226 5.737 8.964 3.028 12.708.319c.585-.425 1.01-.425 1.595 0 3.749 2.715 7.498 5.429 11.252 8.138.978.705 1.45 1.648 1.445 2.849v7.11zm-8.83 6.312h6.531v-.34c0-4.335-.005-8.67.005-13.006 0-.5-.182-.845-.58-1.13a3696.06 3696.06 0 01-10.452-7.594c-.144-.108-.241-.119-.391-.006C9.78 5.188 6.273 7.72 2.76 10.245c-.36.259-.521.576-.521 1.023.01 4.373.005 8.741.005 13.114v.291h6.531v-.339c0-1.373-.032-2.747.016-4.12.08-2.51 2.084-4.465 4.587-4.535 2.482-.07 4.662 1.912 4.77 4.4.059 1.444.021 2.887.026 4.336-.005.102-.005.21-.005.312z"
        fill={active ? color : '#282828'}
      />
    </Svg>
	)
}

export const MapIcon = ({active, color = "#217A4A", ...props}) => {
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
        fill="url(#prefix__paint0_linear_127:7702)"
      />
      <Path
        d="M28 26.299L44.701 20l-6.299 16.701L28 26.3zM36.5 39L20 44.701 26 28.5 36.5 39z"
        fill="#fff"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear_127:7702"
          x1={2.042}
          y1={-1.669}
          x2={79.406}
          y2={25.73}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#77C7F5" />
          <Stop offset={1} stopColor="#4488F4" />
        </LinearGradient>
      </Defs>
    </Svg>
	)
}

export const StoreIcon = ({active, color = "#217A4A", ...props}) => {
	return (
		<Svg
      width={27}
      height={27}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5 27C6.045 27 0 20.961 0 13.506-.006 6.051 6.027.006 13.482 0 20.943-.006 26.994 6.027 27 13.476 27.006 20.949 20.967 27 13.5 27zM2.11 13.512c.005 6.286 5.104 11.379 11.39 11.379 6.286 0 11.385-5.099 11.39-11.385 0-6.298-5.11-11.409-11.408-11.397C7.19 2.121 2.103 7.22 2.109 13.512zm5.398 5.096l-.125.033c-.916-.006-1.422-.868-1.018-1.573.33-.58.678-1.15 1.025-1.72l.397-.655c1.585-2.633 3.17-5.261 4.761-7.889.47-.777 1.416-.79 1.886-.012a9139.89 9139.89 0 016.142 10.185c.289.47.27.874-.03 1.26-.284.368-.706.488-1.218.338l-2.336-.678-3.299-.956a.766.766 0 00-.404 0c-1.7.489-3.393.983-5.086 1.477-.25.073-.5.14-.695.19zm9.672-3.184c-1.235-2.046-2.441-4.044-3.68-6.1-1.314 2.17-2.591 4.284-3.917 6.484l.119-.031c.183-.05.317-.085.447-.125.312-.09.622-.183.931-.275.68-.203 1.36-.405 2.047-.587.247-.066.542-.054.79.012.688.186 1.37.388 2.052.59l1.069.314a2.5 2.5 0 00.236.06l.132.03-.226-.372z"
        fill={active ? color : '#282828'}
      />
    </Svg>
	)
}

export const CalendarIcon = ({active, color = "#217A4A", ...props}) => {
	return (
		<Svg
      width={29}
      height={27}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1 6a5 5 0 015-5h17a5 5 0 015 5H1zM1 10h27v11a5 5 0 01-5 5H6a5 5 0 01-5-5V10z"
        stroke={active ? color : '#282828'}
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <Path
        d="M20 15l-6.188 6L11 18.273"
        stroke={active ? color : '#282828'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
	)
}

export const ProfileIcon = ({active, color = "#217A4A", ...props}) => {
	return (
		<Svg
      width={27}
      height={27}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M13.5 15.5a5 5 0 100-10 5 5 0 000 10z"
        stroke={active ? color : '#282828'}
        strokeWidth={2}
        strokeMiterlimit={10}
      />
      <Path
        d="M4.2 21.9c1.5-3.8 5.1-6.4 9.3-6.4 4.2 0 7.9 2.6 9.3 6.4"
        stroke={active ? color : '#282828'}
        strokeWidth={2}
        strokeMiterlimit={10}
      />
      <Path
        d="M13.5 26C20.404 26 26 20.404 26 13.5S20.404 1 13.5 1 1 6.596 1 13.5 6.596 26 13.5 26z"
        stroke={active ? color : '#282828'}
        strokeWidth={2}
        strokeMiterlimit={10}
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

export const GoogleIcon = props => {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6.99 13.878l-.627 2.339-2.29.048A8.96 8.96 0 013 12c0-1.492.363-2.9 1.006-4.139l2.04.374.893 2.026A5.35 5.35 0 006.649 12c.001.66.12 1.294.34 1.878z"
        fill="#FBBB00"
      />
      <Path
        d="M20.843 10.319a9.021 9.021 0 01-.04 3.56 8.998 8.998 0 01-3.169 5.14v-.001l-2.568-.131-.364-2.269a5.364 5.364 0 002.308-2.739h-4.812v-3.56h8.645z"
        fill="#518EF8"
      />
      <Path
        d="M17.634 19.018A8.962 8.962 0 0112 21a8.999 8.999 0 01-7.927-4.735l2.916-2.387a5.351 5.351 0 007.714 2.74l2.931 2.4z"
        fill="#28B446"
      />
      <Path
        d="M17.745 5.072l-2.916 2.387a5.353 5.353 0 00-7.89 2.802l-2.932-2.4A8.998 8.998 0 0112 3c2.184 0 4.186.778 5.745 2.072z"
        fill="#F14336"
      />
    </Svg>
  )
}

export const FacebookIcon = props => {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
        fill="#3B5998"
      />
      <Path
        d="M15.017 12.47h-2.141v7.844H9.63V12.47H8.088V9.713h1.543V7.929c0-1.276.606-3.274 3.273-3.274l2.403.01v2.676h-1.743c-.286 0-.688.143-.688.752v1.622H15.3l-.283 2.755z"
        fill="#fff"
      />
    </Svg>
  )
}

export const ChevronLeftIcon = props => {
  return (
    <Svg
      width={18}
      height={32}
      viewBox="0 0 18 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M0 16c.018.631.247 1.172.723 1.66l13.716 13.727c.405.396.881.613 1.463.613C17.083 32 18 31.062 18 29.853c0-.577-.23-1.118-.635-1.533L5.025 16l12.34-12.32c.406-.415.635-.938.635-1.533C18 .938 17.083 0 15.902 0c-.564 0-1.058.216-1.463.613L.723 14.358C.229 14.829 0 15.368 0 16z"
        fill="#324B42"
      />
    </Svg>
  )
}
