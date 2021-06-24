import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { startMaintenanceAdvancedData } from '../../actions/maintenanceAdvanced'
import { startMaintenanceBasicData } from '../../actions/maintenanceBasic'
import { useFetchAllMaintenances } from '../../hooks/useFetchAllMaintenances'
import GhostButton from '../atoms/GhostButton'
import SecondaryButton from '../atoms/SecondaryButton'
import CheckIcon from '../icons/special/CheckIcon'
import CustomizeIcon from '../icons/static/CustomizeIcon'
import ShopIcon from '../icons/static/ShopIcon'
import FooterMenu from '../molecules/FooterMenu'
import HeaderMenu from '../molecules/HeaderMenu'
import SkeletonMaintenance from '../skeletons/SkeletonMaintenance'

export const MaintenancePage = () => {

	const imageMaintenanceBasicHome = "https://images.unsplash.com/photo-1590450175122-945cfdd0b2a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80";
	const imageMaintenanceAdvancedHome = "https://images.unsplash.com/photo-1518397727759-189caa3b89a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80";

	const dispatch = useDispatch();
	const { data, loading } = useFetchAllMaintenances();
	const [arrSkeleton, setArrSkeleton] = useState({
		arrBasicSheleton: 4,
		arrAdvancedSkeleton: 6
	})
	const [mainMaintenanceCart, setMainMaintenanceCart] = useState(() => JSON.parse(localStorage.getItem("cart")))
	const [showButtons, setShowButtons] = useState(() => JSON.parse(localStorage.getItem("addCart")))
	const { arrayDetails: arrBasic, nameMaintenance: nameBasic } = useSelector(state => state.dataMaintenanceBasic);
	const { arrayDetails: arrAdvanced, nameMaintenance: nameAdvanced } = useSelector(state => state.dataMaintenanceAdvanced);

	useEffect(() => {

		// Almacenar en cada reducer un mantenimiento
		if( data.length > 0 ){
			dispatch(startMaintenanceBasicData(data[0]?.nameMaintenance));
			dispatch( startMaintenanceAdvancedData(data[1]?.nameMaintenance) )
			setArrSkeleton({
				arrBasicSheleton: data[0].arrayDetails.length,
				arrAdvancedSkeleton: data[1].arrayDetails.length
			})
		}

	}, [data, dispatch])

	useEffect(() => {

		if( showButtons === null ) {

			localStorage.setItem("addCart", JSON.stringify({
				shopBasic: false,
				shopAdvanced: false
			}))

			setShowButtons({
				shopBasic: false,
				shopAdvanced: false
			})

		}else {
			localStorage.setItem("addCart", JSON.stringify(showButtons))
		}

	}, [showButtons])

	// PARA CADA UNO DE LOS MANTENIMIENTOS
	const customButtonBasic = () => {

		if( showButtons.shopBasic === false ) {
			localStorage.setItem("maintenance", null)
		}

	}

	const customButtonAdvanced = () => {

		if( showButtons.shopAdvanced === false ) {
			localStorage.setItem("maintenance", null)
		}

	}

	const handleMaintenanceBasicShopAdd = e => {

		e.preventDefault();
		setShowButtons({
			...showButtons,
			shopBasic: true
		})

		const arrNamesMainBasicDetailsTrue = arrBasic.map( nd => (
			{
				detail: nd.nameDetail
			}
		))

		const arrPricesMainBasicDetailsTrue = arrBasic.map( mbp => mbp.priceDetail )
		const priceTotalMainBasicDetails = arrPricesMainBasicDetailsTrue.reduce( (a,b) => a + b,0 )

		const structAddMainBasicShop = [{
			nameItem: "Mantenimiento básico",
			tagItem: "Full",
			stateItem: true,
			priceItem: priceTotalMainBasicDetails,
			detailItem: arrNamesMainBasicDetailsTrue
		}]

		if( mainMaintenanceCart === null ) {

			localStorage.setItem("cart", JSON.stringify( structAddMainBasicShop ))
			setMainMaintenanceCart( JSON.parse(localStorage.getItem("cart")) );

		}else {

			const myDataMaintenanceMainBasic = JSON.parse( localStorage.getItem("cart") )
			myDataMaintenanceMainBasic.push(...structAddMainBasicShop);
			localStorage.setItem("cart", JSON.stringify(myDataMaintenanceMainBasic));
			setMainMaintenanceCart(JSON.parse(localStorage.getItem("cart")))

		}

	}

	const handleMaintenanceBasicShopRemove = e => {

		e.preventDefault();
		setShowButtons({
			...showButtons,
			shopBasic: false
		})

		const nameMaintenanceMainBasicSubs = mainMaintenanceCart.filter( mc => mc.nameItem !== "Mantenimiento básico" );
		localStorage.setItem("cart", JSON.stringify(nameMaintenanceMainBasicSubs));
		setMainMaintenanceCart(JSON.parse(localStorage.getItem("cart")))

	}

	const handleMaintenanceAdvancedShopAdd = e => {

		e.preventDefault();
		setShowButtons({
			...showButtons,
			shopAdvanced: true
		})

		const arrNamesMainAdvancedDetailsTrue = arrAdvanced.map( nd => (
			{
				detail: nd.nameDetail
			}
		))

		const arrPricesMainAdvancedDetailsTrue = arrAdvanced.map( mavp => mavp.priceDetail )
		const priceTotalMainAdvancedDetails = arrPricesMainAdvancedDetailsTrue.reduce( (a,b) => a + b,0 )

		const structAddMainAdvancedShop = [{
			nameItem: "Mantenimiento avanzado",
			tagItem: "Full",
			stateItem: true,
			priceItem: priceTotalMainAdvancedDetails,
			detailItem: arrNamesMainAdvancedDetailsTrue
		}]

		if( mainMaintenanceCart === null ) {

			localStorage.setItem("cart", JSON.stringify( structAddMainAdvancedShop ))
			setMainMaintenanceCart( JSON.parse(localStorage.getItem("cart")) );

		}else {

			const myDataMaintenanceMainAdvanced = JSON.parse( localStorage.getItem("cart") )
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
		})

		const nameMaintenanceMainAdvancedSubs = mainMaintenanceCart.filter( mmavc => mmavc.nameItem !== "Mantenimiento avanzado" );
		localStorage.setItem("cart", JSON.stringify(nameMaintenanceMainAdvancedSubs));
		setMainMaintenanceCart(JSON.parse(localStorage.getItem("cart")))

	}

	return (
		<>
			<HeaderMenu status="maintenance"/>
			{
				( loading === true || arrBasic === undefined ) ? (
					<SkeletonMaintenance dataArrBasicLength={arrSkeleton.arrBasicSheleton} dataArrAdvancedLength={arrSkeleton.arrAdvancedSkeleton}/>
				) : (
					<main className="main-container maintenancepage">
						<section className="section-banner border-section">
							<img className="banner__hero-image" src={ imageMaintenanceBasicHome } alt="imgBgMaintenanceBasic" />
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

						<section className="section-banner border-section">
							<img className="banner__hero-image" src={ imageMaintenanceAdvancedHome } alt="imgBgMaintenanceAdvanced" />
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
					</main>
				)
			}
			<FooterMenu status="maintenance" />
		</>
	)
}
