
import React from 'react';
import SecondaryButton from '../atoms/SecondaryButton';

export const CardModel = ({ model, loadContent }) => {
	return (

		<div className="p-relative card-container s-cols-12 m-cols-4 lg-cols-3">
			<div className="container__img s-ratio-16-9 img-container">
				<img onLoad={loadContent} className="s-radius-2" src={ model?.arrayColors[0]?.imageColor } alt="imageCardModel" />
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
