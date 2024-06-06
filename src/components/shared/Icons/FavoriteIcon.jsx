export const FavoriteIcon = ({width=32, height=32, isFill=false, fill='#0C0C0C',isStroke=true, stroke='#0C0C0C'}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 32 32" fill={isFill ? fill : 'none'} xmlns="http://www.w3.org/2000/svg">
            <path
                d="M5.93391 18.544L15.315 27.3565C15.6394 27.6613 15.8017 27.8137 15.9997 27.8137C16.1977 27.8137 16.3599 27.6613 16.6843 27.3565L26.0654 18.544C28.6737 16.0938 28.9904 12.0618 26.7968 9.23443L26.3843 8.7028C23.76 5.32045 18.4925 5.88769 16.6486 9.75121C16.3881 10.297 15.6113 10.297 15.3508 9.75121C13.5068 5.88769 8.23931 5.32045 5.61507 8.7028L5.20259 9.23443C3.00894 12.0618 3.32567 16.0938 5.93391 18.544Z"
                stroke={isStroke ? stroke : 'none'}/>
        </svg>
    )
}