
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

export const SectionMaintenanceBasic = ({ arrBasic, showButtons, setShowButtons, mainMaintenanceCart, setMainMaintenanceCart }) => {

	const { nameMaintenance: nameBasic } = useSelector(state => state.dataMaintenanceBasic);

	const customButtonBasic = () => {

		if( showButtons.shopBasic === false ) {
			localStorage.setItem("statusDetails", null);
		}

	}

	const handleMaintenanceBasicShopAdd = e => {

		e.preventDefault();

		setShowButtons({
			...showButtons,
			shopBasic: true
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

		const arrNamesMainBasicDetailsTrue = arrBasic.map( nd => (
			{
				detail: nd.nameDetail
			}
		));

		const arrPricesMainBasicDetailsTrue = arrBasic.map( mbp => mbp.priceDetail );
		const priceTotalMainBasicDetails = arrPricesMainBasicDetailsTrue.reduce( (a,b) => a + b,0 );
		const structAddMainBasicShop = [{
			nameItem: "Mantenimiento básico",
			tagItem: "Full",
			stateItem: true,
			priceItem: priceTotalMainBasicDetails.toFixed(2),
			detailItem: arrNamesMainBasicDetailsTrue,
		}];

		if( mainMaintenanceCart === null ) {

			localStorage.setItem("cart", JSON.stringify( structAddMainBasicShop ));
			setMainMaintenanceCart( JSON.parse(localStorage.getItem("cart")) );

		}else {

			const myDataMaintenanceMainBasic = JSON.parse( localStorage.getItem("cart") );
			myDataMaintenanceMainBasic.push(...structAddMainBasicShop);
			localStorage.setItem("cart", JSON.stringify(myDataMaintenanceMainBasic));
			setMainMaintenanceCart(JSON.parse(localStorage.getItem("cart")));

		}

	}

	const handleMaintenanceBasicShopRemove = e => {

		e.preventDefault();

		setShowButtons({
			...showButtons,
			shopBasic: false
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

		const nameMaintenanceMainBasicSubs = mainMaintenanceCart.filter( mc => mc.nameItem !== "Mantenimiento básico" );

		localStorage.setItem("cart", JSON.stringify(nameMaintenanceMainBasicSubs));

		setMainMaintenanceCart(JSON.parse(localStorage.getItem("cart")));

	}

	return (
		<section className="section-banner border-section">
			<LazyLoadImage
				className="banner__hero-image"
				src="/assets/imageMaintenanceBasic.jpg"
				alt="imgBgMaintenanceBasic"
				effect="blur"
			/>
			<div className="banner__overlay"></div>
			<article className="ed-grid article__banner m-grid-2">
				<div className="banner__content m-cols-1">
					<h1 className="title-color-dark ">Mantenimiento Básico</h1>
					<p className="content-color-dark pt-24">Enfocado a personas que cuidan su auto día con día. Aquí podemos encontrar los siguientes servicios:</p>
					<div className="container-services pt-20 ed-grid col-gap-32 s-grid-6 row-gap-4">
						{
							arrBasic?.map( basicDetails =>
								<div key={basicDetails._id} className="services__list s-cross-center s-cols-3">
									<CheckIcon />
									<h4 className="content-color-dark">{ basicDetails?.nameDetail }</h4>
								</div>
							)
						}
					</div>
					<div className="container-buttons mt-32">
						{
							(showButtons?.shopBasic === false ) && (
								<GhostButton event={ customButtonBasic } urlTo={`/maintenances/${nameBasic}`} icon={<CustomizeIcon />} othersClass="mr-32" title="Personaliza" />
							)
						}
						{
							(showButtons?.shopBasic === false ) ? (
								<SecondaryButton event={handleMaintenanceBasicShopAdd} icon={<ShopIcon />} title="Añádelo" />
							) : (
								<SecondaryButton event={handleMaintenanceBasicShopRemove} icon={<ShopIcon />} title="Quítalo del carrito" othersClass="button-secondary-danger"/>
							)
						}
					</div>
				</div>
			</article>
		</section>
	)

}
