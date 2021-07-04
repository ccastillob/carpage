
import React, { useEffect, useState } from 'react';

import MoonIcon from '../icons/static/MoonIcon';
import SunIcon from '../icons/static/SunIcon';

const ChangeThemeButton = () => {

	const [mode, setMode] = useState(() => localStorage.getItem("mode"));

	// useEffect(() => {
	// 	window.addEventListener("storage", setPreferedTheme);
	// 	return () => {
	// 		window.removeEventListener("storage", setPreferedTheme);
	// 	}
	// }, [])

	// const setPreferedTheme = () => {
	// 	const _mode = localStorage.getItem("mode");
	// 	if( _mode ) {
	// 		setMode(_mode);
	// 	}else{
	// 		setMode("light");
	// 	}
	// }

	useEffect(() => {

		if( mode === "dark" ) {
			document.body.classList.add("dark");
			localStorage.setItem("mode", "dark");
		}else {
			document.body.classList.remove("dark");
			localStorage.setItem("mode", "light");
		}

	}, [mode])

	return (
		<>
			{mode === "dark" ?
			<div className="container-theme s-cross-center s-main-center s-mr-4">
				<label onClick={ () => setMode(mode => mode === "dark" ? "light" : "dark") } className="label-theme dark" htmlFor="chk">
					<div className="ball dark"> <MoonIcon /> </div>
				</label>
			</div>
			:
			<div className="container-theme s-cross-center s-main-center s-mr-4">
				<label onClick={ () => setMode(mode => mode === "dark" ? "light" : "dark") } className="label-theme" htmlFor="chk">
					<div className="ball"> <SunIcon /> </div>
				</label>
			</div>
			}
		</>
	)
}

export default ChangeThemeButton;

