import React from 'react'
import FooterMenu from '../molecules/FooterMenu'
import HeaderMenu from '../molecules/HeaderMenu'

export const DiscountPage = () => {
	return (
		<>
			<HeaderMenu />
			<main className="main-container discountpage">
				<h1>Pagina Descuentos</h1>
			</main>
			<FooterMenu status="discount" />
		</>
	)
}
