
import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';

export const TechnicalSpecifications = ({ data }) => {

	const [loadingDetails, setLoadingDetails] = useState({
		potency: false,
		acceleration: false,
		velocity: false
	});

	const myLoadingDetails = e => {

		if( e.target.alt === "potency" ) {
			setLoadingDetails( {
				...loadingDetails,
				potency: true
			} );
		}

		if( e.target.alt === "acceleration" ) {
			setLoadingDetails( {
				...loadingDetails,
				acceleration: true
			} );
		}

		if( e.target.alt === "velocity" ) {
			setLoadingDetails( {
				...loadingDetails,
				velocity: true
			} );
		}

	}

	return (
		<>
		<h2 className="title-color s-center m-left s-cols-12 pt-24 s-pb-4">Especificaciones técnicas</h2>
		<div className="content-grid-bottom s-cols-12 ed-grid s-grid-12 m-grid-12 s-px-4 m-px-0 rows-gap">

			<div className="bottom-specification ed-grid s-grid-12 s-cols-12 m-grid-4 m-cols-4">
				<div style={ {display: loadingDetails.potency ? "block" : "none"} } className="specification-item__img s-ratio-4-3 img-container s-cols-6 s-x-4 m-cols-2 m-x-2">
					<img onLoad={myLoadingDetails} className="s-radius-2" src="/assets/imagePotencyDetail.jpg" alt="potency" />
					<div className="img-overlay"></div>
				</div>
				<div style={ {display: loadingDetails.potency ? "none" : "block"} } className="specification-item__img s-ratio-4-3 img-container s-cols-6 s-x-4 m-cols-2 m-x-2">
					<Skeleton style={{ position: "absolute" }} height={`100%`} width={`100%`} />
				</div>

				<h4 className="content-color s-center s-cols-12 m-cols-4 s-pt-2">Potencia máx</h4>
				<h4 className="content-color s-center s-cols-12 m-cols-4 s-pt-1">{ data.potency } HP</h4>
			</div>

			<div className="bottom-specification ed-grid s-grid-12 s-cols-12 m-grid-4 m-cols-4">
				<div style={ {display: loadingDetails.acceleration ? "block" : "none"} } className="specification-item__img s-ratio-4-3 img-container s-cols-6 s-x-4 m-cols-2 m-x-2">
					<img onLoad={myLoadingDetails} className="s-radius-2" src="/assets/imageAccelerationDetail.jpg" alt="acceleration" />
					<div className="img-overlay"></div>
				</div>
				<div style={ {display: loadingDetails.acceleration ? "none" : "block"} } className="specification-item__img s-ratio-4-3 img-container s-cols-6 s-x-4 m-cols-2 m-x-2">
					<Skeleton style={{ position: "absolute" }} height={`100%`} width={`100%`} />
				</div>
				<h4 className="content-color s-center s-cols-12 m-cols-4 m-cols-4 s-pt-2">Aceleración(0 - 100 Km/h)</h4>
				<h4 className="content-color s-center s-cols-12 m-cols-4 m-cols-4 s-pt-1">{ data.acceleration } s</h4>
			</div>

			<div className="bottom-specification ed-grid s-grid-12 s-cols-12 m-grid-4 m-cols-4">
				<div style={ {display: loadingDetails.velocity ? "block" : "none"} } className="specification-item__img s-ratio-4-3 img-container s-cols-6 s-x-4 m-cols-2 m-x-2">
					<img onLoad={myLoadingDetails} className="s-radius-2" src="/assets/imageModelFirstDetailVelocity.jpg" alt="velocity" />
					<div className="img-overlay"></div>
				</div>
				<div style={ {display: loadingDetails.velocity ? "none" : "block"} } className="specification-item__img s-ratio-4-3 img-container s-cols-6 s-x-4 m-cols-2 m-x-2">
					<Skeleton style={{ position: "absolute" }} height={`100%`} width={`100%`} />
				</div>

				<h4 className="content-color s-center s-cols-12 m-cols-4 m-cols-4 s-pt-2">Velocidad máx</h4>
				<h4 className="content-color s-center s-cols-12 m-cols-4 m-cols-4 s-pt-1">{ data.velocity } Km/h</h4>
			</div>

		</div>
	</>
	)
}
