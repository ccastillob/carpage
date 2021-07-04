
import React from 'react';

const CancelIcon = ( {width, otherClass, event, myid} ) => {
	return (
		<div className="container-icon icon-change">
			<svg className={otherClass} width={width} height={width} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path onClick={event} id={myid} d="M30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16C2 8.26801 8.26801 2 16 2C23.732 2 30 8.26801 30 16Z" fill="#97350F"/>
				<path d="M10 9L22 23M10 23L22 9" stroke="#FBFBFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			</svg>
		</div>
	)
}

CancelIcon.defaultProps = {
	width: '32',
	otherClass: "",
	event: null,
	myid: ""
}

export default CancelIcon;
