import React from 'react'
import SecondaryButton from '../atoms/SecondaryButton'
import FooterMenu from '../molecules/FooterMenu'
import HeaderMenu from '../molecules/HeaderMenu'

export const DiscountPage = () => {
	return (
		<>
			<HeaderMenu status="discount"/>
			<main className="main-container discountpage">
				<section className="section-card ed-grid s-grid-12 rows-gap">
					<div className="p-relative card-container s-cols-12 m-cols-4 lg-cols-3">
						<div className="ed-grid p-relative s-grid-3 s-gap-4 rows-gap">
							<div className="s-cols-3 s-rows-4">
								<div className="container__img s-ratio-16-9 img-container">
									<img className="s-radius-2" src="https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="model" />
									<div className="img-overlay"></div>
								</div>
							</div>
							<h5 className="discount-box__percentage s-x-3 s-y-1 s-main-center s-cross-center">50 %</h5>
						</div>
						<div className="container__text s-pxy-4">
							<h3 className="title-color">Audi A4</h3>
							<h4 className="text__description content-color s-pt-2">Potente, dinámico y más atractivo que nunca. El nuevo Audi A4 sorprende por su nuevo lenguaje de diseño, ampliamente renovado por dentro y por fuera.</h4>
							<h4 className="content-color s-pt-4">$ 10400.00</h4>
							<h5 className="text__price-before content-color s-pt-1">$ 20800.00</h5>
							<SecondaryButton urlTo="/discounts/hola" title="Conoce más" othersClass="mt-32"/>
						</div>
					</div>

					<div className="p-relative card-container s-cols-12 m-cols-4 lg-cols-3">
						<div className="ed-grid p-relative s-grid-3 s-gap-4 rows-gap">
							<div className="s-cols-3 s-rows-4">
								<div className="container__img s-ratio-16-9 img-container">
									<img className="s-radius-2" src="https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="model" />
									<div className="img-overlay"></div>
								</div>
							</div>
							<h5 className="discount-box__percentage s-x-3 s-y-1 s-main-center s-cross-center">50 %</h5>
						</div>
						<div className="container__text s-pxy-4">
							<h3 className="title-color">Audi A4</h3>
							<h4 className="text__description content-color s-pt-2">Potente, dinámico y más atractivo que nunca. El nuevo Audi A4 sorprende por su nuevo lenguaje de diseño, ampliamente renovado por dentro y por fuera.</h4>
							<h4 className="content-color s-pt-4">$ 10400.00</h4>
							<h5 className="text__price-before content-color s-pt-1">$ 20800.00</h5>
							<SecondaryButton urlTo="/discounts/hola" title="Conoce más" othersClass="mt-32"/>
						</div>
					</div>

					<div className="p-relative card-container s-cols-12 m-cols-4 lg-cols-3">
						<div className="ed-grid p-relative s-grid-3 s-gap-4 rows-gap">
							<div className="s-cols-3 s-rows-4">
								<div className="container__img s-ratio-16-9 img-container">
									<img className="s-radius-2" src="https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="model" />
									<div className="img-overlay"></div>
								</div>
							</div>
							<h5 className="discount-box__percentage s-x-3 s-y-1 s-main-center s-cross-center">50 %</h5>
						</div>
						<div className="container__text s-pxy-4">
							<h3 className="title-color">Audi A4</h3>
							<h4 className="text__description content-color s-pt-2">Potente, dinámico y más atractivo que nunca. El nuevo Audi A4 sorprende por su nuevo lenguaje de diseño, ampliamente renovado por dentro y por fuera.</h4>
							<h4 className="content-color s-pt-4">$ 10400.00</h4>
							<h5 className="text__price-before content-color s-pt-1">$ 20800.00</h5>
							<SecondaryButton urlTo="/discounts/hola" title="Conoce más" othersClass="mt-32"/>
						</div>
					</div>

					<div className="p-relative card-container s-cols-12 m-cols-4 lg-cols-3">
						<div className="ed-grid p-relative s-grid-3 s-gap-4 rows-gap">
							<div className="s-cols-3 s-rows-4">
								<div className="container__img s-ratio-16-9 img-container">
									<img className="s-radius-2" src="https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="model" />
									<div className="img-overlay"></div>
								</div>
							</div>
							<h5 className="discount-box__percentage s-x-3 s-y-1 s-main-center s-cross-center">50 %</h5>
						</div>
						<div className="container__text s-pxy-4">
							<h3 className="title-color">Audi A4</h3>
							<h4 className="text__description content-color s-pt-2">Potente, dinámico y más atractivo que nunca. El nuevo Audi A4 sorprende por su nuevo lenguaje de diseño, ampliamente renovado por dentro y por fuera.</h4>
							<h4 className="content-color s-pt-4">$ 10400.00</h4>
							<h5 className="text__price-before content-color s-pt-1">$ 20800.00</h5>
							<SecondaryButton urlTo="/discounts/hola" title="Conoce más" othersClass="mt-32"/>
						</div>
					</div>

					<div className="p-relative card-container s-cols-12 m-cols-4 lg-cols-3">
						<div className="ed-grid p-relative s-grid-3 s-gap-4 rows-gap">
							<div className="s-cols-3 s-rows-4">
								<div className="container__img s-ratio-16-9 img-container">
									<img className="s-radius-2" src="https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="model" />
									<div className="img-overlay"></div>
								</div>
							</div>
							<h5 className="discount-box__percentage s-x-3 s-y-1 s-main-center s-cross-center">50 %</h5>
						</div>
						<div className="container__text s-pxy-4">
							<h3 className="title-color">Audi A4</h3>
							<h4 className="text__description content-color s-pt-2">Potente, dinámico y más atractivo que nunca. El nuevo Audi A4 sorprende por su nuevo lenguaje de diseño, ampliamente renovado por dentro y por fuera.</h4>
							<h4 className="content-color s-pt-4">$ 10400.00</h4>
							<h5 className="text__price-before content-color s-pt-1">$ 20800.00</h5>
							<SecondaryButton urlTo="/discounts/hola" title="Conoce más" othersClass="mt-32"/>
						</div>
					</div>
				</section>
			</main>
			<FooterMenu status="discount" />
		</>
	)
}
