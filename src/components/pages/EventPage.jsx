
import React from 'react';

import PrimaryButton from '../atoms/PrimaryButton';
import FooterMenu from '../molecules/FooterMenu';
import HeaderMenu from '../molecules/HeaderMenu';

export const EventPage = () => {

	return (
		<>
			<HeaderMenu status="event"/>
			<main className="main-container eventpage">
				<section className="section-banner border-section">
					<img className="banner__hero-image" src="/assets/imageAudiRacing.jpg" alt="imageAudiRacing" />
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
					<img className="banner__hero-image" src="/assets/imageAudiEvolution.jpg" alt="imageAudiEvolution" />
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
					<img className="banner__hero-image" src="/assets/imageAudiAdvanced.jpg" alt="imageAudiAdvanced" />
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
					<img className="banner__hero-image" src="/assets/imageAudiNight.jpg" alt="imageAudiNight" />
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
