import React from 'react'

const SuccessIcon = ( {width} ) => {
	return (
		<div className="container-icon">
			<svg width={width} height={width} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16C2 8.26801 8.26801 2 16 2C23.732 2 30 8.26801 30 16Z" fill="#08977F"/>
				<path fillRule="evenodd" clipRule="evenodd" d="M23.3991 6.1033C23.929 6.35078 24.1499 6.96445 23.8926 7.47396L14.826 25.4225C14.6753 25.7209 14.3837 25.9308 14.0435 25.9858C13.7032 26.0408 13.3563 25.9342 13.1123 25.6996L8.31241 21.0843C7.89586 20.6837 7.89586 20.0343 8.31241 19.6338C8.72897 19.2333 9.40433 19.2333 9.82089 19.6338L13.5616 23.2306L21.9736 6.57776C22.231 6.06824 22.8692 5.85582 23.3991 6.1033Z" fill="#FBFBFE"/>
			</svg>
		</div>
	)
}

SuccessIcon.defaultProps = {
	width: '32'
}

export default SuccessIcon;
