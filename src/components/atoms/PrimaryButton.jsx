
import React from 'react';
import { Link } from 'react-router-dom';

const PrimaryButton = ({ othersClass, title, urlTo }) => {
	return (
		<Link to={urlTo} className={`button button-primary ${othersClass}`}>{title}</Link>
	)
}

PrimaryButton.defaultProps = {
	othersClass: "",
	title: "",
	urlTo: "/",
}

export default PrimaryButton;
