import React from 'react'

const CustomizeIcon = ( {width} ) => {
	return (
		<div className="container-icon">
			<svg width={width} height={width} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M2 4H5.28125V12.2031H2V4Z" fill="#FBFDFE"/>
				<path d="M26.7188 20.4062H30V28.6094H26.7188V20.4062Z" fill="#FBFDFE"/>
				<path d="M14.3594 12.2031H17.6406V20.4062H14.3594V12.2031Z" fill="#FBFDFE"/>
				<path d="M4.46094 18.7656H12.7188V13.8438H4.46094C3.10392 13.8438 2 14.9477 2 16.3047C2 17.6617 3.10392 18.7656 4.46094 18.7656Z" fill="#FBFDFE"/>
				<path d="M27.5391 13.8438H19.2812V18.7656H27.5391C28.8961 18.7656 30 17.6617 30 16.3047C30 14.9477 28.8961 13.8438 27.5391 13.8438Z" fill="#FBFDFE"/>
				<path d="M27.5391 5.64062H6.92188V10.5625H27.5391C28.8961 10.5625 30 9.45858 30 8.10156C30 6.74455 28.8961 5.64062 27.5391 5.64062Z" fill="#FBFDFE"/>
				<path d="M4.46094 26.9688H25.0781V22.0469H4.46094C3.10392 22.0469 2 23.1508 2 24.5078C2 25.8648 3.10392 26.9688 4.46094 26.9688Z" fill="#FBFDFE"/>
			</svg>
		</div>
	)
}

CustomizeIcon.defaultProps = {
	width: '16'
}

export default CustomizeIcon;
