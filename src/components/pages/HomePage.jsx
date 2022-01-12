
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import FooterMenu from '../molecules/FooterMenu';
import HeaderMenu from '../molecules/HeaderMenu';
import PrimaryButton from '../atoms/PrimaryButton';

const HomePage = () => {
	return (
		<>
		<HeaderMenu status="home"/>
		<main className="main-container homepage">
			<section className="section-banner border-section">
				<LazyLoadImage
					className="banner__hero-image"
					src="/assets/imageMainCarHome.jpg"
					alt="imageMainCarHome"
					effect="blur"
				/>
				<div className="banner__overlay"></div>
				<article className="ed-grid article__banner">
					<h1 className="title-color-dark">Nuevo Audi Etron GT Quattro</h1>
					<h2 className="content-color-dark pt-24">Una idea que evoluciona tu camino.</h2>
					<PrimaryButton urlTo="/models/audi-e-tron-gt-quattro" othersClass="mt-32" title="Conócelo aquí" />
				</article>
			</section>
			<section className="section-model border-section">
				<article className="ed-grid article-model m-grid-2">
					<h1 className="title-color s-center m-cols-2">Modelos</h1>
					<div className="model__container-img ed-grid s-grid-1 m-grid-7 mt-32 m-order-2 m-px-4 m-py-4">
						<div className="container-img__content-img s-ratio-16-9 img-container m-cols-5 m-x-2">
							<LazyLoadImage
								className="s-radius-2"
								src="/assets/imageModelHome.jpg"
								alt="model"
								effect="blur"
							/>
							<div className="img-overlay"></div>
						</div>
					</div>
					<div className="model__group s-px-4 s-py-4 mt-24 m-order-1">
						<p className="content-color justify">Aquí encontrarás los modelos más destacados con las últimas tecnologías que te proporcionarán una mejor experiencia.</p>
						<div className="group__detail mt-24 ed-grid m-grid-3 rows-gap">
							<div className="ed-grid s-grid-4 m-grid-1 col-gap-32 detail__box">
								<div className="box__img s-ratio-4-3 img-container s-cols-2 s-x-2 m-cols-1 m-x-1">
									<LazyLoadImage
										className="s-radius-2"
										src="/assets/imageModelFirstDetailVelocity.jpg"
										alt="velocidad"
										effect="blur"
									/>
									<div className="img-overlay"></div>
								</div>
								<h4 className="box__text s-pt-1 s-center content-color s-cols-4 m-cols-1">Velocidad</h4>
							</div>
							<div className="ed-grid s-grid-4 m-grid-1 col-gap-32 detail__box">
								<div className="box__img s-ratio-4-3 img-container s-cols-2 s-x-2 m-cols-1 m-x-1">
									<LazyLoadImage
									 className="s-radius-2"
									 src="/assets/imageModelSecondDetailComfort.jpg"
									 alt="comodidad"
									 effect="blur"
									/>
									<div className="img-overlay"></div>
								</div>
								<h4 className="box__text s-pt-1 s-center content-color s-cols-4 m-cols-1">Comodidad</h4>
							</div>
							<div className="ed-grid s-grid-4 m-grid-1 col-gap-32 detail__box ">
								<div className="box__img s-ratio-4-3 img-container s-cols-2 s-x-2 m-cols-1 m-x-1">
									<LazyLoadImage
										className="s-radius-2"
										src="/assets/imageModelThridDetailPotency.jpg"
										alt="potencia"
										effect="blur"
									/>
									<div className="img-overlay"></div>
								</div>
								<h4 className="box__text s-pt-1 s-center content-color s-cols-4 m-cols-1">Potencia</h4>
							</div>
						</div>
						<PrimaryButton urlTo="/models" othersClass="s-to-center m-to-left mt-32" title="Echa un vistazo" />
					</div>
				</article>
			</section>
			<section className="section-maintenance border-section">
				<article className="article-maintenance">
					<h1 className="title-color s-center">Mantenimiento</h1>
					<div className="maintenance__group p-relative mt-32 ed-grid m-grid-2 row-gap s-pt-4 m-pt-0">
						<div className="maintenance__group-left border m-pt-4 m-px-4">
							<div className="group-left__container-img ed-grid s-grid-1 m-grid-7">
								<div className="s-ratio-16-9 img-container m-cols-5 m-x-2">
									<LazyLoadImage
										className="s-radius-2"
										src="/assets/imageMaintenanceBasic.jpg"
										alt="imageMaintenanceBasic"
										effect="blur"
									/>
									<div className="img-overlay"></div>
								</div>
							</div>
							<h2 className="title-color s-center s-pt-1 m-pt-2">Básico</h2>
							<p className="content-color group-left__description m-pt-2">Dedicado a personas que bucan cuidar el estado de su auto día con día.</p>
						</div>
						<div className="maintenance__group-right m-pt-4 m-px-4">
							<div className="group-right__container-img ed-grid s-grid-1 m-grid-7">
								<div className="s-ratio-16-9 img-container m-cols-5 m-x-2">
									<LazyLoadImage
										className="s-radius-2"
										src="/assets/imageMaintenanceAdvanced.jpg"
										alt="imageMaintenanceAdvanced"
										effect="blur"
									/>
									<div className="img-overlay"></div>
								</div>
							</div>
							<h2 className="title-color s-center s-pt-1 m-pt-2">Avanzado</h2>
							<p className="content-color group-right__description m-pt-2">Dedicado a personas que buscan un mantenimiento más exhaustivo para su auto.</p>
						</div>
					</div>
						<PrimaryButton urlTo="/maintenances" othersClass="s-px-2 s-to-center mt-32 s-mb-4 m-mb-0" title="Conoce más" />
				</article>
			</section>
			<section className="section-banner border-section">
				<LazyLoadImage
					className="banner__hero-image"
					src="/assets/imageDiscountHome.jpg"
					alt="imageDiscountHome"
					effect="blur"
				/>
				<div className="banner__overlay"></div>
				<article className="ed-grid article__banner m-grid-2">
					<div className="banner__content m-cols-1 m-x-2">
						<h1 className="title-color-dark ">Descuentos de temporada</h1>
						<h2 className="content-color-dark pt-24">Conoce los mejores descuentos y aprovecha estos precios por tiempo limitado.</h2>
						<PrimaryButton urlTo="/discounts" othersClass="mt-32" title="Mira los descuentos" />
					</div>
				</article>
			</section>
			<section className="section-event">
				<article className="ed-grid article-event m-grid-2">
					<h1 className="title-color s-center m-cols-2">Eventos</h1>
					<div className="event__container-img ed-grid s-grid-1 m-grid-7 mt-32 m-order-2 s-pt-4 m-pxy-4">
						<div className="container-img__content-img s-ratio-16-9 img-container m-cols-5 m-x-2">
							<LazyLoadImage
								className="s-radius-2"
								src="/assets/imageEventHome.jpg"
								alt="imageEventHome"
								effect="blur"
							/>
							<div className="img-overlay"></div>
						</div>
					</div>
					<div className="event__group s-px-4 s-py-4 mt-24 m-order-1">
						<p className="content-color justify">Los mejores eventos de autos en todo el mundo le pertenecen a una sola marca. ¿Te gustaría saber cuáles son?</p>
						<PrimaryButton urlTo="/events/" othersClass="s-to-center m-to-left mt-32" title="Si, vamos !" />
					</div>
				</article>
			</section>
		</main>

		<FooterMenu status="home" />
		</>
  )
}

export default HomePage;