
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { CardModel } from '../organisms/CardModel';
import FooterMenu from '../molecules/FooterMenu';
import HeaderMenu from '../molecules/HeaderMenu';
import { resetModelData } from '../../actions/model';
import SkeletonModelCard from '../skeletons/SkeletonModelCard';
import { useFetchAllModels } from '../../hooks/useFetchAllModels';

const ModelPage = () => {

	const { data } = useFetchAllModels();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch( resetModelData() );
	}, [dispatch])

	return (

		data.length ? (

			<>
				<HeaderMenu status="model"/>
				<main className="main-container modelpage">
					<section className="section-card ed-grid s-grid-12 rows-gap">
						{
							data.map( card =>
								<CardModel key={ card._id } model={ card } />
							)
						}
					</section>
				</main>
				<FooterMenu status="model" />
			</>

		) : (
			<SkeletonModelCard dataArrLength={8} />
		)

	)

}

export default ModelPage;