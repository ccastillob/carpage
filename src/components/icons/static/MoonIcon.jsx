
import React from 'react';

const MoonIcon = ( {width} ) => {
	return (
		<div className="container-icon">
			<svg width={width} height={width} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M24.7102 23.2881C15.8791 23.2779 8.72213 16.1213 8.71185 7.28978C8.70802 5.48835 9.01182 3.69921 9.60994 1.99999C4.10002 5.11036 1.14125 11.3496 2.21977 17.5843C3.29869 23.8187 8.18126 28.7017 14.4159 29.7802C20.6504 30.8587 26.8896 27.9002 30 22.3901C28.3008 22.9886 26.5121 23.2922 24.7102 23.2881Z" fill="#E8BA19"/>
			</svg>
		</div>
	)
}

MoonIcon.defaultProps = {
	width: '16'
}

export default MoonIcon;
