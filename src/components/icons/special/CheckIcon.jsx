import React from 'react'

const CheckIcon = ({ otherClass, containerClass }) => {
	return (
		<div className={`container-icon s-mr-2 ${containerClass}`}>
			<svg className={`icon-special-content ${otherClass}`} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fillRule="evenodd" clipRule="evenodd" d="M25.5731 2.19169C26.613 2.67207 27.0665 3.90446 26.5862 4.94432L15.5679 28.7957C15.2835 29.4112 14.7163 29.8489 14.0488 29.9678C13.3813 30.0867 12.6979 29.8719 12.2185 29.3925L5.60747 22.7815C4.79751 21.9716 4.79751 20.6583 5.60747 19.8484C6.41743 19.0384 7.73064 19.0384 8.5406 19.8484L13.0491 24.3569L22.8205 3.20474C23.3009 2.16488 24.5333 1.71132 25.5731 2.19169Z" fill="currentColor"/>
			</svg>
		</div>
	)
}

CheckIcon.defaultProps = {
	otherClass : "",
	containerClass: ""
}

export default CheckIcon
