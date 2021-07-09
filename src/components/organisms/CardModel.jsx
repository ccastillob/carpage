
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import SecondaryButton from '../atoms/SecondaryButton';

export const CardModel = ({ model }) => {

	return (

		<div className="p-relative card-container s-cols-12 m-cols-4 lg-cols-3">
			<div className="container__img s-ratio-16-9 img-container">
				<LazyLoadImage
					className="s-radius-2"
					src={ model?.arrayColors[0]?.imageColor }
					alt={ model?.nameModel }
					effect="blur"
				/>
				<div className="img-overlay"></div>
			</div>
			<div className="container__text s-pxy-4">
				<h3 className="title-color">{ model.nameModel }</h3>
				<h4 className="text__description content-color s-pt-2">{ model.descriptionModel }</h4>
				<h4 className="content-color s-pt-4">$ { model.priceModel.toFixed(2) }</h4>
				<SecondaryButton urlTo={`/models/${model.nameModel}`} title="Conoce más" othersClass="mt-32"/>
			</div>
		</div>

	)
}
