import React from 'react'
import { Link } from 'react-router-dom'

const SecondaryButton = ({ othersClass, icon, title, urlTo, event }) => {

	const replaceStr = urlTo.replace(/ /g,"-");
	const convertToLowerCase = replaceStr.toLowerCase();

	return (
		<Link onClick={event} to={convertToLowerCase} className={`button button-secondary ${othersClass}`}>
			{icon}
			{title}
		</Link>
	)
}

SecondaryButton.defaultProps = {
	othersClass: "",
	title: "",
	urlTo: "/"
}

export default SecondaryButton
