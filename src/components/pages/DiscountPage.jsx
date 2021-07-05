
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { resetDiscountData } from '../../actions/discount';
import { useFetchAllDiscounts } from '../../hooks/useFetchAllDiscounts';
import FooterMenu from '../molecules/FooterMenu';
import HeaderMenu from '../molecules/HeaderMenu';
import { CardDiscount } from '../organisms/CardDiscount';
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

	// Espera la carga de imagenes de todos los descuentos, mientras muestra el skeleton
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
							<CardDiscount key={ cardDiscount._id } loadContent={ loadContent } discount={ cardDiscount }/>
						)
					}
				</section>
			</main>
			<SkeletonDiscountCard loadingImages={loadingImages} dataArrLength={data.length} />
			<FooterMenu status="discount" />
		</>
	)
}
