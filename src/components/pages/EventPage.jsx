import React from 'react'
import FooterMenu from '../molecules/FooterMenu'
import HeaderMenu from '../molecules/HeaderMenu'

export const EventPage = () => {
	return (
		<>
			<HeaderMenu status="event"/>
			<main className="main-container eventpage">
				<h1>Pagina Eventos</h1>
			</main>
			<FooterMenu status="event" />
		</>
	)
}
