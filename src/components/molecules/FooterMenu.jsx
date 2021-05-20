import React from 'react'

import ModelIcon from '../icons/dinamic/ModelIcon'
import MaintenanceIcon from '../icons/dinamic/MaintenanceIcon'
import HomeIcon from '../icons/dinamic/HomeIcon'
import DiscountIcon from '../icons/dinamic/DiscountIcon'
import EventIcon from '../icons/dinamic/EventIcon'

const FooterMenu = () => {

	const handleClickIcon = () => {
		console.log("CLICK");
	}

	return (
		<footer className="main-footer s-main-center">
			<div className="ed-grid s-grid-5 s-gap-0">
				<div className="footer-icon s-main-center s-croos-center">
					<ModelIcon />
				</div>
				<div className="footer-icon s-main-center s-croos-center">
					<MaintenanceIcon />
				</div>
				<div onClick={handleClickIcon} className="footer-icon active s-main-center s-croos-center">
					<HomeIcon />
				</div>
				<div className="footer-icon s-main-center s-croos-center">
					<DiscountIcon />
				</div>
				<div className="footer-icon s-main-center s-croos-center">
					<EventIcon />
				</div>
			</div>
		</footer>
	)
}

export default FooterMenu
