
import React from 'react';
import { SwapSpinner } from 'react-spinners-kit';

export const LoadingPage = () => {
	return (
		<main className="main-container shoppage">
				<section className="section-shop ed-grid s-grid-12">
					<div className="s-to-center s-cols-12">
						<SwapSpinner color="#0080CA" size={70} />
					</div>
				</section>
		</main>
	)
}
