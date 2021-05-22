import React from 'react'
import PrimaryButton from '../atoms/PrimaryButton'
import FooterMenu from '../molecules/FooterMenu'
import HeaderMenu from '../molecules/HeaderMenu'

export const EventPage = () => {
	return (
		<>
			<HeaderMenu status="event"/>
			<main className="main-container eventpage">
				<section className="section-banner border-section">
					<img className="banner__hero-image" src="https://images.unsplash.com/photo-1564405133580-7446ed4e260d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=734&q=80" alt="cubone" />
					<div className="banner__overlay"></div>
					<article className="ed-grid article__banner m-grid-2">
						<div className="banner__content m-cols-1">
							<h1 className="title-color-dark ">Audi Racing</h1>
							<h2 className="title-color-dark pt-24">Un evento que te dejará <span className="subtitle-font primary-color">sin aliento</span>.</h2>
							<p className="content-color-dark pt-20">Lugar: Venecia - Italia</p>
							<PrimaryButton urlTo="#" othersClass="mt-32 inactive-color" title="Registrate aquí" />
							<h6 className="title-color-dark">*Opción aún no habilitada</h6>
						</div>
					</article>
				</section>

				<section className="section-banner border-section">
					<img className="banner__hero-image" src="https://images.unsplash.com/photo-1600149383449-fe9ea041403f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="cubone" />
					<div className="banner__overlay"></div>
					<article className="ed-grid article__banner m-grid-2">
						<div className="banner__content m-cols-1 m-x-2">
							<h1 className="title-color-dark ">Audi Evolution</h1>
							<h2 className="title-color-dark pt-24">Una nueva <span className="subtitle-font primary-color">generación</span> está por comenzar.</h2>
							<p className="content-color-dark pt-20">Lugar: Edimburgo - Escocia</p>
							<PrimaryButton urlTo="#" othersClass="mt-32 inactive-color" title="Registrate aquí" />
							<h6 className="title-color-dark">*Opción aún no habilitada</h6>
						</div>
					</article>
				</section>

				<section className="section-banner border-section">
					<img className="banner__hero-image" src="https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80" alt="cubone" />
					<div className="banner__overlay"></div>
					<article className="ed-grid article__banner m-grid-2">
						<div className="banner__content m-cols-1">
							<h1 className="title-color-dark ">Audi Advanced</h1>
							<h2 className="title-color-dark pt-24">Más potencia, tecnología y <span className="subtitle-font primary-color">rendimiento</span>.</h2>
							<p className="content-color-dark pt-20">Lugar: Kiev - Ucrania</p>
							<PrimaryButton urlTo="#" othersClass="mt-32 inactive-color" title="Registrate aquí" />
							<h6 className="title-color-dark">*Opción aún no habilitada</h6>
						</div>
					</article>
				</section>

				<section className="section-banner border-section">
					<img className="banner__hero-image" src="https://images.unsplash.com/photo-1574976266711-b402eb01d043?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="cubone" />
					<div className="banner__overlay"></div>
					<article className="ed-grid article__banner m-grid-2">
						<div className="banner__content m-cols-1 m-x-2">
							<h1 className="title-color-dark ">Audi Night</h1>
							<h2 className="title-color-dark pt-24">Atrevete a conocer el <span className="subtitle-font primary-color">sinónimo</span> de elegancia.</h2>
							<p className="content-color-dark pt-20">Lugar: Paris - Francia</p>
							<PrimaryButton urlTo="#" othersClass="mt-32 inactive-color" title="Registrate aquí" />
							<h6 className="title-color-dark">*Opción aún no habilitada</h6>
						</div>
					</article>
				</section>
			</main>
			<FooterMenu status="event" />
		</>
	)
}
