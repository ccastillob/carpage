
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { resetDiscountData } from '../../actions/discount';
import { useFetchAllDiscounts } from '../../hooks/useFetchAllDiscounts';
import FooterMenu from '../molecules/FooterMenu';
import HeaderMenu from '../molecules/HeaderMenu';
import { CardDiscount } from '../organisms/CardDiscount';
import SkeletonDiscountCard from '../skeletons/SkeletonDiscountCard';

const DiscountPage = () => {

	const { data } = useFetchAllDiscounts();
	const dispatch = useDispatch();

	useEffect(() => {

		dispatch( resetDiscountData() );

	}, [dispatch])

	return (

		data.length ? (

			<>
				<HeaderMenu status="discount"/>
				<main className="main-container discountpage">
					<section className="section-card ed-grid s-grid-12 rows-gap">
						{
							data.map( cardDiscount =>
								<CardDiscount key={ cardDiscount._id } discount={ cardDiscount }/>
							)
						}
					</section>
				</main>
				<FooterMenu status="discount" />
			</>

		) : (
			<SkeletonDiscountCard dataArrLength={8} />
		)

	)
}

export default DiscountPage;