import React from 'react'
import SecondaryButton from '../atoms/SecondaryButton'
import FooterMenu from '../molecules/FooterMenu'
import HeaderMenu from '../molecules/HeaderMenu'

export const ModelPage = () => {


	return (
		<>
			<HeaderMenu />
			<main className="main-container modelpage">
				<section className="section-card ed-grid s-grid-12 rows-gap">
					<div className="p-relative card-container s-cols-12 m-cols-4 lg-cols-3">
						<div className="container__img s-ratio-16-9 img-container">
							<img className="s-radius-2" src="https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="model" />
							<div className="img-overlay"></div>
						</div>
						<div className="container__text s-pxy-4">
							<h3 className="title-color">Audi A4</h3>
							<h4 className="text__description content-color s-pt-2">Potente, dinámico y más atractivo que nunca. El</h4>
							<h4 className="content-color s-pt-4">$ 20800.00</h4>
							<SecondaryButton title="Conoce más" othersClass="mt-32"/>
						</div>
					</div>

					<div className="p-relative card-container s-cols-12 m-cols-4 lg-cols-3">
						<div className="container__img s-ratio-16-9 img-container">
							<img className="s-radius-2" src="https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="model" />
							<div className="img-overlay"></div>
						</div>
						<div className="container__text s-pxy-4">
							<h3 className="title-color">Audi A4</h3>
							<h4 className="text__description content-color s-pt-2">Potente, dinámico y más atractivo que nunca. El</h4>
							<h4 className="content-color s-pt-4">$ 20800.00</h4>
							<SecondaryButton title="Conoce más" othersClass="mt-32"/>
						</div>
					</div>

					<div className="p-relative card-container s-cols-12 m-cols-4 lg-cols-3">
						<div className="container__img s-ratio-16-9 img-container">
							<img className="s-radius-2" src="https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="model" />
							<div className="img-overlay"></div>
						</div>
						<div className="container__text s-pxy-4">
							<h3 className="title-color">Audi A4</h3>
							<h4 className="text__description content-color s-pt-2">Potente, dinámico y más atractivo que nunca. El</h4>
							<h4 className="content-color s-pt-4">$ 20800.00</h4>
							<SecondaryButton title="Conoce más" othersClass="mt-32"/>
						</div>
					</div>

					<div className="p-relative card-container s-cols-12 m-cols-4 lg-cols-3">
						<div className="container__img s-ratio-16-9 img-container">
							<img className="s-radius-2" src="https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="model" />
							<div className="img-overlay"></div>
						</div>
						<div className="container__text s-pxy-4">
							<h3 className="title-color">Audi A4</h3>
							<h4 className="text__description content-color s-pt-2">Potente, dinámico y más atractivo que nunca. El</h4>
							<h4 className="content-color s-pt-4">$ 20800.00</h4>
							<SecondaryButton title="Conoce más" othersClass="mt-32"/>
						</div>
					</div>

					<div className="p-relative card-container s-cols-12 m-cols-4 lg-cols-3">
						<div className="container__img s-ratio-16-9 img-container">
							<img className="s-radius-2" src="https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="model" />
							<div className="img-overlay"></div>
						</div>
						<div className="container__text s-pxy-4">
							<h3 className="title-color">Audi A4</h3>
							<h4 className="text__description content-color s-pt-2">Potente, dinámico y más atractivo que nunca. El</h4>
							<h4 className="content-color s-pt-4">$ 20800.00</h4>
							<SecondaryButton title="Conoce más" othersClass="mt-32"/>
						</div>
					</div>
				</section>
			</main>
			<FooterMenu status="model" />
		</>
	)
}
