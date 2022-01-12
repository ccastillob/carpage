
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { CardDiscount } from '../organisms/CardDiscount';
import FooterMenu from '../molecules/FooterMenu';
import HeaderMenu from '../molecules/HeaderMenu';
import { resetDiscountData } from '../../actions/discount';
import SkeletonDiscountCard from '../skeletons/SkeletonDiscountCard';
import { useFetchAllDiscounts } from '../../hooks/useFetchAllDiscounts';

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