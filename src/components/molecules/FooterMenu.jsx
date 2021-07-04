
import React from 'react';
import { Link } from 'react-router-dom';

import ModelIcon from '../icons/dinamic/ModelIcon';
import MaintenanceIcon from '../icons/dinamic/MaintenanceIcon';
import HomeIcon from '../icons/dinamic/HomeIcon';
import DiscountIcon from '../icons/dinamic/DiscountIcon';
import EventIcon from '../icons/dinamic/EventIcon';

const FooterMenu = ({ status }) => {

	return (
		<footer className="main-footer s-main-center">
			<div className="ed-grid s-grid-5 s-gap-0">
				<Link to="/models" className={`footer-icon s-main-center s-croos-center ${status === "model" && "active"}`}>
					<ModelIcon />
				</Link>
				<Link to="/maintenances" className={`footer-icon s-main-center s-croos-center ${status === "maintenance" && "active"}`}>
					<MaintenanceIcon />
				</Link>
				<Link to="/" className={`footer-icon s-main-center s-croos-center ${status === "home" && "active"}`}>
					<HomeIcon />
				</Link>
				<Link to="/discounts" className={`footer-icon s-main-center s-croos-center ${status === "discount" && "active"}`}>
					<DiscountIcon />
				</Link>
				<Link to="/events" className={`footer-icon s-main-center s-croos-center ${status === "event" && "active"}`}>
					<EventIcon />
				</Link>
			</div>
		</footer>
	)
}

export default FooterMenu;
