
import React, { useEffect, useState } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import { SwapSpinner } from 'react-spinners-kit';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';

import FooterMenu from '../molecules/FooterMenu';
import HeaderMenu from '../molecules/HeaderMenu';
import SecondaryButton from '../atoms/SecondaryButton';
import ShopIcon from '../icons/static/ShopIcon';
import SkeletonDiscountDetails from '../skeletons/SkeletonDiscountDetails';
import { startDiscountData } from '../../actions/discount';
import { TechnicalSpecifications } from '../organisms/TechnicalSpecifications';

const DiscountDetails = ({ match }) => {

	const dispatch = useDispatch();
	const [nameColor, setNameColor] = useState("not color");
	const [image, setImage] = useState("not image");
	const [loading, setLoading] = useState(false);
	const [discountCart, setDiscountCart] = useState(() => JSON.parse(localStorage.getItem("cart")));
	const [showButtonShop, setShowButtonShop] = useState(true);
	const dataMyDiscount = useSelector(state => state.dataDiscount);
	const { arrayColors } = useSelector(state => state.dataDiscount);
	const myLista = useRef(null);

	useEffect(() => {

		myLista.current?.childNodes[0]?.classList.add("active");

		if( arrayColors !== undefined ) {

			setNameColor( arrayColors[0].nameColor );
			setImage( arrayColors[0].imageColor );

		}

	}, [arrayColors])


	useEffect(() => {

		const convertReverse = match.params.nameDiscount.replace(/\b\w/g, c => c.toUpperCase()).replace(/-/g, " ");
		let contenido = convertReverse.replace("E Tron", "E-tron");
		contenido = contenido.replace("Gt", "GT");
		contenido = contenido.replace("Tfsie", "TFSIe");

		dispatch( startDiscountData(contenido) );

	}, [match, dispatch])

	useEffect(() => {

		if( discountCart !== null ) {

			const nameCarDiscountSelect = discountCart.filter( dc => dc.nameItem === dataMyDiscount?.nameDiscount )[0];

			if( nameCarDiscountSelect === undefined ) {
				setShowButtonShop(true);
			}else {

				const dataDiscountDetailsInitial = arrayColors.filter( arr => arr.nameColor === nameCarDiscountSelect.detailItem[0].detail )[0];
				setImage(dataDiscountDetailsInitial.imageColor);
				setNameColor(dataDiscountDetailsInitial.nameColor);
				setShowButtonShop(false);

			}
		}

	}, [discountCart, dataMyDiscount, arrayColors])

	const myLoading = e => {

		if( e.type === "load" ) {
			setLoading(true);
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

		toast.success('Añadiste un producto', {
			position: "bottom-right",
			autoClose: 3000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: false,
			progress: undefined,
		});

		const structAddShop = [{
			nameItem: dataMyDiscount.nameDiscount,
			tagItem: "Descuento",
			stateItem: true,
			priceItem: ((dataMyDiscount.priceDiscount*(100 - dataMyDiscount.percentage))/100).toFixed(2),
			detailItem: [{
				detail: nameColor
			}],
		}];

		if( discountCart === null ) {

			localStorage.setItem("cart", JSON.stringify( structAddShop ));
			setDiscountCart( JSON.parse(localStorage.getItem("cart")) );

		}else {

			const myDataStorage = JSON.parse( localStorage.getItem("cart") );
			myDataStorage.push(...structAddShop);
			localStorage.setItem("cart", JSON.stringify( myDataStorage ));
			setDiscountCart( JSON.parse( localStorage.getItem("cart") ) );

		}

	}

	const handleShopRemove = e => {

		e.preventDefault();

		myLista.current?.childNodes[0]?.classList.remove("active");

		setShowButtonShop(true);

		toast.error('Quitaste un producto', {
			position: "bottom-right",
			autoClose: 3000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: false,
			progress: undefined,
		});

		const nameCarDiscountSubs = discountCart.filter( dc => dc.nameItem !== dataMyDiscount?.nameDiscount );
		localStorage.setItem("cart", JSON.stringify( nameCarDiscountSubs ));
		setDiscountCart( JSON.parse( localStorage.getItem("cart") ) );
		const indexRemoveCarColor = arrayColors.findIndex( arrColor => arrColor.nameColor === nameColor );
		myLista.current?.childNodes[indexRemoveCarColor]?.setAttribute("disable", true);
		myLista.current?.childNodes[indexRemoveCarColor]?.classList.add("active");

	}

	return (

		( arrayColors !== undefined ) ? (
			<>
			<HeaderMenu status="discount"/>
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
								<h2 className="discountdetails-box__percentage s-x-3 s-y-1 s-main-center s-cross-center">{ dataMyDiscount.percentage } %</h2>
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
								{
									(showButtonShop === true || showButtonShop === null) ? (
										<>
										<div style={{display:"flex"}} id="lista" ref={ myLista } className="text__list-colors m-cols-4">
											{
												dataMyDiscount?.arrayColors?.map( myColor => (
													<div disable="false" key={myColor._id} id={ myColor._id } onClick={(e) => handleShowColor(e)} className="colors__item" style={{background: myColor.styleColor }}></div>
												))
											}
										</div>
										<h4 className="text__name-colors content-color m-cols-4 s-center s-pt-1">{ nameColor }</h4>
										</>
									) : (
										<>
										<div style={{display:"none"}} id="lista" ref={ myLista } className="text__list-colors m-cols-4">
											{
												dataMyDiscount?.arrayColors?.map( myColor => (
													<div disable="false" key={myColor._id} id={ myColor._id } onClick={(e) => handleShowColor(e)} className="colors__item" style={{background: myColor.styleColor }}></div>
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

						<TechnicalSpecifications data={ dataMyDiscount } />

					</section>
				</main>
			</SkeletonTheme>
			<FooterMenu status="discount" />
			</>
		) : (
			<SkeletonDiscountDetails />
		)

	)

}

export default DiscountDetails;