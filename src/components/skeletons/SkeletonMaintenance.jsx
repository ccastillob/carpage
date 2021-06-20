
import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const SkeletonMaintenance = ({ dataArrBasicLength, dataArrAdvancedLength }) => {

	return(

		<SkeletonTheme color="#8e8e8f" >
			<main className="main-container maintenancepage">
				<section className="section-banner border-section">
					<div className="skeleton_bg_maintenance" height={`100%`} width={`100%`} />
					<article className="ed-grid article__banner m-grid-2">
						<div className="banner__content m-cols-1">
							<h1 className="title-color-dark ">
								<Skeleton width={`70%`} />
							</h1>
							<p className="content-color-dark pt-24">
								<Skeleton width={`100%`} />
								<Skeleton width={`85%`} />
							</p>
							<div className="container-services pt-20 ed-grid col-gap-32 s-grid-6 row-gap-4">
								{
									Array(dataArrBasicLength).fill().map( (basicDetails, index) =>
										<div key={index} className="services__list s-cross-center s-cols-3">
											<Skeleton className="container-icon s-mr-2" width={10} />
											<h4 className="content-color-dark">
												<Skeleton width={80} />
											</h4>
										</div>
									)
								}
							</div>
							<div className="container-buttons mt-32">
								<Skeleton className="button button-ghost mr-32" width={100} height={30} />
								<Skeleton className="button button-secondary" width={100} height={30} />
							</div>
						</div>
					</article>
				</section>

				<section className="section-banner border-section">
					<div className="skeleton_bg_maintenance" height={`100%`} width={`100%`} />
					<article className="ed-grid article__banner m-grid-2">
						<div className="banner__content m-cols-1 m-x-2">
							<h1 className="title-color-dark ">
								<Skeleton width={`85%`} />
							</h1>
							<p className="content-color-dark pt-24">
								<Skeleton width={`100%`} />
								<Skeleton width={`90%`} />
							</p>
							<div className="container-services pt-20 ed-grid col-gap-32 s-grid-6 row-gap-4">
								{
									Array(dataArrAdvancedLength).fill().map( (advancedDetails, index) =>
										<div key={index} className="services__list s-cross-center s-cols-3">
											<Skeleton className="container-icon s-mr-2" width={10} />
											<h4 className="content-color-dark">
												<Skeleton width={80} />
											</h4>
										</div>
									)
								}
							</div>
							<div className="container-buttons mt-32">
								<Skeleton className="button button-ghost mr-32" width={100} height={30} />
								<Skeleton className="button button-secondary" width={100} height={30} />
							</div>
						</div>
					</article>
				</section>
			</main>
		</SkeletonTheme>
	)
}

export default SkeletonMaintenance;