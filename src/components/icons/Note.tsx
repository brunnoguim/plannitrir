import styled from 'styled-components'

interface Props {
  width: string,
}

const Icon = styled.svg<Props>`
  flex: none;
  width: ${(props) => props.width};
  transform: rotate(-25deg);
  transition: 0.1s;
  background-color: transparent;
  position: absolute;
  bottom: 15px;
  left: 40px;
  z-index: 6;
  fill: #000000;
  opacity: 0.7;
`

export const Note = ({ width }) => {

  return (
    <Icon width={width} viewBox="0 0 216.000000 220.000000">
      <g transform="translate(0.000000,220.000000) scale(0.100000,-0.100000)" stroke="none">
        <path d="M1620 2094 c-652 -104 -837 -137 -1030 -183 -113 -27 -232 -55 -265
-63 -71 -15 -76 -27 -46 -98 28 -66 40 -170 19 -170 -19 0 -48 -32 -48 -52 0
-9 16 -28 35 -42 19 -15 37 -37 40 -49 6 -24 35 -278 65 -567 11 -102 22 -202
25 -222 l5 -38 -65 0 c-47 0 -78 -6 -108 -21 -117 -60 -152 -103 -182 -219
-14 -54 -15 -74 -5 -117 17 -78 61 -137 126 -169 52 -25 60 -26 167 -21 130 6
187 21 277 75 117 70 152 160 151 388 0 89 4 142 12 154 9 16 8 26 -7 55 -18
33 -18 61 0 122 4 16 1 23 -14 27 -16 6 -21 18 -24 64 -3 31 -12 86 -21 122
-17 67 -67 311 -75 368 -4 32 -3 33 69 66 99 46 190 70 404 107 110 19 227 46
300 70 66 22 139 44 162 48 l43 8 9 -36 c10 -37 35 -181 45 -261 3 -25 17
-173 31 -330 14 -157 27 -295 30 -306 4 -20 -1 -23 -72 -33 -131 -20 -152 -29
-224 -101 -90 -91 -114 -143 -114 -245 0 -67 4 -89 28 -137 34 -68 82 -113
139 -129 77 -20 249 -6 356 30 130 43 146 54 197 123 41 57 45 67 45 120 0 32
-7 101 -15 153 -14 86 -14 98 0 118 21 31 19 107 -6 169 -19 45 -22 76 -24
204 -1 83 -4 155 -8 160 -3 5 -15 108 -27 229 -11 121 -29 288 -40 370 -10 83
-21 179 -25 215 -8 70 -18 91 -44 89 -9 -1 -140 -21 -291 -45z m284 -31 c23
-77 33 -228 15 -239 -6 -3 -41 -8 -78 -11 l-66 -4 40 37 c44 42 75 83 75 101
0 20 -40 26 -86 13 -25 -7 -47 -10 -50 -8 -2 3 4 27 14 54 17 42 25 51 58 61
55 16 72 15 78 -4z m-256 -42 c-88 -111 -114 -140 -122 -141 -13 0 0 121 16
136 10 10 65 25 121 33 5 0 -2 -12 -15 -28z m-164 -23 c-37 -118 -84 -233 -95
-233 -19 0 -50 90 -56 166 l-6 66 74 10 c41 6 78 11 82 12 5 0 5 -9 1 -21z
m246 -2 c0 -8 -27 -38 -60 -67 -33 -29 -60 -56 -60 -60 0 -15 33 -10 95 16 33
13 75 25 94 25 l35 0 -29 -30 c-50 -52 -100 -81 -148 -85 -24 -2 -81 -15 -126
-29 -45 -14 -84 -26 -87 -26 -10 0 -3 53 12 88 l17 37 7 -33 c4 -18 10 -36 13
-39 13 -12 37 8 58 49 12 24 37 63 57 87 52 64 122 102 122 67z m-477 -103
c-14 -49 -27 -100 -30 -115 -3 -14 -15 -36 -28 -48 l-23 -22 -26 39 c-30 46
-50 132 -42 178 6 30 11 35 44 40 20 4 42 8 47 10 6 2 26 4 47 4 l36 1 -25
-87z m-218 -51 c-28 -114 -55 -172 -79 -172 -40 0 -85 89 -93 180 l-6 68 54
11 c30 5 74 14 99 19 25 5 47 7 49 6 2 -2 -9 -52 -24 -112z m-245 59 c0 -14
-81 -225 -90 -234 -4 -5 -21 11 -37 35 -36 52 -77 147 -68 156 4 4 45 17 93
28 107 27 102 26 102 15z m524 -105 c14 -41 26 -78 26 -84 0 -8 -109 -36 -116
-29 -3 2 33 122 51 175 7 21 12 14 39 -62z m-490 17 c8 -58 22 -95 54 -147 13
-21 20 -42 15 -46 -12 -12 -229 -80 -255 -80 -45 0 -53 -13 -42 -74 7 -38 7
-59 0 -66 -19 -19 -28 -10 -22 23 l6 33 -92 13 c-111 16 -118 18 -118 40 0 11
18 25 50 38 49 21 50 21 60 2 15 -27 27 -24 49 11 15 26 17 45 13 132 -3 69
-2 99 6 94 6 -3 28 -39 50 -79 22 -39 52 -83 66 -96 l27 -25 24 25 c17 16 31
51 45 109 36 150 53 174 64 93z m-321 -114 l-9 -33 -18 39 c-10 21 -21 55 -23
75 -5 34 -3 38 23 47 l29 10 3 -53 c2 -29 -1 -67 -5 -85z m607 9 c8 -21 11
-40 9 -43 -8 -7 -103 -24 -108 -19 -3 3 8 44 24 92 l28 87 17 -40 c9 -22 23
-57 30 -77z m-712 40 c41 -112 45 -128 32 -143 -7 -8 -25 -15 -41 -15 -22 0
-30 6 -34 23 -43 192 -41 174 -12 180 12 2 25 5 29 6 4 0 15 -23 26 -51z
m1479 -44 c-50 -46 -154 -112 -161 -102 -2 2 -10 31 -18 65 l-16 63 37 9 c68
18 76 19 146 19 l70 1 -58 -55z m86 -106 c5 -48 4 -48 -32 -58 -59 -16 -61
-12 -25 41 40 60 43 79 12 79 l-23 1 25 20 25 21 6 -29 c4 -15 9 -49 12 -75z
m-93 -3 c0 -12 -86 -98 -111 -111 -27 -13 -28 -13 -34 17 -9 38 -5 41 70 72
64 27 75 30 75 22z m14 -173 c-34 -31 -80 -67 -103 -80 l-42 -23 3 47 c3 43 7
50 37 68 37 21 112 44 146 45 15 0 5 -14 -41 -57z m98 -34 c-4 -4 -27 -10 -52
-14 l-45 -7 45 40 45 41 7 -26 c4 -15 4 -30 0 -34z m-1537 32 c31 -12 31 -15
-1 -53 -17 -20 -24 -39 -21 -54 2 -13 -3 -29 -14 -39 -16 -15 -18 -12 -24 43
-3 32 -8 73 -11 92 -5 32 -4 33 20 27 14 -3 37 -11 51 -16z m209 -198 c14 -59
29 -136 32 -170 l7 -62 -49 -21 c-27 -12 -72 -24 -101 -27 -110 -10 -104 20
15 74 54 25 72 38 72 53 0 18 -8 20 -77 23 -44 2 -78 7 -77 13 0 6 36 30 80
55 56 33 79 52 79 65 0 18 -8 20 -60 21 -104 2 -102 1 -58 33 50 36 96 60 105
55 3 -2 18 -53 32 -112z m1316 94 c0 -34 -188 -182 -206 -163 -4 4 -10 33 -12
65 l-4 57 84 27 c94 30 138 35 138 14z m30 -88 c0 -7 -57 -28 -74 -28 -6 1 5
14 23 30 26 22 37 26 43 17 4 -6 8 -15 8 -19z m-1526 -38 c4 -5 -9 -19 -30
-33 -22 -14 -39 -24 -40 -23 -1 0 -4 18 -7 39 l-6 38 37 -7 c20 -3 41 -10 46
-14z m1481 -66 c-37 -33 -150 -94 -173 -94 -16 0 -25 41 -12 54 14 14 179 75
205 75 16 0 12 -7 -20 -35z m45 -54 c0 -25 -4 -30 -24 -30 -13 0 -32 3 -41 7
-14 5 -10 11 21 29 22 13 40 24 42 24 1 0 2 -13 2 -30z m-1555 -24 c18 -13 18
-14 -2 -39 -24 -31 -33 -26 -33 20 0 36 7 40 35 19z m1509 -67 c-21 -35 -174
-56 -174 -24 0 19 50 33 123 34 40 1 56 -2 51 -10z m58 -59 c4 -28 2 -30 -28
-30 -62 0 -70 11 -28 36 49 30 51 30 56 -6z m-1308 -6 c3 -9 6 -21 6 -29 0
-12 -98 -45 -134 -45 -16 0 -17 2 -5 17 18 21 99 73 115 73 6 0 15 -7 18 -16z
m-190 -23 c16 -6 14 -11 -24 -44 -41 -35 -42 -36 -19 -41 13 -3 56 -7 94 -8
l70 -3 -46 -32 c-46 -32 -64 -57 -53 -74 3 -5 41 -9 85 -9 43 0 79 -4 79 -8 0
-5 -43 -39 -96 -77 -75 -52 -98 -64 -105 -54 -5 8 -9 18 -9 23 0 6 -11 21 -24
35 -21 22 -26 42 -35 135 -17 170 -18 166 27 165 20 0 45 -4 56 -8z m1336 -45
c0 -14 -21 -26 -46 -26 -8 0 -14 9 -14 20 0 16 7 20 30 20 19 0 30 -5 30 -14z
m180 -40 c0 -13 3 -38 6 -56 7 -31 6 -32 -15 -21 -29 16 -56 81 -39 93 26 16
48 9 48 -16z m-92 -12 c-9 -9 -21 -13 -27 -9 -16 10 -3 25 22 25 20 0 20 -1 5
-16z m-1224 -51 c-10 -7 -29 -13 -43 -13 -26 1 -26 1 9 30 30 25 36 26 44 13
6 -12 3 -20 -10 -30z m1151 -9 c71 -18 68 -13 80 -131 4 -39 3 -63 -3 -63 -5
0 -29 30 -53 66 -23 36 -54 73 -67 82 -24 15 -26 15 -48 -12 -14 -15 -24 -40
-24 -57 0 -40 -14 -36 -35 10 -21 48 -40 45 -66 -13 -11 -25 -20 -35 -22 -26
-18 59 -34 94 -44 97 -21 7 -57 -41 -83 -111 -13 -36 -27 -66 -30 -66 -13 1
-50 40 -50 53 0 8 27 40 60 71 71 65 128 86 232 86 52 0 70 4 74 15 7 18 2 18
79 -1z m49 -243 c38 -83 72 -151 76 -151 22 0 26 30 17 117 -8 72 -8 95 3 107
7 9 16 16 20 16 10 0 41 -134 36 -152 -2 -7 -7 -25 -10 -40 -11 -48 -62 -94
-139 -126 -96 -40 -187 -55 -308 -50 -84 3 -102 7 -120 25 -20 20 -20 22 -4
46 13 21 15 39 10 94 -6 62 -4 76 25 150 30 78 45 102 56 90 3 -3 10 -72 16
-153 12 -172 16 -190 41 -172 14 11 18 32 20 123 2 77 7 119 18 139 l16 28 11
-28 c16 -43 30 -102 37 -166 4 -32 11 -58 16 -58 19 0 31 45 26 93 -7 54 9
190 24 219 19 35 44 1 113 -151z m-1172 84 l3 -45 -69 0 c-43 0 -66 4 -60 9
28 28 101 81 110 81 7 0 14 -20 16 -45z m-448 -47 c-2 -24 -6 -78 -10 -122 -3
-43 -9 -74 -13 -70 -4 5 -13 52 -20 104 -12 93 -12 94 11 112 33 25 36 23 32
-24z m140 26 c13 -5 16 -24 15 -113 0 -58 -4 -115 -9 -126 -15 -37 -48 57 -74
213 -5 30 -4 32 23 32 16 0 36 -3 45 -6z m-224 -191 c0 -160 -10 -177 -34 -57
-27 134 -27 154 -1 180 13 13 27 24 30 24 3 0 5 -66 5 -147z m202 -125 c39
-76 41 -78 56 -57 11 16 14 45 10 135 -2 63 -2 114 2 114 3 0 23 -30 43 -66
66 -114 88 -125 153 -73 21 17 40 26 42 20 10 -29 -63 -113 -128 -146 -38 -20
-202 -55 -255 -55 -77 0 -100 15 -88 59 4 16 9 19 18 11 28 -23 40 19 46 159
4 75 7 138 8 141 1 3 13 -33 27 -79 14 -47 43 -120 66 -163z m302 232 c42 -16
35 -56 -21 -112 -26 -26 -53 -48 -60 -48 -26 0 -88 84 -107 148 -7 22 -6 22
78 22 46 0 96 -4 110 -10z m726 -111 c0 -16 -4 -29 -10 -29 -5 0 -10 16 -10
36 0 21 4 33 10 29 6 -3 10 -19 10 -36z m-1297 -86 c15 -67 7 -82 -18 -33 -16
30 -20 91 -8 104 9 8 8 11 26 -71z"/>
      </g>
    </Icon >
  )
}