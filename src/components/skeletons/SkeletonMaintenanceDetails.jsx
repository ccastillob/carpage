
import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const SkeletonMaintenanceDetails = ({ dataArrBasicLength, dataArrAdvancedLength, matchType }) => {

	return(

		<SkeletonTheme color="#8e8e8f" >
			<main className="main-container maintenancedetails">
				<section className="section-maintenance-details ed-grid s-grid-12">
					<h2 className="title-color s-cols-12">
						<Skeleton width={`40%`} />
					</h2>
					<h3 className="content-color s-cols-12 pt-24">
						<Skeleton width={`100%`} />
						<Skeleton width={`85%`} />
					</h3>

					<div className="maintenance-container-services s-cols-12 ed-grid s-grid-12 row-gap-12 m-row-gap-8 pt-20">
						{
							matchType === "basic" ? (
								Array(dataArrBasicLength).fill().map( (detailsBasic, index) =>
									<div key={index} className="maintenance-services s-cols-12 ed-grid s-grid-4 s-gap-4">
										<div className="maintenance-services__list s-cols-2">
											<Skeleton className="container-icon s-mr-2" width={10} />
											<h3 className="content-color">
												<Skeleton width={90} />
											</h3>
										</div>
										<h3 className="maintenance-services__price content-color m-cols-1 m-main-end m-x-3">
											<Skeleton width={50} />
										</h3>
										<div className="maintenance-services__delete s-main-end s-x-4 s-cols-1">
											<Skeleton circle={true} className="container-icon s-mr-2" width={25} height={25} />
										</div>
										<div className="p-relative maintenance-services__section-details s-cols-3 m-cols-2">
											<h4 className="details__description content-color s-pl-2">
												<Skeleton width={50} />
											</h4>
										</div>
									</div>
									)
							) : (
								Array(dataArrAdvancedLength).fill().map( (detailsAdvanced, index) =>
									<div key={index} className="maintenance-services s-cols-12 ed-grid s-grid-4 s-gap-4">
										<div className="maintenance-services__list s-cols-2">
											<Skeleton className="container-icon s-mr-2" width={10} />
											<h3 className="content-color">
												<Skeleton width={90} />
											</h3>
										</div>
										<h3 className="maintenance-services__price content-color m-cols-1 m-main-end m-x-3">
											<Skeleton width={50} />
										</h3>
										<div className="maintenance-services__delete s-main-end s-x-4 s-cols-1">
											<Skeleton circle={true} className="container-icon s-mr-2" width={25} height={25} />
										</div>
										<div className="p-relative maintenance-services__section-details s-cols-3 m-cols-2">
											<h4 className="details__description content-color s-pl-2">
												<Skeleton width={50} />
											</h4>
										</div>
									</div>
									)
							)
						}
					</div>
					<div className="maintenance-container-total ed-grid s-grid-4 s-cols-12 col-gap-16 s-pt-4">
						<h3 className="total__text s-cols-2 content-color s-main-end">
							<Skeleton width={80} />
						</h3>
						<h3 className="total__price s-cols-2 content-color m-cols-1 s-main-end m-x-3">
							<Skeleton width={80} />
						</h3>
					</div>
					<div className="maintenance-container-button s-cols-12 s-main-end">
						<Skeleton className="mt-32 button button-secondary" width={100} height={30} />
					</div>
				</section>
			</main>
		</SkeletonTheme>
	)
}

export default SkeletonMaintenanceDetails;