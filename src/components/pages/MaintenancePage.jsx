import React from 'react'

import GhostButton from '../atoms/GhostButton'
import SecondaryButton from '../atoms/SecondaryButton'
import CheckIcon from '../icons/special/CheckIcon'
import CustomizeIcon from '../icons/static/CustomizeIcon'
import ShopIcon from '../icons/static/ShopIcon'
import FooterMenu from '../molecules/FooterMenu'
import HeaderMenu from '../molecules/HeaderMenu'

export const MaintenancePage = () => {
	return (
		<>
			<HeaderMenu status="maintenance"/>
			<main className="main-container maintenancepage">
				<section className="section-banner border-section">
					<img className="banner__hero-image" src="https://images.unsplash.com/photo-1590450175122-945cfdd0b2a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80" alt="cubone" />
					<div className="banner__overlay"></div>
					<article className="ed-grid article__banner m-grid-2">
						<div className="banner__content m-cols-1">
							<h1 className="title-color-dark ">Mantenimiento Básico</h1>
							<p className="content-color-dark pt-24">Enfocado a personas que cuidan su auto día con día. Aquí podemos encontrar los siguientes servicios:</p>
							<div className="container-services pt-20 ed-grid col-gap-32 s-grid-6 row-gap-4">
								<div className="services__list s-cross-center s-cols-3">
									<CheckIcon />
									<h4 className="content-color-dark">Neumáticos</h4>
								</div>
								<div className="services__list s-cross-center s-cols-3">
									<CheckIcon />
									<h4 className="content-color-dark">Asientos</h4>
								</div>
								<div className="services__list s-cross-center s-cols-3">
									<CheckIcon />
									<h4 className="content-color-dark">Volante</h4>
								</div>
								<div className="services__list s-cross-center s-cols-3">
									<CheckIcon />
									<h4 className="content-color-dark">Frenos</h4>
								</div>
							</div>
							<div className="container-buttons mt-32">
								<GhostButton urlTo="/maintenances/hola" icon={<CustomizeIcon />} othersClass="mr-32" title="Personaliza" />
								<SecondaryButton urlTo="/" icon={ <ShopIcon /> } title="Añádelo" />
							</div>
						</div>
					</article>
				</section>

				<section className="section-banner border-section">
					<img className="banner__hero-image" src="https://images.unsplash.com/photo-1518397727759-189caa3b89a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" alt="cubone" />
					<div className="banner__overlay"></div>
					<article className="ed-grid article__banner m-grid-2">
						<div className="banner__content m-cols-1 m-x-2">
							<h1 className="title-color-dark ">Mantenimiento Avanzado</h1>
							<p className="content-color-dark pt-24">Enfocado a personas que buscan un mantenimiento más exhaustivo. Aquí podemos encontrar los siguientes servicios:</p>
							<div className="container-services pt-20 ed-grid col-gap-32 s-grid-6 row-gap-4">
								<div className="services__list s-cross-center s-cols-3">
									<CheckIcon />
									<h4 className="content-color-dark">Neumáticos</h4>
								</div>
								<div className="services__list s-cross-center s-cols-3">
									<CheckIcon />
									<h4 className="content-color-dark">Asientos</h4>
								</div>
								<div className="services__list s-cross-center s-cols-3">
									<CheckIcon />
									<h4 className="content-color-dark">Volante</h4>
								</div>
								<div className="services__list s-cross-center s-cols-3">
									<CheckIcon />
									<h4 className="content-color-dark">Frenos</h4>
								</div>
								<div className="services__list s-cross-center s-cols-3">
									<CheckIcon />
									<h4 className="content-color-dark">Parabrisas</h4>
								</div>
								<div className="services__list s-cross-center s-cols-3">
									<CheckIcon />
									<h4 className="content-color-dark">Motor</h4>
								</div>
							</div>
							<div className="container-buttons mt-32">
								<GhostButton urlTo="/maintenances/hola" icon={<CustomizeIcon />} othersClass="mr-32" title="Personaliza" />
								<SecondaryButton urlTo="/" icon={ <ShopIcon /> } title="Añádelo" />
							</div>
						</div>
					</article>
			</section>

			</main>
			<FooterMenu status="maintenance" />
		</>
	)
}
