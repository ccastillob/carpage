
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import SecondaryButton from '../atoms/SecondaryButton';

export const CardDiscount = ({ discount }) => {
	return (
		<div className="p-relative card-container s-cols-12 m-cols-4 lg-cols-3">
			<div className="ed-grid p-relative s-grid-3 s-gap-4 rows-gap">
				<div className="s-cols-3 s-rows-4">
					<div className="container__img s-ratio-16-9 img-container">
						<LazyLoadImage
							className="s-radius-2"
							src={ discount?.arrayColors[0]?.imageColor }
							alt="imageCardDiscount"
							effect="blur"
						/>
						<div className="img-overlay"></div>
					</div>
				</div>
				<h5 className="discount-box__percentage s-x-3 s-y-1 s-main-center s-cross-center">{ discount?.percentage } %</h5>
			</div>
			<div className="container__text s-pxy-4">
				<h3 className="title-color">{ discount.nameDiscount }</h3>
				<h4 className="text__description content-color s-pt-2">{ discount.descriptionDiscount }</h4>
				<h4 className="content-color s-pt-4">$ { ((discount.priceDiscount*(100 - discount.percentage))/100).toFixed(2) }</h4>
				<h5 className="text__price-before content-color s-pt-1">$ {discount.priceDiscount.toFixed(2)}</h5>
				<SecondaryButton urlTo={`/discounts/${discount.nameDiscount}`} title="Conoce más" othersClass="mt-32"/>
			</div>
		</div>
	)
}
