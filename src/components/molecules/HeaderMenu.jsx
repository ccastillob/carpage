import React from 'react'
import ShopNavIcon from '../icons/dinamic/ShopNavIcon'
import Logo from '../icons/static/Logo'
import ChangeThemeButton from './ChangeThemeButton'

const HeaderMenu = () => {
	return (
		<div className="main-header s-main-center">
			<div className="ed-grid">
				<div className="s-cross-center">
					<Logo />
					<div className="s-to-right s-cross-center">
						<ChangeThemeButton />
						<ShopNavIcon />
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeaderMenu;
