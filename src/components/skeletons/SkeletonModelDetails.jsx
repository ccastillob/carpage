
import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import SkeletonHeader from './SkeletonHeader';

const SkeletonModelDetails = () => {

	return (

		<>
		<SkeletonHeader />
		<SkeletonTheme color="#8e8e8f" >
			<main className="main-container modeldetails">
				<section className="section-modeldetails ed-grid s-grid-12">
					<div className="p-relative content-grid-top ed-grid m-grid-12 s-cols-12">
						<div className="top-container__img s-ratio-16-9 img-container m-cols-6">
							<Skeleton style={{ position: "absolute" }} height={`100%`} width={`100%`} />
						</div>

						<div className="top-container__text ed-grid m-grid-6 m-cols-3 s-px-4 s-pt-4 m-pxy-0 m-cols-6">
							<h2 className="title-color m-cols-6 s-center m-left">
								<Skeleton width={`30%`} />
							</h2>
							<h3 className="text__view content-color s-pt-2 m-cols-6">
								<Skeleton width={`100%`} />
								<Skeleton width={`100%`} />
								<Skeleton width={`100%`} />
								<Skeleton width={`100%`} />
								<Skeleton width={`100%`} />
								<Skeleton width={`90%`} />
							</h3>
							<h3 className="content-color s-center m-left s-pt-4 m-cols-6 s-mb-4">
								<Skeleton width={`20%`} />
							</h3>
							<div className="text__list-colors m-cols-4">
								{
									Array(3).fill().map( (mycolor, index) => (
										<div key={index} className="colors__item">
											<Skeleton width={`100%`} height={20} />
										</div>
									))
								}
							</div>
							<h4 className="text__name-colors content-color m-cols-4 s-center s-pt-1">
								<Skeleton width={`15%`} />
							</h4>
							<div className="m-cols-6 mt-32">
								<Skeleton width={`40%`} height={30} />
							</div>

						</div>
					</div>

					<h2 className="title-color s-center m-left s-cols-12 pt-24 s-pb-4">
						<Skeleton width={`35%`} />
					</h2>
					<div className="content-grid-bottom s-cols-12 ed-grid s-grid-12 m-grid-12 s-px-4 m-px-0 rows-gap">
						<div className="bottom-specification ed-grid s-grid-12 s-cols-12 m-grid-4 m-cols-4">
							<div className="specification-item__img s-ratio-4-3 img-container s-cols-6 s-x-4 m-cols-2 m-x-2">
								<Skeleton style={{ position: "absolute" }} height={`100%`} width={`100%`} />
							</div>
							<h4 className="content-color s-center s-cols-12 m-cols-4 s-pt-2">
								<Skeleton width={`12%`} />
							</h4>
							<h4 className="content-color s-center s-cols-12 m-cols-4 s-pt-1">
								<Skeleton width={`8%`} />
							</h4>
						</div>

						<div className="bottom-specification ed-grid s-grid-12 s-cols-12 m-grid-4 m-cols-4">
							<div className="specification-item__img s-ratio-4-3 img-container s-cols-6 s-x-4 m-cols-2 m-x-2">
								<Skeleton style={{ position: "absolute" }} height={`100%`} width={`100%`} />
							</div>
							<h4 className="content-color s-center s-cols-12 m-cols-4 m-cols-4 s-pt-2">
								<Skeleton width={`12%`} />
							</h4>
							<h4 className="content-color s-center s-cols-12 m-cols-4 m-cols-4 s-pt-1">
								<Skeleton width={`8%`} />
							</h4>
						</div>

						<div className="bottom-specification ed-grid s-grid-12 s-cols-12 m-grid-4 m-cols-4">
							<div className="specification-item__img s-ratio-4-3 img-container s-cols-6 s-x-4 m-cols-2 m-x-2">
								<Skeleton style={{ position: "absolute" }} height={`100%`} width={`100%`} />
							</div>
							<h4 className="content-color s-center s-cols-12 m-cols-4 m-cols-4 s-pt-2">
								<Skeleton width={`12%`} />
							</h4>
							<h4 className="content-color s-center s-cols-12 m-cols-4 m-cols-4 s-pt-1">
								<Skeleton width={`8%`} />
							</h4>
						</div>
					</div>
				</section>
			</main>
		</SkeletonTheme>
		</>

	)
}

export default SkeletonModelDetails;

