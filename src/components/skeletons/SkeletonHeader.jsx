
import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const SkeletonHeader = () => {

	return (

		<SkeletonTheme color="#8e8e8f" >
		<header className="main-header s-main-center">
			<div className="ed-grid">
				<div className="s-cross-center">
					<Skeleton className="container-icon s-relative s-cross-center" width={80} height={40} />
					<div className="s-to-right s-cross-center">
					<div className="menu-container m-main-center m-pr-4">
						<div className="m-py-1 m-px-2 m-mr-2 menu-list">
							<Skeleton width={75} height={15} />
						</div>
						<div className="m-py-1 m-px-2 m-mr-2 menu-list">
							<Skeleton width={75} height={15} />
						</div>
						<div className="m-py-1 m-px-2 m-mr-2 menu-list">
							<Skeleton width={75} height={15} />
						</div>
						<div className="m-py-1 m-px-2 m-mr-2 menu-list">
							<Skeleton width={75} height={15} />
						</div>
						<div className="m-py-1 m-px-2 menu-list">
							<Skeleton width={75} height={15} />
						</div>
					</div>

					<div className="container-theme s-cross-center s-main-center s-mr-4">
						<Skeleton width={65} height={25} />
					</div>
						<Skeleton circle={true} height={30} width={30} />
					</div>
				</div>
			</div>
		</header>
		</SkeletonTheme>

	)
}

export default SkeletonHeader;
