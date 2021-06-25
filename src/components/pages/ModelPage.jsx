
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { resetModelData } from '../../actions/model';
import { useFetchAllModels } from '../../hooks/useFetchAllModels';
import SecondaryButton from '../atoms/SecondaryButton';
import FooterMenu from '../molecules/FooterMenu';
import HeaderMenu from '../molecules/HeaderMenu';
import SkeletonModelCard from '../skeletons/SkeletonModelCard';

export const ModelPage = () => {

	const { data } = useFetchAllModels();
	const dispatch = useDispatch();
	const [loadingImages, setLoadingImages] = useState(false);
	let arrayConteo = [];
	let indice = 0;

	useEffect(() => {

		dispatch( resetModelData() );

	}, [dispatch])

	const loadContent = (e) => {

		if( e.type === "load" ){

			arrayConteo.push(indice);
			indice++;

		}

		if( arrayConteo.length === data.length ) {
			setLoadingImages(true);
		}

	}

	return (
		<>
			<HeaderMenu status="model"/>
			<main style={{ display: loadingImages ? "block" : "none" }} className="main-container modelpage">
				<section className="section-card ed-grid s-grid-12 rows-gap">
					{
						data.map( card =>
							<div key={card._id} className="p-relative card-container s-cols-12 m-cols-4 lg-cols-3">
								<div className="container__img s-ratio-16-9 img-container">
									<img onLoad={loadContent} className="s-radius-2" src={ card?.arrayColors[0]?.imageColor } alt="imageCardModel" />
									<div className="img-overlay"></div>
								</div>
								<div className="container__text s-pxy-4">
									<h3 className="title-color">{ card.nameModel }</h3>
									<h4 className="text__description content-color s-pt-2">{ card.descriptionModel }</h4>
									<h4 className="content-color s-pt-4">$ { card.priceModel.toFixed(2) }</h4>
									<SecondaryButton urlTo={`/models/${card.nameModel}`} title="Conoce más" othersClass="mt-32"/>
								</div>
							</div>
						)
					}
				</section>
			</main>

			<SkeletonModelCard loadingImages={loadingImages} dataArrLength={data.length} />
			<FooterMenu status="model" />
		</>
	)
}
