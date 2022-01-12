
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import 'react-lazy-load-image-component/src/effects/blur.css';

import CheckIcon from '../icons/special/CheckIcon';
import CustomizeIcon from '../icons/static/CustomizeIcon';
import GhostButton from '../atoms/GhostButton';
import SecondaryButton from '../atoms/SecondaryButton';
import ShopIcon from '../icons/static/ShopIcon';

export const SectionMaintenanceAdvanced = ({ showButtons, setShowButtons, mainMaintenanceCart, setMainMaintenanceCart }) => {

	const { arrayDetails: arrAdvanced, nameMaintenance: nameAdvanced } = useSelector(state => state.dataMaintenanceAdvanced);

	const handleMaintenanceAdvancedShopAdd = e => {

		e.preventDefault();

		setShowButtons({
			...showButtons,
			shopAdvanced: true
		});

		toast.success('Añadiste un producto', {
			position: "bottom-right",
			autoClose: 3000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: false,
			progress: undefined,
		});

		const arrNamesMainAdvancedDetailsTrue = arrAdvanced.map( nd => (
			{
				detail: nd.nameDetail
			}
		));

		const arrPricesMainAdvancedDetailsTrue = arrAdvanced.map( mavp => mavp.priceDetail );
		const priceTotalMainAdvancedDetails = arrPricesMainAdvancedDetailsTrue.reduce( (a,b) => a + b,0 );

		const structAddMainAdvancedShop = [{
			nameItem: "Mantenimiento avanzado",
			tagItem: "Full",
			stateItem: true,
			priceItem: priceTotalMainAdvancedDetails.toFixed(2),
			detailItem: arrNamesMainAdvancedDetailsTrue,
		}];

		if( mainMaintenanceCart === null ) {

			localStorage.setItem("cart", JSON.stringify( structAddMainAdvancedShop ));
			setMainMaintenanceCart( JSON.parse(localStorage.getItem("cart")) );

		}else {

			const myDataMaintenanceMainAdvanced = JSON.parse( localStorage.getItem("cart") );
			myDataMaintenanceMainAdvanced.push(...structAddMainAdvancedShop);
			localStorage.setItem("cart", JSON.stringify(myDataMaintenanceMainAdvanced));
			setMainMaintenanceCart(JSON.parse(localStorage.getItem("cart")));

		}

	}

	const handleMaintenanceAdvancedShopRemove = e => {

		e.preventDefault();

		setShowButtons({
			...showButtons,
			shopAdvanced: false
		});

		toast.error('Quitaste un producto', {
			position: "bottom-right",
			autoClose: 3000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: false,
			progress: undefined,
		});

		const nameMaintenanceMainAdvancedSubs = mainMaintenanceCart.filter( mmavc => mmavc.nameItem !== "Mantenimiento avanzado" );

		localStorage.setItem("cart", JSON.stringify(nameMaintenanceMainAdvancedSubs));

		setMainMaintenanceCart(JSON.parse(localStorage.getItem("cart")));

	}

	const customButtonAdvanced = () => {

		if( showButtons.shopAdvanced === false ) {
			localStorage.setItem("statusDetails", null);
		}

	}

	return (
		<section className="section-banner border-section">
			<LazyLoadImage
				className="banner__hero-image"
				src="/assets/imageMaintenanceAdvanced.jpg"
				alt="imgBgMaintenanceAdvanced"
				effect="blur"
			/>
			<div className="banner__overlay"></div>
			<article className="ed-grid article__banner m-grid-2">
				<div className="banner__content m-cols-1 m-x-2">
					<h1 className="title-color-dark ">Mantenimiento Avanzado</h1>
					<p className="content-color-dark pt-24">Enfocado a personas que buscan un mantenimiento más exhaustivo. Aquí podemos encontrar los siguientes servicios:</p>
					<div className="container-services pt-20 ed-grid col-gap-32 s-grid-6 row-gap-4">
						{
							arrAdvanced?.map( advancedDetails =>
								<div key={advancedDetails._id} className="services__list s-cross-center s-cols-3">
									<CheckIcon />
									<h4 className="content-color-dark">{ advancedDetails?.nameDetail }</h4>
								</div>
							)
						}
					</div>
					<div className="container-buttons mt-32">
						{
							(showButtons?.shopAdvanced === false ) && (
								<GhostButton event={ customButtonAdvanced } urlTo={`/maintenances/${nameAdvanced}`} icon={<CustomizeIcon />} othersClass="mr-32" title="Personaliza" />
							)
						}
						{
							(showButtons?.shopAdvanced === false ) ? (
								<SecondaryButton event={handleMaintenanceAdvancedShopAdd} icon={<ShopIcon />} title="Añádelo" />
							) : (
								<SecondaryButton event={handleMaintenanceAdvancedShopRemove} icon={<ShopIcon />} title="Quítalo del carrito" othersClass="button-secondary-danger"/>
							)
						}
					</div>
				</div>
			</article>
		</section>
	)

}
