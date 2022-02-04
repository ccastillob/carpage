
import React, { useState, useRef, useEffect } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import { SwapSpinner } from 'react-spinners-kit';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

import FooterMenu from '../molecules/FooterMenu';
import HeaderMenu from '../molecules/HeaderMenu';
import SecondaryButton from '../atoms/SecondaryButton';
import ShopIcon from '../icons/static/ShopIcon';
import SkeletonModelDetails from '../skeletons/SkeletonModelDetails';
import { startModelData } from '../../actions/model';
import { TechnicalSpecifications } from '../organisms/TechnicalSpecifications';

const ModelDetails = ({match}) => {

	const dispatch = useDispatch();
	const [nameColor, setNameColor] = useState("not color");
	const [image, setImage] = useState("not image");
	const [loading, setLoading] = useState(false);
	const [modelCart, setModelCart] = useState(() => JSON.parse(localStorage.getItem("cart")));
	const [showButtonShop, setShowButtonShop] = useState(true);
	const dataMyModel = useSelector(state => state.dataModel);
	const { arrayColors } = useSelector(state => state.dataModel);
	const myLista = useRef(null);

	useEffect(() => {

		myLista.current?.childNodes[0]?.classList.add("active");

		if( arrayColors !== undefined ){

			setNameColor( arrayColors[0].nameColor );
			setImage( arrayColors[0].imageColor );

		}

	}, [arrayColors])

	useEffect(() => {

		const convertReverse = match.params.nameModel.replace(/\b\w/g, c => c.toUpperCase()).replace(/-/g, " ");
		let	contenido = convertReverse.replace("E Tron", "E-tron");
		contenido = contenido.replace("Gt", "GT");
		dispatch( startModelData(contenido) );

	}, [match.params.nameModel, dispatch])

	useEffect(() => {

		if( modelCart !== null ) {

			const nameCarModelSelect = modelCart.filter( mc => mc.nameItem === dataMyModel?.nameModel )[0];

			if( nameCarModelSelect === undefined ) {
				setShowButtonShop(true);
			}else {

				const newArrRemove = arrayColors.filter( arr => arr.nameColor === nameCarModelSelect.detailItem[0].detail )[0];
				setImage(newArrRemove.imageColor);
				setNameColor(newArrRemove.nameColor);
				setShowButtonShop(false);

			}

		}

	}, [modelCart, dataMyModel, arrayColors])

	const myLoading = e => {

		if( e.type === "load" ) {
			setLoading(true);
		}

	}

	const handleShowColor = (e) => {

		setLoading(false);
		const elementSelect = e.target;
		const indexColorSelect = dataMyModel.arrayColors.findIndex( color => e.target.id === color._id );

		elementSelect?.classList?.add("active");

		dataMyModel.arrayColors.map( (color, index) => {

			if( indexColorSelect !== index ) {
				myLista.current.childNodes[index]?.setAttribute("disable", false);
				myLista.current.childNodes[index]?.classList?.remove("active");
			}

			return null;

		})

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
			nameItem: dataMyModel.nameModel,
			tagItem: "Normal",
			stateItem: true,
			priceItem: dataMyModel.priceModel.toFixed(2),
			detailItem: [{
				detail: nameColor
			}],
		}];

		if( modelCart === null ) {

			localStorage.setItem("cart", JSON.stringify(structAddShop));
			setModelCart( JSON.parse(localStorage.getItem("cart")) );

		}else {

			const myDataArr = JSON.parse(localStorage.getItem("cart"));
			myDataArr.push(...structAddShop);
			localStorage.setItem("cart", JSON.stringify(myDataArr));
			setModelCart( JSON.parse(localStorage.getItem("cart")) );

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

		const nameCarModelSubs = modelCart.filter( mc => mc.nameItem !== dataMyModel?.nameModel );
		localStorage.setItem("cart", JSON.stringify(nameCarModelSubs));
		setModelCart( JSON.parse(localStorage.getItem("cart")) );
		const indexRemoveCarColor = arrayColors.findIndex( arrColor => arrColor.nameColor === nameColor);
		myLista.current?.childNodes[indexRemoveCarColor]?.setAttribute("disable", true);
		myLista.current?.childNodes[indexRemoveCarColor]?.classList.add("active");

	}

	return (

		( arrayColors !== undefined ) ? (
			<>
			<HeaderMenu status="model"/>
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
							<h3 className="content-color s-center m-left s-pt-4 m-cols-6 s-mb-4">$ { dataMyModel.priceModel.toFixed(2) }</h3>
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

					<TechnicalSpecifications data={ dataMyModel } />

				</section>
			</main>
			</SkeletonTheme>
			<FooterMenu status="model" />
			</>
		) : (
			<SkeletonModelDetails />
		)

	)

}

export default ModelDetails;
