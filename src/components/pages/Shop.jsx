import React from 'react'
import SecondaryButton from '../atoms/SecondaryButton'

import CheckIcon from '../icons/special/CheckIcon'
import DeleteIcon from '../icons/special/DeleteIcon'
import PaymentIcon from '../icons/static/PaymentIcon'
import FooterMenu from '../molecules/FooterMenu'
import HeaderMenu from '../molecules/HeaderMenu'

export const Shop = () => {
	return (
		<>
			<HeaderMenu status="shop" />
			<main className="main-container shoppage">
				<section className="section-shop ed-grid s-grid-12">
					<h2 className="title-color s-cols-12">Añadidos al carrito</h2>

					<div className="shop-container-services s-cols-12 ed-grid s-grid-12 row-gap-12 m-row-gap-8  pt-24">
						<div className="shop-services s-cols-12 ed-grid s-grid-4 s-gap-4">
							<div className="shop-services__list s-cols-2">
								<CheckIcon otherClass="check-content-color" containerClass="check-container" />
								<h3 className="content-color">Mantenimiento básico (personalizado)</h3>
							</div>
							<h3 className="shop-services__price content-color m-cols-1 m-main-end m-x-3">$ 1000000.00</h3>
							<div className="shop-services__delete s-main-end s-x-4 s-cols-1">
								<DeleteIcon />
							</div>
							<div className="p-relative shop-services__section-details s-cols-3 m-cols-2">
								<h4 className="details__description content-color s-pl-2">Neumáticos</h4>
								<h4 className="details__description content-color s-pl-2">Asientos</h4>
								<h4 className="details__description content-color s-pl-2">Volante</h4>
								<h4 className="details__description content-color s-pl-2">Frenos</h4>
							</div>
						</div>

						<div className="shop-services s-cols-12 ed-grid s-grid-4 s-gap-4">
							<div className="shop-services__list s-cols-2">
								<CheckIcon otherClass="check-content-color" containerClass="check-container" />
								<h3 className="content-color">Audi Q7 Sport Fast</h3>
							</div>
							<h3 className="shop-services__price content-color m-cols-1 m-main-end m-x-3">$ 3000000.00</h3>
							<div className="shop-services__delete s-main-end s-x-4 s-cols-1">
								<DeleteIcon />
							</div>
							<div className="p-relative shop-services__section-details s-cols-3 m-cols-2">
								<h4 className="details__description content-color s-pl-2">Color: Magento</h4>
							</div>
						</div>
					</div>

					<div className="shop-container-total ed-grid s-grid-4 s-cols-12 col-gap-16 s-pt-4">
						<h3 className="total__text s-cols-2 content-color s-main-end">TOTAL</h3>
						<h3 className="total__price s-cols-2 content-color m-cols-1 s-main-end m-x-3">$ 4000000.00</h3>
					</div>

					<SecondaryButton icon={ <PaymentIcon /> } title="Añade un método de pago" othersClass="mt-32 inactive-color s-cols-12 s-to-right"/>
					<h6 className="title-color s-cols-12 s-to-right">*Opción aún no habilitada</h6>

				</section>
			</main>
			<FooterMenu />
		</>
	)
}
