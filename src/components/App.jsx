
import React from 'react'
// Importacion de la libreria(ya no existe)
// import "../library/ed-grid.scss";

// Estilos personalizados
import "../scss/styles.scss";

// Icons
import Logo from "./icons/static/Logo";
import ShopIcon from "./icons/static/ShopIcon";
import ShopNavIcon from './icons/dinamic/ShopNavIcon';
import DiscountIcon from './icons/dinamic/DiscountIcon';
import EventIcon from './icons/dinamic/EventIcon';
import MaintenanceIcon from './icons/dinamic/MaintenanceIcon';
import ModelIcon from './icons/dinamic/ModelIcon';
import HomeIcon from './icons/dinamic/HomeIcon';
import CheckIcon from './icons/special/CheckIcon';
import DeleteIcon from './icons/special/DeleteIcon';
import CancelIcon from './icons/static/CancelIcon';
import CustomizeIcon from './icons/static/CustomizeIcon';
import MoonIcon from './icons/static/MoonIcon';
import PaymentIcon from './icons/static/PaymentIcon';
import SuccessIcon from './icons/static/SuccessIcon';
import SunIcon from './icons/static/SunIcon';

const App = () => {

  return (
		<>
		<header className="main-header">
			<div className="ed-container">
				<h1>Hola</h1>
				<h2>Hola</h2>
				<h3>Hola</h3>
				<h4>Hola</h4>
				<h5>Hola</h5>
				<h6>Hola</h6>
			</div>
		</header>
		<Logo />
		<Logo width={75} height={54} />
		<ShopIcon />
		<ShopNavIcon status="active" />
		<ShopNavIcon />
		<EventIcon />
		<DiscountIcon />
		<DiscountIcon status="active" />
		<MaintenanceIcon />
		<ModelIcon />
		<HomeIcon />
		<CheckIcon />
		<DeleteIcon />
		<CancelIcon />
		<CustomizeIcon />
		<MoonIcon />
		<PaymentIcon />
		<SuccessIcon />
		<SunIcon />
		<button className="button">Hola</button>

		<div className="ed-grid s-grid-12" style={{margin: '0 1em' }}>
			<div className="s-cols-6 s-x-4 s-ratio-16-9 img-container">
				<img className="" src="https://images.pexels.com/photos/5975533/pexels-photo-5975533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="cubone" />
			</div>
		</div>
		</>
  )
}

export default App;
