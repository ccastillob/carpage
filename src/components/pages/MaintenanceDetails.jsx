
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import SecondaryButton from '../atoms/SecondaryButton';
import CheckIcon from '../icons/special/CheckIcon';
import CancelIcon from '../icons/static/CancelIcon';
import ShopIcon from '../icons/static/ShopIcon';
import SuccessIcon from '../icons/static/SuccessIcon';
import FooterMenu from '../molecules/FooterMenu';
import HeaderMenu from '../molecules/HeaderMenu';
import SkeletonMaintenanceDetails from '../skeletons/SkeletonMaintenanceDetails';

export const MaintenanceDetails = ({match}) => {

	const [check, setCheck] = useState(() => JSON.parse(localStorage.getItem("statusDetails")));
	const [showButtons, setShowButtons] = useState(() => JSON.parse(localStorage.getItem("stateButtonsMaintenance")));
	const [data, setData] = useState({});
	const [priceAll, setPriceAll] = useState({totalPrice: 0});
	const history = useHistory();
	const [dataDetail, setDataDetail] = useState({});
	const [maintenanceCart, setMaintenanceCart] = useState(() => JSON.parse(localStorage.getItem("cart")));
	const { arrayDetails: arrBasic, nameMaintenance: nameBasic } = useSelector(state => state.dataMaintenanceBasic);;
	const { arrayDetails: arrAdvanced, nameMaintenance: nameAdvanced } = useSelector(state => state.dataMaintenanceAdvanced);

	useEffect(() => {

		if( match.params.nameType === nameBasic ) {
			setData( arrBasic );
		}else {
			setData( arrAdvanced );
		}

	}, [match, arrBasic, arrAdvanced, nameBasic])

	useEffect(() => {

		if( check === null && Object.values(dataDetail).length > 0 ) {

			localStorage.setItem("statusDetails", dataDetail );
			setCheck(dataDetail);

		}else {
			localStorage.setItem("statusDetails", JSON.stringify(check));
		}

	}, [check, dataDetail])

	useEffect(() => {

		if( data?.length > 0 ){
			setDataDetail(data);
		}

	}, [data])

	useEffect(() => {

		if( match.params.nameType !== nameBasic && match.params.nameType !== nameAdvanced ){
			history.push("/maintenances");
		}

	}, [match, nameBasic, nameAdvanced, history])

	useEffect(() => {

		if( check !== null ) {

			const arrObjectWithPriceTrue = check.filter( object => object.stateDetail === true );
			const arrPrices = arrObjectWithPriceTrue.map( arr => arr.priceDetail );
			const sumTotal = arrPrices.reduce( (a,b) => a + b,0 );
			setPriceAll({totalPrice: sumTotal});

		}

	}, [check])

	const handleAddBasicProductCart = e => {

		e.preventDefault();
		localStorage.setItem("stateButtonsMaintenance", JSON.stringify({
			...showButtons,
			shopBasic: true
		}));

		// Aqui debo hacer un filter y construir el objeto para almacenar en el localStorage
		const checkBasicWithTrue = check.filter(ct => ct.stateDetail === true );
		const arrNamesBasicDetailsTrue = checkBasicWithTrue.map( cn => (
			{
				detail: cn.nameDetail
			}
		));

		const arrPricesBasicDetailsTrue = checkBasicWithTrue.map( cp => cp.priceDetail );
		const priceTotalBasicDetails = arrPricesBasicDetailsTrue.reduce( (a,b) => a + b,0 );
		const structAddMaintenanceBasicShop = [{
			nameItem: "Mantenimiento básico",
			tagItem: "Personalizado",
			stateItem: true,
			priceItem: priceTotalBasicDetails.toFixed(2),
			detailItem: arrNamesBasicDetailsTrue
		}];

		if( maintenanceCart === null ) {

			localStorage.setItem("cart", JSON.stringify( structAddMaintenanceBasicShop ));
			setMaintenanceCart( JSON.parse(localStorage.getItem("cart")) );

		}else {

			const myDataMaintenanceBasic = JSON.parse( localStorage.getItem("cart") );
			myDataMaintenanceBasic.push(...structAddMaintenanceBasicShop);
			localStorage.setItem("cart", JSON.stringify(myDataMaintenanceBasic));
			setMaintenanceCart(JSON.parse(localStorage.getItem("cart")));

		}

		setShowButtons(JSON.parse(localStorage.getItem("stateButtonsMaintenance")));
		// Redireccionamos luego de añadir el producto BASIC
		history.push("/maintenances");

	}

	const handleRemoveBasicProductCart = e => {

		e.preventDefault();
		localStorage.setItem("stateButtonsMaintenance", JSON.stringify({
			...showButtons,
			shopBasic: false
		}));

		const nameMaintenanceBasicSubs = maintenanceCart.filter( mac => mac.nameItem !== "Mantenimiento básico" );
		localStorage.setItem("cart", JSON.stringify(nameMaintenanceBasicSubs));
		setMaintenanceCart(JSON.parse(localStorage.getItem("cart")));
		setShowButtons(JSON.parse(localStorage.getItem("stateButtonsMaintenance")));

	}

	const handleAddAdvancedProductCart = e => {

		e.preventDefault();
		localStorage.setItem("stateButtonsMaintenance", JSON.stringify({
			...showButtons,
			shopAdvanced: true
		}));

		const checkAdvancedWithTrue = check.filter(ct => ct.stateDetail === true );
		const arrNamesAdvancedDetailsTrue = checkAdvancedWithTrue.map( cn => (
			{
				detail: cn.nameDetail
			}
		));

		const arrPricesAdvancedDetailsTrue = checkAdvancedWithTrue.map( cp => cp.priceDetail);
		const priceTotalAdvancedDetails = arrPricesAdvancedDetailsTrue.reduce( (a,b) => a + b,0 );
		const structAddMaintenanceAdvancedShop = [{
			nameItem: "Mantenimiento avanzado",
			tagItem: "Personalizado",
			stateItem: true,
			priceItem: priceTotalAdvancedDetails.toFixed(2),
			detailItem: arrNamesAdvancedDetailsTrue
		}];

		if( maintenanceCart === null ) {

			localStorage.setItem("cart", JSON.stringify( structAddMaintenanceAdvancedShop ));
			setMaintenanceCart( JSON.parse(localStorage.getItem("cart")) );

		}else {

			const myDataMaintenanceAdvanced = JSON.parse( localStorage.getItem("cart") );
			myDataMaintenanceAdvanced.push(...structAddMaintenanceAdvancedShop);
			localStorage.setItem("cart", JSON.stringify(myDataMaintenanceAdvanced));
			setMaintenanceCart(JSON.parse(localStorage.getItem("cart")));

		}

		setShowButtons(JSON.parse(localStorage.getItem("stateButtonsMaintenance")));
		// Redireccionamos luego de añadir el producto ADVANCED
		history.push("/maintenances");

	}

	const handleRemoveAdvancedProductCart = e => {

		e.preventDefault();
		localStorage.setItem("stateButtonsMaintenance", JSON.stringify({
			...showButtons,
			shopAdvanced: false
		}));

		const nameMaintenanceAdvancedSubs = maintenanceCart.filter( mac => mac.nameItem !== "Mantenimiento avanzado" );
		localStorage.setItem("cart", JSON.stringify(nameMaintenanceAdvancedSubs));
		setMaintenanceCart(JSON.parse(localStorage.getItem("cart")));
		setShowButtons(JSON.parse(localStorage.getItem("stateButtonsMaintenance")));

	}

	const handleClickIcon = e => {

		const myIndexInObject = check.findIndex( d => d.nameDetail === e.target.id );

		if( check[myIndexInObject].nameDetail === e.target.id ) {
			check[myIndexInObject] = {
				...check[myIndexInObject],
				stateDetail: !check[myIndexInObject].stateDetail
			}
		};
		setCheck([...check]);

	}

	return (
		<>
			<HeaderMenu status="maintenance" />
			{
				check === null ? (
					<SkeletonMaintenanceDetails dataArrBasicLength={arrBasic?.length} dataArrAdvancedLength={arrAdvanced?.length} matchType={match.params.nameType} />
				) : (
					<main className="main-container maintenancedetails">
						<section className="section-maintenance-details ed-grid s-grid-12">
							<h2 className="title-color s-cols-12">Mantenimiento { match.params.nameType === "basic" ? "Básico" : "Avanzado" }</h2>
							<h3 className="content-color s-cols-12 pt-24">Aquí podrás personalizar que servicios deseas agregar(<SuccessIcon otherClass="icon-select" />) o quitar(<CancelIcon otherClass="icon-select" />) de este paquete.</h3>

							<div className="maintenance-container-services s-cols-12 ed-grid s-grid-12 row-gap-12 m-row-gap-8 pt-20">
								{
									(arrBasic !== undefined ) ? (
										check?.map( details =>
											<div key={details._id} className="maintenance-services s-cols-12 ed-grid s-grid-4 s-gap-4">
												<div className="maintenance-services__list s-cols-2">
													<CheckIcon otherClass="check-content-color" containerClass="check-container" />
													<h3 className="content-color">{ details.nameDetail }</h3>
												</div>
												<h3 className="maintenance-services__price content-color m-cols-1 m-main-end m-x-3">$ { details.priceDetail.toFixed(2) }</h3>
												<div className="maintenance-services__delete s-main-end s-x-4 s-cols-1">
													{
														details.stateDetail === true ? (
															<SuccessIcon myid={details.nameDetail} event={ handleClickIcon } width={32} />
														) : (
															<CancelIcon myid={details.nameDetail} event={ handleClickIcon } width={32} />
														)
													}
												</div>
												<div className="p-relative maintenance-services__section-details s-cols-3 m-cols-2">
													<h4 className="details__description content-color s-pl-2">
														{
															details.stateDetail === true ? "incluido" : "no incluido"
														}
													</h4>
												</div>
											</div>
										)
									) : (
										history.push("/maintenances")
									)
								}
							</div>

							<div className="maintenance-container-total ed-grid s-grid-4 s-cols-12 col-gap-16 s-pt-4">
								<h3 className="total__text s-cols-2 content-color s-main-end">TOTAL</h3>
								<h3 className="total__price s-cols-2 content-color m-cols-1 s-main-end m-x-3">$ {priceAll.totalPrice.toFixed(2)}</h3>
							</div>

							<div className="maintenance-container-button s-cols-12 s-main-end">
								{
									match.params.nameType === "basic" ? (
										( showButtons?.shopBasic === false ) ? (
											<SecondaryButton event={ handleAddBasicProductCart } icon={ <ShopIcon /> } title="Añádelo al carrito" othersClass="mt-32"/>
										) : (
											<SecondaryButton event={ handleRemoveBasicProductCart } icon={<ShopIcon />} title="Quítalo del carrito" othersClass="mt-32 button-secondary-danger"/>
										)
									) : (
										( showButtons?.shopAdvanced  === false ) ? (
											<SecondaryButton event={ handleAddAdvancedProductCart } icon={ <ShopIcon /> } title="Añádelo al carrito" othersClass="mt-32"/>
										) : (
											<SecondaryButton event={ handleRemoveAdvancedProductCart } icon={<ShopIcon />} title="Quítalo del carrito" othersClass="mt-32 button-secondary-danger"/>
										)
									)
								}
							</div>
						</section>
					</main>
				)
			}
			<FooterMenu status="maintenance"/>
		</>
	)
}
