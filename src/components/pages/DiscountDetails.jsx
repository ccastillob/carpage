// import React, { useState } from 'react'
import React, { useEffect, useState } from 'react'
import SecondaryButton from '../atoms/SecondaryButton'
import ShopIcon from '../icons/static/ShopIcon'
import FooterMenu from '../molecules/FooterMenu'
import HeaderMenu from '../molecules/HeaderMenu'

export const DiscountDetails = () => {

	const imagenReal = "https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

	const [nameColor, setNameColor] = useState("initialState");
	const [image, setImage] = useState("https://th.bing.com/th/id/R147d2b333a7aaee50658b9cfb9971007?rik=sTvrhVffgvY8uA&pid=ImgRaw")
	const color = "green";

	// Aqui debo colocar el estado final para que se guarde en el localStorage
	useEffect(() => {

		console.log(nameColor);

	}, [nameColor])

	// SOLO LA LISTA(para activar el primer item)
	useEffect(() => {
		const lista = document.getElementById('lista');
		lista.childNodes[0].classList.add("active");
		console.log('UNA VEZ');
		setNameColor( color => color = "Blue" )
		// setImage( imagen => imagen = imagenReal )
		setImage( imagen => imagen = "https://th.bing.com/th/id/R3f0e9a88bd0c472d51dd3b51f424ace8?rik=P8W%2fsC5kyDrMCA&pid=ImgRaw" )
	}, [])


	const handleShowColor = (e) => {

		const listId = ["uno", "dos", "tres", "cuatro"];
		const listImagen = [
			"https://th.bing.com/th/id/R3f0e9a88bd0c472d51dd3b51f424ace8?rik=P8W%2fsC5kyDrMCA&pid=ImgRaw",
			"https://acroadtrip.blob.core.windows.net/publicaciones-imagenes/Large/audi/q3/mx/RT_PU_9bccad46b24e46009df201548e872be3.jpg",
			"https://th.bing.com/th/id/Rff4cdbf969e1c8bae46db931e2931572?rik=2%2f3o5V9yovPzvw&pid=ImgRaw",
			"https://th.bing.com/th/id/Rfa7905a46ef29ce56f30eda812c14e7d?rik=4cBEop7zawgEPQ&pid=ImgRaw"
		]
		const noActive = listId.filter( id => e.target.id !== id)
		const elementSelect = e.target;

		// Colocarle la clase "active" al elemento seleccionado
		elementSelect.classList.add("active");

		// Quitarle la clase "active" a los elementos que no fueron seleccionados
		noActive.map ( elements => {
			const elementIDs = document.getElementById(elements);
			return elementIDs.classList.remove("active");
		});

		// Designar el color correspondiente al elemento seleccionado
		setNameColor(e.target.id)
		console.log(e.target.id);

		// Por ahora con puro if
		if( e.target.id === "uno" ){
			setImage(listImagen[0])
		}else if( e.target.id === "dos" ) {
			setImage(listImagen[1])
		}else if( e.target.id === "tres" ) {
			setImage(listImagen[2])
		}else {
			setImage(listImagen[3])
		}


	}

	return (
		<>
			<HeaderMenu status="discount"/>
			<main className="main-container discountdetails">
				<section className="section-discountdetails ed-grid s-grid-12">

					<div className="p-relative content-grid-top ed-grid m-grid-12 s-cols-12">
						<div className="top-container__image ed-grid p-relative s-grid-3 s-gap-4 rows-gap m-cols-6">
							<div className="s-cols-3 s-rows-4">
								<div className="container__img s-ratio-16-9 img-container">
									<img className="s-radius-2" src={ image } alt="model" />
									<div className="img-overlay"></div>
								</div>
							</div>
							<h2 className="discountdetails-box__percentage s-x-3 s-y-1 s-main-center s-cross-center">50 %</h2>
						</div>
						<div className="top-container__text ed-grid m-grid-6 m-cols-3 s-px-4 s-pt-4 m-pxy-0 m-cols-6">
							<h2 className="title-color s-center m-left m-cols-6">Audi A4</h2>
							<h3 className="text__view content-color s-pt-2 m-cols-6">Potente, dinámico y más atractivo que nunca. El nuevo Audi A4 sorprende por su nuevo lenguaje de diseño, ampliamente renovado por dentro y por fuera.</h3>
							<h3 className="content-color s-center m-left s-pt-4 m-cols-6">$ 10400.00</h3>
							<h4 className="text__price-before content-color s-center m-left s-pt-1 m-cols-6 s-mb-4">$ 20800.00</h4>
							<div id="lista" className="text__list-colors m-cols-4">
								<div id={"uno"} onClick={(e) => handleShowColor(e)} className="colors__item" style={{background: "blue" }}></div>
								<div id={"dos"} onClick={(e) => handleShowColor(e)} className="colors__item" style={{background: "red"}}></div>
								<div id={"tres"} onClick={(e) => handleShowColor(e)} className="colors__item" style={{background: color }}></div>
								<div id={"cuatro"} onClick={(e) => handleShowColor(e)} className="colors__item" style={{background: "orange"}}></div>
							</div>
							<h4 className="text__name-colors content-color m-cols-4 s-center s-pt-1">{nameColor}</h4>
							<SecondaryButton icon={<ShopIcon />} title="Añádelo al carrito" othersClass="mt-32 m-cols-6"/>
						</div>
					</div>

					<h2 className="title-color s-center m-left s-cols-12 pt-24 s-pb-4">Especificaciones técnicas</h2>

					<div className="content-grid-bottom s-cols-12 ed-grid s-grid-12 m-grid-12 s-px-4 m-px-0 rows-gap">

						<div className="bottom-specification ed-grid s-grid-12 s-cols-12 m-grid-4 m-cols-4">
							<div className="specification-item__img s-ratio-4-3 img-container s-cols-6 s-x-4 m-cols-2 m-x-2">
								<img className="s-radius-2" src="https://images.unsplash.com/photo-1543171165-6ec6ede147ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1552&q=80" alt="model" />
								<div className="img-overlay"></div>
							</div>
							<h4 className="content-color s-center s-cols-12 m-cols-4 s-pt-2">Potencia máx</h4>
							<h4 className="content-color s-center s-cols-12 m-cols-4 s-pt-1">150 HP</h4>
						</div>

						<div className="bottom-specification ed-grid s-grid-12 s-cols-12 m-grid-4 m-cols-4">
							<div className="specification-item__img s-ratio-4-3 img-container s-cols-6 s-x-4 m-cols-2 m-x-2">
								<img className="s-radius-2" src="https://images.unsplash.com/photo-1595387381801-5e290d2a1a90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="model" />
								<div className="img-overlay"></div>
							</div>
							<h4 className="content-color s-center s-cols-12 m-cols-4 m-cols-4 s-pt-2">Aceleración(0 - 100 Km/h)</h4>
							<h4 className="content-color s-center s-cols-12 m-cols-4 m-cols-4 s-pt-1">8.5 s</h4>
						</div>

						<div className="bottom-specification ed-grid s-grid-12 s-cols-12 m-grid-4 m-cols-4">
							<div className="specification-item__img s-ratio-4-3 img-container s-cols-6 s-x-4 m-cols-2 m-x-2">
								<img className="s-radius-2" src="https://images.unsplash.com/photo-1563170561-435fcd7c0028?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="model" />
								<div className="img-overlay"></div>
							</div>
							<h4 className="content-color s-center s-cols-12 m-cols-4 m-cols-4 s-pt-2">Velocidad máx</h4>
							<h4 className="content-color s-center s-cols-12 m-cols-4 m-cols-4 s-pt-1">220 Km/h</h4>
						</div>

					</div>

				</section>
			</main>
			<FooterMenu status="discount" />
		</>
	)
}
