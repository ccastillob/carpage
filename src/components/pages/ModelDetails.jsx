import React, { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { SwapSpinner } from 'react-spinners-kit';

import { startModelData } from '../../actions/model'
import SecondaryButton from '../atoms/SecondaryButton'
import ShopIcon from '../icons/static/ShopIcon'
import FooterMenu from '../molecules/FooterMenu'
import HeaderMenu from '../molecules/HeaderMenu'
import SkeletonModelDetails from '../skeletons/SkeletonModelDetails'
import { useHistory } from 'react-router-dom';

export const ModelDetails = ({match}) => {

	const dispatch = useDispatch();
	const [nameColor, setNameColor] = useState("not color");
	const [image, setImage] = useState("not image")
	const [loading, setLoading] = useState(false)
	const history = useHistory()
	const [loadingDetails, setLoadingDetails] = useState({
		potency: false,
		acceleration: false,
		velocity: false
	})
	const [modelCart, setModelCart] = useState(() => JSON.parse(localStorage.getItem("cart")))
	const [showButtonShop, setShowButtonShop] = useState(true)
	const dataMyModel = useSelector(state => state.dataModel);
	const { arrayColors } = useSelector(state => state.dataModel);
	const myLista = useRef(null)

	const imagePotencyModelDetail = "https://images.unsplash.com/photo-1543171165-6ec6ede147ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1552&q=80";
	const imageAccelerationModelDetail = "https://images.unsplash.com/photo-1595387381801-5e290d2a1a90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
	const imageVelocityModelDetail = "https://images.unsplash.com/photo-1563170561-435fcd7c0028?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";

	// SOLO LA LISTA(para activar el primer item)
	useEffect(() => {

		myLista.current?.childNodes[0]?.classList.add("active");

		if( arrayColors !== undefined ){
			setNameColor( arrayColors[0].nameColor )
			setImage( arrayColors[0].imageColor )
		}

	}, [arrayColors])

	useEffect(() => {

		// Validamos que lo que pase sea buscado en la BD
		const convertReverse = match.params.nameModel.replace(/\b\w/g, c => c.toUpperCase()).replace(/-/g, " ")
		let	contenido = convertReverse.replace("E Tron", "E-tron")
		contenido = contenido.replace("Gt", "GT")

		dispatch( startModelData(contenido) )

	}, [match.params.nameModel, dispatch])

	useEffect(() => {

		if( modelCart !== null ) {

			const nameCarModelSelect = modelCart.filter( mc => mc.nameItem === dataMyModel?.nameModel )[0];

			if( nameCarModelSelect === undefined ) {
				setShowButtonShop(true);
			}else {

				const newArrRemove = arrayColors.filter( arr => arr.nameColor === nameCarModelSelect.detailItem[0].detail )[0]
				setImage(newArrRemove.imageColor)
				setNameColor(newArrRemove.nameColor)
				setShowButtonShop(false);

			}

		}

	}, [modelCart, dataMyModel, arrayColors])

	const myLoading = (e) => {
		if( e.type === "load" ) {
			console.log("Cargue !!!");
			setLoading(true)
		}
	}

	const myLoadingDetails = e => {
		// console.log(e.target.alt);
		if( e.target.alt === "potency" ) {
			setLoadingDetails( {
				...loadingDetails,
				potency: true
			} );
		}
		if( e.target.alt === "acceleration" ) {
			setLoadingDetails( {
				...loadingDetails,
				acceleration: true
			} );
		}

		if( e.target.alt === "velocity" ) {
			setLoadingDetails( {
				...loadingDetails,
				velocity: true
			} );
		}
	}

	const handleShowColor = (e) => {

		setLoading(false)

		// Agrupar en un array los elementos que no fueron seleccionados
		const noActive = dataMyModel.arrayColors.filter( colorArr => e.target.id !== colorArr._id)
		const elementSelect = e.target;

		// Colocarle la clase "active" al elemento seleccionado
		elementSelect?.classList?.add("active");

		// Quitarle la clase "active" a los elementos que no fueron seleccionados
		noActive.map ( elements => {
			const elementIDs = document.getElementById(elements._id);
			elementIDs.setAttribute("disable", false)
			return elementIDs?.classList?.remove("active");
		});

		// Designar el color correspondiente al elemento seleccionado
		const colorSelect = arrayColors.filter( c => elementSelect.id === c._id )[0]
		const attrValueElementSelect = elementSelect.getAttribute("disable");

		if( attrValueElementSelect === "false" ) {

			elementSelect.setAttribute("disable", true)
			setNameColor( colorSelect.nameColor )
			setImage( colorSelect.imageColor )

		}else {
			setLoading(true)
		}

	}


	const handleShopAdd = e => {

		e.preventDefault();
		setShowButtonShop(false);
		// console.log("AÑADIDO");
		const structAddShop = [{
			nameItem: dataMyModel.nameModel,
			tagItem: "Normal",
			stateItem: true,
			priceItem: dataMyModel.priceModel,
			detailItem: [{
				detail: nameColor
			}]
		}]

		if( modelCart === null ) {

			localStorage.setItem("cart", JSON.stringify(structAddShop))
			setModelCart( JSON.parse(localStorage.getItem("cart")) )

		}else {

			const myDataArr = JSON.parse(localStorage.getItem("cart"))
			myDataArr.push(...structAddShop)
			localStorage.setItem("cart", JSON.stringify(myDataArr))
			setModelCart( JSON.parse(localStorage.getItem("cart")) )

		}

		// Redireccionamos luego de añadir el producto MODELCAR
		history.push("/shop")

	}

	const handleShopRemove = e => {

		e.preventDefault();
		myLista.current?.childNodes[0]?.classList.remove("active");
		setShowButtonShop(true);
		// console.log("REMOVIDO");
		const nameCarModelSubs = modelCart.filter( mc => mc.nameItem !== dataMyModel?.nameModel );
		localStorage.setItem("cart", JSON.stringify(nameCarModelSubs))
		setModelCart( JSON.parse(localStorage.getItem("cart")) )
		const indexRemoveCarColor = arrayColors.findIndex( arrColor => arrColor.nameColor === nameColor)
		myLista.current?.childNodes[indexRemoveCarColor]?.setAttribute("disable", true)
		myLista.current?.childNodes[indexRemoveCarColor]?.classList.add("active");

	}

	return (
		<>
			<HeaderMenu status="model"/>
			{
				( arrayColors !== undefined ) ? (
					<SkeletonTheme color="#8e8e8f" >
					<main className="main-container modeldetails">
						<section className="section-modeldetails ed-grid s-grid-12">
							<div className="p-relative content-grid-top ed-grid m-grid-12 s-cols-12">
								<div style={ {display: loading ? "block" : "none"} } className="top-container__img s-ratio-16-9 img-container m-cols-6">
									<img onLoad={ (e) => myLoading(e) } className="s-radius-2" src={ image } alt="modelDetail" />
									<div className="img-overlay"></div>
								</div>
								<div style={ {display: loading ? "none" : "flex"} } className="top-container__img s-ratio-16-9 border-image-loader img-container m-cols-6">
									<div className="center-child">
										<SwapSpinner color="#0080CA" size={70} />
									</div>
								</div>

								<div className="top-container__text ed-grid m-grid-6 m-cols-3 s-px-4 s-pt-4 m-pxy-0 m-cols-6">
									<h2 className="title-color m-cols-6 s-center m-left">{ dataMyModel.nameModel }</h2>
									<h3 className="text__view content-color s-pt-2 m-cols-6">{ dataMyModel.descriptionModel }</h3>
									<h3 className="content-color s-center m-left s-pt-4 m-cols-6 s-mb-4">$ { dataMyModel.priceModel }</h3>
									{
										(showButtonShop === true || showButtonShop === null) ? (
											<>
											<div style={{display:"flex"}} id="lista" ref={myLista} className="text__list-colors m-cols-4">
												{

														dataMyModel?.arrayColors?.map( mycolor => (
															<div disable="false" key={mycolor._id} id={ mycolor._id } onClick={(e) => handleShowColor(e)} className="colors__item" style={{background: mycolor.styleColor }}></div>
														))

												}
											</div>
											<h4 className="text__name-colors content-color m-cols-4 s-center s-pt-1">{ nameColor }</h4>
											</>
										) : (
											<>
											<div style={{display:"none"}} id="lista" ref={myLista} className="text__list-colors m-cols-4">
												{

														dataMyModel?.arrayColors?.map( mycolor => (
															<div disable="false" key={mycolor._id} id={ mycolor._id } onClick={(e) => handleShowColor(e)} className="colors__item" style={{background: mycolor.styleColor }}></div>
														))

												}
											</div>
											<h4 style={{display:"none"}} className="text__name-colors content-color m-cols-4 s-center s-pt-1">{ nameColor }</h4>
											</>
										)
									}

									{
										(showButtonShop === true || showButtonShop === null) ? (
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
										<img onLoad={myLoadingDetails} className="s-radius-2" src={ imagePotencyModelDetail } alt="potency" />
										<div className="img-overlay"></div>
									</div>
									<div style={ {display: loadingDetails.potency ? "none" : "block"} } className="specification-item__img s-ratio-4-3 img-container s-cols-6 s-x-4 m-cols-2 m-x-2">
										<Skeleton style={{ position: "absolute" }} height={`100%`} width={`100%`} />
									</div>

									<h4 className="content-color s-center s-cols-12 m-cols-4 s-pt-2">Potencia máx</h4>
									<h4 className="content-color s-center s-cols-12 m-cols-4 s-pt-1">{ dataMyModel.potency } HP</h4>
								</div>

								<div className="bottom-specification ed-grid s-grid-12 s-cols-12 m-grid-4 m-cols-4">

									<div style={ {display: loadingDetails.acceleration ? "block" : "none"} } className="specification-item__img s-ratio-4-3 img-container s-cols-6 s-x-4 m-cols-2 m-x-2">
										<img onLoad={myLoadingDetails} className="s-radius-2" src={ imageAccelerationModelDetail } alt="acceleration" />
										<div className="img-overlay"></div>
									</div>
									<div style={ {display: loadingDetails.acceleration ? "none" : "block"} } className="specification-item__img s-ratio-4-3 img-container s-cols-6 s-x-4 m-cols-2 m-x-2">
										<Skeleton style={{ position: "absolute" }} height={`100%`} width={`100%`} />
									</div>

									<h4 className="content-color s-center s-cols-12 m-cols-4 m-cols-4 s-pt-2">Aceleración(0 - 100 Km/h)</h4>
									<h4 className="content-color s-center s-cols-12 m-cols-4 m-cols-4 s-pt-1">{ dataMyModel.acceleration } s</h4>
								</div>

								<div className="bottom-specification ed-grid s-grid-12 s-cols-12 m-grid-4 m-cols-4">

									<div style={ {display: loadingDetails.velocity ? "block" : "none"} } className="specification-item__img s-ratio-4-3 img-container s-cols-6 s-x-4 m-cols-2 m-x-2">
										<img onLoad={myLoadingDetails} className="s-radius-2" src={ imageVelocityModelDetail } alt="velocity" />
										<div className="img-overlay"></div>
									</div>
									<div style={ {display: loadingDetails.velocity ? "none" : "block"} } className="specification-item__img s-ratio-4-3 img-container s-cols-6 s-x-4 m-cols-2 m-x-2">
										<Skeleton style={{ position: "absolute" }} height={`100%`} width={`100%`} />
									</div>

									<h4 className="content-color s-center s-cols-12 m-cols-4 m-cols-4 s-pt-2">Velocidad máx</h4>
									<h4 className="content-color s-center s-cols-12 m-cols-4 m-cols-4 s-pt-1">{ dataMyModel.velocity } Km/h</h4>
								</div>
							</div>
						</section>
					</main>
					</SkeletonTheme>
				) : (
					<SkeletonModelDetails />
					)
				}

			<FooterMenu status="model" />
		</>
	)
}
