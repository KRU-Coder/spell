interface IProps {
    width: number
    height: number
    color: string
}
const LevelIcon = ({ color, height, width }: IProps) => {
    return (
        <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet"
        >
            <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill={color}
                stroke="none"
            >
                <path
                    d="M4161 5103 c-15 -10 -64 -98 -129 -232 -57 -119 -105 -217 -106 -218
-1 -2 -112 -19 -247 -39 -268 -39 -289 -47 -289 -108 0 -27 25 -56 181 -212
l180 -180 -40 -235 c-23 -129 -41 -242 -41 -252 0 -27 45 -67 76 -67 14 0 121
50 237 112 116 61 216 111 222 111 6 0 107 -50 223 -111 244 -130 265 -134
298 -71 13 27 11 48 -27 272 l-42 243 182 180 c157 155 181 183 181 210 0 62
-21 70 -290 109 -134 19 -245 36 -246 38 -2 1 -50 99 -108 217 -58 118 -115
223 -127 233 -27 21 -58 22 -88 0z m231 -586 c13 -8 97 -24 188 -37 91 -13
171 -26 178 -30 9 -4 -31 -49 -122 -137 -160 -153 -150 -121 -107 -371 l28
-162 -163 85 c-89 47 -175 85 -189 85 -15 0 -102 -39 -193 -86 -149 -79 -164
-85 -159 -63 11 45 57 327 57 350 0 17 -39 63 -137 161 -125 125 -134 137
-112 142 13 3 92 15 174 27 83 12 160 26 172 30 16 6 47 57 109 181 l86 173
84 -167 c50 -101 93 -173 106 -181z"
                />
                <path
                    d="M3755 3395 l-25 -24 0 -1431 0 -1430 -95 0 -95 0 0 1141 0 1141 -29
29 -29 29 -417 0 -417 0 -29 -29 -29 -29 0 -1141 0 -1141 -95 0 -95 0 0 800
c0 564 -3 806 -11 823 -6 14 -22 30 -36 36 -16 7 -154 11 -433 11 l-409 0 -28
-24 -28 -24 -3 -811 -2 -811 -95 0 -95 0 0 471 0 471 -30 29 -29 30 -420 -3
-420 -3 -23 -23 -23 -23 -3 -475 c-2 -439 -4 -475 -20 -480 -88 -28 -135 -68
-168 -139 -66 -140 12 -316 155 -355 26 -7 747 -9 2247 -8 2103 3 2211 4 2245
21 214 107 185 417 -45 479 l-46 12 -2 1434 -3 1434 -24 19 c-22 18 -45 19
-448 19 l-424 0 -24 -25z m765 -1505 l0 -1380 -315 0 -315 0 0 1380 0 1380
315 0 315 0 0 -1380z m-1140 -290 l0 -1090 -315 0 -315 0 0 1090 0 1090 315 0
315 0 0 -1090z m-1140 -335 l0 -755 -315 0 -315 0 0 755 0 755 315 0 315 0 0
-755z m-1140 -335 l0 -420 -315 0 -315 0 0 420 0 420 315 0 315 0 0 -420z
m3634 -606 c55 -55 23 -152 -55 -168 -18 -3 -1000 -6 -2183 -6 -2028 0 -2153
1 -2186 18 -43 21 -64 62 -56 106 7 36 40 72 70 78 11 1 1001 2 2201 0 l2182
-2 27 -26z"
                />
            </g>
        </svg>
    )
}

export default LevelIcon
