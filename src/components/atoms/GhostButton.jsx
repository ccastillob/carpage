import React from 'react'
import { Link } from 'react-router-dom'

const GhostButton = ({ othersClass, icon, title, urlTo }) => {
	return (
		<Link to={urlTo} className={`button button-ghost ${othersClass}`}>
			{icon}
			{title}
		</Link>
	)
}

GhostButton.defaultProps = {
	othersClass: "",
	title: "",
	urlTo: "/"
}

export default GhostButton
