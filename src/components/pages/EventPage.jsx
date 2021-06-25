
import React from 'react';

import PrimaryButton from '../atoms/PrimaryButton';
import FooterMenu from '../molecules/FooterMenu';
import HeaderMenu from '../molecules/HeaderMenu';

export const EventPage = () => {

	// Imagenes
	const imageAudiRacing = "https://firebasestorage.googleapis.com/v0/b/appcarpage.appspot.com/o/banner%2FimageAudiRacing.jpg?alt=media&token=27822745-0c4d-436d-99db-e78a6db4a5ee";
	const imageAudiEvolution = "https://firebasestorage.googleapis.com/v0/b/appcarpage.appspot.com/o/banner%2FimageAudiEvolution.jpg?alt=media&token=7056e76b-2ed7-485a-a6a2-a0feb58d9718";
	const imageAudiAdvanced = "https://firebasestorage.googleapis.com/v0/b/appcarpage.appspot.com/o/banner%2FimageAudiAdvanced.jpg?alt=media&token=8c54c73b-615a-4b44-9c63-8da4f15cd17b";
	const imageAudiNight = "https://firebasestorage.googleapis.com/v0/b/appcarpage.appspot.com/o/banner%2FimageAudiNight.jpg?alt=media&token=b51f40e2-73de-445b-a8be-70c3b6751fde";

	return (
		<>
			<HeaderMenu status="event"/>
			<main className="main-container eventpage">
				<section className="section-banner border-section">
					<img className="banner__hero-image" src={ imageAudiRacing } alt="imageAudiRacing" />
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
					<img className="banner__hero-image" src={ imageAudiEvolution } alt="imageAudiEvolution" />
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
					<img className="banner__hero-image" src={ imageAudiAdvanced } alt="imageAudiAdvanced" />
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
					<img className="banner__hero-image" src={ imageAudiNight } alt="imageAudiNight" />
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
