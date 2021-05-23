import React from 'react'
import { Link } from 'react-router-dom'

const SecondaryButton = ({ othersClass, icon, title, urlTo  }) => {
	return (
		<Link to={urlTo} className={`button button-secondary ${othersClass}`}>
			{icon}
			{title}
		</Link>
	)
}

SecondaryButton.defaultProps = {
	othersClass: "",
	title: "",
	urlTo: "#"
}

export default SecondaryButton
