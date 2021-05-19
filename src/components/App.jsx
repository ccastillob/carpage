
import React from 'react'
// Importacion de la libreria(ya no existe)
// import "../library/ed-grid.scss";

// Estilos personalizados
import "../scss/styles.scss";

// Icons
// import Logo from "./icons/static/Logo";
// import ShopIcon from "./icons/static/ShopIcon";
// import ShopNavIcon from './icons/dinamic/ShopNavIcon';
// import DiscountIcon from './icons/dinamic/DiscountIcon';
// import EventIcon from './icons/dinamic/EventIcon';
// import MaintenanceIcon from './icons/dinamic/MaintenanceIcon';
// import ModelIcon from './icons/dinamic/ModelIcon';
// import HomeIcon from './icons/dinamic/HomeIcon';
// import CheckIcon from './icons/special/CheckIcon';
// import DeleteIcon from './icons/special/DeleteIcon';
// import CancelIcon from './icons/static/CancelIcon';
// import CustomizeIcon from './icons/static/CustomizeIcon';
// import MoonIcon from './icons/static/MoonIcon';
// import PaymentIcon from './icons/static/PaymentIcon';
// import SuccessIcon from './icons/static/SuccessIcon';
// import SunIcon from './icons/static/SunIcon';
// import ChangeThemeButton from './molecules/ChangeThemeButton';
import HeaderMenu from './molecules/HeaderMenu';

const App = () => {

	// const mystate = "active";

  return (
		<>
		<HeaderMenu />
		{/* <Logo />
		<Logo />
		<ShopIcon />
		<ShopNavIcon status="active" />
		<ShopNavIcon count={10} />
		<EventIcon status={"active"} />
		<DiscountIcon />
		<DiscountIcon status="active" />
		<MaintenanceIcon />
		<ModelIcon status={mystate} />
		<HomeIcon />
		<CheckIcon />
		<DeleteIcon />
		<CancelIcon />
		<CustomizeIcon />
		<MoonIcon />
		<PaymentIcon />
		<SuccessIcon />
		<SunIcon />
		<button className="button button-primary">Primary</button>
		<button className="button button-secondary">Secondary</button>
		<div className="button button-secondary">
			<ShopIcon />
			<h4>Añádelo</h4>
		</div>
		<button className="button button-ghost">Ghost</button>
		<div className="button button-ghost">
			<CustomizeIcon />
			<h4>Personaliza</h4>
		</div>
		<ChangeThemeButton /> */}

		{/* <div className="ed-grid s-grid-12" style={{margin: '0 1em' }}>
			<div className="s-cols-6 s-x-4 s-ratio-16-9 img-container">
				<img className="" src="https://images.pexels.com/photos/5975533/pexels-photo-5975533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="cubone" />
			</div>
		</div> */}

		<main className="main-container">
			<section className="section-banner">
				<img className="banner__hero-image" src="https://images.pexels.com/photos/5975533/pexels-photo-5975533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="cubone" />
				<div className="banner__overlay"></div>
				<article className="ed-grid banner__content">
					<h1 className="title-color-dark">Nuevo Audi Etron GT</h1>
					<h2 className="content-color-dark pt-24">Una idea que evoluciona tu camino</h2>
					<button className="button button-primary mt-32">Conócelo aquí</button>
				</article>
			</section>
			<section className="section-model">
				<article className="ed-grid model__content m-grid-2">
					<h1 className="title-color s-center m-cols-2">Modelos</h1>
					<div className="content__img s-ratio-16-9 img-container mt-32 m-order-2">
						<img src="https://images.unsplash.com/photo-1519688758572-9ffb93688712?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80" alt="model" />
					</div>
					<div className="content__bottom mt-24 m-order-1">
						<p className="content-color justify">Aquí encontrarás los modelos más destacados con las últimas tecnologías que te proporcionarán una mejor experiencia.</p>
						<div className="content__detail mt-24 ed-grid m-grid-3 rows-gap">
							<div className="ed-grid s-grid-4 m-grid-1 col-gap-32 detail__box">
								<div className="box__img s-ratio-4-3 img-container s-cols-2 s-x-2 m-cols-1 m-x-1">
									<img src="https://images.unsplash.com/photo-1563170561-435fcd7c0028?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="velocidad" />
								</div>
								<h4 className="box__text s-pt-1 s-center content-color s-cols-4 m-cols-1">Velocidad</h4>
							</div>
							<div className="ed-grid s-grid-4 m-grid-1 col-gap-32 detail__box">
								<div className="box__img s-ratio-4-3 img-container s-cols-2 s-x-2 m-cols-1 m-x-1">
									<img src="https://images.unsplash.com/photo-1563170561-435fcd7c0028?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="velocidad" />
								</div>
								<h4 className="box__text s-pt-1 s-center content-color s-cols-4 m-cols-1">Comodidad</h4>
							</div>
							<div className="ed-grid s-grid-4 m-grid-1 col-gap-32 detail__box ">
								<div className="box__img s-ratio-4-3 img-container s-cols-2 s-x-2 m-cols-1 m-x-1">
									<img src="https://images.unsplash.com/photo-1563170561-435fcd7c0028?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="velocidad" />
								</div>
								<h4 className="box__text s-pt-1 s-center content-color s-cols-4 m-cols-1">Potencia</h4>
							</div>
						</div>
						<button className="button button-primary s-to-center mt-32">Echa un vistazo</button>
					</div>
				</article>
			</section>
		</main>

		{/* <div className="ed-grid s-grid-2 mx-0 row-gap w-100 row-gap-32">
				<div className="s-cols">
					Hola
				</div>
				<div className="s-cols">
					Hola
				</div>
				<div className="s-cols">
					Hola
				</div>
		</div> */}
		</>
  )
}

export default App;
