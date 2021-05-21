import React from 'react'
import FooterMenu from '../molecules/FooterMenu'
import HeaderMenu from '../molecules/HeaderMenu'

export const MaintenancePage = () => {
	return (
		<>
			<HeaderMenu />
			<main className="main-container maintenancepage">
				<h1>Pagina Mantenimiento</h1>
			</main>
			<FooterMenu status="maintenance" />
		</>
	)
}
