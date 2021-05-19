import React, { useState } from 'react'
import MoonIcon from '../icons/static/MoonIcon'
import SunIcon from '../icons/static/SunIcon'

const ChangeThemeButton = () => {

	const [show, setshow] = useState(false);

	const handleClickIcon = () => {
		setshow(!show);
		document.body.classList.toggle('dark');
	}

	return (
		<div className="container-theme s-cross-center s-main-center s-mr-4">
			<input className="checkbox" type="checkbox" id="chk" />
			<label onClick={handleClickIcon} className="label-theme" htmlFor="chk">
				<div className="ball">
					{
						show ? <MoonIcon /> : <SunIcon />
					}
				</div>
			</label>
		</div>
	)
}

export default ChangeThemeButton
