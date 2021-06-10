import React from 'react'
import { NavLink } from 'react-router-dom'

import ShopNavIcon from '../icons/dinamic/ShopNavIcon'
import Logo from '../icons/static/Logo'
import ChangeThemeButton from './ChangeThemeButton'

const HeaderMenu = ({ status }) => {

	return (
		<header className="main-header s-main-center">
			<div className="ed-grid">
				<div className="s-cross-center">
					<Logo />
					<div className="s-to-right s-cross-center">
					<div className="menu-container m-main-center m-pr-4">
						<NavLink to="/" className="m-py-1 m-px-2 m-mr-2 menu-list">
							<h4 className={`${status === "home" && "active"} content-color`}>Bienvenido</h4>
						</NavLink>
						<NavLink to="/models" className="m-py-1 m-px-2 m-mr-2 menu-list">
							<h4 className={`${status === "model" && "active"} content-color`}>Modelos</h4>
						</NavLink>
						<NavLink to="/maintenances" className="m-py-1 m-px-2 m-mr-2 menu-list">
							<h4 className={`${status === "maintenance" && "active"} content-color`}>Mantenimiento</h4>
						</NavLink>
						<NavLink to="/discounts" className="m-py-1 m-px-2 m-mr-2 menu-list">
							<h4 className={`${status === "discount" && "active"} content-color`}>Descuentos</h4>
						</NavLink>
						<NavLink to="/events" className="m-py-1 m-px-2 menu-list">
							<h4 className={`${status === "event" && "active"} content-color`}>Eventos</h4>
						</NavLink>
					</div>
						<ChangeThemeButton />
						<ShopNavIcon status={status === "shop" && "active"} />
					</div>
				</div>
			</div>
		</header>
	)
}

export default HeaderMenu;
