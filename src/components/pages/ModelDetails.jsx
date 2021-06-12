import React from 'react'
import SecondaryButton from '../atoms/SecondaryButton'
import ShopIcon from '../icons/static/ShopIcon'
import FooterMenu from '../molecules/FooterMenu'
import HeaderMenu from '../molecules/HeaderMenu'

export const ModelDetails = () => {

	const imagePotencyModelDetail = "https://images.unsplash.com/photo-1543171165-6ec6ede147ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1552&q=80";
	const imageAccelerationModelDetail = "https://images.unsplash.com/photo-1595387381801-5e290d2a1a90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
	const imageVelocityModelDetail = "https://images.unsplash.com/photo-1563170561-435fcd7c0028?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";

	// const [colorShow, setColorShow] = useState(false)

	const color = "green"

	const handleShowColor = (e) => {

		const listId = ["uno", "dos", "tres", "cuatro"];
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
		// setColorShow(true)

	}

	return (
		<>
			<HeaderMenu status="model"/>
			<main className="main-container modeldetails">
				<section className="section-modeldetails ed-grid s-grid-12">

					<div className="p-relative content-grid-top ed-grid m-grid-12 s-cols-12">
						<div className="top-container__img s-ratio-16-9 img-container m-cols-6">
							<img className="s-radius-2" src="https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="model" />
							<div className="img-overlay"></div>
						</div>
						<div className="top-container__text ed-grid m-grid-6 m-cols-3 s-px-4 s-pt-4 m-pxy-0 m-cols-6">
							<h2 className="title-color m-cols-6 s-center m-left">Audi A4</h2>
							<h3 className="text__view content-color s-pt-2 m-cols-6">Potente, dinámico y más atractivo que nunca. El nuevo Audi A4 sorprende por su nuevo lenguaje de diseño, ampliamente renovado por dentro y por fuera.</h3>
							<h3 className="content-color s-center m-left s-pt-4 m-cols-6 s-mb-4">$ 20800.00</h3>
							<div className="text__list-colors m-cols-4">
								<div id={"uno"} onClick={(e) => handleShowColor(e)} className="colors__item" style={{background: "blue" }}></div>
								<div id={"dos"} onClick={(e) => handleShowColor(e)}  className="colors__item" style={{background: "red"}}></div>
								<div id={"tres"} onClick={(e) => handleShowColor(e)}  className="colors__item" style={{background: color }}></div>
								<div id={"cuatro"} onClick={(e) => handleShowColor(e)}  className="colors__item" style={{background: "orange"}}></div>
							</div>
							<h4 className="text__name-colors content-color m-cols-4 s-center s-pt-1">Magento</h4>
							<SecondaryButton icon={<ShopIcon />} title="Añádelo al carrito" othersClass="mt-32 m-cols-6"/>
						</div>
					</div>

					<h2 className="title-color s-center m-left s-cols-12 pt-24 s-pb-4">Especificaciones técnicas</h2>
					<div className="content-grid-bottom s-cols-12 ed-grid s-grid-12 m-grid-12 s-px-4 m-px-0 rows-gap">

						<div className="bottom-specification ed-grid s-grid-12 s-cols-12 m-grid-4 m-cols-4">
							<div className="specification-item__img s-ratio-4-3 img-container s-cols-6 s-x-4 m-cols-2 m-x-2">
								<img className="s-radius-2" src={ imagePotencyModelDetail } alt="model" />
								<div className="img-overlay"></div>
							</div>
							<h4 className="content-color s-center s-cols-12 m-cols-4 s-pt-2">Potencia máx</h4>
							<h4 className="content-color s-center s-cols-12 m-cols-4 s-pt-1">150 HP</h4>
						</div>

						<div className="bottom-specification ed-grid s-grid-12 s-cols-12 m-grid-4 m-cols-4">
							<div className="specification-item__img s-ratio-4-3 img-container s-cols-6 s-x-4 m-cols-2 m-x-2">
								<img className="s-radius-2" src={ imageAccelerationModelDetail } alt="model" />
								<div className="img-overlay"></div>
							</div>
							<h4 className="content-color s-center s-cols-12 m-cols-4 m-cols-4 s-pt-2">Aceleración(0 - 100 Km/h)</h4>
							<h4 className="content-color s-center s-cols-12 m-cols-4 m-cols-4 s-pt-1">8.5 s</h4>
						</div>

						<div className="bottom-specification ed-grid s-grid-12 s-cols-12 m-grid-4 m-cols-4">
							<div className="specification-item__img s-ratio-4-3 img-container s-cols-6 s-x-4 m-cols-2 m-x-2">
								<img className="s-radius-2" src={ imageVelocityModelDetail } alt="model" />
								<div className="img-overlay"></div>
							</div>
							<h4 className="content-color s-center s-cols-12 m-cols-4 m-cols-4 s-pt-2">Velocidad máx</h4>
							<h4 className="content-color s-center s-cols-12 m-cols-4 m-cols-4 s-pt-1">220 Km/h</h4>
						</div>

					</div>

				</section>
			</main>
			<FooterMenu status="model" />
		</>
	)
}
