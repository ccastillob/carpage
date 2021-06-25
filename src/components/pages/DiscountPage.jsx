
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { resetDiscountData } from '../../actions/discount';
import { useFetchAllDiscounts } from '../../hooks/useFetchAllDiscounts';
import SecondaryButton from '../atoms/SecondaryButton';
import FooterMenu from '../molecules/FooterMenu';
import HeaderMenu from '../molecules/HeaderMenu';
import SkeletonDiscountCard from '../skeletons/SkeletonDiscountCard';

export const DiscountPage = () => {

	const { data } = useFetchAllDiscounts();
	const dispatch = useDispatch();
	const [loadingImages, setLoadingImages] = useState(false);
	let arrayConteo = [];
	let indice = 0;

	useEffect(() => {

		dispatch( resetDiscountData() );

	}, [dispatch])

	const loadContent = e => {

		if( e.type === "load" ) {

			arrayConteo.push(indice);
			indice++;

		}

		if( arrayConteo.length === data.length ) {
			setLoadingImages(true);
		}

	}

	return (
		<>
			<HeaderMenu status="discount"/>
			<main style={{ display: loadingImages ? "block" : "none" }} className="main-container discountpage">
				<section className="section-card ed-grid s-grid-12 rows-gap">
					{
						data.map( cardDiscount =>
							<div key={cardDiscount._id} className="p-relative card-container s-cols-12 m-cols-4 lg-cols-3">
								<div className="ed-grid p-relative s-grid-3 s-gap-4 rows-gap">
									<div className="s-cols-3 s-rows-4">
										<div className="container__img s-ratio-16-9 img-container">
											<img onLoad={loadContent} className="s-radius-2" src={ cardDiscount?.arrayColors[0]?.imageColor } alt="imageCardDiscount" />
											<div className="img-overlay"></div>
										</div>
									</div>
									<h5 className="discount-box__percentage s-x-3 s-y-1 s-main-center s-cross-center">{ cardDiscount?.percentage } %</h5>
								</div>
								<div className="container__text s-pxy-4">
									<h3 className="title-color">{ cardDiscount.nameDiscount }</h3>
									<h4 className="text__description content-color s-pt-2">{ cardDiscount.descriptionDiscount }</h4>
									<h4 className="content-color s-pt-4">$ { ((cardDiscount.priceDiscount*(100 - cardDiscount.percentage))/100).toFixed(2) }</h4>
									<h5 className="text__price-before content-color s-pt-1">$ {cardDiscount.priceDiscount.toFixed(2)}</h5>
									<SecondaryButton urlTo={`/discounts/${cardDiscount.nameDiscount}`} title="Conoce más" othersClass="mt-32"/>
								</div>
							</div>
						)
					}
				</section>
			</main>
			<SkeletonDiscountCard loadingImages={loadingImages} dataArrLength={data.length} />
			<FooterMenu status="discount" />
		</>
	)
}
