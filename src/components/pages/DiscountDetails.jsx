// import React, { useState } from 'react'
import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { SwapSpinner } from 'react-spinners-kit';

import { startDiscountData } from '../../actions/discount'
import SecondaryButton from '../atoms/SecondaryButton'
import ShopIcon from '../icons/static/ShopIcon'
import FooterMenu from '../molecules/FooterMenu'
import HeaderMenu from '../molecules/HeaderMenu'

export const DiscountDetails = ({match}) => {

	const imagePotencyDiscountDetail = "https://images.unsplash.com/photo-1543171165-6ec6ede147ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1552&q=80";
	const imageAccelerationDiscountDetail = "https://images.unsplash.com/photo-1595387381801-5e290d2a1a90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
	const imageVelocityDiscountDetail = "https://images.unsplash.com/photo-1563170561-435fcd7c0028?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";

	// const imagenReal = "https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

	const dispatch = useDispatch();
	const [nameColor, setNameColor] = useState("not color");
	const [image, setImage] = useState("not image");
	const [loading, setLoading] = useState(false);
	const [loadingDetails, setLoadingDetails] = useState({
		potency: false,
		acceleration: false,
		velocity: false
	});
	const [showButtonShop, setShowButtonShop] = useState(true);
	const dataMyDiscount = useSelector(state => state.dataDiscount);
	const { arrayColors } = useSelector(state => state.dataDiscount);
	const myLista = useRef(null);

	useEffect(() => {

		myLista.current?.childNodes[0]?.classList.add("active");

		if( arrayColors !== undefined ) {
			setNameColor( arrayColors[0].nameColor )
			setImage( arrayColors[0].imageColor )
		}

	}, [arrayColors])


	useEffect(() => {

		const convertReverse = match.params.nameDiscount.replace(/\b\w/g, c => c.toUpperCase()).replace(/-/g, " ");
		let contenido = convertReverse.replace("E Tron", "E-tron");
		contenido = contenido.replace("Gt", "GT");
		contenido = contenido.replace("Tfsie", "TFSIe");

		dispatch( startDiscountData(contenido) )

	}, [match, dispatch])

	const myLoading = e => {

		if( e.type === "load" ) {
			console.log("CARGUE IMAGEN");
			setLoading(true);
		}

	}

	const myLoadingDetails = e => {

		console.log(e.target.alt);
		if( e.target.alt === "potency" ) {
			setLoadingDetails({
				...loadingDetails,
				potency: true
			});
		}

		if( e.target.alt === "acceleration" ) {
			setLoadingDetails({
				...loadingDetails,
				acceleration: true
			});
		}

		if( e.target.alt === "velocity" ) {
			setLoadingDetails({
				...loadingDetails,
				velocity: true
			});
		}

	}

	const handleShowColor = e => {

		setLoading(false);

		const noActive = dataMyDiscount.arrayColors.filter( colorArr => e.target.id !== colorArr._id );
		const elementSelect = e.target;

		elementSelect?.classList?.add("active");

		noActive.map( elements =>  {
			const elementIDs = document.getElementById(elements._id);
			elementIDs.setAttribute("disable", false);
			return elementIDs?.classList?.remove("active");
		});

		const colorSelect = arrayColors.filter( c => elementSelect.id === c._id )[0];
		const attrValueElementSelect = elementSelect.getAttribute("disable");

		if( attrValueElementSelect === "false" ) {
			elementSelect.setAttribute("disable", true);
			setNameColor( colorSelect.nameColor );
			setImage( colorSelect.imageColor );
		}else {
			setLoading(true);
		}

	}

	const handleShopAdd = e => {
		e.preventDefault();
		setShowButtonShop(false);
		console.log("AÑADIDO");
	}

	const handleShopRemove = e => {
		e.preventDefault();
		setShowButtonShop(true);
		console.log("REMOVIDO");
	}

	return (
		<>
			<HeaderMenu status="discount"/>
			{
				( arrayColors !== undefined ) ? (
					<SkeletonTheme color="#8e8e8f">
						<main className="main-container discountdetails">
							<section className="section-discountdetails ed-grid s-grid-12">

								<div className="p-relative content-grid-top ed-grid m-grid-12 s-cols-12">
									<div style={ {display: loading ? "grid" : "none"} } className="top-container__image ed-grid p-relative s-grid-3 s-gap-4 rows-gap m-cols-6">
										<div className="s-cols-3 s-rows-4">
											<div className="container__img s-ratio-16-9 img-container">
												<img onLoad={ myLoading } className="s-radius-2" src={ image } alt="discountDetail" />
												<div className="img-overlay"></div>
											</div>
										</div>
										<h2 className="discountdetails-box__percentage s-x-3 s-y-1 s-main-center s-cross-center">50 %</h2>
									</div>
									<div style={ {display: loading ? "none" : "flex"} } className="top-container__img s-ratio-16-9 border-image-loader img-container m-cols-6">
										<div className="center-child">
											<SwapSpinner color="#0080CA" size={70} />
										</div>
									</div>

									<div className="top-container__text ed-grid m-grid-6 m-cols-3 s-px-4 s-pt-4 m-pxy-0 m-cols-6">
										<h2 className="title-color s-center m-left m-cols-6">{ dataMyDiscount.nameDiscount }</h2>
										<h3 className="text__view content-color s-pt-2 m-cols-6">{ dataMyDiscount.descriptionDiscount }</h3>
										<h3 className="content-color s-center m-left s-pt-4 m-cols-6">$ { ((dataMyDiscount.priceDiscount*(100 - dataMyDiscount.percentage))/100).toFixed(2) }</h3>
										<h4 className="text__price-before content-color s-center m-left s-pt-1 m-cols-6 s-mb-4">$ {dataMyDiscount.priceDiscount.toFixed(2)}</h4>
										<div id="lista" ref={ myLista } className="text__list-colors m-cols-4">
											{
												dataMyDiscount?.arrayColors?.map( myColor => (
													<div disable="false" key={myColor._id} id={ myColor._id } onClick={(e) => handleShowColor(e)} className="colors__item" style={{background: myColor.styleColor }}></div>
												))
											}
										</div>
										<h4 className="text__name-colors content-color m-cols-4 s-center s-pt-1">{ nameColor }</h4>
										{
											showButtonShop ? (
												<SecondaryButton event={handleShopAdd} icon={<ShopIcon />} title="Añádelo al carrito" othersClass="mt-32 m-cols-6"/>
											) : (
												<SecondaryButton event={handleShopRemove} icon={<ShopIcon />} title="Quítalo del carrito" othersClass="mt-32 m-cols-6 button-secondary-danger"/>
											)
										}
									</div>
								</div>

								<h2 className="title-color s-center m-left s-cols-12 pt-24 s-pb-4">Especificaciones técnicas</h2>
								<div className="content-grid-bottom s-cols-12 ed-grid s-grid-12 m-grid-12 s-px-4 m-px-0 rows-gap">
									<div className="bottom-specification ed-grid s-grid-12 s-cols-12 m-grid-4 m-cols-4">

										<div style={ {display: loadingDetails.potency ? "block" : "none"} } className="specification-item__img s-ratio-4-3 img-container s-cols-6 s-x-4 m-cols-2 m-x-2">
											<img onLoad={myLoadingDetails} className="s-radius-2" src={ imagePotencyDiscountDetail } alt="potency" />
											<div className="img-overlay"></div>
										</div>
										<div style={ {display: loadingDetails.potency ? "none" : "block"} } className="specification-item__img s-ratio-4-3 img-container s-cols-6 s-x-4 m-cols-2 m-x-2">
											<Skeleton style={{ position: "absolute" }} height={`100%`} width={`100%`} />
										</div>

										<h4 className="content-color s-center s-cols-12 m-cols-4 s-pt-2">Potencia máx</h4>
										<h4 className="content-color s-center s-cols-12 m-cols-4 s-pt-1">150 HP</h4>
									</div>

									<div className="bottom-specification ed-grid s-grid-12 s-cols-12 m-grid-4 m-cols-4">

										<div style={ {display: loadingDetails.acceleration ? "block" : "none"} } className="specification-item__img s-ratio-4-3 img-container s-cols-6 s-x-4 m-cols-2 m-x-2">
											<img onLoad={myLoadingDetails} className="s-radius-2" src={ imageAccelerationDiscountDetail } alt="acceleration" />
											<div className="img-overlay"></div>
										</div>
										<div style={ {display: loadingDetails.acceleration ? "none" : "block"} } className="specification-item__img s-ratio-4-3 img-container s-cols-6 s-x-4 m-cols-2 m-x-2">
											<Skeleton style={{ position: "absolute" }} height={`100%`} width={`100%`} />
										</div>

										<h4 className="content-color s-center s-cols-12 m-cols-4 m-cols-4 s-pt-2">Aceleración(0 - 100 Km/h)</h4>
										<h4 className="content-color s-center s-cols-12 m-cols-4 m-cols-4 s-pt-1">8.5 s</h4>
									</div>

									<div className="bottom-specification ed-grid s-grid-12 s-cols-12 m-grid-4 m-cols-4">

										<div style={ {display: loadingDetails.velocity ? "block" : "none"} } className="specification-item__img s-ratio-4-3 img-container s-cols-6 s-x-4 m-cols-2 m-x-2">
											<img onLoad={myLoadingDetails} className="s-radius-2" src={ imageVelocityDiscountDetail } alt="velocity" />
											<div className="img-overlay"></div>
										</div>
										<div style={ {display: loadingDetails.velocity ? "none" : "block"} } className="specification-item__img s-ratio-4-3 img-container s-cols-6 s-x-4 m-cols-2 m-x-2">
											<Skeleton style={{ position: "absolute" }} height={`100%`} width={`100%`} />
										</div>

										<h4 className="content-color s-center s-cols-12 m-cols-4 m-cols-4 s-pt-2">Velocidad máx</h4>
										<h4 className="content-color s-center s-cols-12 m-cols-4 m-cols-4 s-pt-1">220 Km/h</h4>
									</div>
								</div>
							</section>
						</main>
					</SkeletonTheme>
				) : (
					<h1 className="title-color">Cargando datos...</h1>
				)
			}
			<FooterMenu status="discount" />
		</>
	)
}
