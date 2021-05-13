
import React from 'react'
// Importacion de la libreria
import "../library/ed-grid.scss";

// Estilos personalizados
import "../css/styles.css";

const App = () => {
  return (
		<>
		<h1>Hola</h1>
		<h2>Hola</h2>
		<h3>Hola</h3>
		<h4>Hola</h4>
		<h5>Hola</h5>
		<h6>Hola</h6>
		<p className="button">Hola parrafo</p>
		<small>soy un small</small>
		{/* <div className="main-banner">
			<img className="main-banner__hero-image" src="https://images.pexels.com/photos/5975533/pexels-photo-5975533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="cubone" />
			<div className="main-banner__overlay"></div>
			<div className="main-banner__content">
				<h1>Hola</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos esse facilis aspernatur? Placeat tempore consequatur architecto nam sit tenetur vero repellendus nihil vitae delectus corporis, aspernatur numquam, quod mollitia quae.</p>
			</div>
		</div> */}
		{/* <div className="ed-grid s-grid-4">
			<div className="s-cols-3">
				<div className="main-banner o-aspect-ratio o-aspect-ratio--16-9">
					<img className="main-banner__hero-image o-aspect-ratio__target" src="https://images.pexels.com/photos/5975533/pexels-photo-5975533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="cubone" />
					<div className="main-banner__content">
						<h1>Hola</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos esse facilis aspernatur? Placeat tempore consequatur architecto nam sit tenetur vero repellendus nihil vitae delectus corporis, aspernatur numquam, quod mollitia quae.</p>
					</div>
				</div>
			</div>
			<div className="">
				<div className="o-aspect-ratio o-aspect-ratio--16-9">
					<img className="o-aspect-ratio__target" src="https://images.pexels.com/photos/5975533/pexels-photo-5975533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="cubone" />
				</div>
			</div>
		</div> */}
		<div className="ed-grid s-grid-3">
			<div className="s-cols-3 s-rows-4">
				<div className="main-banner o-aspect-ratio o-aspect-ratio--16-9">
					<img className="main-banner__hero-image o-aspect-ratio__target" src="https://images.pexels.com/photos/5975533/pexels-photo-5975533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="cubone" />
				</div>
			</div>
			<div className="pos">Hola</div>
		</div>

		{/* <div className="ed-grid s-grid-12">
			<div className="mlr">
				<div className="main-banner o-aspect-ratio o-aspect-ratio--16-9">
					<img className="main-banner__hero-image o-aspect-ratio__target" src="https://images.pexels.com/photos/5975533/pexels-photo-5975533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="cubone" />
				</div>
			</div>
		</div> */}

		{/* EDGRID */}

		{/* <div className="ed-grid s-grid-12">
			<div className="s-cols-6 s-x-4 s-ratio-4-3 img-container">
				<img className="" src="https://images.pexels.com/photos/5975533/pexels-photo-5975533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="cubone" />
			</div>
		</div> */}



	<div className="ed-grid s-grid-3">
		<div className="s-cols-3 s-rows-4">
			<div className="main-banner s-ratio-16-9 img-container">
				<img className="main-banner__hero-image" src="https://images.pexels.com/photos/5975533/pexels-photo-5975533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="cubone" />
			</div>
		</div>
		<div className="pos">Hola</div>
		</div>
		</>
  )
}

export default App;
