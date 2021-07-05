
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { resetModelData } from '../../actions/model';
import { useFetchAllModels } from '../../hooks/useFetchAllModels';
import FooterMenu from '../molecules/FooterMenu';
import HeaderMenu from '../molecules/HeaderMenu';
import { CardModel } from '../organisms/CardModel';
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

	// Espera la carga de imagenes de todos los modelos, mientras muestra el skeleton
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
							<CardModel key={ card._id } loadContent={ loadContent } model={ card } />
						)
					}
				</section>
			</main>

			<SkeletonModelCard loadingImages={loadingImages} dataArrLength={data.length} />
			<FooterMenu status="model" />
		</>
	)
}
